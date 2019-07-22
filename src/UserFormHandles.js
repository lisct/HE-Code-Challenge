import { createRef, useState, useEffect } from "react";

const UserFormHandle = (initial_state, validate) => {
  // allows to have any number of properties react hooks
  const [values, setValues] = useState(initial_state);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);
  const passRef = createRef();

  useEffect(() => {
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
          : event.target.type === "file"
          ? event.target.files[0]
          : event.target.value
    });

    console.log(event.target.files[0]);
  }

  function handleShowPass(action) {
    passRef.current.type = action;
  }

  function setBase64(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = evt => {
      // this data is already base64 encoded
      let profileImage = reader.result
        .slice(reader.result.indexOf(",") + 1)
        .trim();

      //updating to base64 code
      setValues({
        ...values,
        profileImage
      });

      reader.onerror = function(error) {
        console.warn("could not upload file", error.message);
      };
    };
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
    console.log("herr");
  }

  return {
    handleChange,
    handleSubmit,
    values,
    handleBlur,
    errors,
    isSubmitting,
    handleShowPass,
    passRef
  };
};

export default UserFormHandle;
