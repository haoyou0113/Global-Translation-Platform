import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Home } from './screens/Home';
import { Dashboard } from './screens/Dashboard';
import BooksManagement from './pages/BooksManagement';
import UsersManagement from './pages/UserManagement';
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
        <Route path='/' exact component={Home}></Route>
        <Route
          path='/dashboard'
          render={() => (
            <Dashboard>
              <Route path='/dashboard/users' component={UsersManagement} />
              <Route path='/dashboard/books' component={BooksManagement} />
            </Dashboard>
          )}
        ></Route>
      </div>
    </BrowserRouter>
  );
};

export default App;
