import React, {
  FormEventHandler,
  HTMLAttributes,
  useState,
  useContext,
} from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';
import Notification from '../../components/UI/Notification';
import { authContext } from '../../context/authContext';
import useInput from '../../hooks/useInput';
import Logo from '../../images/logo.png';
import classes from '../../styles/Admin/Login.module.css';
import { InputProps } from '../../types';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const emailValidator = useInput(
    (inputVal) => inputVal.includes('@') && !inputVal.includes(' ')
  );
  const pwdValidator = useInput((inputVal) => inputVal.trim().length > 6);
  const [message, setMessage] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [sending, setSending] = useState(false);
  const authCtx = useContext(authContext);
  const router = useNavigate();
  const submitFormHandler: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!emailValidator.isInputValid) return emailValidator.focusHandler();
    if (!pwdValidator.isInputValid) return pwdValidator.focusHandler();
    setSending(true);
    const body = {
      email: emailValidator.inputValue,
      password: pwdValidator.inputValue,
    };

    const url = `https://pipeline-investment.herokuapp.com/admin/login`;
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    if (data.success) {
      authCtx.login(data.token, true, data.expiresIn);
      router('/admin/dashboard');
    } else {
      setMessage({ success: false, message: data.message });
    }
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
      style: { height: 'auto' } as HTMLAttributes<HTMLInputElement>,
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
      style: { height: 'auto' } as HTMLAttributes<HTMLInputElement>,
      ref: pwdValidator.inputRef,
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
        <div className={classes.Banner}>
          <img src={Logo} alt="logo" />
        </div>
        <form
          className={classes.Form}
          onSubmit={submitFormHandler}
          autoComplete="off"
        >
          <h1>Admin Login portal</h1>
          {inputData.map((prop) => {
            return <Input {...prop} />;
          })}
          <Button type="submit" onClick={undefined} style={undefined}>
            {sending ? 'Validating...' : 'Login'}
          </Button>
          <div className={classes.Other}>
            <p>Don't have an account?</p>
            <Link to="/admin/register">Register</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
