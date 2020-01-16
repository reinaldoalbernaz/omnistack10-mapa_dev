const mongoosse = require('mongoose');

const DevSchema = new mongoosse.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String]
});

module.exports = mongoosse.model('Dev', DevSchema);