const content = require("../data/content.json");

class ContentRepository {
    async getHome() {
        return {
            trending: content.slice(0, 2),
            movies: content.filter(item => item.type === "movie"),
            series: content.filter(item => item.type === "series")
        };
    }

    async getById(id) {
        return content.find(item => item.id === Number(id)) || null;
    }
}

module.exports = new ContentRepository();