import * as constants from './constants';
import { IComments } from './reducers';

export const addComment = (comment: IComments) => {
  return {
    payload: comment,
    type: constants.ADD_COMMENT,
  };
};

export const addShare = (email: any) => {
  return {
    payload: email,
    type: constants.ADD_SHARE,
  };
};
