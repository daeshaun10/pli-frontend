import React, { useState } from 'react';
import Card from '../../components/Admin/Dashboard/Card';
import Hero from '../../components/Admin/Dashboard/Hero';
import Overlay from '../../components/UI/Overlay';
import classes from '../../styles/Admin/Dashboard.module.css';

const Dashboard = () => {
  const [selectedLoan, setSelectedLoan] = useState<number | null>(null);
  const dueLoans = [
    {
      loanNo: '01',
      user: 'user name',
      amount: '5000$',
      dueDate: '2021-12-23',
    },
    {
      loanNo: '02',
      user: 'user name2',
      amount: '5000$',
      dueDate: '2021-12-23',
    },
    {
      loanNo: '03',
      user: 'user name3',
      amount: '5000$',
      dueDate: '2021-12-23',
    },
  ];

  const focusLoanHandler = (index: number) => {
    setSelectedLoan(index);
    console.log(index);
  };
  return (
    <>
      {selectedLoan != null && (
        <Overlay>
          <div className={classes.Box}>
            <div className={classes.CloseContainer}>
              <div></div>
              <h1>Loan: {selectedLoan}</h1>
              <div
                className={classes.Close}
                onClick={() => {
                  setSelectedLoan(null);
                }}
              >
                X
              </div>
            </div>
            <p>
              <span>User: </span>
              {dueLoans[selectedLoan].user}
            </p>
            <p>
              <span>Loan amount: </span>
              {dueLoans[selectedLoan].amount}
            </p>
            <p>
              <span>Installments: </span>
              {'5'}
            </p>
            <p>
              <span>Remaining amount: </span>
              {'2000$'}
            </p>
            <p>
              <span>Due date: </span>
              {dueLoans[selectedLoan].dueDate}
            </p>
            <p>
              <span>Contact number: </span>
              {'012345789'}
            </p>
          </div>
        </Overlay>
      )}
      <div>
        <Hero totalLoans={'69'} appliedLoans={'62'} dueLoans={'05'} />
        <p className={classes.Heading}>Due Loans</p>
        <table className={classes.Table}>
          <thead>
            <tr>
              <th className={classes.SideRow}>Loan Id</th>
              <th className={classes.MiddleRow}>User</th>
              <th className={classes.MiddleRow}>Amount</th>
              <th className={classes.SideRow}>Due date</th>
            </tr>
          </thead>
          <tbody>
            {dueLoans.map((loan, i) => {
              return (
                <Card
                  {...loan}
                  index={i + 1}
                  showData={focusLoanHandler}
                  key={Math.random()}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
