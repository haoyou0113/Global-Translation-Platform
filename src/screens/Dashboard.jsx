import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    marginBottom: theme.spacing(1),
  },
}));
export const Dashboard = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant='h3'>{'This is Dashboard page'}</Typography>
      <Link to='/'>
        <Button
          variant='contained'
          color='primary'
          href='#contained-buttons'
          className={classes.button}
        >
          Back to Home Page
        </Button>
      </Link>
    </div>
  );
};
export default Dashboard;
