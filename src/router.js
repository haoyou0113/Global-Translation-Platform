import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import { Home } from './screens/Home';
import { Dashboard } from './screens/Dashboard';
import BooksManagement from './pages/BooksManagement';
import UsersManagement from './pages/UserManagement';
import UserInfor from './pages/UserInfor';
import HomeContent from './screens/Home/components/Gallery';
import Translation from './screens/Home/components/Translation';
import BookDetails from './screens/Home/components/BookDetails';
import Login from './pages/Login';
import './App.css';

import Rigester from './pages/Login'; //追加分
// import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

export default class ERouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path='/login' component={Login} />
            <Route
              path='/home'
              render={() => (
                <Home>
                  <Switch>
                    {/* <Route path='/register' component={Rigester} />  */}
                    <Route path='/home/main' component={HomeContent} />
                    <Route path='/home/userInfor' component={UserInfor} />
                    <Route path='/home/translate' component={Translation} />
                    <Route path='/home/bookdetails' component={BookDetails} />
                  </Switch>
                </Home>
              )}
            />
            <Route
              path='/dashboard'
              render={() => (
                <Dashboard>
                  <Switch>
                    <Route
                      path='/dashboard/users'
                      component={UsersManagement}
                    />
                    <Route
                      path='/dashboard/books'
                      component={BooksManagement}
                    />

                    {/* <Route component={NoMatch} /> */}
                  </Switch>
                </Dashboard>
              )}
            />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}
