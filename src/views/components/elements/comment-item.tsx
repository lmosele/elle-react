import * as React from 'react';
import styled from 'styled-components';
import { Row, Col } from '../layout';
import { IStyledProps } from '../../../types/theme-types';

const CommentItemWrapper = styled.li`
 padding: 20px;
 width: 100%;
`;

const Name = styled.h4`
  display: inline-block;
  font-weight: bold;
  text-transform: uppercase;
`;
const School = styled.span`
  margin-right: 8px;
  margin-left: 8px;
  text-transform: capitalize;
`;
const Time = styled.span`
  color: ${(props: IStyledProps) => props.theme.colors.gray};
  font-size: .8em;
`;

export interface ICommentItem {
  school: string;
  name: string;
  content: string;
}

export default class CommentItem extends React.Component<ICommentItem, any> {
  public render() {
    return (
      <CommentItemWrapper>
        <Row>
          <Col sm={1}>avatar</Col>
          <Col sm={11}>
            <div>
              <Name>{this.props.name}</Name>
              <School>({this.props.school})</School>
              <Time>Now</Time>
            </div>
            <p>{this.props.content}</p>
          </Col>
        </Row>
      </CommentItemWrapper>
    );
  }
}
