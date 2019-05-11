var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

var database = mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

database.then((db) => {
    console.log('Database connection estabalished');
}).catch((error) => {
    console.log("Unable to connect", error);    
});


module.exports = {
  mongoose  
};