import * as React from 'react';

import styled from 'styled-components';
import { Row, Col } from '../layout';

const TabContent = styled(Row)`
  height: 300px;
  width: 100%;
`;

export const AboutTab = ({ }) => (
  <TabContent>
    <Col sm={8}>lorem</Col>
    <Col sm={4}>foo</Col>
  </TabContent>
);
export const PlanTab = ({ }) => (
  <TabContent>
    <Col sm={12}>activities</Col>
  </TabContent>
);
export const ExampleTab = ({ }) => (
  <TabContent>
    <Col sm={12}>examples</Col>
  </TabContent>
);

const TabViewWrapper = styled(Row)`
  border: 1px solid black;
`;

export default class TabViewContainer extends React.Component<any, any> {
  public render() {
    return (
      <TabViewWrapper>
        {this.props.children}
      </TabViewWrapper>
    );
  }
}
