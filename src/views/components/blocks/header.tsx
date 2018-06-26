import * as React from 'react';

import styled from 'styled-components';
import { IStyledProps } from '../../../types/theme-types';
import { Row, Col } from '../layout';
import ShareWidget from './share-widget';

const HeaderWrapper = styled.header`
  background-color: ${(props: IStyledProps) => props.theme.colors.panelColor};
  height: 400px;
`;

const ResourcesBox = styled.div`
  background-color: white;
  padding: 20px;
  max-width: 360px;
`;
const ResourcesList = styled.ul`
  background-color: white;
  max-width: 60%;
`;

export default class Header extends React.Component<any, any> {
  public render() {
    return (
      <HeaderWrapper>
        <Row middle='sm'>
          <Col sm={7}>
            <h1>Hanging Hashtags</h1>
            <p>Building Background</p>
            <p>Demonstrations and Experiences</p>
            <ShareWidget/>
          </Col>
          <Col sm={5}>
            <ResourcesBox>
              <h2>Resources</h2>
              <ResourcesList>
                <li>Hanging Hashtag ThinkSheet</li>
                <li>Using Visuals to gain interest</li>
                <li>Edutopia - Common core action</li>
              </ResourcesList>
            </ResourcesBox>
          </Col>
        </Row>
      </HeaderWrapper>
    );
  }
}
