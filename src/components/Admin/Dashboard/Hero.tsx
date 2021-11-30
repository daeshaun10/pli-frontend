import React from 'react';
import classes from './Hero.module.css';

interface Props {
  totalLoans: string;
  appliedLoans: string;
  dueLoans: string;
}

const Hero = (props: Props) => {
  return (
    <div className={classes.Container}>
      <div>
        <p className={classes.Heading}>Total Loans</p>
        <p className={classes.Content}>{props.totalLoans}</p>
      </div>
      <div>
        <p className={classes.Heading}>Applied Loans</p>
        <p className={classes.Content}>{props.appliedLoans}</p>
      </div>
      <div>
        <p className={classes.Heading}>Due Loans</p>
        <p className={classes.Content}>{props.dueLoans}</p>
      </div>
    </div>
  );
};

export default Hero;
