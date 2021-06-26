import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import { SocialIcon } from 'react-social-icons';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';

import './SignIn.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginRight: theme.spacing(25),
    marginTop: theme.spacing(15),
  },
  margin: {
    margin: theme.spacing(3),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '50ch',
  },
  button: {
    width: '47ch',
    backgroundColor: '#c32020',
    textTransform: 'none',
    borderRadius: '20px 20px 20px 20px',
    padding: '16px 30px',
    '&:hover': {
      backgroundColor: '#e14646',
    },
  },
  inputWrapper: {
    display: 'flex',
  },
  input: {
    fontFamily: 'Roboto',
    marginBottom: '50px',
    width: '50ch',
    height: '55px',
    border: 'none',
    borderRadius: '20px 20px 20px 20px',
    padding: '16px 30px',
    backgroundColor: '#E8E8E8',
    '&:focus': {
      border: 'none',
      borderRadius: '20px 20px 20px 20px',
      outline: 'none',
    },
  },
  iconButton: {
    position: 'absolute',
    marginLeft: '335px',
    marginTop: '4px',
  },
  socialIcons: {
    padding: '25px',
  },
}));

function SignIn() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  function responseGoogle(response) {
    console.log(response)
    axios.post('https://getkeel.com/api/v1/user/google-login', {
      "access_token": response.accessToken
    })
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err)
      });
  }
  function fbResponse(response) {
    console.log(response)
  }
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <h2>
          Want To Immigrate
          <br />
          To
          <span style={{ color: '#fd5b5b', marginLeft: '25px' }}>Canada?</span>
        </h2>
        <p>
          If you don't have an account
          <br />
          You can
          <span style={{ marginLeft: '15px' }}>
            <a href="/signup">Register here!</a>
          </span>
        </p>
        <input
          className={classes.input}
          type="email"
          value={values.email}
          placeholder="E-mail"
          onChange={handleChange('email')}
        />
        <div className={classes.inputWrapper}>
          <input
            className={classes.input}
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            placeholder="Password"
            onChange={handleChange('password')}
          />
          <IconButton
            className={classes.iconButton}
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
          >
            {values.showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </div>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => console.log('Sign in ')}
        >
          Sign In
        </Button>
      </div>
      <h3>
        <span>or continue with</span>
      </h3>
      <div className="icons">
        <IconButton
          className={classes.socialIcons}>
          <GoogleLogin
            clientId="194271428747-v7t3bjqu3cea8jq734pd9o950kolco0o.apps.googleusercontent.com"
            buttonText="LOGIN WITH GOOGLE"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        </IconButton>
        <IconButton
          className={classes.socialIcons}
          onClick={() => console.log('Sign in with twitter')}
        >
          <SocialIcon network="twitter" />
        </IconButton>
        <IconButton
          className={classes.socialIcons}>
          <FacebookLogin
            textButton="LOGIN WITH FACEBOOK"
            appId="319738136533311"
            fields="name,email,picture"
            callback={fbResponse}
          />
        </IconButton>
        <IconButton
          className={classes.socialIcons}
          onClick={() => console.log('Sign in with linkedin')}
        >
          <SocialIcon network="linkedin" />
        </IconButton>
      </div>
    </div>
  );
}

export default SignIn;
