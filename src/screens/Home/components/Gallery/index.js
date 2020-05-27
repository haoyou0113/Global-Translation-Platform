import React, { Component, Fragment, useState, useEffect } from 'react';
import { Card, Row, Col, Modal } from 'antd';
import { Input } from 'antd';

import { Button, Layout, Typography, Form, Rate, Alert, Result } from 'antd';
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

  const [currentImg, setCurrentImg] = useState('');
  const [originbooks, setOriginBooks] = useState([]);
  const [language, setLanguage] = useState([]);
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

  const formRef = React.createRef();
  console.log(language);
  const onpenGallery = (item) => {
    setCurrentImg('/gallery/' + item);
    setVisible(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      get('http://localhost:8080/api/origin/list').then((res) => {
        if (res.errno === 0) {
          setBooks(res.data);
          setOriginBooks(res.data);
          setLanguage();
          console.log(res.data);
        }
      });
    };
    fetchData();
  }, []);

  function onChange(value) {
    const result = books.filter((item) => item.language.indexOf(value) !== -1);
    setBooks(result);
  }
  function onChangeTarget(value) {
    const result = books.filter(
      (item) => item.target_language.indexOf(value) !== -1
    );
    setBooks(result);
  }

  function categories(value) {
    console.log(value);
    const result = books.filter((item) => item.type === value);
    setBooks(result);
  }

  const clear = () => {
    setBooks(originbooks);
    formRef.current.resetFields();
  };

  function rate(val) {
    const result = books.filter((item) => item.level === val);
    setBooks(result);
  }

  function searchingBar(value) {
    if (value) {
      const result = books.filter((item) => item.name.indexOf(value) !== -1);
      setBooks(result);
    } else {
      setBooks(originbooks);
    }
  }
  console.log(books);
  return (
    <Fragment>
      <TopContent className='Gallery' />
      <Title level={2} style={{ textAlign: 'center' }}>
        Books You Might Want
      </Title>

      <Search
        className='homeSearch'
        placeholder='Search the documents you might be interested'
        enterButton='Search'
        size='large'
        onSearch={searchingBar}
      />

      <div className='space-align-container' style={{ margin: 20 }}>
        <Form layout='inline' ref={formRef}>
          <Form.Item name='select' label='Original Language' hasFeedback>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder='Select a Language'
              optionFilterProp='children'
              onChange={onChange}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value='English'>English</Option>
              <Option value='Chinese'>Chinese</Option>
              <Option value='Japanese'>Japanese</Option>
              <Option value='Spanish'>Spanish</Option>
              <Option value='German'>German</Option>
              <Option value='French'>French</Option>
              <Option value='Laos'>Laos</Option>
              <Option value='Thai'>Thai</Option>
            </Select>
          </Form.Item>
          <Form.Item name='select2' label='Target Language' hasFeedback>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder='Select a Language'
              optionFilterProp='children'
              onChange={onChangeTarget}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value='English'>English</Option>
              <Option value='Chinese'>Chinese</Option>
              <Option value='Japanese'>Japanese</Option>
              <Option value='Spanish'>Spanish</Option>
              <Option value='German'>German</Option>
              <Option value='French'>French</Option>
              <Option value='Laos'>Laos</Option>
              <Option value='Thai'>Thai</Option>
              <Option value='Korean'>Korean</Option>
              <Option value='Javanese'>Javanese</Option>
            </Select>
          </Form.Item>
          <Form.Item name='rate' label='Translation Level'>
            <Rate defaultValue={0} name='level' onChange={rate} />
          </Form.Item>
          <Form.Item name='categories' label='Books Category' hasFeedback>
            <Select
              placeholder='Please select book categories'
              style={{ width: 200 }}
              optionFilterProp='children'
              onChange={categories}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value='Fiction'>Fiction</Option>
              <Option value='Story'>Story</Option>
              <Option value='Children'>Children</Option>
            </Select>
          </Form.Item>
          <Button type='primary' onClick={clear}>
            Clear
          </Button>
        </Form>
      </div>

      <Result
        status='warning'
        title='There are some problems with your operation.'
        style={{ display: books.length <= 0 ? 'block' : 'none' }}
      />
      <div
        className='site-card-wrapper'
        style={{ display: books.length > 0 ? 'flex' : 'none' }}
      >
        <Fragment>
          <Row gutter={16} style={{ padding: 15 }}>
            {books.map((item) => (
              <Col span={4} key={item.key}>
                <NavLink to={`/home/bookdetails?${item.id}`} key={item.key}>
                  <Card
                    title={item.name}
                    key={item.key}
                    cover={<img alt='example' src={item.image} />}
                    style={{ marginBottom: 10 }}
                  >
                    <Card.Meta />
                    <p></p>
                    <p>
                      <b>Original Language:</b> {item.language}
                    </p>
                    <p>
                      <b>Target Language:</b> {item.target_language}
                    </p>
                    <p>
                      <b>Level</b>
                      {item.level}
                      {/* <Rate disabled defaultValue={item.level} /> */}
                    </p>
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
