import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import './index.css';

const HomeMenu = (props) => {
  const { address, experience, image, username, id } = props.userInfo.data;
  console.log(address);
  // const handleClick = (e) => {
  //   console.log('click ', e);
  // };
  const scrollToAnchor = (anchorName) => {
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
        style={{
          display: address === 'Junior translator' ? 'none' : 'inline-block',
        }}
      >
        <Link to='/dashboard/books'>Dashboard </Link>
      </Menu.Item>

      <span className='loginLogo'>
        Your Current Rewards Points :{' '}
        <b style={{ color: 'black', marginRight: 10 }}>{experience}</b>
        <NavLink to={`/home/userInfor?${id}`}>
          <Avatar src={image} icon={<UserOutlined />} />
        </NavLink>
        Hello {username}!
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
