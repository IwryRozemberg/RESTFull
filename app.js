const
    http = require("http"),
    express = require('express'),
    status = require('http-status'),
    spoilersRoute = require('./src/routes/spoiler.js'),
    sequelize = require('./src/database/database.js');
const app = express();

// app.use(express.static('src'));

app.use(express.json());

app.use('/api', spoilersRoute);

app.use((request, response, next) => {
    response.status(status.NOT_FOUND).send();
});

app.use((error, request, response, next) => {
    response.status(status.INTERNAL_SERVER_ERROR).json({ error });
});

sequelize.sync().then(() => { //{ force: true } para forcar apagar e recriar tabelas
    const port = process.env.PORT || 3000;
    app.set('port', port);
    const server = http.createServer(app);
    server.listen(port);
});