"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var one_framework_1 = require('one-framework');
var Todo = (function (_super) {
    __extends(Todo, _super);
    function Todo(props) {
        var _this = this;
        _super.call(this, props);
        this.lastSet = props.todo.lastSet;
        this.fromPool('onDone')
            .subscribe(function (e) {
            e.stopPropagation();
            _this.props.todo.done();
        });
        this.fromPool('onDestroy')
            .subscribe(function (e) {
            e.stopPropagation();
            _this.props.todo.remove();
        });
    }
    Todo.prototype.shouldComponentUpdate = function (nextProps) {
        var shouldUpdate = false;
        if (this.lastSet !== nextProps.todo.lastSet) {
            this.lastSet = nextProps.todo.lastSet;
            shouldUpdate = true;
        }
        return shouldUpdate;
    };
    Todo.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", {className: 'item ' + (this.props.todo.get('done') ? 'done' : ''), onClick: function (e) { return _this.toPool('onDone', e); }}, React.createElement("div", {className: "right floated content"}, React.createElement("button", {className: "ui icon red circular button", onClick: function (e) { return _this.toPool('onDestroy', e); }}, React.createElement("i", {className: "trash icon"}))), React.createElement("div", {className: "content text"}, React.createElement("i", {className: 'icon ' + (this.props.todo.get('done') ? 'checkmark box' : 'square outline')}), this.props.todo.get('text'))));
    };
    return Todo;
}(one_framework_1.Component));
exports.Todo = Todo;
//# sourceMappingURL=Todo.js.map