// Routes
module.exports = (app) => {
    const bookmarksController = require('../controllers/bookmarks');
    app.use('/bookmarks', bookmarksController);
}