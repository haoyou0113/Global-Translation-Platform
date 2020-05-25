import React, { Component, Fragment, useState, useEffect } from 'react';
import {
  Button,
  Layout,
  Typography,
  Pagination,
  Descriptions,
  Badge,
} from 'antd';
import { Document, Page, pdfjs } from 'react-pdf';
import { get } from '../../../../utils/request';
import { NavLink } from 'react-router-dom';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export default function BookDetails(props) {
  const symbol = props.location.search.substr(1);
  console.log(symbol);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [url, setUrl] = useState();
  const [book, setBook] = useState({
    key: 1,
    url: 'Busy Little.pdf',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/51%2BoLSpnLtL._SX351_BO1,204,203,200_.jpg',
    title: 'Busy Little',
    index: 'busy_little',
    originLanguage: 'English',
    expectLanguage: 'Lao',
    deadline: 60,
  });
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  const searchingBooks = (value) => {
    // value ? setBooks([value.substr(-5, 5)]) : setBooks(originData);
  };
  const onChangePage = (page) => {
    setPageNumber(page);
  };
  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }

  function onSearch(val) {
    console.log('search:', val);
  }
  useEffect(() => {
    const fetchData = async () => {
      get(`http://localhost:8080/api/origin/info?id=${symbol}`).then((res) => {
        if (res.errno === 0) {
          setBook(res.data);

          setUrl(require(`./${res.data.name}.pdf`));

          console.log(res.data);
        }
      });
    };
    fetchData();
  }, []);
  return (
    <div>
      <Fragment>
        <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
          <NavLink to={`/home/translate?${book.name}`}>
            <Button
              type='primary'
              style={{
                position: 'absolute',
                right: '30vw',
                top: '30vh',
              }}
            >
              Translate
            </Button>
          </NavLink>
        </Document>
        <Pagination
          total={numPages}
          showTotal={(total) => ` ${total} pages`}
          current={pageNumber}
          pageSize={1}
          size='small'
          onChange={onChangePage}
        />
      </Fragment>
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
