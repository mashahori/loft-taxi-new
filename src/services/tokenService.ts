export const getToken = () => localStorage.getItem("session");

export const setToken = (token: string) => {
  localStorage.setItem("session", token);
};

export const removeToken = () => {
  localStorage.removeItem("session");
};
