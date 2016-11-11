export interface User {
  displayName: string;
  email: string;
  provider: string;
  providerUids: string[];
  uid: string;
  photoURL: string;
  refreshToken: string;
}
