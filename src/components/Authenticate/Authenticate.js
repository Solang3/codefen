import React, { Component } from "react";
import { Card, Tabs } from 'antd';
import LogIn from './LogIn';
import SignUp from './SignUp';
import './Authenticate.css';

const TabPane = Tabs.TabPane;

class Authenticate extends Component {
render() {
  return (
  <Card className="auth-card">
    <header>
      <div className="codefen-logo">codefen</div>
      <div className="layout-space"></div>
    </header>
    <Tabs defaultActiveKey="1" tabPosition="left">
        <TabPane tab="log in" key="1"><LogIn/></TabPane>
        <TabPane tab="sign up" key="2"><SignUp/></TabPane>
    </Tabs>
  </Card>
  
    );
  }
}

export default Authenticate;