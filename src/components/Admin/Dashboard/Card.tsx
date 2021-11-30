import React from 'react';
import classes from './Card.module.css';

interface Props {
  loanNo: string;
  user: string;
  amount: string;
  dueDate: string;
  showData: (index: number) => void;
  index: number;
}

const Card = (props: Props) => {
  return (
    <tr
      className={classes.Card}
      style={{
        backgroundColor: props.index % 2 === 1 ? '#E7E7E7' : '#A5A5A5',
        color: props.index % 2 === 1 ? '#4F4F4F' : '#FFFFFF',
      }}
      onClick={() => {
        props.showData(props.index - 1);
      }}
    >
      <td>{props.loanNo}</td>
      <td>{props.user}</td>
      <td>{props.amount}</td>
      <td>{props.dueDate}</td>
    </tr>
  );
};

export default Card;
