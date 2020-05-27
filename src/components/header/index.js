import React from 'react';
import { Row, Col } from 'antd';
import './index.less';
import Util from '../../utils/utils';

export default class Header extends React.Component {
  state = {};
  componentWillMount() {
    this.setState({
      userName: 'a1',
    });
    setInterval(() => {
      let sysTime = Util.formateDate(new Date().getTime());
      this.setState({
        sysTime,
      });
    }, 1000);
  }

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
        </Row>
      </div>
    );
  }
}
