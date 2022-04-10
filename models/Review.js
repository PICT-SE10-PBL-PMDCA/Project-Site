const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
mongoose.connect(
  `${process.env.DATABASE_USERINFO}`,
  {
    useNewUrlParser: true
  },
  () => {
    console.log('Database connected!')
  }
)
var Schema = mongoose.Schema

var ReviewSchema = new Schema({
  Username: {
    type: String,
    required: true
  },
  ISBN: {
    type: String,
    required: true
  },
  Rating: {
    type: double,
    required: true
  },
  Review: {
    type: String,
    required: true
  }
})

var ReviewDB = mongoose.model('UserInfo', ReviewSchema)
module.exports = { ReviewDB }