"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _ = require('lodash');
var React = require('react');
var one_framework_1 = require('one-framework');
var collections_1 = require('../collections');
var _1 = require('./');
var Todos = (function (_super) {
    __extends(Todos, _super);
    function Todos(props) {
        _super.call(this, props);
        this.todos = collections_1.TodosCollection.instance;
        this.setInitialState({
            todos: this.todos.filter(props.params.status)
        });
    }
    Todos.prototype.initSearch = function () {
        var _this = this;
        if (this.searchRef) {
            this.searchRef.search('destroy');
        }
        this.searchRef = $('.ui.search');
        this.searchRef.search({
            fields: {
                title: 'text'
            },
            searchFields: ['text'],
            source: this.todos.map(function (todo) { return todo.pick('text'); }),
            onSelect: function (filterString) { return _this.todos.trigger('filter', filterString.text); }
        });
    };
    Todos.prototype.componentDidMount = function () {
        var _this = this;
        this.initSearch();
        this.todos.on('filter')
            .takeUntil(this.onUnmount)
            .map(function (filterString) { return _this.todos.filter(function (todo) { return todo.equals('text', filterString); }); })
            .subscribe(function (todos) { return _this.setState({ todos: todos }); });
        this.todos.on('set', 'destroy')
            .merge(this.onRoute.mapTo(this.todos))
            .do(function () { return _this.initSearch(); })
            .takeUntil(this.onUnmount)
            .map(function () { return _this.todos.filter(_this.props.params.status); })
            .subscribe(function (todos) { return _this.setState({ todos: todos }); });
    };
    Todos.prototype.render = function () {
        var todos = this.state.todos.map(function (todo) { return React.createElement(_1.TodoComponent, {key: todo.cid, todo: todo}); });
        return (React.createElement("section", {className: "ui divided list"}, _.size(todos) ? todos : React.createElement("div", {className: "item"}, "No todos"), React.createElement(_1.InputComponent, {todos: this.todos})));
    };
    return Todos;
}(one_framework_1.Component));
exports.Todos = Todos;
//# sourceMappingURL=Todos.js.map