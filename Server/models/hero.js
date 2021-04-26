const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    nickname: {type: String, required: true, unique: true},
    real_name: {type: String, required: true, unique: true},
    origin_descriptions: {type: String, required: true},
    superpowers: {type: String, required: true},
    catch_phrase: {type: String, required: true},
    images: {type: String, required: true},
})

module.exports = model('heroes', schema)