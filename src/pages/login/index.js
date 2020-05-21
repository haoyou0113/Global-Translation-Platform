import RegistrationForm from './Rigester';
import React, { Fragment, useState } from '../../../node_modules/react';
import { Form, Input, Button, Checkbox } from '../../../node_modules/antd';
import Rigester from './Rigester';
import Avatar from '@material-ui/core/Avatar';
//import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'CopyRight made by QUT Team 72 @2020 '}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage:
      'url( https://d3i6fh83elv35t.cloudfront.net/static/2019/08/GettyImages-870035748-1200x801.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login(props) {
  const classes = useStyles();

  const [reg, setReg] = useState(false);
  const onFinish = (values) => {
    console.log(values);
    props.login(values);
  };
  const regSwitch = () => {
    setReg(reg ? false : true);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Fragment>
      <Grid container component='main' className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <RegistrationForm reg={reg} regSwitch={regSwitch} />
            <Avatar
              className={classes.avatar}
              style={{ display: reg ? 'none' : 'flex' }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              component='h1'
              variant='h5'
              style={{ paddingBottom: 25, display: reg ? 'none' : 'block' }}
            >
              Sign in
            </Typography>
            <Form
              style={{ display: reg ? 'none' : 'block' }}
              {...layout}
              name='basic'
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              initialValues={{ remember: true }}
            >
              <Form.Item
                label='Username'
                name='username'
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label='Password'
                name='password'
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                {...tailLayout}
                name='remember'
                valuePropName='checked'
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type='primary' htmlType='submit' size='medium' block>
                  Sign In
                </Button>

                <Button onClick={regSwitch} size='medium' block>
                  {' '}
                  Sign Up?
                </Button>
              </Form.Item>
            </Form>
            <Box mt={5}>
              <Copyright />
            </Box>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
}
