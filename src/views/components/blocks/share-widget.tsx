import * as React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import { ITheme } from '../../../types/theme-types';
import { Row, Col } from '../layout';
import Ratings from '../elements/ratings';
import { appendModal } from '../elements/modal';
import { Heart, Share, Comment } from 'styled-icons/fa-solid';

const get = require('lodash/get');

const ShareContainer = styled.div`
  max-width: 100%;
  margin-top: 100px;
`;
const ShareWidgetWrapper = styled(Row)`
  margin-top: 15px;
`;

const Button = styled.button`
  color: white;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0px;
  background-color: ${(props: ITheme) => props.theme.colors.gray};
  border: 2px solid ${(props: ITheme) => props.theme.colors.gray};
  height: 40px;
  padding: 10px;
  @media only screen and (max-width: ${(props: ITheme) => props.theme.flexboxgrid.breakpoints.md}rem) {
    width: 100%;
    border-radius: 0;
  }
`;

const ButtonAsLink = styled.a`
  color: white;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0px;
  background-color: ${(props: ITheme) => props.theme.colors.gray};
  border: 1px solid ${(props: ITheme) => props.theme.colors.gray};
  height: 40px;
  padding: 10px 9px 9px 10px;
  text-decoration: none;
  @media only screen and (max-width: ${(props: ITheme) => props.theme.flexboxgrid.breakpoints.md}rem) {
    text-align: center;
    display: block;
    width: 100%;
    border-radius: 0;
  }
`;

const ButtonWindow = styled.span`
  color: ${(props: ITheme) => props.theme.colors.lightGray};
  display: inline-block;
  border-radius: 0;
  border: 2px solid ${(props: ITheme) => props.theme.colors.gray};
  height: 40px;
  padding: 10px;
  @media only screen and (max-width: ${(props: ITheme) => props.theme.flexboxgrid.breakpoints.md}rem) {
    display: none;
  }
`;

const ActionButtonContainer = styled.div`
  &:hover {
    > ${Button},
    > ${ButtonWindow} {
      cursor: pointer;
      color: ${(props: ITheme) => props.theme.colors.darkerGray}
      border-color: ${(props: ITheme) => props.theme.colors.lightGray};
      background-color: ${(props: ITheme) => props.theme.colors.lightGray};
    }
  }
`;

const IconShare = styled(Share)`
  margin-right: 15px;
  > path {
    fill: white;
  }
`;
const IconSave = styled(Heart)`
  margin-right: 15px;
  > path {
    fill: white;
  }
`;
const IconComment = styled(Comment)`
  margin-right: 15px;
  > path {
    fill: white;
  }
`;

export interface IShareState {
  shares: number;
  saves: number;
}

export class ShareWidget extends React.Component<{}, IShareState> {
  constructor(props: any) {
    super(props);
    this.state = {
      shares: 0,
      saves: 0,
    };
  }

  public handleShareClick = (evt: any) => {
    appendModal();
    this.setState({ shares: this.state.shares + 1 });
  }

  public handleSaveClick = (evt: any) => {
    this.setState({ saves: this.state.saves + 1 });
  }

  public render() {
    return (
      <ShareContainer>
        <Ratings/>
        <ShareWidgetWrapper>
          <Col xs={4}>
            <ActionButtonContainer>
              <Button onClick={this.handleSaveClick}>
                <IconSave size='16'/>
                Save
              </Button>
              <ButtonWindow>{this.state.saves}</ButtonWindow>
            </ActionButtonContainer>
          </Col>
          <Col xs={4}>
            <ActionButtonContainer>
              <Button onClick={this.handleShareClick}>
                <IconShare size='16' />
                Share
              </Button>
              <ButtonWindow>{this.state.shares}</ButtonWindow>
            </ActionButtonContainer>
          </Col>
          <Col xs={4}>
            <ActionButtonContainer>
              <ButtonAsLink href='#comment'>
                <IconComment size='16' />
                Comment
              </ButtonAsLink>
              <ButtonWindow>{0}</ButtonWindow>
            </ActionButtonContainer>
          </Col>
        </ShareWidgetWrapper>
      </ShareContainer>
    );
  }
}

const mapStateToProps = (state: any) => ({
  shares: get(state, 'pageState.shares'),
  saves: get(state, 'pageState.saves'),
});

export default connect(mapStateToProps, {})(ShareWidget);
