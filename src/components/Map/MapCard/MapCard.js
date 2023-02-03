import React from 'react';
import { Button, Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import style from '../map.module.css';

const useStyles = makeStyles({
  title: {
    fontSize: '36px',
    marginBottom: '30px',
  },
  text: {
    fontSize: '16px',
    marginBottom: '30px',
  },
});

const MapCard = () => {
  const classes = useStyles();

  return (
    <Card className={style.card}>
      <Typography variant="h2" className={classes.title}>Заполните платежные данные</Typography>
      <Typography variant="subtitle1" className={classes.text}>
        Укажите информацию о банковской карте, чтобы сделать заказ.
      </Typography>
      <Button className={classes.button} to="profile" component={Link} variant="contained" color="primary">
        Перейти в профиль
      </Button>
    </Card>
  );
};

export default MapCard;
