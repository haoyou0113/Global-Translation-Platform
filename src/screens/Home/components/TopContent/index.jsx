import React from 'react';
import { Input } from 'antd';
import './index.css';

const { Search } = Input;
const TopContent = () => {
  return (
    <div>
      <Search
        className='homeSearch'
        placeholder='Search the documents you might be interested'
        enterButton='Search'
        size='large'
        onSearch={(value) => console.log(value)}
      />
    </div>
  );
};
export default TopContent;
