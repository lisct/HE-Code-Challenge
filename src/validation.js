export const validate = values => {
  let errors = {};

  // Email
  if (!values.email) {
    errors.email = "Required Email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // Padssword
  if (values.password) {
    errors.password = "Required Password";
  } else if (values.password.length < 6) {
    errors.password = "Password mush be at least 6 characters";
  }

  return errors;
};
