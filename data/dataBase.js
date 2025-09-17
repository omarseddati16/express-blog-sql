const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Asdrubalitico$10',
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