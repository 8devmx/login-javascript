token = sessionStorage.getItem('token')
decodedToken = jwt_decode(token)
console.log(decodedToken)
if (decodedToken?.data.rol != 1) {
  window.location = '/index.html'
}