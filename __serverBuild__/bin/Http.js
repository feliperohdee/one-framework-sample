"use strict";
var http_1 = require('http');
var Http = (function () {
    function Http() {
        this.port = process.env.PORT || 3000;
    }
    Http.prototype.createServer = function (app) {
        var _this = this;
        if (this.server) {
            return this.server;
        }
        this.server = http_1.createServer(app);
        this.server.listen(this.port);
        this.server.on('listening', function () {
            var addr = _this.server.address();
            console.log("Listening on " + addr.port);
        });
        return this.server;
    };
    return Http;
}());
exports.Http = Http;
//# sourceMappingURL=Http.js.map