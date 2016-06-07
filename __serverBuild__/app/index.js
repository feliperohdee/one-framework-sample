"use strict";
var rxjs_1 = require('rxjs');
var one_framework_1 = require('one-framework');
exports.one = one_framework_1.one;
var components_1 = require('./components');
var collections_1 = require('./collections');
var todos = new collections_1.TodosCollection();
one_framework_1.one.routes = {
    path: '/',
    component: components_1.MainComponent,
    prefetch: function (params) {
        return todos.stream
            .map(function (todos) { return ({ todos: todos }); })
            .first();
    },
    indexRoute: {
        component: components_1.TodosComponent,
        prefetch: function (params) {
            return rxjs_1.Observable.of(params.prefetchedData.todos)
                .map(function (todos) { return todos.get(); })
                .map(function (todos) { return ({ todos: todos }); });
        }
    },
    childRoutes: [{
            path: '/:status',
            component: components_1.TodosComponent,
            prefetch: function (params) {
                return rxjs_1.Observable.of(params.prefetchedData.todos)
                    .map(function (todos) { return todos.filter(params.status); })
                    .map(function (todos) { return ({ todos: todos }); });
            }
        }]
};
//# sourceMappingURL=index.js.map