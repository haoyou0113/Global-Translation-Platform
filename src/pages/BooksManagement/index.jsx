import { Table } from 'antd';
import { Resizable } from 'react-resizable';
import React, { useEffect, useState } from 'react';
import { get } from '../../utils/request';
const BooksManagement = () => {
  const [originBooks, setOriginBooks] = useState([]);
  const state = {
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        width: 200,
      },
      {
        title: 'Author',
        dataIndex: 'author',
        width: 100,
      },
      {
        title: 'Category',
        dataIndex: 'category',
        width: 100,
      },
      {
        title: 'Publisher',
        dataIndex: 'publisher',
        width: 100,
      },
      {
        title: 'Translation Number',
        dataIndex: 'trans_num',
        width: 200,
      },
      {
        title: 'Action',
        key: 'action',
        render: () => (
          <div>
            <a>Delete</a>
            <a> </a>
            <a>Publish</a>
            <a> </a>
            <a>Review</a>
          </div>
        ),
      },
    ],
  };

  const data = [
    {
      key: 0,
      date: '2018-02-11',
      amount: 120,
      type: 'Story',
      bookstitle: 'datouerzi xiaotoubaba',
      note: 'Translated',
    },
    {
      key: 1,
      date: '2018-03-11',
      amount: 243,
      type: 'Story',
      bookstitle: 'datouerzi xiaotoubaba',
      note: 'Translating',
    },
    {
      key: 2,
      date: '2018-04-11',
      amount: 98,
      type: 'Story',
      bookstitle: 'datouerzi xiaotoubaba',
      note: 'Origin',
    },
  ];

  useEffect(() => {
    get('http://localhost:8080/api/origin/list').then((res) => {
      if (res.errno === 0) {
        setOriginBooks(res.data);
        console.log(res.data);
      }
    });
  }, []);

  const columns = state.columns.map((col, index) => ({
    ...col,
    onHeaderCell: (column) => ({
      width: column.width,
    }),
  }));

  return <Table bordered columns={columns} dataSource={originBooks} />;
};

export default BooksManagement;
