import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Row, Col } from 'antd';
import Header from '../../components/header';
import Footer from '../../components/footer';
import NavLeft from '../../components/navLeft';
import './index.css';
import '../../common/common.less';

//import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';　//added for the icons
// import { MessageOutlined } from '@ant-design/icons';
// <MessageOutlined style={{ fontSize: '16px', color: '#08c' }} />

const useStyles = makeStyles((theme) => ({
  button: {
    marginBottom: theme.spacing(1),
  },
}));
export const Dashboard = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Row className='container'>
        <Col span='4' className='nav-left'>
          <NavLeft />
        </Col>
        <Col span='20' className='main'>
          <Header />
          <Row className='content'>{props.children}</Row>
          <Footer />
        </Col>
      </Row>

      <Link to='/home/main'>
        <Button
          variant='contained'
          color='primary'
          href='#contained-buttons'
          className={classes.button}
        >
          Back to Home Page
        </Button>
      </Link>
    </div>
  );
};
export default Dashboard;
