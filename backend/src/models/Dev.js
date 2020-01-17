const mongoosse = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const DevSchema = new mongoosse.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = mongoosse.model('Dev', DevSchema);