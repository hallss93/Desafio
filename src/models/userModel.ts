export default interface IUsuario {
  id: number;
  nome: string;
  userCpf: string;
  picture: string;
  userTypeCode: number;
  email: string;
  lastAccess: Date;
  codIndication: number;
  repIndication: number;
  otherIndication: string;
  address: IAddress;
  phoneNumber: string;
  allowComment: boolean;
  allowAccess: boolean;
  allowCommentVisibility: boolean;
  totalPoints: number;
  createdBy: number;
  updatedBy: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAccessTokenOAuth {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  token_type: string;
}

export interface IAccessTokenIdentity {
  extraInfo: {
    jwt: string;
    refresh_jwt: string;
  };
}

export interface IAccessTokenIdentity {
  extraInfo: {
    jwt: string;
    refresh_jwt: string;
  };
}

export interface IAccessTokenIdentity {
  extraInfo: {
    jwt: string;
    refresh_jwt: string;
  };
}

export interface IAddress {
  id: number;
  addressCountry: string;
  addressState: string;
  addressCity: string;
  addressPostCode: string;
  addressStreet: string;
  addressNumber: number;
  addressComplement: string;
}

export interface IPasswordValidate {
  username: string;
  passwordResetCode: string;
  newPassword: string;
}
