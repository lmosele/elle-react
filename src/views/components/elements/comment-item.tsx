import * as React from 'react';
import styled from 'styled-components';
import { Row, Col } from '../layout';
import { ITheme } from '../../../types/theme-types';

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
  color: ${(props: ITheme) => props.theme.colors.gray};
  font-size: .8em;
`;
const Content = styled.p`
  margin-left: 15px;
`;
const Avatar = styled.div`
  margin-top: 20px;
  background-color: ${(props: ITheme) => props.theme.colors.lightGray};
  border: 1px solid ${(props: ITheme) => props.theme.colors.gray};
  height: 40px;
  width: 40px;
  border-radius: 90px;
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
          <Col xs={1}>
            <Avatar/>
          </Col>
          <Col xs={11}>
            <div>
              <Name>{this.props.name}</Name>
              <School>({this.props.school})</School>
              <Time>Now</Time>
            </div>
            <Content>{this.props.content}</Content>
          </Col>
        </Row>
      </CommentItemWrapper>
    );
  }
}
