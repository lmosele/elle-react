import * as React from 'react';
import styled from 'styled-components';

// import Header from './header';
// import TabInterface from './tab-interface';
// import Comments from './comments';
// import SideBar from './side-bar';

const Layout = require('react-styled-flexboxgrid');

const Grid: any = Layout.Grid;
const Row: any = Layout.Row;
const Col: any = Layout.Col;

const FullWidth: any = styled(Grid)`
  width: 100%;
`;

// This is where we create the main layout for the view "Page"
export default class Page extends React.Component<any, any> {
  public render() {
    return (
      <>
        <FullWidth>Header</FullWidth>
        <Grid>
          <Row>
            <Col sm={8}>main</Col>
            <Col sm={3}>aside</Col>
          </Row>
        </Grid>
      </>
    );
  }
}
