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
import FormThanks from "../src/components/form/FormThanks";
import Errors from "./components/form/Errors";

import UserFormHandles from "./UserFormHandles";
import UserDataValidation from "./UserDataValidation";

const INITIAL_STATE = {
  name: "",
  email: "",
  birthday: "",
  zip: "",
  password: "",
  confirmation: "",
  gender: "",
  newsletter: false,
  profileImage: ""
};

const App = () => {
  const {
    handleChange,
    handleSubmit,
    hanldleReset,
    handleShowPass,
    apiData,
    apiError,
    values,
    errors,
    passRef
  } = UserFormHandles(INITIAL_STATE, UserDataValidation);

  return (
    <div className="App grid-container">
      <Header logged={apiData} name={values.name} img={values.profileImage} />
      <Main>
        {apiData ? (
          <FormThanks users={apiData} />
        ) : (
          <Form handleEvent={handleSubmit}>
            {/* INPUTS */}

            <Input
              name="name"
              type="text"
              label="Name"
              value={values.name}
              handleChange={handleChange}
              errors={errors.name}
            />

            <Input
              name="email"
              type="text"
              label="Email"
              value={values.email}
              handleChange={handleChange}
              errors={errors.email}
            />

            <Input
              name="birthday"
              type="date"
              label="Birthday"
              value={values.birthday}
              handleChange={handleChange}
              errors={errors.birthday}
            />
            <Input
              name="zip"
              type="text"
              label="zipcode"
              value={values.zip}
              handleChange={handleChange}
              errors={errors.zip}
            />

            <Input
              note="true"
              func="Show password"
              name="password"
              type="password"
              label="password"
              value={values.password}
              handleChange={handleChange}
              handleFunc={handleShowPass}
              errors={errors.password}
              ref={passRef}
            />
            <Input
              name="confirmation"
              type="password"
              label="confirm password"
              value={values.confirmation}
              handleChange={handleChange}
              errors={errors.confirmation}
            />

            {/* RADIOS */}

            <InlineGroup
              subtitle={
                <FormSubtitle copy="gender identity" req="true"></FormSubtitle>
              }
              errors={errors.gender}
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
              errors={errors.profileImage}
              value="profileImage"
            >
              <InputFile
                name="profileImage"
                btn="browse"
                handleChange={handleChange}
              />
            </InlineGroup>

            {/* BUTTONS */}
            <InputContainer>
              {apiError && (
                <div className="btn__errors">
                  <Errors errors={apiError} />
                </div>
              )}
              <Button
                styles="btn btn__primary btn--full btn--dark"
                type="submit"
                label="Create Account"
                form="create-account"
              />
              <Button
                styles="btn btn--full btn__plain"
                type="reset"
                label="Reset"
                handleEvent={hanldleReset}
              />
            </InputContainer>
          </Form>
        )}
      </Main>
    </div>
  );
};

export default App;
