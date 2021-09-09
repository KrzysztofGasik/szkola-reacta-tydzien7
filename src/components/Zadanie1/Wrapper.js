import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserDetails from "./UserDetails";
import UserList from "./UserList";
import getUsers from "./getUsers";

export default function Wrapper() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(setUsers);
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
