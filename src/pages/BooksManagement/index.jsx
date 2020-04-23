import { Table } from 'antd';
import { Resizable } from 'react-resizable';
import React from 'react';

const ResizeableTitle = (props) => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      handle={(resizeHandle) => (
        <span
          className={`react-resizable-handle react-resizable-handle-${resizeHandle}`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      )}
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};

class BooksManagement extends React.Component {
  state = {
    columns: [
      {
        title: 'Date',
        dataIndex: 'date',
        width: 200,
      },
      {
        title: 'Amount',
        dataIndex: 'amount',
        width: 100,
        sorter: (a, b) => a.amount - b.amount,
      },
      {
        title: 'Type',
        dataIndex: 'type',
        width: 100,
      },
      {
        title: 'Note',
        dataIndex: 'note',
        width: 100,
      },
      {
        title: 'Book-Title',
        dataIndex: 'bookstitle',
        width: 200,
      },
      {
        title: 'Action',
        key: 'action',
        render: () => (
          <div>
            <a>Delete</a>
            <a href=''> </a>
            <a>Publish</a>
          </div>
        ),
      },
    ],
  };

  components = {
    header: {
      cell: ResizeableTitle,
    },
  };

  data = [
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

  handleResize = (index) => (e, { size }) => {
    this.setState(({ columns }) => {
      const nextColumns = [...columns];
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width,
      };
      return { columns: nextColumns };
    });
  };

  render() {
    const columns = this.state.columns.map((col, index) => ({
      ...col,
      onHeaderCell: (column) => ({
        width: column.width,
        onResize: this.handleResize(index),
      }),
    }));

    return (
      <Table
        bordered
        components={this.components}
        columns={columns}
        dataSource={this.data}
      />
    );
  }
}

export default BooksManagement;
