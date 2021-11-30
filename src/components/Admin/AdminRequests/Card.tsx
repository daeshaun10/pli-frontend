import React from 'react';
import classes from './Card.module.css';

interface Props {
  email: string;
  update: (status: boolean, index: number) => void;
  index: number;
  sending: boolean;
}

const Card = (props: Props) => {
  return (
    <div className={classes.Card}>
      <p>{props.email}</p>
      {!props.sending ? (
        <div className={classes.ButtonContainer}>
          <button
            className={classes.ButtonGreen}
            onClick={() => {
              props.update(true, props.index);
            }}
          ></button>
          <button
            className={classes.ButtonRed}
            onClick={() => {
              props.update(false, props.index);
            }}
          ></button>
        </div>
      ) : (
        <p className={classes.Update}>Sending...</p>
      )}
    </div>
  );
};

export default Card;
