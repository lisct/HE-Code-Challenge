import React from "react";

import FormHeader from "./FormHeader";
import User from "./User";

const FormThanks = ({ users }) => (
  <div className="form">
    <FormHeader copy="CONGRATS! Thanks for joining." />
    <div className="form__container">
      <div className="form__users">
        {users.map((user, i) => (
          <User
            key={users[i].name}
            name={users[i].name}
            image={users[i].profileImage}
            email={users[i].email}
            birthday={users[i].birthday}
            zipcode={users[i].zip}
            gender={users[i].gender}
            newsletter={users[i].newsletter}
          />
        ))}
      </div>
    </div>
  </div>
);

export default FormThanks;
