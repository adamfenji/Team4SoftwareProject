const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'classdb.it.mtu.edu',
  user: 'afenjiro',
  password: '@Adam1234',
  database: 'tspgroup4'
})

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database: ' + err.message);
    }
    console.log('Connected to the database');
});

connection.query("SELECT * FROM userLogin", (res) => {
    console.log(res);
})
connection.end()