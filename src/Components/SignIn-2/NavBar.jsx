import React from 'react';
import keelLogo from '../../Assets/keel-logo.jpeg';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import './NavBar.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
      color: 'black',
    },
  },
  text: {
    marginTop: '35px',
    textTransform: 'none',
    fontSize: '18px',
    fontWeight: 700,
  },
  link: {
    marginRight: theme.spacing(4),
    color: 'black',
    textDecoration: 'none',
    '&:hover': {
      color: '#c32020',
      textDecoration: 'none',
    },
  },
  buttonLink: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
  button: {
    color: 'white',
    fontSize: '16px',
    fontWeight: 700,
    backgroundColor: '#c32020',
    textTransform: 'none',
    textDecoration: 'none',
    borderRadius: '37px 37px 37px 37px',
    padding: '16px 30px',
    '&:hover': {
      backgroundColor: '#e14646',
      textDecoration: 'none',
    },
  },
}));

function NavBar() {
  const classes = useStyles();
  return (
    <div className="container">
      <Link className={classes.link} underline="none" href="/">
        <img src={keelLogo} alt="Logo" />
      </Link>
      <Typography variant="button" className={clsx(classes.root, classes.text)}>
        <Link className={classes.link} href="/">
          Home
        </Link>
        <Link className={classes.link} href="/services">
          Services
        </Link>
        <Link className={classes.link} href="/crs-calculator">
          CRS Calculator
        </Link>
        <Link className={classes.link} href="/contact">
          Contact
        </Link>
        <Link className={classes.buttonLink} href="/signin">
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Get Started
          </Button>
        </Link>
      </Typography>
    </div>
  );
}

export default NavBar;
