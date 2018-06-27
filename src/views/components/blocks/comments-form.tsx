import * as React from 'react';

import styled, { css } from 'styled-components';

import { ITheme } from '../../../types/theme-types';

import { Comment as CommentIcon } from 'styled-icons/fa-regular';

const BaseInput = css`
  padding: 10px;
  margin-top: 5px;
`;

const AddCommentInput = styled.textarea`
  ${BaseInput}
  resize: none;
  width: 100%;
  margin-bottom: 10px;
`;
const AddNameInput = styled.input`
  ${BaseInput}
  width: 100%;
`;
const AddSchoolInput = styled.input`
  ${BaseInput}
  width: 100%;
`;
const AddCommentButton = styled.button`
  color: ${(props: ITheme) => props.theme.colors.lighterGray};
  background-color: ${(props: ITheme) => props.theme.colors.gray};
  border: none;
  border-radius: 4px;
  padding: 8px;
  float: right;
`;
const AddCommentButtonIcon = CommentIcon.extend`
  color: ${(props: ITheme) => props.theme.colors.lighterGray};
  width: 20px;
  margin-right: 15px;
  path {
    color: white;
  }
`;

// We handle the submission of new comments via this component
export default class CommentForm extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      nameValue: '',
      schoolValue: '',
      contentValue: '',
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.handleSchoolChange = this.handleSchoolChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
  }

  public submitHandler(event: any) {
    event.preventDefault();

    const commentObject = {
      name: this.state.nameValue,
      school: this.state.schoolValue,
      content: this.state.contentValue,
    };

    this.props.callBack(commentObject);
  }

  public handleSchoolChange(event: any) {
    this.setState({ schoolValue: event.target.value });
  }
  public handleNameChange(event: any) {
    this.setState({ nameValue: event.target.value });
  }
  public handleContentChange(event: any) {
    this.setState({ contentValue: event.target.value });
  }

  public render() {
    return (
      <form onSubmit={this.submitHandler}>
        <AddNameInput
          id='comment'
          placeholder='Full Name'
          type='text'
          value={this.state.nameValue}
          onChange={this.handleNameChange}
        />
        <AddSchoolInput
          placeholder='School Name'
          type='text'
          value={this.state.schoolValue}
          onChange={this.handleSchoolChange}
        />
        <AddCommentInput
          placeholder='Comment'
          value={this.state.contentValue}
          onChange={this.handleContentChange}
        />
        <AddCommentButton type='submit' value='Submit'>
          <AddCommentButtonIcon color='white' />
          Add Comment
        </AddCommentButton>
      </form>
    );
  }
}
