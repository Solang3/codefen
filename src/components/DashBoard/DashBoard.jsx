import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import Iso from '../../assets/images/logo-icon.png';
import Logo from '../../assets/images/logo-text.png';
import UserDetails from '../UserDetails/UserDetails';
import './DashBoard.css';

class DashBoard extends React.Component {
    render() {
        const {
            Header, Content, Footer, Sider,
          } = Layout;

        return (
            <Layout className="dashboard">
            <Sider
              breakpoint="lg"
              collapsedWidth="0"
              onBreakpoint={(broken) => { console.log(broken); }}
            >
              <div className="logo">
                  <img src={Iso} alt="codefen-Logo" className="logo-iso"/>
                  <img src={Logo} alt="codefen-Logo" className="logo-text"/>
              </div>
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="1">
                  <Icon type="user" />
                  <span className="nav-text">DashBoard</span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="video-camera" />
                  <span className="nav-text">Consultorias</span>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="upload" />
                  <span className="nav-text">Capacitaciones</span>
                </Menu.Item>
                <Menu.Item key="4">
                  <Icon type="user" />
                  <span className="nav-text">Agenda</span>
                </Menu.Item>
                <Menu.Item key="5">
                  <Icon type="user" />
                  <span className="nav-text">Cerrar Session</span>
                </Menu.Item>                
              </Menu>
            </Sider>
            <Layout>
              <Header className="header">
                <div className="logo">
                    <img src={Iso} alt="codefen-Logo" className="logo-iso"/>
                </div>
                <UserDetails/>
              </Header>
              <Content>
                <div className="content" style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                  content
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                Footer
              </Footer>
            </Layout>
          </Layout>
        );
    }
}

export default DashBoard;