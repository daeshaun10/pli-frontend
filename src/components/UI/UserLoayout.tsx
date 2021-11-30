import React, { ReactElement, useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Dashboard';
import NotificationIcon from '@material-ui/icons/Notifications';
import ApplyIcon from '@material-ui/icons/AccountBalance';
import LogoutIcon from '@material-ui/icons/LockOpen';
import LoginIcon from '@material-ui/icons/Lock';
import AboutIcon from '@material-ui/icons/Info';
import classes from '../../styles/UserLayout.module.css';
import Logo from '../../images/logo.png';
import { authContext } from '../../context/authContext';
import { notificationContext } from '../../context/notificationContext';
import Close from '@material-ui/icons/Close';
import Overlay from './Overlay';

const UserLoayout = (props: { children: ReactElement | ReactElement[] }) => {
  const authCtx = useContext(authContext);
  const msgContext = useContext(notificationContext);
  const [isNotifications, setIsNotifications] = useState(false);
  return (
    <>
      {isNotifications && (
        <Overlay>
          <div
            style={{
              backgroundColor: 'white',
              width: '50%',
              height: '50vh',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              overflowY: 'scroll',
              borderRadius: '10px',
              padding: '20px 0',
            }}
          >
            <h1 className={classes.Heading}>
              <div></div>
              <span>Notifications</span>

              <span
                onClick={() => {
                  setIsNotifications(false);
                }}
              >
                <Close />
              </span>
            </h1>
            {msgContext.messages.map((i: any) => (
              <div key={i._id} className={classes.MsgBox}>
                {i.message}
              </div>
            ))}
          </div>
        </Overlay>
      )}
      <header className={classes.Header}>
        <div className={classes.Brand}>
          <img src={Logo} alt="logo" />
        </div>
        <nav>
          <ul>
            {authCtx.token && (
              <li>
                <NavLink
                  to="/client/dashboard"
                  className={(navData) =>
                    navData.isActive ? classes.Active : ''
                  }
                >
                  <HomeIcon />
                </NavLink>
              </li>
            )}
            {authCtx.token && (
              <li>
                <NavLink
                  to="/client/apply"
                  className={(navData) =>
                    `${navData.isActive && classes.Active}`
                  }
                >
                  <ApplyIcon />
                </NavLink>
              </li>
            )}
            {authCtx.token && (
              <li
                style={{ color: 'white', cursor: 'pointer' }}
                onClick={() => {
                  setIsNotifications((curr) => !curr);
                  msgContext.view();
                }}
              >
                <NotificationIcon />
                {msgContext.messages.filter((i: any) => i.viewed === false)
                  .length > 0 &&
                  msgContext.messages.filter((i: any) => i.viewed === false)
                    .length}
              </li>
            )}
            {authCtx.token && (
              <li
                style={{ color: 'white', cursor: 'pointer' }}
                onClick={() => {
                  authCtx.logout();
                }}
              >
                <LogoutIcon />
              </li>
            )}
            {!authCtx.token && (
              <li>
                <NavLink
                  to="/client/login"
                  className={(navData) => (navData.isActive ? 'active' : '')}
                >
                  <LoginIcon />
                </NavLink>
              </li>
            )}

            <li>
              <NavLink
                to="/aboutus"
                className={(navData) => (navData.isActive ? 'active' : '')}
              >
                <AboutIcon />
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div>{props.children}</div>
    </>
  );
};

export default UserLoayout;
