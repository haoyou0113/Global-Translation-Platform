import React, { useEffect, useState } from 'react';
import { get } from '../../../../utils/request';
import { Table } from 'antd';
import { NavLink } from 'react-router-dom';

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
        title: 'Original language',
        dataIndex: 'original_language',
        width: 200,
      },
      {
        title: 'Existing Version',
        dataIndex: 'existing_version',
        width: 200,
      },
      {
        title: 'Translator',
        dataIndex: 'publisher',
        width: 200,
      },
      {
        title: 'Reviewer',
        dataIndex: 'trans_num',
        width: 200,
      },
      {
        title: 'Action',
        key: 'action',
        render: (name) => (
          <div>
            <a>Delete</a>
            <a> </a>
            <a>
              <NavLink to={`/home/translate?${name}`}>Review</NavLink>{' '}
            </a>
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
