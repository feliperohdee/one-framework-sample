"use strict";
var _ = require('lodash');
var DataStore = (function () {
    function DataStore() {
        var _this = this;
        this.id = 0;
        this.data = _.times(10, function (id) {
            _this.id = id;
            return {
                id: _this.id,
                text: "task-" + _this.id
            };
        });
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
        data = _.extend({
            id: ++this.id
        }, data);
        this.data.push(data);
        return data;
    };
    DataStore.prototype.put = function (id, data) {
        var todo = this.get(Number(id));
        if (!todo) {
            return;
        }
        return _.extend(todo, data);
    };
    DataStore.prototype.delete = function (id) {
        var todo = this.get(Number(id));
        var index = this.getIndex(Number(id));
        if (index < 0) {
            return;
        }
        _.pullAt(this.data, [index]);
        return todo;
    };
    return DataStore;
}());
exports.DataStore = DataStore;
//# sourceMappingURL=DataStore.js.map