"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var one_framework_1 = require('one-framework');
var Input = (function (_super) {
    __extends(Input, _super);
    function Input(props) {
        var _this = this;
        _super.call(this, props);
        this.fromPool('onAddTask')
            .subscribe(function (e) {
            if (e.keyCode === 13) {
                var target = e.target;
                var text = target.value;
                target.value = '';
                _this.props.todos.add(text);
            }
        });
    }
    Input.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", {className: "ui form"}, React.createElement("div", {className: "field"}, React.createElement("label", null, "Add Todo"), React.createElement("input", {type: "text", placeholder: "Add todo and press enter", onKeyUp: function (e) { return _this.toPool('onAddTask', e); }}))));
    };
    return Input;
}(one_framework_1.Component));
exports.Input = Input;
//# sourceMappingURL=Input.js.map