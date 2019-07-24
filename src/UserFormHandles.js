import { createRef, useState, useEffect } from "react";
import { API } from "./UserApi";

const UserFormHandle = (initial_state, validate) => {
  // allows to have any number of properties react hooks
  const [values, setValues] = useState(initial_state);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);
  const [apiData, setApiData] = useState(false);
  const passRef = createRef();

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        fetch(API)
          .then(res => res.json())
          .then(res => setApiData(res))
          .catch(error => console.log("Looks like there was a problem", error));
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
          : event.target.type === "file"
          ? event.target.files[0]
          : event.target.value
    });
  }

  function handleShowPass(action) {
    passRef.current.type = action;
  }

  function hanldleReset() {
    setValues({
      ...initial_state
    });
  }

  function handleBlur(event) {
    // const validationErrors = validate(values);
    // setErrors(validationErrors);
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
    hanldleReset,
    handleShowPass,
    apiData,
    values,
    handleBlur,
    errors,
    passRef
  };
};

export default UserFormHandle;
