import * as React from 'react';

import styled from 'styled-components';
import { ITheme } from '../../../types/theme-types';
import { Row, Col, FullWidth, Grid } from '../layout';
import { PlayCircle } from 'styled-icons/fa-solid';

import { SelectInput } from '../elements/select-input';

const MockVideo = styled.figure`
  width: 100%;
  height: 200px;
  background-color: ${(props: ITheme) => props.theme.colors.darkGray};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

const SideBarWrapper = styled.aside`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 50px;
`;
const StudentTable = styled.div``;
const SideBarOptions = styled(Row)`
  margin-bottom: 20px;
`;
const StudentTableHeader = styled.div`
  border: 1px solid ${(props: ITheme) => props.theme.colors.darkGray};
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TableHeading = styled.h4`
  align-self: flex-start;
  margin-right: 10px;
`;
const TableSpan = styled.span`
  font-size: .7em;
`;
const TableLink = styled.a`
  display: block;
  float: right;
`;
const TableDescription = styled.div`
  border: 1px solid ${(props: ITheme) => props.theme.colors.darkGray};
  background-color: ${(props: ITheme) => props.theme.colors.lightGray};
`;

const RecommendButton = styled.button`
  color: ${(props: ITheme) => props.theme.colors.gray};
  border: 1px solid ${(props: ITheme) => props.theme.colors.gray};
  background-color: ${(props: ITheme) => props.theme.colors.lighterGray};
  border: none;
  border-radius: 4px;
  padding: 8px;
  float: right;
`;

const IconPlay = styled(PlayCircle)`
  > path {
    fill: ${(props: ITheme) => props.theme.colors.lightGray};
  }
`;

export default class SideBar extends React.Component<any, any> {
  public render() {
    return (
      <SideBarWrapper>
        <MockVideo>
          <IconPlay size='45'/>
        </MockVideo>
        <div>
          <h4>Support Levels</h4>
          <SideBarOptions>
            <Col xs={6}>
              <SelectInput>
                <option value=''>Show Filters</option>
                <option value='grade'>Grade Level</option>
                <option value='age'>Age</option>
              </SelectInput>
            </Col>
            <Col xs={6}><RecommendButton>Batch Recommend</RecommendButton></Col>
          </SideBarOptions>

          <StudentTable>
            <StudentTableHeader>
              <TableHeading>High Support</TableHeading>
              <TableSpan>Speaking 1-2</TableSpan>
              <TableLink href="#">8 Students</TableLink>
            </StudentTableHeader>
            <TableDescription>
              <ul>
                <li>Provide students with small word banks and visuals</li>
                <li>Encourage partnerships and chatter</li>
              </ul>
            </TableDescription>
          </StudentTable>

          <StudentTable>
            <StudentTableHeader>
              <TableHeading>Moderate Support</TableHeading>
              <TableSpan>Speaking 3-4</TableSpan>
              <TableLink href="#">5 Students</TableLink>
            </StudentTableHeader>
            <TableDescription>
              <ul>
                <li>Encourage partnerships and chatter</li>
              </ul>
            </TableDescription>
          </StudentTable>

          <StudentTable>
            <StudentTableHeader>
              <TableHeading>Low Support</TableHeading>
              <TableSpan>Speaking 5-6</TableSpan>
              <TableLink href="#">2 Students</TableLink>
            </StudentTableHeader>
            <TableDescription>
              <ul>
                <li>No Additional support needed</li>
              </ul>
            </TableDescription>
          </StudentTable>
        </div>
      </SideBarWrapper>
    );
  }
}
