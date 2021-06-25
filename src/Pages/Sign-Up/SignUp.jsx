import React, { useState } from 'react';
import { Formik, Form, useField } from 'formik';
import { TextField, Button } from '@material-ui/core';
import * as yup from 'yup';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';

const MyTextField = ({ placeholder, type, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
      type={type}
    />
  );
};

const validationSchema = yup.object({
  email: yup.string().email().required('Please enter a valid e-mail'),
  password: yup
    .string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
  confirmPassword: yup
    .string()
    .required('Please Confirm Password')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const responseGoogle = (response) => {
  console.log(response);
  console.log(response.profileObj);
};

const SignUp = () => {
  const [signedUpAlert, setSignedUpAlert] = useState(false);
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);

  return (
    <div style={{ margin: '20px 20px' }}>
      <Formik
        validateOnChange={true}
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={async (data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          const { email, password } = data;
          await axios
            .post('https://getkeel.com/api/v1/user/signup', {
              email,
              password,
            })
            .then((resp) => {
              console.log(resp);
              if (resp.request.status === 200) {
                setSignedUpAlert(true);
              }
            })
            .catch((err) => {
              if (err.response.status === 500) {
                setAlreadyRegistered(true);
              }
              if (err.response.status === 404 || err.response.status === 400) {
              }
            });
          resetForm({
            values: {
              email: '',
              password: '',
              confirmPassword: '',
            },
          });
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <MyTextField placeholder="E-mail" name="email" type="email" />
            <div>
              <MyTextField
                placeholder="Password"
                name="password"
                type="password"
              />
            </div>
            <div>
              <MyTextField
                placeholder="Confirm Password"
                name="confirmPassword"
                type="password"
              />
            </div>
            <div>
              <Button disabled={isSubmitting} type="submit">
                submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      <div>
        <GoogleLogin
          clientId="194271428747-v7t3bjqu3cea8jq734pd9o950kolco0o.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
      {signedUpAlert && (
        <Alert severity="success">Registeration Successfully</Alert>
      )}
      {alreadyRegistered && <Alert severity="error">Already Registered</Alert>}
    </div>
  );
};

export default SignUp;
