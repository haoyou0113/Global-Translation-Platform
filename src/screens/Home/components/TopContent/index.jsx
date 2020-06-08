import React, { useState, useEffect } from 'react';
import { Table, Avatar } from 'antd';
import { get } from '../../../../utils/request';
import './index.css';
import { Typography } from 'antd';

const { Title } = Typography;
const TopContent = (props) => {
  console.log(props);
  const [data, setData] = useState([]);
  const [bookNum, setBookNum] = useState(0);

  const columns = [
    {
      title: 'Rank',
      dataIndex: 'rank',
      key: 'rank',
      width: '5vw',
      align: 'center',
    },
    {
      title: ' ',
      dataIndex: 'img',
      key: 'img',
      render: (img) => <Avatar src={img} />,
      width: '2vw',
      align: 'center',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '5vw',
      align: 'center',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: '7vw',
      align: 'center',
    },
    {
      title: 'Rewards Point',
      dataIndex: 'rewardsPoint',
      key: 'rewardsPoint',
      width: '7vw',
      align: 'center',
    },
    {
      title: 'Number of translation',
      dataIndex: 'numTrans',
      key: 'numTrans',
      width: '7vw',
      align: 'center',
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      get('http://localhost:8080/api/user/topN').then((res) => {
        if (res.errno === 0) {
          console.log(res.data);
          const result = res.data.map((item) => ({
            rank: res.data.indexOf(item),
            key: item.id,
            img: item.image,
            name: item.firstname,
            title: item.address,
            numTrans: item.translation_num,
            rewardsPoint: item.experience,
          }));
          result.splice(0, 1);
          setData(result);
          console.log(result);
        }
      });
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      get('http://localhost:8080/api/origin/list').then((res) => {
        if (res.errno === 0) {
          setBookNum(res.data.length);
        }
      });
    };
    fetchData();
  }, []);

  return (
    <div className='topContent'>
      <Title className='titleH1'>
        We have <b>{bookNum}</b> books and <b>{data.length}</b> staffs working
        for the Library for All
      </Title>

      <div>
        <Title
          style={{
            width: '40vw',
            position: 'absolute',
            right: 0,
            top: 170,
            color: '#fff',
            'font-weight': 'bold',
          }}
        >
          Translators LeaderBoard
        </Title>
        <Table
          columns={columns}
          dataSource={data}
          scroll={{ y: 240 }}
          pagination={false}
          className='leadBoard'
        />
      </div>
    </div>
  );
};
export default TopContent;
