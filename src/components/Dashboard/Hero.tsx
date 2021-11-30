import React from 'react';
import classes from './Hero.module.css';

interface Props {
  totalLoans: number;
  totalAmount: number;
  closestDue: string;
}

const Hero = (props: Props) => {
  return (
    <div className={classes.Container}>
      <div>
        <p className={classes.Heading}>Total Loans</p>
        <p className={classes.Content}>{props.totalLoans}</p>
      </div>
      <div>
        <p className={classes.Heading}>Net Amount</p>
        <p className={classes.Content}>{props.totalAmount}$</p>
      </div>
      <div>
        <p className={classes.Heading}>Closest Loan Due</p>
        <p className={classes.Content}>{props.closestDue}</p>
      </div>
    </div>
  );
};

export default Hero;
