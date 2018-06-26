import { Dispatch } from 'react-redux';

import * as constants from './constants';

export const addComment = (comment: string) => {
  return {
    payload: { comment },
    type: constants.ADD_COMMENT,
  };
};
