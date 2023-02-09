export const validatePassword = (value: string) => {
  if (!value) return "Password is required";

  if (!/[a-z]/.test(value)) return "At least 1 symbol";
  if (!/[0-9]/.test(value)) return "At least 1 number";

  if (value.length < 5) return "At least 5 characters";
};

export const validateEmail = (value?: string) => {
  if (!value) return "Email is required";
  if (!/^[a-zA-Z0-9\\+._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/.test(value)) {
    return "Enter a valid email";
  }
};

export const validateName = (value?: string) => {
  if (!value) return "Name is required";

  if (!/^[a-zA-Z]+$/.test(value)) {
    return "Enter a valid name";
  }
};
