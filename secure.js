// secure.js
const credentials = {
  admin: 'admin',
  strongPassword: 'tessss'
};

function validateLogin(username, password) {
  if (username === 'admin' && password === credentials.admin) {
    return 'login.html';
  } else if (password === credentials.strongPassword) {
    return 'admin.html';
  } else {
    return 'login.html';
  }
}
