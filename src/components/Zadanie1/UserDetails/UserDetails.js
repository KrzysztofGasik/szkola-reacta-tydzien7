import { NavLink, useParams } from "react-router-dom";

import "./UserDetails.css";
import User from '../User';

export default function UserDetails({data}) {
  const userData = useParams();
  const searchUser = data.slice(0).filter(user=>user.login.uuid === userData.id)[0];
  return (
    <div className="UserDetails">
        <User data={searchUser} />
        <NavLink to="/">Go back to all users</NavLink>
    </div>
  );
}
