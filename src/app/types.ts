export interface IHeaderItem {
  path: string;
  text: string;
}

export interface ICardInfo {
  cardName: string;
  expiryDate: string;
  cardNumber: string;
  id: string;
  cvc: string;
}

export interface IPaymentForm {
  cardName: string;
  cardNumber: string;
  expiryDate: string;
  cvc: string;
}

export interface IToken {
  token: string | null;
}
