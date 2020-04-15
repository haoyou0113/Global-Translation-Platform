// import JsonP from 'jsonp';
import axios from 'axios';
import { Modal } from 'antd';
import Utils from './../utils/utils';
export default class Axios {
  static requestList(_this, url, params, isMock) {
    var data = {
      params: params,
      isMock,
    };
    this.ajax({
      url,
      data,
    }).then((data) => {
      if (data && data.result) {
        let list = data.result.item_list.map((item, index) => {
          item.key = index;
          return item;
        });
        _this.setState({
          list,
          pagination: Utils.pagination(data, (current) => {
            _this.params.page = current;
            _this.requestList();
          }),
        });
      }
    });
  }
  static ajax(options) {
    let loading;
    if (options.data && options.data.isShowLoading !== false) {
      // 设置是都需要显示加载
      loading = document.getElementById('ajaxLoading');
      // loading.style.display = 'block';
      // loading ani
    }
    let baseUrl =
      'https://www.easy-mock.com/mock/5d9af9f2896b9432186c1f55/mockapi';
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: 'get',
        baseURL: baseUrl,
        timeout: 5000,
        params: (options.data && options.data.params) || '',
      }).then((response) => {
        if (options.data && options.data.isShowLoading !== false) {
          loading = document.getElementById('ajaxLoading');
          loading.style.display = 'none';
          // 加载成功后关闭 loading
        }
        if (response.status == '200') {
          let res = response.data;
          if (res.code == '0') {
            resolve(res);
          } else {
            Modal.info({
              title: '提示',
              content: res.msg,
            });
          }
        } else {
          reject(response.data);
        }
      });
    });
  }
}
