function fetchUser() {
  // To pass the tests, don't forget to return your fetch!
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
    const h2 = document.createElement("h2");
    h2.innerHTML = user.userName;
    content.appendChild(h2);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const search = document.querySelector("#submit");
  search.addEventListener("click", fetchUser());
});
