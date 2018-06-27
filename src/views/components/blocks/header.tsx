import * as React from 'react';

import styled from 'styled-components';
import { ITheme } from '../../../types/theme-types';
import { Row, Col, FullWidth, Grid } from '../layout';
import ShareWidget from './share-widget';
import { Film, Download, ExternalLinkAlt } from 'styled-icons/fa-solid';

const HeaderWrapper = styled(FullWidth)`
  background-color: ${(props: ITheme) => props.theme.colors.darkerGray};
  height: 400px;
  padding-left:30px;
  padding-right:30px;
`;
const HeaderContainment = styled(Row)`
  max-width: ${(props: ITheme) => props.theme.flexboxgrid.container.lg}em;
  margin: 0 auto;
`;
const ResourcesBox = styled.div`
  background-color: white;
  border: 1px solid ${(props: ITheme) => props.theme.colors.lightGray};
  padding: 20px;
  max-width: 360px;
  margin-top: 50px;
`;
const ResourcesList = styled.ul`
  background-color: white;
  list-style: none;
  padding: 0;
  margin: 0;
`;
const ResourcesListItem = styled.li`
  margin-top: 15px;
`;
const FullColumn = styled(Col)`
  height: 100%;
`;
const Heading = styled.h1`
  color: ${(props: ITheme) => props.theme.colors.lighterGray};
  margin: 0;
  font-size: 2.5em;
  font-weight: 400;
  margin-top: 50px;
  letter-spacing: .03em;
`;

const SubHeadings = styled.h2`
  color: ${(props: ITheme) => props.theme.colors.lightGray};
  font-size: .9em;
  font-weight: 300;
`;

const IconFilm = styled(Film)`
  margin-top: 10px;
  > path {
    fill: ${(props: ITheme) => props.theme.colors.lightGray};
  }
`;
const IconDownload = styled(Download)`
  margin-right: 10px;
  > path {
    fill: ${(props: ITheme) => props.theme.colors.darkGray};
  }
`;
const IconLink = styled(ExternalLinkAlt)`
  margin-right: 10px;
  > path {
    fill: ${(props: ITheme) => props.theme.colors.darkGray};
  }
`;

export default class Header extends React.Component<any, any> {
  public render() {
    return (
      <HeaderWrapper middle='sm'>
        <HeaderContainment>
            <FullColumn xs={12} md={7}>
              <Heading>Hanging Hashtags</Heading>
              <Row>
                <Col sm={1}>
                  <IconFilm size={45} />
                </Col>
                <Col sm={11}>
                  <SubHeadings>Building Backgrounds</SubHeadings>
                  <SubHeadings>Demonstrations and Experiences</SubHeadings>
                </Col>
              </Row>
              <ShareWidget/>
            </FullColumn>
            <FullColumn xs={false} md={5}>
              <ResourcesBox>
                <h2>Resources</h2>
                <ResourcesList>
                  <ResourcesListItem><IconDownload size={16}/>Hanging Hashtag ThinkSheet</ResourcesListItem>
                  <ResourcesListItem><IconLink size={16} />Using Visuals to gain interest</ResourcesListItem>
                  <ResourcesListItem><IconLink size={16}/>Edutopia - Common core action</ResourcesListItem>
                </ResourcesList>
              </ResourcesBox>
            </FullColumn>
        </HeaderContainment>
      </HeaderWrapper>
    );
  }
}
