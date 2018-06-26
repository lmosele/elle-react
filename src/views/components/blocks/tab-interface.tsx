import * as React from 'react';

import styled from 'styled-components';

import { Route, Switch, Redirect } from 'react-router-dom';
import TabViewContainer, { AboutTab, ExampleTab, PlanTab } from './tabs';
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
  text-decoration: none;
  &:hover {
    background-color: lightgray;
  }
`;
const TabColumn = styled(Col)`
  padding: 0;
`;

// render={() => <Redirect from='/' to='/about' />}
export default class TabInterface extends React.Component<any, any> {
  public render() {
    return (
      <>
        <TabsContainer between='sm'>
          <TabColumn sm={4}>
            <Tab to='/about'>About</Tab>
          </TabColumn>
          <TabColumn sm={4}>
            <Tab to='/plan'>Activity Plan</Tab>
          </TabColumn>
          <TabColumn sm={4}>
            <Tab to='/examples'>Examples</Tab>
          </TabColumn>
        </TabsContainer>
        <TabViewContainer>
          <Switch>
            <Route exact={true} path='/' />
            <Route path='/about' component={AboutTab} />
            <Route path='/plan' component={PlanTab} />
            <Route path='/examples' component={ExampleTab} />
          </Switch>
        </TabViewContainer>
      </>
    );
  }
}
