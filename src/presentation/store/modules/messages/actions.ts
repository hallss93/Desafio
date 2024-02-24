import { RepositoriesTypes } from './types';

const showMessage = (message: string, type: 'success' | 'error' = 'success') => {
  return async (dispatch: any) => {
    dispatch({ type: RepositoriesTypes.MESSAGE_SHOW, payload: { message, type } });
    setTimeout(() => {
      dispatch({ type: RepositoriesTypes.MESSAGE_HIDE });
    }, 3000);
  };
};

export { showMessage };
