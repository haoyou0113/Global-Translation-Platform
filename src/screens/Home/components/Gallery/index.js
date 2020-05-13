import React, { Component, Fragment, useState, useEffect } from 'react';
import { Card, Row, Col, Modal } from 'antd';
import { Button, Layout, Typography, Pagination } from 'antd';
import { get } from '../../../../utils/request';
import TopContent from '../TopContent';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const pdfurl = require('./20_Busy.pdf');
const { Title } = Typography;
const HomeContent = () => {
  const [visible, setVisible] = useState(false);
  const [data, setDate] = useState([]);
  const [currentImg, setCurrentImg] = useState('');

  const [books, setBooks] = useState([
    'Busy Little.pdf',
    'How The Rooster Found His Sound.pdf',
    'Tahlia The Tortoise Finds An Umbrella.pdf',
  ]);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onpenGallery = (item) => {
    setCurrentImg('/gallery/' + item);
    setVisible(true);
  };
  // useEffect(
  //   () =>
  //     get('http://localhost:8080/api/origin/list').then((res) => {
  //       setDate(res);
  //     }),
  //   []
  // );

  // const imgList = books.map((item) => (
  //   <Col xs={5}>
  //     <Card
  //       cover={
  //         <Document
  //           onClick={() => onpenGallery(item)}
  //           file={`./${item}`}
  //           onLoadSuccess={onDocumentLoadSuccess}
  //         >
  //           <Page pageNumber={pageNumber} />
  //         </Document>
  //       }
  //       style={{ marginBottom: 10 }}
  //     >
  //       <Card.Meta title={'Library for All' + item} description='Love' />
  //     </Card>
  //   </Col>
  // ));
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  const searchingBooks = (value) => {
    // value ? setBooks([value.substr(-5, 5)]) : setBooks(originData);
  };
  const onChangePage = (page) => {
    setPageNumber(page);
  };
  return (
    <Fragment>
      <TopContent searchingBooks={searchingBooks} />
      <Title level={2} style={{ textAlign: 'center' }}>
        Books You Might Want
      </Title>
      <div className='card-wrap'>
        {books.map((item) => (
          <Fragment>
            <Row justify='space-around' align='middle'>
              <Col xs={5}>
                <Card
                  cover={
                    <Fragment>
                      <Document
                        onClick={() => onpenGallery(item)}
                        file={require(`./${item}`)}
                        onLoadSuccess={onDocumentLoadSuccess}
                      >
                        <Page pageNumber={pageNumber} />
                      </Document>
                      {/* <Pagination
                      total={numPages}
                      showTotal={(total) => ` ${total} pages`}
                      current={pageNumber}
                      pageSize={1}
                      size='small'
                      onChange={onChangePage}
                    /> */}
                    </Fragment>
                  }
                  style={{ marginBottom: 10 }}
                >
                  <Card.Meta title={item} description='Love' />
                </Card>
              </Col>
            </Row>
            <Modal
              width={300}
              height={500}
              visible={visible}
              onCancel={() => setVisible(false)}
              footer={null}
              title={item}
            >
              {/* <Document
            file={'./20_Busy.pdf'}
            onLoadSuccess={onDocumentLoadSuccess}
          >
          
          </Document> */}

              <p>Original Language: English</p>
              <p>Target Language: Chinese</p>
              <p>Deadline: 60days</p>
              <Button>Translate</Button>
            </Modal>
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};
export default HomeContent;
