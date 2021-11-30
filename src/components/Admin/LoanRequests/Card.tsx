import React from 'react';
import classes from './Card.module.css';

interface Props {
  user: string;
  amount: number;
  contactNo: string;
  installments: number;
  amountPerInstallment: number;
  update: (status: boolean, index: number) => void;
  index: number;
  loading: boolean;
}

const Card = (props: Props) => {
  return (
    <div className={classes.Card}>
      <div className={classes.Container}>
        <p>
          <span className={classes.Key}>Username: </span>{' '}
          <span className={classes.Value}>{props.user}</span>
        </p>
        <p>
          <span className={classes.Key}>Amount: </span>{' '}
          <span className={classes.Value}>{props.amount}</span>
        </p>
        <p>
          <span className={classes.Key}>Contact Number: </span>{' '}
          <span className={classes.Value}>{props.user}</span>
        </p>
      </div>
      <div className={classes.Container}>
        <p>
          <span className={classes.Key}>Installment: </span>{' '}
          <span className={classes.Value}>{props.amountPerInstallment}</span>
        </p>
        <p>
          <span className={classes.Key}>No. of installments: </span>{' '}
          <span className={classes.Value}>{props.installments}</span>
        </p>
      </div>
      {!props.loading ? (
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
              props.update(true, props.index);
            }}
          ></button>
        </div>
      ) : (
        <div>Sending...</div>
      )}
    </div>
  );
};

export default Card;
