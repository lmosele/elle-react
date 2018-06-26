import * as React from 'react';

import styled from 'styled-components';
import { IStyledProps } from '../../../types/theme-types';
import { Row, Col } from '../layout';

const ShareContainer = styled.div`
  max-width: 360px;
`;
const RatingsWrapper = styled(Row)``;
const ShareWidgetWrapper = styled(Row)``;
const ActionButton = styled.button`
  border-radius: 4px;
  background-color: lightblue;
`;

export default class ShareWidget extends React.Component<any, any> {
  public render() {
    return (
      <ShareContainer>
        <RatingsWrapper>*****</RatingsWrapper>
        <ShareWidgetWrapper>
          <Col sm={4}>
            <ActionButton>Save</ActionButton>
          </Col>
          <Col sm={4}>
            <ActionButton>Share</ActionButton>
          </Col>
          <Col sm={4}>
            <ActionButton>Comment</ActionButton>
          </Col>
        </ShareWidgetWrapper>
      </ShareContainer>
    );
  }
}
