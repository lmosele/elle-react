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

export interface IShareProps {
  shares: number;
}

export class ShareWidget extends React.Component<IShareProps, {}> {
  public render() {
    return (
      <ShareContainer>
        <Ratings/>
        <ShareWidgetWrapper>
          <Col sm={4}>
            <ActionButtonContainer>
              <Button>Save</Button><ButtonWindow>{0}</ButtonWindow>
            </ActionButtonContainer>
          </Col>
          <Col sm={4}>
            <ActionButtonContainer>
              <Button>Share</Button><ButtonWindow>{this.props.shares}</ButtonWindow>
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
