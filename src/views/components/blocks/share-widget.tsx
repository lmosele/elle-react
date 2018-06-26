import * as React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import { IStyledProps } from '../../../types/theme-types';
import { Row, Col } from '../layout';
import Ratings from '../elements/ratings';

const get = require('lodash/get');

const ShareContainer = styled.div`
  max-width: 360px;
  margin-top: 100px;
`;
const ShareWidgetWrapper = styled(Row)`
  margin-top: 15px;
`;

const Button = styled.button`
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0px;
  background-color: lightblue;
  border: 2px solid lightblue;
  height: 30px;
  padding: 5px;
`;

const ButtonWindow = styled.span`
  display: inline-block;
  border-radius: 0;
  border: 2px solid lightblue;
  height: 30px;
  padding: 5px;
`;

const ActionButtonContainer = styled.div`
  &:hover {
    > ${Button},
    > ${ButtonWindow} {
      cursor: pointer;
      border-color: lightgray;
      background-color: lightgray;
    }
  }
`;

export interface IShareState {
  shares: number;
  saves: number;
}

export class ShareWidget extends React.Component<any, IShareState> {
  constructor(props: any) {
    super(props);
    this.state = {
      shares: 0,
      saves: 0,
    };
  }

  public handleShareClick = (evt: any) => {
    this.setState({ shares: this.state.shares + 1 });
  }
  public handleSaveClick = (evt: any) => {
    this.setState({ saves: this.state.saves + 1 });
  }

  public render() {
    return (
      <ShareContainer>
        <Ratings/>
        <ShareWidgetWrapper>
          <Col sm={4}>
            <ActionButtonContainer>
              <Button onClick={this.handleSaveClick}>Save</Button><ButtonWindow>{this.state.saves}</ButtonWindow>
            </ActionButtonContainer>
          </Col>
          <Col sm={4}>
            <ActionButtonContainer>
              <Button onClick={this.handleShareClick}>Share</Button><ButtonWindow>{this.state.shares}</ButtonWindow>
            </ActionButtonContainer>
          </Col>
          <Col sm={4}>
            <ActionButtonContainer>
              <Button>Comment</Button><ButtonWindow>{0}</ButtonWindow>
            </ActionButtonContainer>
          </Col>
        </ShareWidgetWrapper>
      </ShareContainer>
    );
  }
}

const mapStateToProps = (state: any) => ({
  shares: get(state, 'pageState.shares'),
});

const mapDispatchToProps = {
  // requestHasProducts: ,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShareWidget);
