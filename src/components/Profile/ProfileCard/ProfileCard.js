import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import style from '../Profile.module.css';

const useStyles = makeStyles({
  wrapper: {
    maxWidth: '630px',
    padding: '44px 60px',
    position: 'absolute',
    top: '100px',
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
  },
  textField: {
    marginBottom: '30px',
    width: '100%',
  },
  title: {
    fontSize: '36px',
  },
  subtitle: {
    marginBottom: '40px',
  },
  card: {
    maxWidth: '300px',
    padding: '16px 32px',
    boxSizing: 'border-box',
  },
});

const ProfileCard = (props) => {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(
      e.target.card.value,
      e.target.surname.value,
      e.target.date.value,
      e.target.cvc.value,
    );
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.group}>
        <Card className={classes.card}>
          <TextField
            className={classes.textField}
            type="number"
            name="card"
            placeholder="0000000000000000"
            required
            label={<span>Номер карты</span>}
          />
          <TextField
            className={classes.textField}
            type="text"
            name="date"
            placeholder="mm/yy"
            required
            label={<span>Срок действия</span>}
          />
        </Card>
        <Card className={classes.card}>
          <TextField
            className={classes.textField}
            type="text"
            name="surname"
            placeholder="name surname"
            required
            label={<span>Имя владельца</span>}
          />
          <TextField
            className={classes.textField}
            type="number"
            name="cvc"
            placeholder="cvc"
            required
            label={<span>CVC</span>}
          />
        </Card>
      </div>
      <Button type="submit" variant="contained" color="primary">Сохранить</Button>
    </form>
  );
};

ProfileCard.propTypes = {
  handleSubmit: PropTypes.func,
};

ProfileCard.defaultProps = {
  handleSubmit: () => {},
};

export default ProfileCard;
