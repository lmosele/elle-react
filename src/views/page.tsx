import * as React from 'react';

import { Grid, Row, Col } from './components/layout';
import Header from './components/blocks/header';
import TabInterface from './components/blocks/tab-interface';
import CommentsContainer from './components/blocks/comments-container';
import SideBar from './components/blocks/sideBar';

// This is where I create the main layout for the view "Page"
export default class Page extends React.Component<any, any> {
  public render() {
    return (
      <>
        <Header/>
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={7} lg={8}>
              <TabInterface/>
              <CommentsContainer/>
            </Col>
            <Col xs={12} sm={12} md={5} lg={4}>
              <SideBar />
            </Col>
          </Row>
        </Grid>
        <div id='modal-root' />
      </>
    );
  }
}
