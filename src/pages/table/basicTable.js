import React, { Component } from 'react';
import { Card, Table } from 'antd';
import axios from './../../axios/index';
import Utils from './../../utils/utils';

export default class BasicTable extends Component {
  state = { dataSource: [] };
  componentDidMount() {
    const dataSource = [
      {
        id: '0',
        userName: 'Leon',
        sex: 'male',
        state: '1',
        habit: 'Soccer',
        birthday: '7-8-1992',
        address: '60 roma St',
        weakUpTime: '9am'
      },
      {
        id: '1',
        userName: 'Tom',
        sex: 'male',
        state: '1',
        habit: 'Soccer',
        birthday: '7-8-1992',
        address: '60 roma St',
        weakUpTime: '9am'
      },
      {
        id: '2',
        userName: 'Loveive',
        sex: 'male',
        state: '1',
        habit: 'Soccer',
        birthday: '7-8-1992',
        address: '60 roma St',
        weakUpTime: '9am'
      }
    ];
    this.setState({
      dataSource
    });
    this.request();
  }
  request = () => {
    let _this = this;
    axios
      .ajax({
        url: '/table/list',
        data: {
          // params: {
          //   page: this.params.page
          // }
        }
      })
      .then(res => {
        if (res.code == 0) {
          res.result.list.map((item, index) => {
            item.key = index;
          });
          this.setState({
            dataSource2: res.result.list,
            selectedRowKeys: [],
            selectedRows: null,
            pagination: Utils.pagination(res, current => {
              _this.params.page = current;
              this.request();
            })
          });
        }
      });
  };
  render() {
    const columns = [
      { title: 'id', dataIndex: 'id' },
      { title: 'UserName', dataIndex: 'userName' },
      {
        title: 'Gender',
        dataIndex: 'sex',
        render(sex) {
          return sex == 1 ? 'Male' : 'Female';
        }
      },
      {
        title: 'State',
        dataIndex: 'state',
        render(state) {
          let config = { '1': 'A', '2': 'B', '3': 'C', '4': 'D', '5': 'E' };
          return config[state];
        }
      },
      { title: 'Habit', dataIndex: 'habit' },
      { title: 'Birthday', dataIndex: 'birthday' },
      { title: 'Address', dataIndex: 'address' },
      { title: 'WeakUpTime', dataIndex: 'weakUpTime' }
    ];
    return (
      <div>
        <Card title='BasicTable'>
          <Table
            columns={columns}
            dataSource={this.state.dataSource}
            bordered
            pagination={false}
          ></Table>
        </Card>
        <Card title='DynamicTable' style={{ margin: '10px 0' }}>
          <Table
            columns={columns}
            dataSource={this.state.dataSource2}
            bordered
            pagination={false}
          ></Table>
        </Card>
      </div>
    );
  }
}
