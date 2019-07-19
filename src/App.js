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

function App() {
  return (
    <div className="App grid-container">
      <Header />
      <Main>
        <Form>
          {/* INPUTS */}

          <Input desc="Error message" name="name" type="text" label="Name" />
          <Input desc="Error message" name="email" type="text" label="Email" />
          <Input
            desc="Error message"
            name="zipcode"
            type="text"
            label="zipcode"
          />
          <Input
            note="true"
            func="Show password"
            desc="Error message"
            name="password"
            type="text"
            label="password"
          />
          <Input
            desc="Error message"
            name="confirmation"
            type="text"
            label="confirm password"
          />

          {/* RADIOS */}

          <InlineGroup
            subtitle={
              <FormSubtitle copy="gender identity" req="true"></FormSubtitle>
            }
          >
            <Radio name="male" label="male" group="gender" />
            <Radio name="female" label="female" group="gender" />
            <Radio name="non-binary" label="non-binary" group="gender" />
          </InlineGroup>

          {/* CHECKBOX */}

          <InlineGroup
            subtitle={
              <FormSubtitle copy="subscribe to newsletter"></FormSubtitle>
            }
          >
            <Checkbox label="yes" name="yes" />
          </InlineGroup>

          {/* INPUT FILE */}

          <InlineGroup
            subtitle={
              <FormSubtitle
                copy="Upload your profile pic"
                req="true"
              ></FormSubtitle>
            }
          >
            <InputFile name="profile-pic" btn="browse" />
          </InlineGroup>

          {/* BUTTONS */}

          <InputContainer>
            <Button
              styles="btn btn__primary btn--full btn--dark"
              type="submit"
              label="Create Account"
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
}

export default App;
