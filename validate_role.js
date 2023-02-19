token = sessionStorage.getItem('token');
decodedToken = jwt_decode(token)

if (decodedToken?.data?.rol !== 1) {
  window.location = '/index.html'
}