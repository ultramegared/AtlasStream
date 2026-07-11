class User {
  constructor() {
    this.id = null;
    this.name = "";
    this.email = "";
    this.password = "";
    this.accountType = "FREE";
    this.favorites = [];
    this.continueWatching = [];
    this.history = [];
    this.createdAt = new Date();
  }
}

module.exports = User;