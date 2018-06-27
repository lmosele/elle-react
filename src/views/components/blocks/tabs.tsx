import * as React from 'react';

import styled from 'styled-components';
import { Row, Col, FullWidth } from '../layout';
import { ITheme } from '../../../types/theme-types';
import { Bullhorn, Bullseye, FileAlt, Book, Bell } from 'styled-icons/fa-solid';
import { SelectInput } from '../elements/select-input';

const TabContent = styled(Row)`
  margin: 0px;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const Title = styled.h3`
  font-size: 1.5em;
  font-weight: 600;
  ${(props: ITheme) => props.theme.colors.gray};
`;
const Heading = styled.h3`
  margin: 0;
  display: inline-block;
  font-size: 1.2em;
  font-weight: 600;
  ${(props: ITheme) => props.theme.colors.darkerGray};
`;
const SubHeading = styled.p`
  font-size: 1em;
  font-weight: 600;
  ${(props: ITheme) => props.theme.colors.darkGray};
`;

const ActivityBox = styled.div`
  height: auto;
  width: 100%;
  padding: 20px;
  background-color: ${(props: ITheme) => props.theme.colors.lightGray};
  border: 1px solid ${(props: ITheme) => props.theme.colors.gray};
`;

const Tag = styled.span`
  margin-right: 8px;
  font-size: .9em;
  font-weight: 300;
  color: ${(props: ITheme) => props.theme.colors.gray};
`;

const IconBullsEye = styled(Bullseye)`
  display: inline-block;
  margin-right: 10px;
`;
const IconBell = styled(Bell)`
  display: inline-block;
  margin-right: 10px;
`;
const IconBook = styled(Book)`
  display: inline-block;
  margin-right: 10px;
`;
const IconDocument = styled(FileAlt)`
  display: inline-block;
  margin-right: 10px;
`;
const IconBullHorn = styled(Bullhorn)`
  display: inline-block;
  background-color: ${(props: ITheme) => props.theme.colors.gray};
  padding: 5px;
  border-radius: 4px;
  margin-right: 15px;
  > path {
    fill: ${(props: ITheme) => props.theme.colors.darkerGray};
  }
`;

const NestedRow = styled(Row)`
  width: 100%;
  margin: 0;
  padding: 0;
`;
const NestedRowDark = NestedRow.extend`
  padding: 20px;
  background-color: ${(props: ITheme) => props.theme.colors.lighterGray};
`;

export const AboutTab = ({ }) => (
  <TabContent>
    <Col xs={8}>
      <Heading><IconBullsEye size='16' />Objective</Heading>
      <SubHeading>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</SubHeading>
      <Heading><IconDocument size='16' />Description</Heading>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
    </Col>
    <Col xs={4}>
      <ActivityBox>
        <IconBullHorn size='25' />
        <Heading>Reading</Heading>
        <SubHeading>Speaking, Listening</SubHeading>
      </ActivityBox>
      <Tag>Small Groups,</Tag>
      <Tag>Full Classrooms,</Tag>
      <Tag>Grades K-12, </Tag>
    </Col>
  </TabContent>
);
export const PlanTab = ({ }) => (
  <TabContent>
    <Col xs={12}>
      <Heading><IconBook size='16' />Before Lesson</Heading>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
      <Heading><IconBell size='16' />During Lesson</Heading>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
    </Col>
  </TabContent>
);
export const ExampleTab = ({ }) => (
  <TabContent>
    <NestedRow>
      <Col>
        <SelectInput>
           <option value='3through5'>Grades 3-5</option>
        </SelectInput>
        <SelectInput>
          <option value='math'>Subject: Math</option>
        </SelectInput>
      </Col>
    </NestedRow>
    <NestedRow>
      <Col sm={12}>
        <Title>3-5 Math</Title>
      </Col>
    </NestedRow>

    <NestedRowDark>
      <Col sm={6}>
        <Heading>Content Objective</Heading>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
      </Col>
      <Col sm={6}>
        <Heading>Language Objective</Heading>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
      </Col>
    </NestedRowDark>

    <NestedRow>
      <Col sm={12}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
      </Col>
    </NestedRow>

  </TabContent>
);

const TabViewWrapper = styled(Row)`
  border: 1px solid black;
`;

export default class TabViewContainer extends React.Component<any, any> {
  public render() {
    return (
      <TabViewWrapper>
        {this.props.children}
      </TabViewWrapper>
    );
  }
}
