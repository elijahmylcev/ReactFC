import React from 'react';
import classes from './MyButton.module.css';

function MyButton(props) {
  const { children } = props;
  return (
    <button type="submit" className={classes.myBtn}>
      {children}
    </button>
  );
}

export default MyButton;
