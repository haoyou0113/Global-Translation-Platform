import React, { Component, Fragment, useState, useEffect } from 'react';
import { Card, Row, Col, Modal } from 'antd';
import { Input } from 'antd';

import { Button, Layout, Typography, Form } from 'antd';
import { get } from '../../../../utils/request';
import TopContent from '../TopContent';
import { Document, Page, pdfjs } from 'react-pdf';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Select, Space } from 'antd';

import './index.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const { Option } = Select;
const { Search } = Input;
const { Title } = Typography;
const HomeContent = (props) => {
  const [visible, setVisible] = useState(false);
  const [data, setDate] = useState([]);
  const [currentImg, setCurrentImg] = useState('');

  const [books, setBooks] = useState([
    {
      key: 1,
      url: 'Busy Little.pdf',
      img:
        'https://images-na.ssl-images-amazon.com/images/I/51%2BoLSpnLtL._SX351_BO1,204,203,200_.jpg',
      title: 'Busy Little',
      index: 'busy_little',
      originLanguage: 'English',
      expectLanguage: 'Lao',
      deadline: 60,
    },
    {
      key: 2,
      url: 'How The Rooster Found His Sound.pdf',
      img: 'https://images-na.ssl-images-amazon.com/images/I/61rEBeU6uML.jpg',
      title: 'How The Rooster Found His Sound',
      index: 'how_the_rooster_found_his_sound',
      originLanguage: 'English',
      expectLanguage: 'Lao',
      deadline: 60,
    },
    {
      key: 3,
      url: 'Tahlia The Tortoise Finds An Umbrella.pdf',
      img:
        'https://www.booktopia.com.au/http_coversbooktopiacomau/big/9781925863963/4938/tahlia-the-tortoise-finds-an-umbrella.jpg',
      title: 'Tahlia The Tortoise Finds An Umbrella',
      index: 'tahli_the_tortoise_finds_an_umbrella',
      originLanguage: 'English',
      expectLanguage: 'Lao',
      deadline: 60,
    },
  ]);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onpenGallery = (item) => {
    setCurrentImg('/gallery/' + item);
    setVisible(true);
  };
  // useEffect(
  //   () =>
  //     get('http://localhost:8080/api/origin/list').then((res) => {
  //       setDate(res);
  //     }),
  //   []
  // );

  // const imgList = books.map((item) => (
  //   <Col xs={5}>
  //     <Card
  //       cover={
  //         <Document
  //           onClick={() => onpenGallery(item)}
  //           file={`./${item}`}
  //           onLoadSuccess={onDocumentLoadSuccess}
  //         >
  //           <Page pageNumber={pageNumber} />
  //         </Document>
  //       }
  //       style={{ marginBottom: 10 }}
  //     >
  //       <Card.Meta title={'Library for All' + item} description='Love' />
  //     </Card>
  //   </Col>
  // ));
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  const searchingBooks = (value) => {
    // value ? setBooks([value.substr(-5, 5)]) : setBooks(originData);
  };
  const onChangePage = (page) => {
    setPageNumber(page);
  };
  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }

  function onSearch(val) {
    console.log('search:', val);
  }

  return (
    <Fragment>
      <TopContent className='Gallery' searchingBooks={searchingBooks} />
      <Title level={2} style={{ textAlign: 'center' }}>
        Books You Might Want
      </Title>
      <Search
        className='homeSearch'
        placeholder='Search the documents you might be interested'
        enterButton='Search'
        size='large'
        onSearch={(value) => props.searchingBooks(value)}
      />

      <div className='space-align-container' style={{ margin: 20 }}>
        <Form layout='inline'>
          <Form.Item name='select' label='Original Language' hasFeedback>
            <Select
              allowClear
              showSearch
              style={{ width: 200 }}
              placeholder='Select a Language'
              optionFilterProp='children'
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value='jack'>English</Option>
              <Option value='lucy'>Chinese</Option>
              <Option value='tom'>Japanese</Option>
            </Select>
          </Form.Item>{' '}
          <Form.Item name='select' label='Target Language' hasFeedback>
            <Select
              allowClear
              showSearch
              style={{ width: 200 }}
              placeholder='Select a Language'
              optionFilterProp='children'
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value='jack'>English</Option>
              <Option value='lucy'>Chinese</Option>
              <Option value='tom'>Japanese</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name='select-multiple'
            label='Books Category'
            rules={[
              {
                required: true,
                message: 'Please select the type of book!',
                type: 'array',
              },
            ]}
          >
            <Select mode='multiple' placeholder='Please select book type'>
              <Option value='fiction'>Fiction</Option>
              <Option value='story'>Story</Option>
              <Option value='children'>Children</Option>
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
            <Button type='primary' htmlType='submit'>
              Filter
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div className='site-card-wrapper'>
        <Fragment>
          <Row gutter={16} style={{ padding: 15 }}>
            {books.map((item) => (
              <Col span={4} key={item.key}>
                <NavLink to='/home/bookdetails'>
                  <Card
                    title={item.title}
                    key={item.title}
                    cover={
                      <img alt='example' src={item.img} />

                      /* <Fragment>
                      <Document
                        onClick={() => setVisible(true)}
                        file={require(`./${item.url}`)}
                        onLoadSuccess={onDocumentLoadSuccess}
                      >
                        <Page pageNumber={pageNumber} />
                      </Document>
                      <Pagination
                        total={numPages}
                        showTotal={(total) => ` ${total} pages`}
                        current={pageNumber}
                        pageSize={1}
                        size='small'
                        onChange={onChangePage}
                      />
                    </Fragment> */
                    }
                    style={{ marginBottom: 10 }}
                  >
                    <Card.Meta />
                    <p></p>
                    <p>Original Language:{item.originLanguage}</p>
                    <p>Target Language: {item.expectLanguage}</p>
                    <p>Deadline: {item.deadline}days</p>
                    <NavLink to={`/home/translate?${item.index}`}>
                      <Button>translate</Button>
                    </NavLink>
                  </Card>
                </NavLink>
              </Col>
            ))}
          </Row>
        </Fragment>
      </div>
    </Fragment>
  );
};
export default HomeContent;
