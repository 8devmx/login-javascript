const logOut = () => {
  sessionStorage.removeItem('token')
  window.location = '/index.html'
}

const logoutButton = document.querySelector("#logoutButton")

logoutButton.addEventListener("click", logOut)
