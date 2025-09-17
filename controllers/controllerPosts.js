
const connection = require('../data/dataBase')

// porta index
const index = (req, res) => {
  const sql = 'SELECT * FROM posts';
  connection.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Errore della query: " + err });
    }
    res.json(results);
  });

};
// porta show
const show = (req, res) => {

};
// porta store
const store = (req, res) => {

};
// porta update
const update = (req, res) => {

};
// porta modify
const modify = (req, res) => {

};
// porta destroy
const destroy = (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE from posts WHERE id = ?'
  connection.query(sql, [id], (err) => {
    if (err) {
      return res.status(500).json({ error: "Errore della query: " + err });
    }
    res.sendStatus(204);
  });
};

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
};