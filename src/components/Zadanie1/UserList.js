import React, { useState, useEffect } from "react";

import "./UserList.css";
import User from "./User";

export default function UserList() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    let res = await fetch("https://randomuser.me/api/?results=10");
    let data = await res.json();
    return data;
  }

  useEffect(() => {
    getUsers()
      .then((data) => {
        const apiUsers = Object.values(data)[0];
        setUsers(apiUsers);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="userlist">
      {users === undefined ? (
        <p>Loading</p>
      ) : (
        users.map((user, index) => {
          const { name, location, email, registered, picture } = user;
          return (
            <User
              key={index}
              name={name}
              location={location}
              email={email}
              registered={registered}
              picture={picture}
            />
          );
        })
      )}
    </div>
  );
}
