import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Card.module.css';

interface Props {
  amount: number;
  settled: number;
  dueDate: string;
  loanId: string;
  status: string;
}

const Card = (props: Props) => {
  return (
    <Link className={classes.Card} to={'/client/loans/' + props.loanId}>
      <p className={classes.Heading}>{props.amount} $</p>
      <div>
        <p>
          Settled - <span>{props.settled}$</span>
        </p>
        <p>
          Due Date - <span>{props.dueDate}</span>
        </p>
        <p>
          Status - <span>{props.status}</span>
        </p>
      </div>
    </Link>
  );
};

export default Card;
