const userService = require("../services/userService");

class UserController {
  register(req, res) {
    const user = userService.createUser(req.body);

    res.json(user);
  }

  profile(req, res) {
    const profile = userService.getProfile(req.user);

    res.json(profile);
  }
}

module.exports = new UserController();