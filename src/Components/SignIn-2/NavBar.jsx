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
  home: {
    marginRight: theme.spacing(4),
    color: 'black',
    '&:hover': {
      color: '#c32020',
    },
  },
  button: {
    color: 'white',
    fontSize: '16px',
    fontWeight: 700,
    backgroundColor: '#c32020',
    textTransform: 'none',
    borderRadius: '37px 37px 37px 37px',
    padding: '16px 30px',
    '&:hover': {
      backgroundColor: '#e14646',
    },
  },
}));

function NavBar() {
  const classes = useStyles();
  return (
    <div className="container">
      <img src={keelLogo} alt="Logo" />
      <Typography variant="button" className={clsx(classes.root, classes.text)}>
        <Link className={classes.home} underline="none" href="/">
          Home
        </Link>
        <Link className={classes.home} underline="none" href="/services">
          Services
        </Link>
        <Link className={classes.home} underline="none" href="/crs-calculator">
          CRS Calculator
        </Link>
        <Link className={classes.home} underline="none" href="/contact">
          Contact
        </Link>
        <Link underline="none" href="/signin">
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
