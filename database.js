let mongoose = require('mongoose');

mongoose.Promise = global.Promise;

/* Local access */
//mongoose.connect(`mongodb://${process.env.MONGO_DB_HOST}:${process.env.MONGO_DB_PORT}/${process.env.MONGO_DB_DATABASE}`, {useNewUrlParser: true});

/* Remote access */
mongoose.connect(`mongodb+srv://elnixenergy:${process.env.MONGO_DB_PASSWORD}@dbservergestao-rwgoh.gcp.mongodb.net/${MONGO_DB_DATABASE}?retryWrites=true&w=majority`, {useNewUrlParser: true});

//mongodb+srv://elnixenergy:<password>@dbservergestao-rwgoh.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority

module.exports = mongoose;
