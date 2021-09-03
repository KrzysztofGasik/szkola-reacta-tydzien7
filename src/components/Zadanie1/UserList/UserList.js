import React from "react";

import "./UserList.css";
import User from "../User";

export default function UserList({ data }) {
  return (
    <div className="userlist">
      {data.map((user) => (
        <User key={user.login.uuid} data={user} />
      ))}
    </div>
  );
}
