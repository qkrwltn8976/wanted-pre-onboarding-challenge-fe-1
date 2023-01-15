export const emailValidator = (email: string) => {
  return /(?=.*@)(?=.*\.).*/.test(email);
};

export const passwordValidator = (password: string) => {
  return /.{8,}/g.test(password);
};
