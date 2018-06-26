import * as constants from './constants';

export interface IReducer {
  comments: IComments[];
  shares: number;
}

export interface IComments {
  name: string;
  content: string;
  school: string;
}

const initialState: IReducer = {
  comments: [
    {
      name: 'Sara Forrestier',
      school: 'Everett Public Schools',
      content: 'I really love this idea',
    },
  ],
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
