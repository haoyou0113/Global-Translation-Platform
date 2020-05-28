import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import './index.css';
import { Anchor } from 'antd';

const HomeMenu = (props) => {
  const { firstname, role, experience, image } = props.userInfo.data;
  console.log(image);
  const handleClick = (e) => {
    console.log('click ', e);
  };
  const scrollToAnchor = (anchorName) => {
    console.log(1);
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView();
      }
    }
  };
  return (
    <Menu className='homeMenu' mode='horizontal'>
      <Menu.Item key='1' className='dashboardMenu'>
        <NavLink to='/home/main'>Home</NavLink>
      </Menu.Item>
      <Menu.Item key='2' onClick={() => scrollToAnchor('Gallery')}>
        Discover
      </Menu.Item>
      <Menu.Item key='4'>
        About Us
        <a href='https://libraryforall.org/'></a>
      </Menu.Item>
      <Menu.Item
        className='dashboardMenu'
        key='5'
        style={{ display: role === 0 ? 'inline-block' : 'none' }}
      >
        <Link to='/dashboard/books'>Dashboard </Link>
      </Menu.Item>

      <span className='loginLogo'>
        your curren points : {experience}
        <NavLink to='/home/userInfor'>
          <Avatar src={image} icon={<UserOutlined />} />
        </NavLink>
        Hello {firstname}!
        <NavLink to='/home/main'>
          <a style={{ marginLeft: 10 }} href='/home/main'>
            Logout
          </a>
        </NavLink>
      </span>
    </Menu>
  );
};

export default HomeMenu;
