export enum RepositoriesTypes {
  MESSAGE_SHOW = '@repositories/MESSAGE_SHOW',
  MESSAGE_HIDE = '@repositories/MESSAGE_HIDE',
}

export interface IResponse {
  data: IRepositoriesState;
}

export interface IRepositoriesState {
  readonly showMessage: boolean;
  readonly message: string;
  readonly type: 'success' | 'error';
}
