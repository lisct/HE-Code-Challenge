import React from "react";

const getAge = birthDate =>
  Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

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

  return (
    <div className="user">
      <input type="checkbox" className="user_more_state" id={name} />

      <div className="user__image">
        <div style={profileStyle} />
      </div>

      <div className="user__description">
        <p className="user__name">{name}</p>
        <p className="user__email">{email}</p>

        <div className="user__info">
          <p className="user__info-data user_more_target">
            <span>Age:</span>
            {getAge(birthday)}
          </p>
          <p className="user__info-data user_more_target">
            <span>Brithday:</span> {birthday}
          </p>
          <p className="user__info-data user_more_target">
            <span>Zipcode:</span> {zipcode}
          </p>
          <p className="user__info-data user_more_target">
            <span>Gender:</span> {gender}
          </p>
          <p className="user__info-data user_more_target">
            <span>Newsletter:</span> {newsletter ? "Yes" : "no"}
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
