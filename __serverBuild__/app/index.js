"use strict";
var one_framework_1 = require('one-framework');
exports.one = one_framework_1.one;
exports.Sync = one_framework_1.Sync;
var components_1 = require('./components');
var collections_1 = require('./collections');
collections_1.TodosCollection.instance.shareContext('collectionCode');
one_framework_1.one.url = process.env.NODE_ENV === 'production' ? 'https://one-framework-sample.herokuapp.com' : 'http://localhost:3000';
one_framework_1.one.routes = {
    path: '/',
    component: components_1.MainComponent,
    indexRoute: {
        component: components_1.TodosComponent
    },
    childRoutes: [{
            path: '/:status',
            component: components_1.TodosComponent
        }]
};
//# sourceMappingURL=index.js.map