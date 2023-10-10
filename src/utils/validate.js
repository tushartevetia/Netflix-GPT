export const validateLoginForm = (email, password) => {
  const isValidEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
  const isValidPassword =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    );

  if (!isValidEmail) return "Please Enter a Valid Email";
  if (!isValidPassword) return "Please Enter a Valid Password";

  return null;
};
