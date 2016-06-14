"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var one_framework_1 = require('one-framework');
var Todo = (function (_super) {
    __extends(Todo, _super);
    function Todo() {
        _super.call(this);
        this.defaults = {
            text: '',
            done: false
        };
    }
    Todo.prototype.done = function () {
        this.set({ done: true })
            .save()
            .subscribe();
    };
    Todo.prototype.remove = function () {
        this.destroy()
            .delete()
            .subscribe();
    };
    return Todo;
}(one_framework_1.Model));
exports.Todo = Todo;
//# sourceMappingURL=Todo.js.map