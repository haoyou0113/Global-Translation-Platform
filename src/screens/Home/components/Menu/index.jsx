import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './index.css';

const HomeMenu = (props) => {
  //const { username, role } = props.userInfo.data;

  const handleClick = (e) => {
    console.log('click ', e);
  };

  return (
    <Menu className='homeMenu' mode='horizontal'>
      <Menu.Item key='1'>Home</Menu.Item>
      <Menu.Item key='2'>Discover</Menu.Item>
      <Menu.Item key='3'>Translations</Menu.Item>
      <Menu.Item key='4'>About Us</Menu.Item>
      <Menu.Item
        className='dashboardMenu'
        key='5'
       // style={{ display: role === 0 ? 'inline-block' : 'none' }}
      >
        <Link to='/dashboard/books'>Dashboard </Link>
      </Menu.Item>

      <span className='loginLogo'>
        <Avatar
          style={{
            //backgroundColor: '#bae637',
          }}
          icon={<UserOutlined />}
        />
        {/*Hello {username}!*/}
        <a style={{ marginLeft: 20 }} href='/'>
          Logout
        </a>
      </span>
    </Menu>
  );
};

export default HomeMenu;
