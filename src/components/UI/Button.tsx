import React, { HTMLAttributes, MouseEventHandler } from 'react';
import classes from './Button.module.css';

interface Props {
  children: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  style: HTMLAttributes<HTMLButtonElement> | undefined;
}

const Button = (props: Props) => {
  return (
    <button
      className={classes.Button}
      type={props.type}
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
    </button>
  );
};

export default Button;
