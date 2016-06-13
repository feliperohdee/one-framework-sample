"use strict";
var _ = require('lodash');
var DataStore = (function () {
    function DataStore() {
        this.data = _.times(10, function (id) { return ({
            id: id,
            text: "task-" + id
        }); });
    }
    DataStore.prototype.fetch = function () {
        return this.data;
    };
    DataStore.prototype.get = function (id) {
        return _.find(this.data, { id: id });
    };
    DataStore.prototype.getIndex = function (id) {
        return _.findIndex(this.data, { id: id });
    };
    DataStore.prototype.add = function (data) {
        this.data.push(data);
        return data;
    };
    DataStore.prototype.put = function (id, data) {
        var todo = this.get(id);
        if (!todo) {
            return;
        }
        return _.extend(todo, data);
    };
    DataStore.prototype.delete = function (id) {
        var todo = this.get(id);
        var index = this.getIndex(id);
        if (index <= 0) {
            return;
        }
        _.pullAt([index]);
        return todo;
    };
    return DataStore;
}());
exports.DataStore = DataStore;
//# sourceMappingURL=mockedDataStore.js.map