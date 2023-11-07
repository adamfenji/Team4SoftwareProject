//Please do not change. This is the set up of the server and the connection to the DB

const mongoose = require("mongoose");
const express = require("express");

const app = express();
const PORT = 3000;
const dbName = 'testingDB';
const connectionString = `mongodb+srv://afenjiro:%40Adam1234@activitytrackerdb.8ji6jif.mongodb.net/${dbName}?retryWrites=true&w=majority`;

//Establish a connection to the DB.
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Handle connection events, either error or success.
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(express.json());

const users = require("./routes/users");
app.use('/users', users);


app.listen(PORT, ()=>{ console.log(`Server running on PORT ${PORT}...`)});

