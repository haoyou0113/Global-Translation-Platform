import React, { Fragment, useState, useEffect } from 'react';
import {
  Button,
  Select,
  Pagination,
  Descriptions,
  Badge,
  Input,
  Form,
} from 'antd';
import { Document, Page, pdfjs } from 'react-pdf';
import { get } from '../../../../utils/request';
import pdf1 from './20 Busy Little Ants.pdf';
import pdf2 from './How The Rooster Found His Sound.pdf';
import pdf3 from './Tahlia The Tortoise Finds An Umbrella.pdf';
import { NavLink } from 'react-router-dom';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const ReactPDF = require('react-pdf');
const { Option } = Select;
export default function BookDetails(props) {
  const symbol = props.location.search.substr(1);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [oriList, setOriList] = useState([]);
  const [tarList, setTarList] = useState([]);
  const [ori, setOri] = useState('');
  const [tar, setTar] = useState('');
  const [url, setUrl] = useState();
  const [book, setBook] = useState({});

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const onChangePage = (page) => {
    setPageNumber(page);
  };

  useEffect(() => {
    const fetchData = async () => {
      get(`http://localhost:8080/api/origin/info?id=${symbol}`).then((res) => {
        if (res.errno === 0) {
          setBook(res.data);
          setOriList(res.data.language.split(','));
          setTarList(res.data.target_language.split(','));
          if (res.data.name == 'How The Rooster Found His Sound') {
            setUrl(pdf2);
          } else if (res.data.name == '20 Busy Little Ants') {
            setUrl(pdf1);
          } else {
            setUrl(pdf3);
          } 

          console.log(res.data);
        }
      }); 
    };
  

    fetchData();
  }, []);

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const target = (value) => {
    setTar(value);
  };
  const origin = (value) => {
    setOri(value);
  };

  return (
    <div style={{ height: '83vh' }}>
      <Fragment>
        <ReactPDF.Document
         file={url} 
         onLoadSuccess={onDocumentLoadSuccess}>
          <ReactPDF.Page pageNumber={pageNumber} />
        </ReactPDF.Document>
        <Pagination
          total={numPages}
          showTotal={(total) => ` ${total} pages`}
          current={pageNumber}
          pageSize={1}
          size='small'
          onChange={onChangePage}
     />
      </Fragment>
     
      <div>
        <Form
          name='complex-form'
          onFinish={onFinish}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item label='Language'>
            <Input.Group compact>
              <Form.Item
                name={'originalLanguage'}
                noStyle
                rules={[
                  {
                    required: true,
                    message: 'Original Language is required',
                  },
                ]}
              >
                <Select
                  placeholder='Select Original Language'
                  onChange={origin}
                >
                  {oriList.map((item) => (
                    <Option value={item}>{item}</Option>
                  ))}
                </Select>
              </Form.Item>
              --
              <Form.Item
                name={'targetLanguage'}
                noStyle
                rules={[
                  {
                    required: true,
                    message: 'Target Language is required',
                  },
                ]}
              >
                <Select placeholder='Select Target Language' onChange={target}>
                  {tarList.map((item) => (
                    <Option value={item}>{item}</Option>
                  ))}
                </Select>
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item label=' ' colon={false}>
            <NavLink to={`/home/translate?${book.id}|${ori}|${tar}`}>
              <Button type='primary' style={{}}>
                Translate
              </Button>
            </NavLink>
          </Form.Item>
        </Form>
      </div>
      <Descriptions title='Book Info' bordered>
        <Descriptions.Item label='LFA ID'>{book.id}</Descriptions.Item>
        <Descriptions.Item label='Book Title'>{book.name}</Descriptions.Item>
        <Descriptions.Item label='Book Type'>{book.type}</Descriptions.Item>
        <Descriptions.Item label='Original Language'>
          {book.language}
        </Descriptions.Item>
        <Descriptions.Item label='Target Language'>
          {book.target_language}
        </Descriptions.Item>
        <Descriptions.Item label='Author Name'>{book.author}</Descriptions.Item>
        <Descriptions.Item label='Content Pill'>
          {book.content_pill}
        </Descriptions.Item>
        <Descriptions.Item label='Release Time'>
          {book.realease_time}
        </Descriptions.Item>
        <Descriptions.Item label='Due Time' span={2}>
          {book.due_time}
        </Descriptions.Item>
        <Descriptions.Item label='Status' span={3}>
          <Badge status='processing' text='Translating' />
        </Descriptions.Item>
        <Descriptions.Item label='Count of A4'>
          {book.page_count}
        </Descriptions.Item>
        <Descriptions.Item label='Rewards Point'>
          {book.reward_points}
        </Descriptions.Item>

        <Descriptions.Item label='Keywords'>
          {book.keywords}
          <br />
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}
