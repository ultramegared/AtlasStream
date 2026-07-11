const Content = require("../models/Content");

class ContentService {
  getAll() {
    return [
      new Content({
        id: 1,
        title: "John Wick",
        description: "Película de acción",
        type: "movie",
        category: "Acción",
        poster: "/images/johnwick.jpg",
        video: "/videos/johnwick.mp4",
        year: 2023,
        duration: 169,
        rating: 9.2,
        isPremium: true
      }),

      new Content({
        id: 2,
        title: "Tom y Jerry",
        description: "Serie clásica",
        type: "cartoon",
        category: "Infantil",
        poster: "/images/tomjerry.jpg",
        video: "/videos/tomjerry.mp4",
        year: 1998,
        duration: 25,
        rating: 9.8,
        isPremium: false
      })
    ];
  }
}

module.exports = new ContentService();