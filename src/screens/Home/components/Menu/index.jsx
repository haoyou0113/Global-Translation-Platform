import React from 'react';
import { Menu } from 'antd';
import './index.css';
export default class App extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu
        className='homeMenu'
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode='horizontal'
      >
        <Menu.Item key='1'>Home</Menu.Item>
        <Menu.Item key='2'>Discover</Menu.Item>
        <Menu.Item key='3'>Translations</Menu.Item>
        <Menu.Item key='4'>About Us</Menu.Item>
      </Menu>
    );
  }
}
