import React from "react";

const UserFormHandle = (initial_state, validate) => {
  // allows to have any number of properties react hooks
  const [values, setValues] = React.useState(initial_state);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;

      if (noErrors) {
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors, isSubmitting, values]);

  // Receiving the data and saving it in the state(Hooks)
  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value
    });
  }

  function handleBlur(event) {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  }

  // On submit form
  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
  }

  return {
    handleChange,
    handleSubmit,
    values,
    handleBlur,
    errors,
    isSubmitting
  };
};

export default UserFormHandle;
