import React, { Component, Fragment, useState, useEffect } from 'react';
import { Card, Row, Col, Modal } from 'antd';
import { Button, Layout, Typography, Pagination } from 'antd';
import { get } from '../../../../utils/request';
import TopContent from '../TopContent';
import { Document, Page, pdfjs } from 'react-pdf';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Select, Space } from 'antd';
import './index.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const { Option } = Select;

const { Title } = Typography;
const HomeContent = () => {
  const [visible, setVisible] = useState(false);
  const [data, setDate] = useState([]);
  const [currentImg, setCurrentImg] = useState('');

  const [books, setBooks] = useState([
    {
      key: 1,
      url: 'Busy Little.pdf',
      title: 'Busy Little',
      index: 'busy_little',
      originLanguage: 'English',
      expectLanguage: 'Lao',
      deadline: 60,
    },
    // {
    //   key: 2,
    //   url: 'How The Rooster Found His Sound.pdf',
    //   title: 'How The Rooster Found His Sound',
    //   index: 'how_the_rooster_found_his_sound',
    //   originLanguage: 'English',
    //   expectLanguage: 'Lao',
    //   deadline: 60,
    // },
    // {
    //   key: 3,
    //   url: 'Tahlia The Tortoise Finds An Umbrella.pdf',
    //   title: 'Tahlia The Tortoise Finds An Umbrella',
    //   index: 'tahli_the_tortoise_finds_an_umbrella',
    //   originLanguage: 'English',
    //   expectLanguage: 'Lao',
    //   deadline: 60,
    // },
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
      <TopContent searchingBooks={searchingBooks} />
      <Title level={2} style={{ textAlign: 'center' }}>
        Books You Might Want
      </Title>
      <div className='space-align-container' style={{ margin: 20 }}>
        <div className='space-align-block'>
          <Space align='center'>
            <label htmlFor=''>List by Original Language</label>
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
            <span className='mock-block'></span>
          </Space>
        </div>
        <div className='space-align-block'>
          <Space align='center'>
            <label htmlFor=''>List by Target Language</label>
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
          </Space>
        </div>
      </div>

      <div className='card-wrap'>
        {books.map((item) => (
          <Fragment>
            <Row justify='space-around' align='middle' key={item.key}>
              <Col xs={5}>
                <Card
                  cover={
                    <Fragment>
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
                    </Fragment>
                  }
                  style={{ marginBottom: 10, with: '20vh' }}
                >
                  <Card.Meta title={item.title} />
                  <p></p>
                  <p>Original Language:{item.originLanguage}</p>
                  <p>Target Language: {item.expectLanguage}</p>
                  <p>Deadline: {item.deadline}days</p>
                  <NavLink to={`/home/translate?${item.index}`}>
                    <Button>translate</Button>
                  </NavLink>
                </Card>
              </Col>
            </Row>
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};
export default HomeContent;
