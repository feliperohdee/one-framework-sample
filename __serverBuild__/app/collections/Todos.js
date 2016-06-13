"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var one_framework_1 = require('one-framework');
var models_1 = require('../models');
var Todos = (function (_super) {
    __extends(Todos, _super);
    function Todos() {
        _super.call(this, models_1.TodoModel);
        this.resource = '/api/v1/todos';
        this.defaultOrder = {
            done: 'desc',
            text: 'asc'
        };
    }
    Object.defineProperty(Todos, "instance", {
        get: function () {
            return one_framework_1.utils.exportSingleton(Todos);
        },
        enumerable: true,
        configurable: true
    });
    Todos.prototype.add = function (text) {
        this.set({ text: text });
    };
    return Todos;
}(one_framework_1.Collection));
exports.Todos = Todos;
//# sourceMappingURL=Todos.js.map