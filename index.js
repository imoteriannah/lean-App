function fetchUser() {
  const entry = document.querySelector("#search_text");
  //   http://localhost:3000/users
  return fetch("http://localhost:3000/users")
    .then(function (response) {
      return response.json();
    })
    .then(function (obj) {
      return renderUser(obj);
    });
}
function addUser() {
  //   http://localhost:3000/users
}

function deleteUser() {
  //   http://localhost:3000/users
}

function modifyUser() {
  //   http://localhost:3000/users
}

function renderUser(user) {
  const content = document.querySelector("#content");
  user.forEach((user) => {
    const userContainer = document.createElement("div");
    userContainer.classList.add("user_profile");
    const username = document.createElement("h2");
    username.classList.add("user_profile_info");
    username.innerHTML = `Name: ${user.userName}`;
    const profession = document.createElement("h2");
    profession.classList.add("user_profile_info");
    profession.innerHTML = `Profession: ${user.userProfession}`;
    const location = document.createElement("h2");
    location.classList.add("user_profile_info");
    location.innerHTML = `Country: ${user.userLocation}`;
    const age = document.createElement("h2");
    age.classList.add("user_profile_info");
    age.innerHTML = `Age: ${user.userAge}`;
    content.appendChild(userContainer);
    userContainer.appendChild(username);
    userContainer.appendChild(profession);
    userContainer.appendChild(location);
    userContainer.appendChild(age);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  //   const data = require("./db.json");
  const search = document.querySelector("#submit");
  search.addEventListener("click", fetchUser());
});
