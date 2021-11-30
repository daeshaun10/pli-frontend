import React, { ReactElement, useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { authContext } from '../../context/authContext';
import HomeIcon from '@material-ui/icons/Dashboard';
import PaymentIcon from '@material-ui/icons/Payment';
import NotificationIcon from '@material-ui/icons/Notifications';
import ApplyIcon from '@material-ui/icons/AccountBalance';
import LogoutIcon from '@material-ui/icons/LockOpen';
import LoginIcon from '@material-ui/icons/Lock';
import AboutIcon from '@material-ui/icons/Info';
import Logo from '../../images/logo.png';
import classes from '../../styles/Layout.module.css';

const Layout = (props: { children: ReactElement | ReactElement[] }) => {
  const authCtx = useContext(authContext);
  const [isNav, setIsNav] = useState(false);
  return (
    <>
      <main className={classes.Container}>
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
                    to="/client/startLoan"
                    className={(navData) =>
                      `${navData.isActive && classes.Active}`
                    }
                  >
                    <ApplyIcon />
                  </NavLink>
                </li>
              )}
              {authCtx.token && (
                <li>
                  <NavLink
                    to="/client/startLoan"
                    className={(navData) =>
                      `${navData.isActive && classes.Active}`
                    }
                  >
                    <PaymentIcon />
                  </NavLink>
                </li>
              )}
              {authCtx.token && (
                <li>
                  <NavLink
                    to="/client/notifications"
                    className={(navData) =>
                      `${navData.isActive && classes.Active}`
                    }
                  >
                    <NotificationIcon />
                  </NavLink>
                </li>
              )}
              {authCtx.token && (
                <li
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
          <div
            className={classes.Hamburger}
            onClick={() => {
              setIsNav((val) => !val);
            }}
          >
            <div className={classes.Bar}></div>
            <div className={classes.Bar}></div>
            <div className={classes.Bar}></div>
          </div>
        </header>

        <div style={{ height: '80vh' }}>{props.children}</div>
      </main>
      {isNav && (
        <ul className={classes.RespNav}>
          <h1 className={classes.Brand}>The Loaner</h1>
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
                to="/client/startLoan"
                className={(navData) => `${navData.isActive && classes.Active}`}
              >
                <ApplyIcon />
              </NavLink>
            </li>
          )}
          {authCtx.token && (
            <li>
              <NavLink
                to="/client/startLoan"
                className={(navData) => `${navData.isActive && classes.Active}`}
              >
                <PaymentIcon />
              </NavLink>
            </li>
          )}
          {authCtx.token && (
            <li>
              <NavLink
                to="/client/notifications"
                className={(navData) => `${navData.isActive && classes.Active}`}
              >
                <NotificationIcon />
              </NavLink>
            </li>
          )}
          {authCtx.token && (
            <li
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
      )}
    </>
  );
};

export default Layout;
