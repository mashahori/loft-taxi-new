import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { logoutAction } from '../../modules/actions.js';

const Navigation = (props) => {
  const { text } = props;

  const handleClick = () => {
    if (text === 'logout') {
      localStorage.clear();
      props.logout();
    }
  };

  return (
    <Button to={text} component={Link} onClick={handleClick}>
      {text}
    </Button>
  );
};

Navigation.propTypes = {
  text: PropTypes.string,
  logout: PropTypes.func,
};

Navigation.defaultProps = {
  text: '',
  logout: () => {},
};

const mapStateToProps = (state) => ({
  authed: state.authed,
});

const mapDispathToProps = (dispatch) => ({
  logout: () => dispatch(logoutAction()),
});

export default connect(mapStateToProps, mapDispathToProps)(Navigation);
