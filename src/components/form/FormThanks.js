import React from "react";

import FormHeader from "./FormHeader";
import User from "./User";

const FormThanks = ({ users }) => (
  <div className="form">
    <FormHeader copy="CONGRATS! Thanks for joining." />
    {console.log(users[0].newsletter)}
    <div className="form__container">
      <div className="form__users">
        {users.map((user, i) => (
          <User
            key={users[i].name}
            name={users[i].name}
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
