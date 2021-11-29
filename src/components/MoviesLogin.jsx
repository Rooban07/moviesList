import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MAIL_ID } from '../constants';
import useLocalStorage from '../localstorage';

function LogIn() {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState('');
  const [email, setEmail] = useState('');
  const [local, setLocal] = useLocalStorage('mail');

  useEffect(() => {
    const emailVal = MAIL_ID.find(e => e === local);
    if (emailVal) navigate('movies');
  }, [local]);

  // const handleEmail = e => {
  // let value = e.target.value;
  // const emailVal = MAIL_ID.find(e => e === value);

  // setEmail(value);
  // if (value.length === 0) {
  //   setErrorMsg('Please enter your email');
  // } else if (!/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)) {
  //   setErrorMsg('Please enter valid email');
  // } else if (!emailVal) {
  //   setErrorMsg('Invalid email');
  // } else {
  //   setErrorMsg('');
  // }
  // };

  const handleEmailBlur = e => {
    let value = e.target.value;
    const emailVal = MAIL_ID.find(e => e === value);
    setEmail(value);
    if (!/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)) {
      setErrorMsg('Please enter valid email');
    } else if (!emailVal) {
      setErrorMsg('Invalid email');
    } else {
      setErrorMsg('');
    }
  };

  const handleFormSubmit = () => {
    setLocal(email);
    navigate('movies');
  };

  return (
    <form>
      <div className='flex h-screen items-center justify-center '>
        <div className='grid gap-4 w-80 '>
          <TextField className=' ' id='outlined-textarea' helperText={errorMsg} error={errorMsg ? true : false} type='email' validation='email' label='Email' onBlur={handleEmailBlur} />
          <Button variant='contained' className='' disabled={errorMsg ? true : false} onClick={handleFormSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}

export default LogIn;
