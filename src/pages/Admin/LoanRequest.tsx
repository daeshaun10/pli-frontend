import React, { useState, ChangeEventHandler } from 'react';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Card from '../../components/Admin/LoanRequests/Card';
import classes from '../../styles/Admin/LoanRequests.module.css';
const LoanRequest = () => {
  const [loanRequests, setLoanRequests] = useState([
    {
      user: 'User1',
      amount: 5000,
      contactNo: '012345789',
      installments: 2000,
      amountPerInstallment: 3,
    },
    {
      user: 'User2',
      amount: 5000,
      contactNo: '012345789',
      installments: 2000,
      amountPerInstallment: 3,
    },
    {
      user: 'User3',
      amount: 5000,
      contactNo: '012345789',
      installments: 2000,
      amountPerInstallment: 3,
    },
  ]);
  const [searchText, setSearchText] = useState('');
  const inputChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchText(e.target.value);
  };
  const update = (status: boolean, index: number) => {
    const temp = [...loanRequests];
    temp.splice(index, 1);
    setLoanRequests(temp);
    console.log(index);
  };
  const filtered = loanRequests.filter((request) => {
    return request.user.includes(searchText.trim());
  });
  return (
    <div>
      <h1 className={classes.Heading}>
        <AttachMoney /> Loan Requests
      </h1>
      <input
        className={classes.Input}
        placeholder="Search by username"
        onChange={inputChangeHandler}
      />
      {filtered.map((request, i) => {
        return <Card update={update} index={i} loading={false} {...request} />;
      })}
    </div>
  );
};

export default LoanRequest;
