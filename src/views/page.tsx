import * as React from 'react';

// import Header from './header';
// import TabInterface from './tab-interface';
// import Comments from './comments';
// import SideBar from './side-bar';

const Grid = require('react-styled-flexboxgrid').Grid;

export default class Page extends React.Component<any, any> {
  public render() {
    return (
      <>
        <Grid>
          {this.props.children}
        </Grid>
      </>
    );
  }
}
