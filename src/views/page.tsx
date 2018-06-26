import * as React from 'react';

import { FullWidth, Grid, Row, Col } from './components/layout';
import Header from './components/blocks/header';
import TabInterface from './components/blocks/tab-interface';
import CommentsContainer from './components/blocks/comments-container';

// import SideBar from './side-bar';

// This is where we create the main layout for the view "Page"
export default class Page extends React.Component<any, any> {
  public render() {
    return (
      <>
        <Header/>
        <Grid>
          <Row>
            <Col sm={8}>
              <TabInterface/>
              <CommentsContainer/>
            </Col>
            <Col sm={3}>aside</Col>
          </Row>
        </Grid>
      </>
    );
  }
}
