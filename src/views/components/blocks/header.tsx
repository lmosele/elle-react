import * as React from 'react';

import styled from 'styled-components';
import { IStyledProps } from '../../../types/theme-types';
import { Row, Col } from '../layout';
import ShareWidget from './share-widget';

const HeaderWrapper = styled(Row)`
  background-color: ${(props: IStyledProps) => props.theme.colors.panelColor};
  height: 400px;
  padding-left:30px;
  padding-right:30px;
`;
const ResourcesBox = styled.div`
  background-color: white;
  padding: 20px;
  max-width: 360px;
  margin-top: 40px;
`;
const ResourcesList = styled.ul`
  background-color: white;
  max-width: 60%;
`;
const FullColumn = styled(Col)`
  height: 100%;
`;
const Heading = styled.h1`
  color: white;
  margin: 0;
  margin-top: 40px;
`;

export default class Header extends React.Component<any, any> {
  public render() {
    return (
      <HeaderWrapper middle='sm'>
          <FullColumn sm={7}>
            <Heading>Hanging Hashtags</Heading>
            <p>Building Background</p>
            <p>Demonstrations and Experiences</p>
            <ShareWidget/>
          </FullColumn>
          <FullColumn sm={5}>
            <ResourcesBox>
              <h2>Resources</h2>
              <ResourcesList>
                <li>Hanging Hashtag ThinkSheet</li>
                <li>Using Visuals to gain interest</li>
                <li>Edutopia - Common core action</li>
              </ResourcesList>
            </ResourcesBox>
          </FullColumn>
      </HeaderWrapper>
    );
  }
}
