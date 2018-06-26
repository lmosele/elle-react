import * as React from 'react';

import { FullWidth, Grid, Row, Col } from './components/layout';
import Header from './components/blocks/header';
import TabInterface from './components/blocks/tab-interface';
// import Comments from './comments';
// import SideBar from './side-bar';

// This is where we create the main layout for the view "Page"
export default class Page extends React.Component<any, any> {
  public render() {
    return (
      <>
        <FullWidth>
          <Header/>
        </FullWidth>
        <Grid>
          <Row>
            <Col sm={8}>
              <TabInterface/>
            </Col>
            <Col sm={3}>aside</Col>
          </Row>
        </Grid>
      </>
    );
  }
}
