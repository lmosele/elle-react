import * as constants from './constants';

export interface IReducer {
  comments: any;
  shares: number;
}

const initialState = {
  comments: '',
  shares: 0,
};

export default function pageReducer(state: IReducer = initialState, action: any) {
  switch (action.type) {
    case constants.ADD_COMMENT:
      return Object.assign({}, state, { comments: action.payload });
    default:
      return state;
  }
}
