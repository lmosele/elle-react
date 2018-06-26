import * as React from 'react';
import styled from 'styled-components';

const Star = styled.svg`
  height: 30px;
  width: 30px;
  padding-top: 10px;
  path {
    fill: lightgray;
    :hover {
      cursor: pointer;
      fill: white;
    }
  }
`;
const StarContainer = styled.div`
  display: inline-block;
`;
const ReviewSpan = styled.span`
  font-size: .8em;
`;

export default class Ratings extends React.Component<any, any> {
  public render() {
    return (
      <>
      <StarContainer>
        <Star xmlns='http://www.w3.org/2000/svg' baseProfile='tiny' version='1'>
          <path d='M9 9l-5 1v1l4 3a2286 2286 0 0 0-1 6l5-3a14908 14908 0 0 0 5 2l-1-5 4-3v-1l-5-1-3-5-3 5z' />
        </Star>
        <Star xmlns='http://www.w3.org/2000/svg' baseProfile='tiny' version='1'>
          <path d='M9 9l-5 1v1l4 3a2286 2286 0 0 0-1 6l5-3a14908 14908 0 0 0 5 2l-1-5 4-3v-1l-5-1-3-5-3 5z' />
        </Star>
        <Star xmlns='http://www.w3.org/2000/svg' baseProfile='tiny' version='1'>
          <path d='M9 9l-5 1v1l4 3a2286 2286 0 0 0-1 6l5-3a14908 14908 0 0 0 5 2l-1-5 4-3v-1l-5-1-3-5-3 5z' />
        </Star>
        <Star xmlns='http://www.w3.org/2000/svg' baseProfile='tiny' version='1'>
          <path d='M9 9l-5 1v1l4 3a2286 2286 0 0 0-1 6l5-3a14908 14908 0 0 0 5 2l-1-5 4-3v-1l-5-1-3-5-3 5z' />
        </Star>
        <Star xmlns='http://www.w3.org/2000/svg' baseProfile='tiny' version='1'>
          <path d='M9 9l-5 1v1l4 3a2286 2286 0 0 0-1 6l5-3a14908 14908 0 0 0 5 2l-1-5 4-3v-1l-5-1-3-5-3 5z' />
        </Star>
      </StarContainer>
      <ReviewSpan>17 Reviews</ReviewSpan>
      </>
    );
  }
}
