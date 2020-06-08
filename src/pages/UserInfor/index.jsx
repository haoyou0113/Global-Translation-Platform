import React, { useEffect, useState } from 'react';
import { Card, Avatar, Col, Row } from 'antd';
import { get } from '../../utils/request';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import './index.css';
const { Meta } = Card;
export default function UserInfor(props) {
  const [userInfo, setUserInfo] = useState({});
  const id = props.location.search.substr(1);
  console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      get(`http://localhost:8080/api/user/topN`).then((res) => {
        if (res.errno === 0) {
          console.log(res.data);
          const result = res.data.filter((item) => item.id === id);
          console.log(result);
          setUserInfo(result[0]);
        }
      });
    };
    fetchData();
  }, []);
  console.log(userInfo);
  return (
    <div className='userInfor'>
      <Card
        style={{ width: 300 }}
        cover={<img alt='example' src={userInfo.image} />}
        actions={[
          <SettingOutlined key='setting' />,
          <EditOutlined key='edit' />,
          <EllipsisOutlined key='ellipsis' />,
        ]}
      >
        <Meta
          avatar={<Avatar src={userInfo.image} />}
          title={userInfo.title}
          description={userInfo.rolename}
        />
      </Card>
      <div className='site-card-wrapper'>
        <Row gutter={16}>
          <Col span={8}>
            <Card title='Current Awards Points' bordered={false}>
              {userInfo.experience}
            </Card>
          </Col>
          <Col span={8}>
            <Card title='Translations Completed' bordered={false}>
              {userInfo.translation_num}
            </Card>
          </Col>
          <Col span={8}>
            <Card title='email' bordered={false}>
              {userInfo.email}
            </Card>
          </Col>
        </Row>
      </div>
      ,
    </div>
  );
}
