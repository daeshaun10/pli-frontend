import React, { FormEventHandler, HTMLAttributes, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import Notification from '../components/UI/Notification';
import useInput from '../hooks/useInput';
import Logo from '../images/logo.png';
import classes from '../styles/Login.module.css';
import { InputProps } from '../types';

const Register = () => {
  const emailValidator = useInput(
    (inputVal) => inputVal.includes('@') && !inputVal.includes(' ')
  );
  const pwdValidator = useInput((inputVal) => inputVal.trim().length > 6);
  const usernameValidator = useInput((inputVal) => inputVal.trim() !== '');
  const contactNoValidator = useInput(
    (inputVal) =>
      inputVal.trim() !== '' &&
      !inputVal.includes(' ') &&
      inputVal.trim().length === 10
  );
  const cardNoValidator = useInput((inputVal) => inputVal.trim().length === 12);
  const pinValidator = useInput(
    (inputVal) => !inputVal.includes(' ') && inputVal.trim().length === 3
  );
  const expValidator = useInput(
    (inputVal) => new Date(inputVal).getTime() - new Date().getTime() > 0
  );
  const [message, setMessage] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [sending, setSending] = useState(false);

  const submitFormHandler: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!emailValidator.isInputValid) return emailValidator.focusHandler();
    if (!pwdValidator.isInputValid) return pwdValidator.focusHandler();
    if (!usernameValidator.isInputValid)
      return usernameValidator.focusHandler();
    if (!contactNoValidator.isInputValid)
      return contactNoValidator.focusHandler();
    if (!cardNoValidator.isInputValid) return cardNoValidator.focusHandler();
    if (!pinValidator.isInputValid) return pinValidator.focusHandler();
    if (!expValidator.isInputValid) return expValidator.focusHandler();
    setSending(true);
    const body = {
      email: emailValidator.inputValue,
      contactNo: contactNoValidator.inputValue,
      password: pwdValidator.inputValue,
      username: usernameValidator.inputValue,
      cardDetails: {
        cardNo: cardNoValidator.inputValue,
        CVV: pinValidator.inputValue,
        expDate: expValidator.inputValue,
      },
    };

    const url = `https://pipeline-investment.herokuapp.com/user/register`;
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

    setMessage({ success: false, message: data.message });
    setSending(false);
  };
  const inputData: InputProps[] = [
    {
      type: 'text',
      value: emailValidator.inputValue,
      onChange: emailValidator.valueChangeHandler,
      onBlur: emailValidator.inputBlurHandler,
      placeholder: 'Email address',
      hasError: emailValidator.hasError,
      errorMessage: 'Enter a valid email address',
      label: undefined,
      style: { width: '47%' } as HTMLAttributes<HTMLInputElement>,
      ref: emailValidator.inputRef,
    },
    {
      type: 'text',
      value: pwdValidator.inputValue,
      onChange: pwdValidator.valueChangeHandler,
      onBlur: pwdValidator.inputBlurHandler,
      placeholder: 'Password',
      hasError: pwdValidator.hasError,
      errorMessage: 'Password length must be greater than 6',
      label: undefined,
      style: { width: '47%' } as HTMLAttributes<HTMLInputElement>,
      ref: pwdValidator.inputRef,
    },
    {
      type: 'text',
      value: usernameValidator.inputValue,
      onChange: usernameValidator.valueChangeHandler,
      onBlur: usernameValidator.inputBlurHandler,
      placeholder: 'Username',
      hasError: usernameValidator.hasError,
      errorMessage: 'Enter a valid name',
      label: undefined,
      style: { width: '47%' } as HTMLAttributes<HTMLInputElement>,
      ref: usernameValidator.inputRef,
    },
    {
      type: 'text',
      value: contactNoValidator.inputValue,
      onChange: contactNoValidator.valueChangeHandler,
      onBlur: contactNoValidator.inputBlurHandler,
      placeholder: 'Contact Number',
      hasError: contactNoValidator.hasError,
      errorMessage: 'Enter a valid phone number',
      label: undefined,
      style: { width: '47%' } as HTMLAttributes<HTMLInputElement>,
      ref: contactNoValidator.inputRef,
    },
    {
      type: 'text',
      value: cardNoValidator.inputValue,
      onChange: cardNoValidator.valueChangeHandler,
      onBlur: cardNoValidator.inputBlurHandler,
      placeholder: 'Credit/Debit Card Number',
      hasError: cardNoValidator.hasError,
      errorMessage: 'Enter a valid card number',
      label: undefined,
      style: { width: '97%' } as HTMLAttributes<HTMLInputElement>,
      ref: cardNoValidator.inputRef,
    },
    {
      type: 'text',
      value: pinValidator.inputValue,
      onChange: pinValidator.valueChangeHandler,
      onBlur: pinValidator.inputBlurHandler,
      placeholder: 'CVV',
      hasError: pinValidator.hasError,
      errorMessage: 'Enter a valid CVV',
      label: undefined,
      style: { width: '47%' } as HTMLAttributes<HTMLInputElement>,
      ref: pinValidator.inputRef,
    },
    {
      type: 'date',
      value: expValidator.inputValue,
      onChange: expValidator.valueChangeHandler,
      onBlur: expValidator.inputBlurHandler,
      placeholder: 'Expiry Date',
      hasError: expValidator.hasError,
      errorMessage: 'Enter a valid date',
      label: undefined,
      style: { width: '47%' } as HTMLAttributes<HTMLInputElement>,
      ref: expValidator.inputRef,
    },
  ];
  return (
    <>
      {message && (
        <Notification
          message={message.message}
          onClick={() => {
            setMessage(null);
          }}
        />
      )}
      <div className={classes.Container}>
        <form
          className={classes.Form}
          onSubmit={submitFormHandler}
          autoComplete="off"
        >
          <h1>Register</h1>
          <div className={classes.FlexInput}>
            <Input {...inputData[0]} />
            <Input {...inputData[1]} />
          </div>
          <div className={classes.FlexInput}>
            <Input {...inputData[2]} />
            <Input {...inputData[3]} />
          </div>
          <Input {...inputData[4]} />
          <div className={classes.FlexInput}>
            <Input {...inputData[5]} />
            <Input {...inputData[6]} />
          </div>
          <Button
            type="submit"
            onClick={undefined}
            style={
              {
                width: '97%',
                marginLeft: '1.5%',
              } as HTMLAttributes<HTMLButtonElement>
            }
          >
            {sending ? 'Sending...' : 'Register'}
          </Button>
          <div className={classes.Other}>
            <p>Already have an account?</p>
            <Link to="/client/login">Login</Link>
          </div>
        </form>
        <div className={classes.Banner}>
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Register;
