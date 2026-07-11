class UserService {
  createUser(userData) {
    return {
      message: "Usuario creado correctamente",
      user: userData
    };
  }

  getProfile(user) {
    return user;
  }
}

module.exports = new UserService();