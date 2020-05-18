import React, { Component } from 'react';
import './index.less';

import {FacebookOutlined,InstagramOutlined, TwitterOutlined,YoutubeOutlined,LinkedinOutlined} from '@ant-design/icons';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className='footer'> CopyRight made by QUT Team 72 @2020       
     <FacebookOutlined style={{ marginLeft: '15px',padding: '3px',  fontSize: '20px', color: '#08c' }}/>
     <InstagramOutlined style={{ padding: '3px',fontSize: '20px', color: '#08c' }}/>
     <TwitterOutlined style={{ padding: '3px',fontSize: '20px', color: '#08c' }}/>
     <YoutubeOutlined style={{ padding: '3px',fontSize: '20px', color: '#08c' }}/>
     <LinkedinOutlined style={{ padding: '3px',fontSize: '20px', color: '#08c' }}/>
     </div>
  }
}
