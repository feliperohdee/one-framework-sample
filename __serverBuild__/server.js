"use strict";
var express = require('express');
var app_1 = require('./app');
var path_1 = require('path');
var Http_1 = require('./bin/Http');
var http = new Http_1.Http();
var app = express();
var server = http.createServer(app);
app.use('/__clientBuild__', express.static(path_1.join(__dirname, '../__clientBuild__')));
app.get('*', function (req, res) {
    app_1.one.serverBootstrap(req.url)
        .subscribe(function (app) {
        res.send("\n\t\t\t<!DOCTYPE html>\n\t\t\t\t<html lang=\"en\">\n\t\t\t\t\t<head>\n\t\t\t\t\t\t<meta charset=\"UTF-8\">\n\t\t\t\t\t\t<meta name=\"viewport\" content=\"initial-scale=1.0, user-scalable=no\" />\n\t\t\t\t\t\t<title>Simple todo list with One Framework</title>\n\t\t\t\t\t\t<base href=\"/\">\n\t\t\t\t\t\t<link rel=\"stylesheet\" href=\"./__clientBuild__/vendor.css\">\n\t\t\t\t\t\t<style>\n\t\t\t\t\t\t\t.container{\n\t\t\t\t\t\t\t\tmargin-top: 25px;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t.item{\n\t\t\t\t\t\t\t\tcursor: pointer!important;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t.item .text{\n\t\t\t\t\t\t\t\tpadding-top: 10px!important;\n\t\t\t\t\t\t\t\tfont-size: 17px;\n\t\t\t\t\t\t\t\tfont-weight: lighter;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t.done{\n\t\t\t\t\t\t\t\ttext-decoration: line-through!important;\n\t\t\t\t\t\t\t\tcolor: #ddd!important;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t</style>\t\n\t\t\t\t\t</head>\n\t\t\t\t\t<body class=\"ui container\">\n\t\t\t\t\t\t<div data-outlet>" + app + "</div>\n\t\t\t\t\t\t<script type=\"text/javascript\" src=\"./__clientBuild__/common.js\"></script>\n\t\t\t\t\t\t<script type=\"text/javascript\" src=\"./__clientBuild__/vendor.js\"></script>\n\t\t\t\t\t\t<script type=\"text/javascript\" src=\"./__clientBuild__/bundle.js\"></script>\n\t\t\t\t\t</body>\n\t\t\t\t</html>\n\t\t\t");
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