import React, { useEffect, useState, Fragment } from 'react';
import { get, post } from '../../../../utils/request';
import { Table } from 'antd';
import { Form, Select, DatePicker, Button, Upload, Input } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
const { Option } = Select;
const OriginalBooks = () => {
  const [originBooks, setOriginBooks] = useState([]);
  const delet = () => {};
  const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
  };

  const normFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };
  const state = {
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        width: 200,
      },
      {
        title: 'Author',
        dataIndex: 'author',
        width: 100,
      },
      {
        title: 'Category',
        dataIndex: 'category',
        width: 100,
      },
      {
        title: 'Publisher',
        dataIndex: 'publisher',
        width: 100,
      },
      {
        title: 'Publish Time',
        dataIndex: 'publish_time',
        width: 100,
      },
      {
        title: 'Translation Number',
        dataIndex: 'trans_num',
        width: 200,
      },
      {
        title: 'Action',
        key: 'action',
        render: () => (
          <div>
            <a>Delete</a>
            <a> </a>
            <a>Publish</a>
            <a> </a>
            <a>Review</a>
          </div>
        ),
      },
    ],
  };
  const Demo = () => {
    const config = {
      rules: [
        {
          type: 'object',
          required: true,
          message: 'Please select time!',
        },
      ],
    };
    const onFinish = (values) => {
      post('http://localhost:8080/api/origin/add', values).then((res) => {
        if (res.errno === 0) {
          console.log(res);
        } else {
          alert('Add success');
        }
      });
      console.log('Received values of form: ', values);
    };

    return (
      <Form
        name='validate_other'
        {...formItemLayout}
        onFinish={onFinish}
        initialValues={{
          'input-number': 3,
          'checkbox-group': ['A', 'B'],
          rate: 3.5,
        }}
      >
        <Form.Item
          {...formItemLayout}
          name='name'
          label='Book Name'
          rules={[
            {
              required: true,
              message: 'Please input your book name',
            },
          ]}
        >
          <Input placeholder='Please input your book name' />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='publisher'
          label='Publisher'
          rules={[
            {
              required: true,
              message: 'Please input publisher',
            },
          ]}
        >
          <Input placeholder='Please input publisher' />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='author'
          label='Book Author'
          rules={[
            {
              required: true,
              message: 'Please input the author of this book',
            },
          ]}
        >
          <Input placeholder='Please input the author of this book' />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='language'
          label='Book Language'
          rules={[
            {
              required: true,
              message: 'Please input the original language of this book',
            },
          ]}
        >
          <Input placeholder='Please input  the original language of this book' />
        </Form.Item>
        <Form.Item
          name='category'
          label='Category'
          rules={[
            {
              required: true,
              message: 'Please select categories of this book!',
              type: 'array',
            },
          ]}
        >
          <Select
            mode='multiple'
            placeholder='Please select categories of this book'
          >
            <Option value='story'>Story</Option>
            <Option value='business'>Business</Option>
            <Option value='history'>History</Option>
            <Option value='artsMusic'>Arts & Music</Option>
            <Option value='scienceMath'>Science & Math</Option>
            <Option value='kids'>Kids</Option>
          </Select>
        </Form.Item>

        <Form.Item name='download_loc' label='Download Link'>
          <Input placeholder='Please input  the Download Link of this book' />
        </Form.Item>
        <Form.Item name='publish_time' label='time'>
          <Input placeholder='Please input  the Download Link of this book' />
        </Form.Item>
        {/* <Form.Item label='Dragger'>
          <Form.Item
            name='dragger'
            valuePropName='fileList'
            getValueFromEvent={normFile}
            noStyle
          >
            <Upload.Dragger name='download_loc' action='/upload.do'>
              <p className='ant-upload-drag-icon'>
                <InboxOutlined />
              </p>
              <p className='ant-upload-text'>
                Click or drag file to this area to upload
              </p>
              <p className='ant-upload-hint'>
                Support for a single or bulk upload.
              </p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item> */}

        <Form.Item
          wrapperCol={{
            span: 12,
            offset: 6,
          }}
        >
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      get('http://localhost:8080/api/origin/list').then((res) => {
        if (res.errno === 0) {
          setOriginBooks(res.data);
          console.log(res.data);
        }
      });
    };
    fetchData();
  }, []);
  const columns = state.columns.map((col, index) => ({
    ...col,
    onHeaderCell: (column) => ({
      width: column.width,
    }),
  }));
  return (
    <Fragment>
      <Table bordered columns={columns} dataSource={originBooks} />
      <Demo />
    </Fragment>
  );
};

export default OriginalBooks;
