import React, { ChangeEventHandler, useState } from 'react';
import Done from '@material-ui/icons/Done';
import Card from '../../components/Admin/AdminRequests/Card';
import classes from '../../styles/Admin/AdminRequests.module.css';

const AdminRequests = () => {
  const [requests, setRequests] = useState([
    'admin2@gmail.com',
    'admin3@gmail.com',
    'admin4@gmail.com',
  ]);
  const [searchText, setSearchText] = useState('');
  const filtered = requests.filter((request) =>
    request.includes(searchText.trim())
  );
  const update = (status: boolean, index: number) => {
    const temp: string[] = [...requests];
    temp.splice(index, 1);
    setRequests(temp);
    console.log(index);
  };
  const inputChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div>
      <h1 className={classes.Heading}>
        <Done /> Admin Requests
      </h1>
      <input
        onChange={inputChangeHandler}
        className={classes.Input}
        placeholder="Search by email"
      />
      {filtered.map((request, i) => {
        return (
          <Card
            email={request}
            index={i}
            update={update}
            sending={false}
            key={Math.random()}
          />
        );
      })}
    </div>
  );
};

export default AdminRequests;
