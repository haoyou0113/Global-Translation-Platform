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
    },
    {
      title: ' ',
      dataIndex: 'img',
      key: 'img',
      render: (img) => <Avatar src={img} />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Rewards Point',
      dataIndex: 'rewardsPoint',
      key: 'rewardsPoint',
    },
    {
      title: 'Number of translation',
      dataIndex: 'numTrans',
      key: 'numTrans',
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
