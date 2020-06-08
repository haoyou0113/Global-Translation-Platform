// @flow

import React, { useState } from 'react';

import { Layout } from 'antd';

import Menu from './components/Menu';

import { post } from '../../utils/request';
import Login from '../../pages/Login';
import './index.css';

const { Header, Footer, Content } = Layout;

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
        <Content
          className='homeContent'
          style={{ marginTop: 64 }}
          userInfo={userInfo}
        >
          {props.children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
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
