import React from 'react';
import { Row, Col } from 'antd';
import './index.less';
import Util from '../../utils/utils';

export default class Header extends React.Component {
  state = {};
  componentWillMount() {
    this.setState({
      userName: 'You Hao',
    });
    setInterval(() => {
      let sysTime = Util.formateDate(new Date().getTime());
      this.setState({
        sysTime,
      });
    }, 1000);
    this.getWeatherAPIData();
  }

  getWeatherAPIData() {}
  render() {
    const menuType = this.props.menuType;
    return (
      <div className='header'>
        <Row className='header-top'>
          {menuType ? (
            <Col span='6' className='logo'>
              <img src='/assets/logo-ant.svg' alt='' />
              <span></span>
            </Col>
          ) : (
            ''
          )}
          <Col span={menuType ? 18 : 24}>
            <span>Welcome {this.state.userName}</span>
            <a href='/'>Logout</a>
          </Col>
        </Row>
        {menuType ? (
          ''
        ) : (
          <Row className='breadcrumb'>
            <Col span='4' className='breadcrumb-title'>
              Home
            </Col>
          </Row>
        )}
      </div>
    );
  }
}
