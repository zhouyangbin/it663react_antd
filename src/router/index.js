import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '@/utils/asyncComponent';
import 'antd/dist/antd.less';
const Index = asyncComponent(() => import("@/pages/index/index"));
const Production = asyncComponent(() => import("@/pages/production/index"));


// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class RouteConfig extends Component{
  render(){
    return(
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/production" component={Production} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    )
  }
}
