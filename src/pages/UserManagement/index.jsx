import './index.less';
import React, { useState, useEffect } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Card } from 'antd';
import { get, post } from '../../utils/request';
const originData = [];

for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: `Translator ${i}`,
    age: 25 + i,
    address: `${i}`,
    books_translating: `${i}`,
  });
}

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const UsersManagement = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const [fre, setFre] = useState(1);

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      width: '5%',
      editable: true,
    },
    {
      title: 'name',
      dataIndex: 'firstname',
      width: '25%',
      editable: true,
    },
    {
      title: 'Title',
      dataIndex: 'address',
      width: '25%',
      editable: true,
    },
    {
      title: 'Award Points',
      dataIndex: 'experience',
      width: '15%',
      editable: true,
    },
    {
      title: 'Translations Completed',
      dataIndex: 'translation_num',
      width: '20%',
      editable: true,
    },
    {
      title: 'Email ',
      dataIndex: 'email',
      width: '20%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (text, record, index) => {
        return (
          <div>
            <a> </a>
            <a onClick={() => pro(record)}>Promote</a>
            <a> </a>
            <a onClick={() => de(record)}>Demote</a>
          </div>
        );
      },
    },
  ];

  const pro = (record) => {
    console.log(record);
    post('http://localhost:8080/api/user/update', {
      username: record.username,
      address: 'Advanced translator',
    });
    setFre((fre) => fre + 1);
  };
  const de = (record) => {
    console.log(record);
    post('http://localhost:8080/api/user/update', {
      username: record.username,
      address: 'Junior translator',
    });
    setFre((fre) => fre + 1);
  };
  useEffect(() => {
    const fetchData = async () => {
      get('http://localhost:8080/api/user/topN').then((res) => {
        if (res.errno === 0) {
          setData(res.data);
        }
      });
    };
    fetchData();
  }, [fre]);
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Card title=' Translators' bordered={false}>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName='editable-row'
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
    </Card>
  );
};

export default UsersManagement;
