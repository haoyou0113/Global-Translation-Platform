import React, { Component, Fragment, useState, useEffect } from 'react';
import { Card, Row, Col, Modal } from 'antd';
import { Button, Layout, Typography } from 'antd';
import { get } from '../../../../utils/request';
import TopContent from '../TopContent';
import './index.less';
const { Title } = Typography;
const HomeContent = () => {
  const [visible, setVisible] = useState(false);
  const [data, setDate] = useState([]);
  const [currentImg, setCurrentImg] = useState('');
  const originData = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
  ];
  const [books, setBooks] = useState([
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
  ]);
  const onpenGallery = (item) => {
    setCurrentImg('/gallery/' + item);
    setVisible(true);
  };
  useEffect(
    () =>
      get('http://localhost:8080/api/origin/list').then((res) => {
        setDate(res);
      }),
    []
  );

  const imgList = books.map((item) => (
    <Col xs={5}>
      <Card
        cover={
          <img src={'/gallery/' + item} onClick={() => onpenGallery(item)} />
        }
        style={{ marginBottom: 10 }}
      >
        <Card.Meta title={'Library for All' + item} description='Love' />
      </Card>
    </Col>
  ));

  const searchingBooks = (value) => {
    value ? setBooks([value.substr(-5, 5)]) : setBooks(originData);
  };
  return (
    <Fragment>
      <TopContent searchingBooks={searchingBooks} />
      <Title level={2} style={{ textAlign: 'center' }}>
        Books You Might Want
      </Title>
      <div className='card-wrap'>
        <Row justify='space-around' align='middle'>
          {imgList}
        </Row>
        <Modal
          width={300}
          height={500}
          visible={visible}
          onCancel={() => setVisible(false)}
          footer={null}
          title='Books'
        >
          <img src={currentImg} alt='' style={{ width: '100%' }} />
          <p>Original Language: Chinese</p>
          <p>Target Language: English</p>
          <p>Deadline: 60days</p>
          <Button>Translate</Button>
        </Modal>
      </div>
    </Fragment>
  );
};
export default HomeContent;
