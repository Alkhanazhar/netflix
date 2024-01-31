export const checkvalidation = (email, password) => {
  const emailValidation =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      email.current.value
    );
  const passwordValidation =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
      password.current.value
    );
  if (!emailValidation) return "Invalid email address";
  if (!passwordValidation) return "Invalid password";
  return null;
};
