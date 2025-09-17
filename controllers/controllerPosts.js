
const post = require('../data/dataBase')
console.log('Sto importando:', post);

// porta index
const index = (req, res) => {
  const sql = 'SELECT * FROM posts';
  post.query(sql, (err, results) => {
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

};
// esporto
module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
};