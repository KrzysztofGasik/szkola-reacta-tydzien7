import React from "react";

import "./User.css";

export default function User({ name, location, email, registered, picture }) {
  const date = new Date(registered.date).toLocaleDateString();
  const isAddressValid = Object.keys(location).length === 0;
  const isNameValid = Object.keys(name).length === 0;
  return (
    <div className="user">
      <div className="user__image">
        <img src={`${picture.large}`} alt="img" />
      </div>
      <div className="user__description">
        <p>
          <span className="user__description--bold">First name: </span>
          {isNameValid ? "Nie przekazano imienia" : name.first}
        </p>
        <p>
          <span className="user__description--bold">Last name: </span>
          {isNameValid ? "Nie przekazano nazwiska" : name.last}
        </p>
        <p>
          <span className="user__description--bold">City: </span>
          {isAddressValid ? "brak" : location.city}
        </p>
        <p>
          <span className="user__description--bold">Street: </span>
          {isAddressValid ? "brak" : location.street.name}
          {isAddressValid ? "brak" : location.street.number}
        </p>
        <p>
          <span className="user__description--bold">Email: </span> {email}
        </p>
        <p>
          <span className="user__description--bold">Registered date: </span>
          {date}
        </p>
      </div>
    </div>
  );
}
