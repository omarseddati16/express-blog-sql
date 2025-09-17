// recupero i dati express
const express = require('express');
// definizione della variabile app che contine l'istanza di express
const app = express()
// definizione della porta in cui far rimanere in ascolto il server
const port = 3000
// middleware per i file statici (foto)
app.use(express.static('imgs/posts'))
// prendo i middlewares
const notFound = require('./Middlewares/notFound');

const errorHandler = require('./Middlewares/errorHandler');
// prendo il file posts
const postsRouter = require('./routers/posts');
// utilizzo il body parser json per recuperare le informazioni dal body di una richista
app.use(express.json())
// definizione rotta base
app.get('/', (req, res) => {
  res.json(posts);
});
// utilizzo posts
app.use('/posts', postsRouter);
// utilizzo i middlewares
app.use(notFound);

app.use(errorHandler);
// server in ascolto sulla porta 3000 
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});


