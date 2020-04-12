import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Home } from './screens/Home';
import { Dashboard } from './screens/Dashboard';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

type AppProps = {
  id?: string,
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
  };
});

export const App = ({ id }: AppProps) => {
  const classes = useStyles();

  // const { site } = useContext(ConfigurationContext);
  return (
    <BrowserRouter>
      <div className='test-app'>
        <Typography variant='h2'>global translation platform</Typography>
        <Route path='/' exact component={Home}></Route>
        <Route path='/dashboard' exact component={Dashboard}></Route>
        {/* <Route path='/listview' exact component={ListView}></Route> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
