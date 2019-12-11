import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import Sidernav from '../Sidernav/index';
class Index extends Component {
  static propTypes = {
    
  }
  render() {
    return (
        <Layout>
          <Sider>
            <Sidernav></Sidernav>
          </Sider>
          <Content>
            main content
          </Content>
        </Layout>
    );
  }
}

export default Index;
