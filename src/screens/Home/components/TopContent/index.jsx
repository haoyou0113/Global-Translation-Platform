import React, { useState, useEffect } from 'react';
import { Row, Table, Avatar } from 'antd';
import { get } from '../../../../utils/request';
import './index.css';

const TopContent = (props) => {
  const [data, setData] = useState([]);

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
            rank: res.data.indexOf(item) + 1,
            key: item.id,
            img: item.image,
            name: item.firstname,
            title: item.title,
            numTrans: item.translation_num,
            rewardsPoint: item.experience,
          }));
          setData(result);
          console.log(result);
        }
      });
    };
    fetchData();
  }, []);
  return (
    <div className='topContent'>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ y: 240 }}
        pagination={false}
        className='leadBoard'
      />
    </div>
  );
};
export default TopContent;
