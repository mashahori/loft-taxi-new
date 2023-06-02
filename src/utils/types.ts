export interface IAddressesPayload {
  address1: string;
  address2: string;
}

export interface ISignupPayload {
  email: string;
  password: string;
  name: string;
  surname: string;
}

export type ILoginPayload = Pick<ISignupPayload, "email" | "password">;

export interface IError {
  error: string;
  success: boolean;
}
