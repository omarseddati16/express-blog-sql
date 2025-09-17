const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Illuminati$10',
  database: 'blog'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  }
  else {
    console.log('Connected to the server')
  }
})

module.exports = connection;