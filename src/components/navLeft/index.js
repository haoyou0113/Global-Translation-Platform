import React, { Component } from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import MenuConfig from './../../config/menuConfig';

import './index.less';
const SubMenu = Menu.SubMenu;

export default class NavLeft extends Component {
  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);

    this.setState({
      menuTreeNode,
    });
  }
  // menu render
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          <NavLink to={item.key}> {item.title} </NavLink>
        </Menu.Item>
      );
    });
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  render() {
    return (
      <div className='navleft'>
        <div className='logo'>
          <img src='/asset/logo-ant.svg' alt='' />
          <h1>Dashboard</h1>
        </div>
        <Menu theme='dark'>{this.state.menuTreeNode}</Menu>
      </div>
    );
  }
}
