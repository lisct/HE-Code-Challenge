import React from "react";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";

import Form from "./components/form/Form";
import FormSubtitle from "./components/form/FormSubtitle";
import InlineGroup from "./components/form/InlineGroup";
import InputContainer from "./components/form/InputContainer";
import Input from "./components/form/Input";
import Radio from "./components/form/Radio";
import Checkbox from "./components/form/Checkbox";
import InputFile from "./components/form/InputFile";
import Button from "./components/form/Button";

import UserFormHandles from "./UserFormHandles";
import UserDataValidation from "./UserDataValidation";

const INITIAL_STATE = {
  name: "",
  email: "",
  birthday: "",
  zipcode: "",
  password: "",
  confirmation: "",
  gender: "",
  newsletter: false,
  profile_pic: ""
};

const App = () => {
  const {
    handleChange,
    handleSubmit,
    values,
    handleBlur,
    errors,
    isSubmitting
  } = UserFormHandles(INITIAL_STATE, UserDataValidation);

  return (
    <div className="App grid-container">
      <Header />
      <Main>
        <Form handleEvent={handleSubmit}>
          {/* INPUTS */}

          <Input
            name="name"
            type="text"
            label="Name"
            value={values.name}
            handleChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
          />

          <Input
            name="email"
            type="text"
            label="Email"
            value={values.email}
            handleChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
          />

          <Input
            name="birthday"
            type="text"
            label="Birthday"
            value={values.birthday}
            handleChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
          />
          <Input
            name="zipcode"
            type="text"
            label="zipcode"
            value={values.zipcode}
            handleChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
          />
          <Input
            note="true"
            func="Show password"
            name="password"
            type="text"
            label="password"
            value={values.password}
            handleChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
          />
          <Input
            name="confirmation"
            type="text"
            label="confirm password"
            value={values.confirmation}
            handleChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
          />

          {/* RADIOS */}

          <InlineGroup
            subtitle={
              <FormSubtitle copy="gender identity" req="true"></FormSubtitle>
            }
            errors={errors}
            value="gender"
          >
            <Radio
              name="male"
              label="male"
              group="gender"
              value="M"
              data={values.gender}
              handleChange={handleChange}
            />
            <Radio
              name="female"
              label="female"
              group="gender"
              value="F"
              data={values.gender}
              handleChange={handleChange}
            />
            <Radio
              name="non-binary"
              label="non-binary"
              group="gender"
              value="non-binary"
              data={values.gender}
              handleChange={handleChange}
            />
            <Radio
              name="other"
              label="other"
              group="gender"
              value="other"
              data={values.gender}
              handleChange={handleChange}
            />
          </InlineGroup>

          {/* CHECKBOX */}

          <InlineGroup
            subtitle={
              <FormSubtitle copy="subscribe to newsletter"></FormSubtitle>
            }
            errors={errors}
            value="newsletter"
          >
            <Checkbox
              label="yes"
              name="newsletter"
              value={values.newsletter}
              handleChange={handleChange}
            />
          </InlineGroup>

          {/* INPUT FILE */}

          <InlineGroup
            subtitle={
              <FormSubtitle
                copy="Upload your profile pic"
                req="true"
              ></FormSubtitle>
            }
            errors={errors}
            value="profile-pic"
          >
            <InputFile name="profile-pic" btn="browse" />
          </InlineGroup>

          {/* BUTTONS */}

          <InputContainer>
            <Button
              styles="btn btn__primary btn--full btn--dark"
              type="submit"
              label="Create Account"
              form="create-account"
              action={isSubmitting}
            />
            <Button
              styles="btn btn--full btn__plain"
              type="reset"
              label="Reset"
            />
          </InputContainer>
        </Form>
      </Main>
    </div>
  );
};

export default App;
