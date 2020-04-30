import React, { useEffect, useState } from 'react';
import { get } from '../../../../utils/request';
import { Table } from 'antd';

const TranslatedBooks = () => {
  const [translatedBooks, setTranslatedBooks] = useState([]);

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
  useEffect(() => {
    get('http://localhost:8080/api/trans/list').then((res) => {
      if (res.errno === 0) {
        setTranslatedBooks(res.data);
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
  return <Table bordered columns={columns} dataSource={translatedBooks} />;
};

export default TranslatedBooks;
