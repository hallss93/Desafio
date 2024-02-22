/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_REACT_APP_API: string;
  readonly VITE_REACT_APP_API_LOGIN_EVM: string;
  readonly VITE_REACT_APP_CLIENT_ID: string;
  readonly VITE_REACT_APP_SECRET_ID: string;
  // readonly VITE_REACT_APP_AWS_BUCKET_NAME: string;
  // readonly VITE_REACT_APP_AWS_ACCESS_KEY_ID: string;
  // readonly VITE_REACT_APP_AWS_SECRET_ACCESS_KEY: string;
  // readonly VITE_REACT_APP_AWS_REGION: string;
  // readonly VITE_REACT_APP_AWS_SESSION_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
