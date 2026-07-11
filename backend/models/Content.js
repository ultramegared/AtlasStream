class Content {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.type = data.type;
    this.category = data.category;
    this.poster = data.poster;
    this.video = data.video;
    this.year = data.year;
    this.duration = data.duration;
    this.rating = data.rating;
    this.isPremium = data.isPremium;
  }
}

module.exports = Content;