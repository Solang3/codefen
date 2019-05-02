import React from 'react';
import Authenticate from '../Authenticate/Authenticate';
import { Layout } from 'antd';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Layout className="codefen-app">
        <Authenticate />
      </Layout>
    )
  }
}

export default App; 