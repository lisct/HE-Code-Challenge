export default function UserDataValidation(values) {
  let errors = {};

  // Name Errors
  if (!values.name) {
    errors.name = "Name is required";
  }

  // Email Errors
  if (!values.email) {
    errors.email = "Email is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  //Birthday Errors
  if (!values.birthday) {
    errors.birthday = "Birthday is required";
  } else {
    const getAge = birthDate =>
      Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);
    const age = getAge(values.birthday);

    if (age < 18) errors.birthday = "Sorry, birthday must be 18 years or older";
  }

  //Zipcode Errors
  if (!values.zip) {
    errors.zip = "Zipcode is required";
  } else {
    const zipcodes = [
      57001,
      57002,
      57003,
      57004,
      57005,
      57006,
      57007,
      57010,
      57012,
      57013,
      57014,
      57015
    ];
    const data = values.zip * 1; // converting into number
    if (!zipcodes.includes(data)) {
      errors.zip = "Zip code must match one from the list";
    }
  }

  // Password Errors
  if (!values.password) {
    errors.password = "Password is required";
  } else {
    const regex = new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.*(?=.*[!@#$%^&*_-]))");
    if (!regex.test(values.password)) {
      errors.password =
        "Must contain one uppercase letter, one number, & one special character";
    }
  }

  // Confirmation Errors
  if (!values.confirmation) {
    errors.confirmation = "Confirmation Password is required";
  } else if (values.confirmation !== values.password) {
    errors.confirmation = "Password does not match";
  }

  // Gender Errors
  if (!values.gender) {
    errors.gender = "Gender Identity is required";
  }

  // Profile Image Errors
  if (!values.profileImage) {
    errors.profileImage = "Profile Image is required";
  } else {
    const file = values.profileImage;
    if (file.size > 10489999) {
      errors.profileImage = "The file size limit is 10mb";
    } else if (!(file.type === "image/jpeg" || file.type === "image/png")) {
      errors.profileImage = "The format is invalid, must be JPG or PNG";
    }
  }

  return errors;
}
