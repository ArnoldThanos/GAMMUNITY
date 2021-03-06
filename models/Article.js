const mongoose = require('mongoose');

const { Schema } = mongoose;

const articleSchema = new Schema({
  title: String,
  text: String,
  photo: { type: String, default: 'https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png' },
  photoName: String,
  // _idUsername: String,
  // _idUserphoto: String,
  rate: { type: Number, default: 1 },
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  comment: String,
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
