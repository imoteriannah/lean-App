function SetActiveTask() {
  const clicked = document.querySelectorAll(".main_navigation_item");
  clicked.addEventListener("click", () => this.classList.add("active"));
}

function fetchUser() {
  const entry = document.querySelector("#search_text");
  //   http://localhost:3000/users
  return fetch("http://localhost:3000/users")
    .then(function (response) {
      return response.json();
    })
    .then(function (obj) {
      console.log(obj);
      return renderUser(obj);
    });
}
function addUser() {
  // display a form earlier hidden to collect user data
  // using POST, add the data to the db.json file
}

function deleteUser() {
  //   get a username
  //search the db.json to get the ID for the user
  //delete user with the ID
}

function modifyUser() {
  // display form earlier hidden to get user
  //  query the db.json file to return the record
  //populate the user data in the modify form and edit the options you want
  // click modify button to submit edited data
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
  //fetchUser();
  const search = document.querySelector("#submit");
  search.addEventListener("submit", fetchUser());
});
