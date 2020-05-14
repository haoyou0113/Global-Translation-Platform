import React, { Fragment, useState } from 'react';
import { Typography, Input, Button, Alert } from 'antd';
import { NavLink } from 'react-router-dom';
const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const Translation = (props) => {
  const purpose = props.location.search.substr(1);
  const [status, setStatus] = useState(false);
  const submit = () => {
    alert('Success Submit');
    setStatus(true);
  };
  return (
    <div>
      <Title>Workbench for {purpose}</Title>
      <Title level={2}>Translation</Title>{' '}
      <Paragraph ellipsis={{ rows: 3, expandable: true }}>
        Ant Design, a design language for background applications, is refined by
        Ant UED Team. Ant Design, a design language for background applications,
        is refined by Ant UED Team. Ant Design, a design language for background
        applications, is refined by Ant UED Team. Ant Design, a design language
        for background applications, is refined by Ant UED Team. Ant Design, a
        design language for background applications, is refined by Ant UED Team.
        Ant Design, a design language for background applications, is refined by
        Ant UED Team.
      </Paragraph>
      <TextArea rows={4} />
      <Alert
        style={{ display: status ? 'block' : 'none' }}
        message='Success Text'
        description='Success Description Success Description Success Description'
        type='success'
      />{' '}
      <Button onClick={submit}>
        <NavLink to='/home/main'>Submit </NavLink>
      </Button>
      <Button onClick={submit}>
        <NavLink to='/home/main'>Cancel </NavLink>
      </Button>
    </div>
  );
};

export default Translation;
