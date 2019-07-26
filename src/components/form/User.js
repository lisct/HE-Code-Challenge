import React from "react";
// eslint-disable-next-line
import { formatBirthday, getAge } from "../utilities";

const User = ({
  name,
  image,
  email,
  birthday,
  zipcode,
  gender,
  newsletter
}) => {
  const profileStyle = { backgroundImage: "url(" + image + ")" };
  const imgDefault = { backgroundImage: "url(/images/user.svg)" }; // if image fail

  return (
    <div className="user">
      <input type="checkbox" className="user_more_state" id={name} />

      <div className="user__image">
        <div style={typeof image === "string" ? profileStyle : imgDefault} />
      </div>

      <div className="user__description">
        <p className="user__name">{name}</p>
        <p className="user__email">{email}</p>

        <div className="user__info">
          <p className="user__info-data user_more_target">
            <span>Age:</span> {birthday.getAge()}{" "}
          </p>
          <p className="user__info-data user_more_target">
            <span>Brithday:</span> {birthday.formatBirthday()}
          </p>
          <p className="user__info-data user_more_target">
            <span>Zipcode:</span> {zipcode}
          </p>
          <p className="user__info-data user_more_target">
            <span>Gender:</span>{" "}
            {(gender === "F" && "Female") ||
              (gender === "M" && "Male") ||
              (gender === "non-binary" && "Non-Binary") ||
              (gender === "other" && "Other")}
          </p>
          <p className="user__info-data user_more_target">
            <span>Newsletter:</span> {newsletter ? "Yes" : "No"}
          </p>
        </div>
      </div>

      <div className="user__more">
        <label htmlFor={name} className="user_more_trigger"></label>
      </div>
    </div>
  );
};

export default User;
