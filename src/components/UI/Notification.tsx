import React, { MouseEventHandler } from 'react';
import Close from '@material-ui/icons/Close';
import classes from './Notification.module.css';

const Notification = (props: {
  message: string;
  onClick: MouseEventHandler<HTMLSpanElement>;
}) => {
  return (
    <div className={classes.Notification}>
      <span>{props.message}</span>
      <span onClick={props.onClick}>
        <Close />
      </span>
    </div>
  );
};

export default Notification;
