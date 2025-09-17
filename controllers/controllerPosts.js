// recupero i posts 
const posts = require('../data/posts');

// porta index
const index = (req, res) => {
  const tag = req.query.tag;
  if (tag) {
    const filteredPosts = posts.filter(post =>
      post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
    );
    return res.json(filteredPosts);
  }

  res.json(posts);
};
// porta show
const show = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(item => item.id === id);
  if (!post)
    return res.status(404).json({ error: "not found", message: "Post non trovato" });
  res.json(post);
};
// porta store
const store = (req, res) => {
  const newIdPosts = posts[posts.length - 1].id + 1;
  const { name, image, tags } = req.body
  posts.push({
    id: newIdPosts,
    name,
    image,
    tags,
  })
  res.status(201).json(posts);
};
// porta update
const update = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(item => item.id === id);
  if (!post)
    return res.status(404).json({ error: "not found", message: "Post non trovato" });


  post.name = req.body.name
  post.image = req.body.image
  post.tags = req.body.tags

  res.json(post);
};
// porta modify
const modify = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(item => item.id === id);
  if (!post) {
    return res.status(404).json({ error: "not found", message: "Post non trovato" });
  }

  post.tags = req.body.tags;

  res.json(post);
};
// porta destroy
const destroy = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(item => item.id === id);

  if (!post) {
    return res.status(404).json({ error: "not found", message: "Post non trovato" });
  }

  posts.splice(posts.indexOf(post), 1);
  console.log('Lista post aggiornata:', posts);

  res.sendStatus(204);
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