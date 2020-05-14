import React, { useState, useEffect } from 'react';  ///
import { Input } from 'antd';
import { Row, Col } from 'antd';
import { Card } from 'antd';

import './index.css';
const { Meta } = Card;
const { Search } = Input;
const TopContent = (props) => {
var [innerSearch, setInnerSearch] = useState("");

  return (
    <div className='topContent'>
      <Search
        className='homeSearch'
        placeholder='Search the document'
        enterButton='Search'
        size='large'
        width = '150px'
        //onSearch={(value) => console.log("Value", value)}  
        onSearch={(value) => console.log("Value", value)}  
        //onClick={() => props.onSubmit(innerSearch), console.log(innerSearch)}
        
        //onSearch={(value) => console.log("Value", value)}
      />




      <Row>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt='example'
                src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
              />
            }
          >
            <Meta
              title='Top Three Translators'
              description='www.instagram.com'
            />
          </Card>
        </Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt='example'
                src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
              />
            }
          >
            <Meta
              title='Top Three Translators'
              description='www.instagram.com'
            />
          </Card>
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt='example'
                src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
              />
            }
          >
            <Meta
              title='Top Three Translators'
              description='www.instagram.com'
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default TopContent;
