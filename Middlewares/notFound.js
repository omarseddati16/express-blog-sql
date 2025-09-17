// middlewares intermediario tra chiamata e risposta
const notFound = (req, res, next) => {
  // parametri principali req: l’oggetto della richiesta, res: l’oggetto della risposta, next: middleware successivo nella catena
  res.status(404).json({
    error: "404 Non Found",
    message: "Pagina non trovata"
  });
}

module.exports = notFound