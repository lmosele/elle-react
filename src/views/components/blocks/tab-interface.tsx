import * as React from 'react';

import styled from 'styled-components';
import { IStyledProps } from '../../../types/theme-types';

import { Route, Switch, Redirect } from 'react-router-dom';

const NavTab = require('react-router-tabs').NavTab;

const Tabs = styled.div`
`;

const AboutTab = ({}) => (
  <div>
    about
  </div>
);
const PlanTab = ({}) => (
  <div>
    plans
  </div>
);
const ExampleTab = ({}) => (
  <div>
    examples
  </div>
);

export default class TabInterface extends React.Component<any, any> {
  public render() {
    return (
      <Tabs>
        <NavTab to='/about'>About</NavTab>
        <NavTab to='/plan'>Plan</NavTab>
        <NavTab to='/examples'>Examples</NavTab>

        <Switch>
          <Route exact={true} path='/' render={() => <Redirect from='/' to='/about' />} />
          <Route path='/about' component={AboutTab} />
          <Route path='/plan' component={PlanTab} />
          <Route path='/examples' component={ExampleTab} />
        </Switch>
      </Tabs>
    );
  }
}
