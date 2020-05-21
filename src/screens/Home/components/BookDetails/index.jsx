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
import { NavLink } from 'react-router-dom';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export default function BookDetails() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [books, setBooks] = useState([
    {
      key: 1,
      url: 'Busy Little.pdf',
      img:
        'https://images-na.ssl-images-amazon.com/images/I/51%2BoLSpnLtL._SX351_BO1,204,203,200_.jpg',
      title: 'Busy Little',
      index: 'busy_little',
      originLanguage: 'English',
      expectLanguage: 'Lao',
      deadline: 60,
    },
    {
      key: 2,
      url: 'How The Rooster Found His Sound.pdf',
      img: 'https://images-na.ssl-images-amazon.com/images/I/61rEBeU6uML.jpg',
      title: 'How The Rooster Found His Sound',
      index: 'how_the_rooster_found_his_sound',
      originLanguage: 'English',
      expectLanguage: 'Lao',
      deadline: 60,
    },
    {
      key: 3,
      url: 'Tahlia The Tortoise Finds An Umbrella.pdf',
      img:
        'https://www.booktopia.com.au/http_coversbooktopiacomau/big/9781925863963/4938/tahlia-the-tortoise-finds-an-umbrella.jpg',
      title: 'Tahlia The Tortoise Finds An Umbrella',
      index: 'tahli_the_tortoise_finds_an_umbrella',
      originLanguage: 'English',
      expectLanguage: 'Lao',
      deadline: 60,
    },
  ]);
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

  return (
    <div>
      <Fragment>
        <Document
          file={require(`./Busy Little.pdf`)}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
          <NavLink to={`/home/translate?BusyLittle`}>
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
        <Descriptions.Item label='LFA ID'>1</Descriptions.Item>
        <Descriptions.Item label='Book Title'>Busy Little</Descriptions.Item>
        <Descriptions.Item label='Book Type'>Fiction</Descriptions.Item>
        <Descriptions.Item label='Original Language'>English</Descriptions.Item>
        <Descriptions.Item label='Target Language'>Laos</Descriptions.Item>
        <Descriptions.Item label='Author Name'>Kimberly Pa</Descriptions.Item>
        <Descriptions.Item label='Content Pill'>ES</Descriptions.Item>
        <Descriptions.Item label='Release Time'>
          2020-04-24 18:00:00
        </Descriptions.Item>
        <Descriptions.Item label='Due Time' span={2}>
          2020-07-24 18:00:00
        </Descriptions.Item>
        <Descriptions.Item label='Status' span={3}>
          <Badge status='processing' text='Running' />
        </Descriptions.Item>
        <Descriptions.Item label='Count of A4'>22</Descriptions.Item>

        <Descriptions.Item label='Keywords'>
          dog; size; animal; activities
          <br />
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}
