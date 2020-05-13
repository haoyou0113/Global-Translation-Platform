import React from 'react';

import './App.css';

export const App = (props) => {
  // const { site } = useContext(ConfigurationContext);
  return <div> {props.children}</div>;
};

export default App;
