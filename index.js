function fetchUser() {
  const entry = document.querySelector("#search_text");

  return fetch("http://localhost:3000/users")
    .then(function (response) {
      return response.json();
    })
    .then(function (obj) {
      return renderUser(obj);
    });
}

function renderUser(user) {
  const content = document.querySelector("#content");
  user.forEach((user) => {
    const userContainer = document.createElement("div");
    userContainer.classList.add("user_profile");
    const username = document.createElement("h2");
    username.innerHTML = user.userName;
    const profession = document.createElement("h2");
    profession.innerHTML = user.userProfession;
    const location = document.createElement("h2");
    location.innerHTML = user.userLocation;
    const age = document.createElement("h2");
    age.innerHTML = user.userAge;
    content.appendChild(userContainer);
    userContainer.appendChild(username);
    userContainer.appendChild(profession);
    userContainer.appendChild(location);
    userContainer.appendChild(age);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const search = document.querySelector("#submit");
  search.addEventListener("click", fetchUser());
});
