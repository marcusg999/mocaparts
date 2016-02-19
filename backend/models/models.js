// Grabs the functions and definitions for the mongo database
var mongoose = require('mongoose')
​
// Sets a variable to a mongo db schema
var userSchema = mongoose.Schema({
  username: String,
  password: String,
  points: {
    equation: {type: Number, default: 0},
    expression: {type: Number, default: 0},
    sat: {type: Number, default: 0}
  },
  level: {type: Number, default: 1},
  picUrl: {type: String, default: ""}
})
​
// Exports a 'User' model based on the mongo schema, userSchema
module.exports = mongoose.model('User', userSchema)

    calendar:
      "weekday": " 3/21/16",
      "title": "Audition || Dreamworks Demo",
      "description": "Casting motion capture actors for a variety of principal roles on an upcoming Playstation video game. LOCATION: Los Angeles, CA 1234 VidGam Ave 11am-3pm",
      "schedule": [
         {

          "time": "3/22/16 11:00am-1pm",
          "shortname": "Hassum_Harrod",
          "name": "Hassum Harrod",
          "location": "Victoria Hall",
          "description": "The lovely And talented Hassum Harrod will guide us into the wonderous world of artistic trapeze LOCATION: Los Angeles, CA 1234 trapeze Ave ",
          "title": "EVENT || Art in trapeze"
        }

      ]
