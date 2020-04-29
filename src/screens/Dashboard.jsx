import React from 'react';
import { Typography } from '@material-ui/core';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Row, Col } from 'antd';
import Header from '../components/header';
import Footer from '../components/footer';
import NavLeft from '../components/navLeft';
import { BooksManagement } from '../pages/BooksManagement/index';
import { UsersManagement } from '../pages/UserManagement';

import '../common/common.less';

const useStyles = makeStyles((theme) => ({
  button: {
    marginBottom: theme.spacing(1),
  },
}));
export const Dashboard = (props) => {
  const classes = useStyles();

  return (
    <div>
    <img 
        src= "https://libraryforall.org/wp-content/uploads/2019/07/Two-PNG-students-with-Library-For-All-tablets.jpg"
        alt = "lfa_children"
        className = "lfa_children_img"/> 
     <img 
                    src= "https://pbs.twimg.com/profile_images/1088002314374307840/Nq8bBLZo_400x400.jpg"
                    alt = "lfa_logo"
                    className = "lfa_logo_img" /> 
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
