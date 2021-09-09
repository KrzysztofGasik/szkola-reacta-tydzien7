import { NavLink, useParams } from "react-router-dom";

import "./UserDetails.css";
import User from "../User";
import { useEffect } from "react";

export default function UserDetails({ data }) {
  const userData = useParams();
  const searchUser = data
    .slice(0)
    .filter((user) => user.login.uuid === userData.id)[0];
  const latitude = Number(searchUser.location.coordinates.latitude);
  const longitude = Number(searchUser.location.coordinates.longitude);

  console.log(latitude,longitude)

  useEffect(() => {
    const latitude = Number(searchUser.location.coordinates.latitude);
    const longitude = Number(searchUser.location.coordinates.longitude);
    const L = window.L;
    const map = L.map("map").setView([latitude, longitude], 5);
    L.marker([latitude, longitude]).addTo(map);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  }, [latitude, longitude]);
  return (
    <div className="UserDetails">
      <User data={searchUser} />
      <NavLink to="/">Go back to all users</NavLink>
      <div id="map"></div>
    </div>
  );
}
