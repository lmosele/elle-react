import * as React from 'react';

import styled from 'styled-components';

import { Row, Col } from '../layout';

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
  background-color: gray;
  color: white;
  height: 30px;
  min-width: 150px;
`;

export default class CommentsContainer extends React.Component<any, any> {
  public render() {
    return (
      <>
        <CommentTabsContainer between='sm'>
          <TabColumn sm={6}>
            <FakeTab>Comments (1)</FakeTab>
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
        </TabViewWrapper>
      </>
    );
  }
}
