import React, {useState} from 'react';
import {useFormik} from 'formik';
import s from './Login.module.css';
import {useDispatch} from 'react-redux';
import * as Yup from 'yup';

// MUI imports
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Paper from '@mui/material/Paper';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {FormLabel} from "@mui/material";
import {AppDispatchType, useAppSelector} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import {buttonStyles, eyeStyles} from "../../utils/materialThemes/themes";
import {loginThunkCreator} from "../../redux/auth-reducer";

export const Login = () => {
  const [type, setType] = useState('password');

  const dispatch = useDispatch<AppDispatchType>();
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  // const status = useAppSelector((state) => state.app.status);

  const handleToggle = () => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(5, 'Must be at least 5 characters').required('Required'),
    }),
    onSubmit: (values) => {
      dispatch(loginThunkCreator(values));
    },
  });
  if (isAuth) {
    return <Redirect to={'/profile'} />;
  }
  return (
    <div className={s.container}>
      <FormLabel>
        <p>
          Register your account
        </p>
        <p>or use common test account credentials:</p>
        <p>Email: facount779@gmail.com</p>
        <p>Password: freeAccount777</p>
      </FormLabel>
      <Paper elevation={1} className={s.paper + ' ' + s.common}>
        <h2 className={s.title}>Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <TextField
              label="Email"
              color="info"
              variant="standard"
              sx={{ width: '300px' }}
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email && (
              <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.email}</div>
            )}
            <div className={s.password}>
              <TextField
                type={type}
                label="Password"
                color="info"
                variant="standard"
                sx={{ width: '300px' }}
                {...formik.getFieldProps('password')}
              />
              {type === 'password' ? (
                <RemoveRedEyeIcon sx={eyeStyles} onClick={handleToggle} />
              ) : (
                <VisibilityOffIcon sx={eyeStyles} onClick={handleToggle} />
              )}
            </div>
            {formik.touched.password && formik.errors.password && (
              <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.password}</div>
            )}
            <FormControlLabel
              label={'Remember me'}
              control={
                <Checkbox
                  checked={formik.values.rememberMe}
                  {...formik.getFieldProps('rememberMe')}
                />
              }
            />
            <Button
              type="submit"
              variant="contained"
              sx={buttonStyles}
              // disabled={status === 'loading'}
            >
              Login
            </Button>
          </FormGroup>
        </form>
      </Paper>
    </div>
  );
};

