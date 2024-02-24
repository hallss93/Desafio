import { Reducer } from 'redux';

import { IRepositoriesState, RepositoriesTypes } from './types';

const INITIAL_STATE: IRepositoriesState = {
  showMessage: false,
  message: '',
  type: 'success',
};

const reducer: Reducer<IRepositoriesState, any> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RepositoriesTypes.MESSAGE_SHOW:
      return {
        ...state,
        message: action.payload.message,
        type: action.payload.type,
        showMessage: true,
      };
    case RepositoriesTypes.MESSAGE_HIDE:
      return {
        ...state,
        showMessage: false,
      };
    default:
      return state;
  }
};

export default reducer;
