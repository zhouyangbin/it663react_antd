import React, { Component, } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './index.less';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Sidernav extends React.Component {
  state = {
    collapsed: false,
  };
  componentWillMount(){

  };
  componentDidMount(){
    console.log(123)
  };
  componentWillUnmount (){};

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider className="sider_nav">
          <Menu className="sider_nav_menu" theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item className="sider_nav_menu_item" key="12">
              <Icon type="desktop" />
              <span><a href="/">index</a></span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span><a href="#/production">production</a></span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">3</Menu.Item>
              <Menu.Item key="4">4</Menu.Item>
              <Menu.Item key="5">5</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>5</span>
                </span>
              }
            >
              <Menu.Item key="6">6</Menu.Item>
              <Menu.Item key="8">7</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
      </Layout>
    );
  }
}

export default Sidernav;
