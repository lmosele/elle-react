import { Dispatch } from 'react-redux';

import * as constants from './constants';
import { IComments } from './reducers';

// Triggers the ADD_COMMENT reducer
export const addComment = (comment: IComments) => {
  return {
    payload: comment,
    type: constants.ADD_COMMENT,
  };
};
