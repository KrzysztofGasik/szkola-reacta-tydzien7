async function getUsers(state) {
  let res = await fetch("https://randomuser.me/api/?results=10");
  let data = await res.json();
  const apiUsers = Object.values(data)[0];
  state(apiUsers);
}

export default getUsers;
