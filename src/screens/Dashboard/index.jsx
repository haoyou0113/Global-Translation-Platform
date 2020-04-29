import React from 'react';
import { Typography } from '@material-ui/core';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Row, Col } from 'antd';
import Header from '../../components/header';
import Footer from '../../components/footer';
import NavLeft from '../../components/navLeft';
import { BooksManagement } from '../../pages/BooksManagement/index';
import { UsersManagement } from '../../pages/UserManagement';
import '../../common/common.less';

const useStyles = makeStyles((theme) => ({
  button: {
    marginBottom: theme.spacing(1),
  },
}));
export const Dashboard = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant='h3'>{'This is Dashboard page'}</Typography>
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

      <Link to='/'>
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
