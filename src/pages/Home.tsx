import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Branding}>
        <p className={classes.MarketingText}>
          Most <span>TRUSTED</span> way to obtain a loan in 21<sup>st</sup>{' '}
          Century
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
          accusamus sit minima nobis laboriosam? Porro animi facere sint maiores
          eum adipisci nostrum tenetur nesciunt illo possimus laboriosam
          quisquam, eligendi vitae!
        </p>
        <div className={classes.ButtonContainer}>
          <Link to="/client/login">Login</Link>
          <Link to="/client/register">Register</Link>
        </div>
      </div>
      <div className={classes.Form}>
        <img
          src="https://th.bing.com/th/id/R.d041f177da7b93b1c0304350f85a7075?rik=MNP%2fw3kRnQrqXQ&riu=http%3a%2f%2fwww.roiworks.com%2fwp-content%2fuploads%2f2014%2f10%2fanalytics.png&ehk=V%2bLqV6w67C0phqqIFpFx212Urk5WbDXDzlo4cCT0Cek%3d&risl=&pid=ImgRaw&r=0"
          alt="art"
        />
      </div>
    </div>
  );
};

export default Home;
