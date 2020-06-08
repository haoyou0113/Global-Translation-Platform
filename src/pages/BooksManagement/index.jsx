import { Card } from 'antd';
import React, { Fragment } from 'react';
import OriginalBooks from './components/OriginalBooks';
import TranslatedBooks from './components/TranslatedBooks';
const BooksManagement = () => {
  return (
    <Fragment>
      <Card title='Original Books'>
        <OriginalBooks />
      </Card>
      <Card title='Translated Books'>
        <TranslatedBooks />
      </Card>
    </Fragment>
  );
};

export default BooksManagement;
