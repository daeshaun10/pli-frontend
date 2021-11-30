import React from 'react';
import classes from './Card.module.css';

interface Props {
  amount: number;
  installments: { number: number; amountToPay: number }[];
}

const Card = (props: Props) => {
  return (
    <div className={classes.Card}>
      <h2>{props.amount}$</h2>
      <div>
        <p>Installments</p>
        {props.installments.map((i) => {
          return (
            <span>
              {i.number} X {i.amountToPay}
            </span>
          );
        })}
      </div>
      <div></div>
    </div>
  );
};

export default Card;
