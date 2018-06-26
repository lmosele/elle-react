import * as React from 'react';

import styled from 'styled-components';
import { IStyledProps } from '../../../types/theme-types';

import { Route, Switch, Redirect } from 'react-router-dom';
import * as TabView from './tabs';
import { Row, Col } from '../layout';

const NavTab = require('react-router-tabs').NavTab;

const TabsContainer = styled(Row)`
  margin-top: 30px;
`;
const Tab = styled(NavTab)`
  display: block;
  width: 100%;
  text-align: center;
  border: 1px solid black;
  padding: 10px;
`;
const TabColumn = styled(Col)`
  padding: 0;
`;
const TabViewMain = styled(Row)`
  border: 1px solid black;
`;
// render={() => <Redirect from='/' to='/about' />}
export default class TabInterface extends React.Component<any, any> {
  public render() {
    return (
      <>
        <TabsContainer between='sm'>
          <TabColumn sm='4'>
            <Tab to='/about'>About</Tab>
          </TabColumn>
          <TabColumn sm='4'>
            <Tab to='/plan'>Plan</Tab>
          </TabColumn>
          <TabColumn sm='4'>
            <Tab to='/examples'>Examples</Tab>
          </TabColumn>
        </TabsContainer>
        <TabViewMain>
          <Switch>
            <Route exact={true} path='/' />
            <Route path='/about' component={TabView.AboutTab} />
            <Route path='/plan' component={TabView.PlanTab} />
            <Route path='/examples' component={TabView.ExampleTab} />
          </Switch>
        </TabViewMain>
      </>
    );
  }
}
