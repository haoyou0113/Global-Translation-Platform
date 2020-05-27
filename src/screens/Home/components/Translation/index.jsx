import React, { Component, useState, useEffect } from 'react';
import { Typography, Input, Button, Alert } from 'antd';
import { NavLink } from 'react-router-dom';
// import { Editor } from 'react-draft-wysiwyg';
// import { EditorState, createWithContent } from 'draft-js';
import { Editor, EditorState, ContentState } from 'draft-js';
import { get, post } from '../../../../utils/request';

import { convertFromRaw } from 'draft-js';
// import '../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'draft-js/dist/Draft.css';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const Translation = (props) => {
  const purpose = props.location.search.substr(1);
  const [status, setStatus] = useState(false);

  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );
  const inforArr = purpose.split('|');

  const content = {
    entityMap: {},
    blocks: [
      {
        key: '637gr',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
  };
  const [contentState, setContentState] = useState();

  // const onContentStateChange = (contentState) => {
  //   setContentState(contentState);
  // };
  useEffect(() => {
    const fetchData = async () => {
      get(`http://localhost:8080/api/trans/content?id=${inforArr[0]}`).then(
        (res) => {
          if (res.errno === 0) {
            if (res.data.trans_content === null) {
              setEditorState(convertFromRaw(content));
            } else {
              console.log(res.data.trans_content);
              var json = new Function('return ' + res.data.trans_content)();
              console.log(json);
              setEditorState(
                EditorState.createWithContent(ContentState.convertFromRaw(json))
              );
            }
          }
        }
      );
    };
    fetchData();
  }, []);
  const editor = React.useRef(null);

  function focusEditor() {
    editor.current.focus();
  }

  React.useEffect(() => {
    focusEditor();
  }, []);

  console.log(editorState);
  const submit = () => {
    alert('Success Submit');
    post(`http://localhost:8080/api/trans/update`, {
      id: inforArr[0],
      trans_content: JSON.stringify(editorState),
    });
    // setStatus(true);
  };
  return (
    <div>
      <Title>Workbench for {purpose}</Title>
      <Title level={2}>Translation</Title>{' '}
      {/* <Editor
          editorState={contentState}
          wrapperClassName='demo-wrapper'
          editorClassName='demo-editor'
          onContentStateChange={onContentStateChange}
        />
        <textarea disabled value={JSON.stringify(contentState, null, 4)} /> */}
      <div onClick={focusEditor}>
        <Editor
          ref={editor}
          editorState={editorState}
          onChange={(editorState) => setEditorState(editorState)}
        />
      </div>
      <Alert
        style={{ display: status ? 'block' : 'none' }}
        message='Success Text'
        description='Success Description Success Description Success Description'
        type='success'
      />{' '}
      <Button onClick={submit}>Submit</Button>
      <Button onClick={submit}></Button>
      <NavLink to='/home/main'>Cancel </NavLink>
    </div>
  );
};

export default Translation;
