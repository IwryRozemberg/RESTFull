const
    express = require('express'),
    controller = require('../controller/spoiler.js');
const router = express.Router();

router.get('/spoilers/:id', controller.buscarUm);

router.get('/spoilers', controller.buscarTodos);

router.post('/spoilers', controller.criar);

router.put('/spoilers/:id', controller.atualizar);

router.delete('/spoilers/:id', controller.excluir);

module.exports = router;