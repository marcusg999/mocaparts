// Grabs the functions and definitions for the mongo database
var mongoose = require('mongoose')
​
// Sets a variable to a mongo db schema
var userSchema = mongoose.Schema({
  event: String,
  location: String,

​
// Exports a 'User' model based on the mongo schema, userSchema
module.exports = mongoose.model('User', userSchema)


