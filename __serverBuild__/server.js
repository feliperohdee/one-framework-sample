"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app_1 = require('./app');
var path_1 = require('path');
var Http_1 = require('./bin/Http');
var one_request_transport_1 = require('one-request-transport');
var DataStore_1 = require('./DataStore');
var http = new Http_1.Http();
var app = express();
var server = http.createServer(app);
var dataStore = new DataStore_1.DataStore();
app_1.Sync.registerTransport('request', new one_request_transport_1.Request());
app_1.Sync.defaultTransports = ['request'];
app.use('/__clientBuild__', express.static(path_1.join(__dirname, '../__clientBuild__')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', path_1.join(__dirname, '../views'));
app.set('view engine', 'hbs');
app.get('/api/v1/todos', function (req, res) {
    res.json(dataStore.fetch());
});
app.post('/api/v1/todos', function (req, res) {
    res.json(dataStore.add(req.body));
});
app.put('/api/v1/todos/:id', function (req, res) {
    res.json(dataStore.put(req.params.id, req.body));
});
app.delete('/api/v1/todos/:id', function (req, res) {
    res.json(dataStore.delete(req.params.id));
});
app.get(['/', '/done'], function (req, res) {
    app_1.one.serverBootstrap(req.url)
        .subscribe(function (_a) {
        var component = _a.component, contextScript = _a.contextScript;
        res.render('index', { component: component, contextScript: contextScript });
    });
});
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.end(JSON.stringify({
        message: err.message,
        error: err
    }));
});
//# sourceMappingURL=server.js.map