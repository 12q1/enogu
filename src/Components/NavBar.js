import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navBar: {
    background: '#a12118'
  },
  title: {
    flexGrow: 1,
  },
  navLink: {
    color: 'white',
    textDecoration: 'none'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            ENOGU
          </Typography>
          <Link to="/" className={classes.navLink}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/canvas" className={classes.navLink}>
            <Button color="inherit">New</Button>
          </Link>
          <Link to="/projects" className={classes.navLink}>
            <Button color="inherit">Projects</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
