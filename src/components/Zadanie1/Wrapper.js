import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserDetails from "./UserDetails";
import UserList from "./UserList";

export default function Wrapper() {
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
    <Router>
      <Switch>
        <Route path="/users/:id">
          <UserDetails data={users} />
        </Route>
        <Route path="/">
          <UserList data={users} />
        </Route>
      </Switch>
    </Router>
  );
}
