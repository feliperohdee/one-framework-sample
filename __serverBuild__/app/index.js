"use strict";
var one_framework_1 = require('one-framework');
exports.one = one_framework_1.one;
exports.Sync = one_framework_1.Sync;
var components_1 = require('./components');
var collections_1 = require('./collections');
var todos = collections_1.TodosCollection.instance;
one_framework_1.one.url = process.env.NODE_ENV === 'production' ? 'https://one-framework-sample.herokuapp.com' : 'http://localhost:3000';
one_framework_1.one.routes = {
    path: '/',
    component: components_1.MainComponent,
    prefetch: function () {
        return todos.fetch();
    },
    indexRoute: {
        component: components_1.TodosComponent,
        prefetch: function () {
            return todos.stream
                .first()
                .map(function () { return ({ todos: todos.get() }); });
        }
    },
    childRoutes: [{
            path: '/:status',
            component: components_1.TodosComponent,
            prefetch: function (params) {
                return todos.stream
                    .first()
                    .map(function () { return ({ todos: todos.filter(params.status) }); });
            }
        }]
};
//# sourceMappingURL=index.js.map