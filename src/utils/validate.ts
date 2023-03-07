type IValidation = string | undefined;

export const validatePassword = (value: string): IValidation => {
  if (!value) return "Password is required";

  if (!/[a-z]/.test(value)) return "At least 1 symbol";
  if (!/[0-9]/.test(value)) return "At least 1 number";

  if (value.length < 5) return "At least 5 characters";
};

export const validateEmail = (value?: string): IValidation => {
  if (!value) return "Email is required";
  if (!/^[a-zA-Z0-9\\+._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/.test(value)) {
    return "Enter a valid email";
  }
};

export const validatePaymentName = (value?: string): IValidation => {
  if (!value) return "Name is required";

  if (
    !/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/.test(
      value
    )
  ) {
    return "Enter a valid name";
  }
};

export const validateName = (value?: string): IValidation => {
  if (!value) return "Name is required";

  if (!/^[a-z ,.'-]+$/i.test(value)) {
    return "Enter a valid name";
  }
};

export const validateSurname = (value?: string): IValidation => {
  if (!value) return "Surname is required";

  if (!/^[a-z ,.'-]+$/i.test(value)) {
    return "Enter a valid surname";
  }
};

export const validateCard = (value?: string): IValidation => {
  if (!value) return "Card number is required";

  const trimedValue = value.replace(/ /g, "");

  if (
    !/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(
      trimedValue
    )
  )
    return "Enter a valid card number";
};

export const validateDate = (value?: string): IValidation => {
  if (!value) return "Expire date is required";

  if (!/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(value)) {
    return "Enter a valid date";
  }
};

export const validateCVV = (value?: string): IValidation => {
  if (!value) return "CVV date is required";

  if (value.length !== 3) return "Enter a valid CVV";
};
