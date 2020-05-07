import React, { Fragment } from 'react';
import { Card, Avatar, Col, Row } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import './index.css';
const { Meta } = Card;
export default function UserInfor() {
  return (
    <div className='userInfor'>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt='example'
            src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
          />
        }
        actions={[
          <SettingOutlined key='setting' />,
          <EditOutlined key='edit' />,
          <EllipsisOutlined key='ellipsis' />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
          }
          title='a2'
          description='Junior Translator'
        />
      </Card>
      <div className='site-card-wrapper'>
        <Row gutter={16}>
          <Col span={8}>
            <Card title='Current Awards Points' bordered={false}>
              99
            </Card>
          </Col>
          <Col span={8}>
            <Card title='Translations Completed' bordered={false}>
              15
            </Card>
          </Col>
          <Col span={8}>
            <Card title='Books Translating' bordered={false}>
              1
            </Card>
          </Col>
        </Row>
      </div>
      ,
    </div>
  );
}
