import React, { useEffect, useState } from 'react';
import { get, post } from '../../../../utils/request';
import { Table } from 'antd';
import { NavLink } from 'react-router-dom';

const TranslatedBooks = () => {
  const [translatedBooks, setTranslatedBooks] = useState([]);
  const [data, setData] = useState(1);
  const state = {
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        width: 200,
      },
      {
        title: 'Current language',
        dataIndex: 'download_loc',
        width: 200,
      },
      {
        title: 'Status',
        dataIndex: 'status_info',
        width: 200,
      },
      {
        title: 'Translator',
        dataIndex: 'translator_name',
        width: 200,
      },
      {
        title: 'Reviewer',
        dataIndex: 'translation_reviewer_name',
        width: 200,
      },
      {
        title: 'Action',
        key: 'action',
        render: (record) => (
          <div>
            <a onClick={() => reject(record)}>Reject</a>
            <a> </a>
            <a onClick={() => pass(record)}> Pass</a>
            <a> </a>
            <a>
              <NavLink to={`/home/translate?${record.id}`}>Review</NavLink>{' '}
            </a>
          </div>
        ),
      },
    ],
  };

  const reject = (value) => {
    post('http://localhost:8080/api/trans/update', {
      id: value.id,
      status_info: 'REJECT',
    });
    setData((data) => data + 1);
  };
  const pass = (value) => {
    post('http://localhost:8080/api/trans/update', {
      id: value.id,
      status_info: 'PASS',
    });
    setData((data) => data + 1);
  };
  useEffect(() => {
    get('http://localhost:8080/api/trans/list').then((res) => {
      if (res.errno === 0) {
        setTranslatedBooks(res.data);
        console.log(res.data);
      }
    });
  }, [data]);
  const columns = state.columns.map((col, index) => ({
    ...col,
    onHeaderCell: (column) => ({
      width: column.width,
    }),
  }));
  return <Table bordered columns={columns} dataSource={translatedBooks} />;
};

export default TranslatedBooks;
