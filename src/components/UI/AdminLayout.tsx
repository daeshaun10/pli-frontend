import React, {
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import DashBoardIcon from '@material-ui/icons/Dashboard';
import MoneyIcon from '@material-ui/icons/AttachMoney';
import DoneIcon from '@material-ui/icons/Done';
import Login from '@material-ui/icons/LockOpen';
import RegisterIcon from '@material-ui/icons/HowToReg';
import LogoutIcon from '@material-ui/icons/MeetingRoom';
import Logo from '../../images/logo.png';
import classes from '../../styles/AdminLayout.module.css';
import { authContext } from '../../context/authContext';

const AdminLayout = (props: { children: ReactElement | ReactElement[] }) => {
  const authCtx = useContext(authContext);
  const [count, setCount] = useState<{
    admin: number;
    loans: number;
  }>({ admin: 0, loans: 0 });

  const fetchData = useCallback(async () => {
    const loansUrl = `${process.env.REACT_APP_API_ENDPOINT}/admins/loans&token=${authCtx.token}`;
    const response = await fetch(loansUrl);
    const data = await response.json();
    setCount({
      admin: 0,
      loans: data.loanData.filter(
        (loanDetail: any) => !loanDetail.approved && !loanDetail.rejected
      ).length,
    });
  }, [authCtx]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className={classes.Container}>
      <div className={classes.Header}>
        <img src={Logo} alt="logo" />
        <p className={classes.Heading}>Admin</p>
        {authCtx.token && authCtx.isAdmin ? (
          <ul>
            <li>
              <Link to="/admin/dashboard">
                <div className={classes.Icon}>
                  <DashBoardIcon />
                  <p>Dashboard</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/admin/loan-requests">
                <div className={classes.Icon}>
                  <MoneyIcon />
                  <p>Loan Request</p>
                </div>
                <div className={classes.Count}>{count.loans}</div>
              </Link>
            </li>
            <li>
              <Link to="/admin/admin-requests">
                <div className={classes.Icon}>
                  <DoneIcon />
                  <p>Admin Requests</p>
                </div>
              </Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/admin/login">
                <div className={classes.Icon}>
                  <Login />
                  <p style={{ textAlign: 'center' }}>Login</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/admin/register">
                <div className={classes.Icon}>
                  <RegisterIcon />
                  <p style={{ textAlign: 'center' }}>Register</p>
                </div>
              </Link>
            </li>
          </ul>
        )}
        {authCtx.token && authCtx.isAdmin ? (
          <button
            onClick={() => {
              authCtx.logout();
            }}
          >
            <span>Logout</span>
            <LogoutIcon />
          </button>
        ) : (
          <div></div>
        )}
      </div>
      <div className={classes.Body}>{props.children}</div>
    </div>
  );
};

export default AdminLayout;
