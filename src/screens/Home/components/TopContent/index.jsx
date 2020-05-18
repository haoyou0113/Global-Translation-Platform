import React from 'react';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import './index.css';
const { Meta } = Card;
const TopContent = (props) => {
  return (
    <div className='topContent'>
     
      <Row>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt='example'
                src='https://cxl.com/wp-content/uploads/2016/03/nate_munger.png'
              />
            }
          >
            <Meta title='The Runner-up' />
            <p>Name: Leon</p>
            <p>Number of translation: 37</p>
            <p>Awards Points: 241</p>
          </Card>
        </Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt='example'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPIW9SjCEWzPGBpMW9RurqqRnJnnPCDkb__Go95zDlFLPVJKeR&usqp=CAU'
              />
            }
          >
            <Meta title='The Champion' />
            <p>Name: Anna</p>
            <p>Number of translation: 49</p>
            <p>Awards Points: 288</p>
          </Card>
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt='example'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_tPRtDWvb4_gvyU4uXxgwF0DnuuOeKe1YVft4NVCks3B_F14g&usqp=CAU'
              />
            }
          >
            <Meta title='The bronze' />
            <p>Name: Lay</p>
            <p>Number of translation: 30</p>
            <p>Awards Points: 199</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default TopContent;
