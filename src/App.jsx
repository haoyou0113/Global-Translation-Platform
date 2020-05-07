import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Home } from './screens/Home';
import { Dashboard } from './screens/Dashboard';
import BooksManagement from './pages/BooksManagement';
import UsersManagement from './pages/UserManagement';
import UserInfor from './pages/UserInfor';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HomeContent from './screens/Home/components/Gallery';
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
      <Route exact path='/' component={Home}></Route>
      <Route
        path='/dashboard'
        render={() => (
          <Dashboard>
            <Route path='/dashboard/users' component={UsersManagement} />
            <Route path='/dashboard/books' component={BooksManagement} />
          </Dashboard>
        )}
      ></Route>
      <Route
        exact
        path='/home'
        render={() => (
          <Home>
            <Route path='/home/userInfor' component={UserInfor} />
            <Route exact path='/home' component={HomeContent} />
          </Home>
        )}
      ></Route>
    </BrowserRouter>
  );
};

export default App;
