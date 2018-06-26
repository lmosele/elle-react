import * as React from 'react';

import styled from 'styled-components';

import { connect } from 'react-redux';
import { IComments } from '../../../state/page/reducers';
import * as actions from '../../../state/page/actions';
import { IStyledProps } from '../../../types/theme-types';

import { Row, Col } from '../layout';
import CommentItem from '../elements/comment-item';
import CommentForm from './comments-form';

const get = require('lodash/get');

const CommentTabsContainer = styled(Row)`
  margin-top: 30px;
`;
const FakeTab = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  border: 1px solid black;
  padding: 10px;
  text-decoration: none;
  &:hover {
    background-color: lightgray;
  }
`;
const TabColumn = styled(Col)`
  padding: 0;
`;

const TabViewWrapper = styled(Row)`
  border: 1px solid black;
  padding: 1em;
`;

const TopCommentsRow = styled(Row)`
  width: 100%;
`;

const SearchBar = styled.input`
  padding: 5px;
  border-radius: 4px;
  height: 30px;
`;
const SelectFilter = styled.select`
  border-radius: 4px;
  background-color: ${(props: IStyledProps) => props.theme.colors.gray};
  color: white;
  height: 30px;
  min-width: 150px;
`;
const CommentsList = styled.ul`
  margin: 0;
  margin-top: 20px;
  list-style: none;
  width: 100%;
`;
const CommentsHeader = styled.h3`
  font-size: 1.5em;
`;

export class CommentsContainer extends React.Component<any, any> {

  public createCommentList() {
    console.log(this.props.comments);
    let commentItems;

    if (this.props.comments.length > 0) {
      commentItems = this.props.comments.map((comment: IComments, i: any) => {
        return (
          <CommentItem
            key={i}
            school={comment.school}
            name={comment.name}
            content={comment.content}
          />
        );
      });
    } else {
      commentItems = 'No Comments Yet!';
    }
    return commentItems;
  }

  public submitHandler(e: any) {
    e.preventDefault();
    console.log(e.target.valye);
    this.props.dispatch(actions.addComment(e));
  }

  public render() {
    const commentList = this.createCommentList();
    const numberOfComments = this.props.comments.length;
    return (
      <>
        <CommentsHeader>Comments ({numberOfComments})</CommentsHeader>
        <CommentTabsContainer between='sm'>
          <TabColumn sm={6}>
            <FakeTab>Comments ({numberOfComments})</FakeTab>
          </TabColumn>
          <TabColumn sm={6}>
            <FakeTab>Private Notes (0)</FakeTab>
          </TabColumn>
        </CommentTabsContainer>
        <TabViewWrapper>
          <TopCommentsRow between='sm'>
            <Col sm={8}>
              <SearchBar placeholder='search' type='text'/>
            </Col>
            <Col sm={4}>
              <Row end='sm'>
                <SelectFilter>
                  <option value='newest'>Newest</option>
                  <option value='oldest'>Oldest</option>
                </SelectFilter>
              </Row>
            </Col>
          </TopCommentsRow>
          <CommentsList>
            {commentList}
            <hr/>
            <CommentForm callBack={this.props.addComment}/>
          </CommentsList>
        </TabViewWrapper>
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  comments: get(state, 'pageState.comments'),
});

const mapDispatchToProps = {
  addComment: actions.addComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
