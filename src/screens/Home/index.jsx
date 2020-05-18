// @flow

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Layout, Typography } from 'antd';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import TopContent from './components/TopContent';
import { get, post } from '../../utils/request';
import Login from '../../pages/Login';
import './index.css';

import Rigester from '../../pages/Login';
const { Title } = Typography;

const { Header, Footer, Sider, Content } = Layout;

export const Home = (props) => {
  const [authority, setAuthority] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  console.log(props);
  const login = (value) => {
    post('http://localhost:8080/api/user/login', value).then((res) => {
      console.log(res);
      setUserInfo(res);
      if (res.errno === 0) {
        setAuthority(true);
      } else {
        alert('login failed');
      }
    });
  };

  if (authority === true) {
    return (
      <Layout>
        <Header>
          <img
            className='logoTop'
            src='https://site2.staging.libraryforall.org.au/wp-content/uploads/2018/12/Library-for-All-Badge-Logo-Black-300x300.png'
          />
          <Menu userInfo={userInfo} />
        </Header>
        <Content className='homeContent'>{props.children}</Content>
        <Footer>
          <Link to='/dashboard/books'>
            <Button>Link to Dashboard</Button>
          </Link>
          CopyRight made by QUT Team 72 @2020
        </Footer>
      </Layout>
    );
  } else {
    return (
      <Layout className='loginCom'>
        <Login login={login} />
      </Layout>
    );
  }
};

export default Home;
