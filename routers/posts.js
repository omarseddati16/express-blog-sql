//  recupero i dati express
const express = require('express');

const router = express.Router()

// recupero le rotte con il destructuring
const { index, show, store, update, modify, destroy } = require('../controllers/controllerPosts');
// definisco le rotte
router.get('/', index);

router.get('/:id', show);

router.post('/', store);

router.put('/:id', update);

router.patch('/:id', modify);

router.delete('/:id', destroy);

module.exports = router;