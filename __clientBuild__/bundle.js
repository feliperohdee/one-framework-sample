webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var app_1 = __webpack_require__(2);
	app_1.one.bootstrap();


/***/ },

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	var one_framework_1 = __webpack_require__(4);
	exports.one = one_framework_1.one;
	exports.Sync = one_framework_1.Sync;
	var components_1 = __webpack_require__(599);
	var collections_1 = __webpack_require__(601);
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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 599:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Main_1 = __webpack_require__(600);
	exports.MainComponent = Main_1.Main;
	var Todos_1 = __webpack_require__(605);
	exports.TodosComponent = Todos_1.Todos;
	var Todo_1 = __webpack_require__(606);
	exports.TodoComponent = Todo_1.Todo;
	var Input_1 = __webpack_require__(607);
	exports.InputComponent = Input_1.Input;


/***/ },

/***/ 600:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(13);
	var one_framework_1 = __webpack_require__(4);
	var react_router_1 = __webpack_require__(521);
	var collections_1 = __webpack_require__(601);
	var Main = (function (_super) {
	    __extends(Main, _super);
	    function Main(props) {
	        _super.call(this, props);
	        this.collection = collections_1.TodosCollection.instance;
	    }
	    Main.preServer = function () {
	        return collections_1.TodosCollection.instance.fetch({
	            reset: true
	        });
	    };
	    Main.prototype.render = function () {
	        return (React.createElement("section", null, React.createElement("div", {className: "ui pointing menu"}, React.createElement(react_router_1.Link, {className: "item", activeClassName: "active", onlyActiveOnIndex: true, to: "/"}, "All"), React.createElement(react_router_1.Link, {className: "item", activeClassName: "active", to: "/done"}, "Done"), React.createElement("div", {className: "right menu"}, React.createElement("a", {className: "item", href: "https://github.com/feliperohdee/one-framework-sample"}, "Source"))), this.props.children));
	    };
	    return Main;
	}(one_framework_1.Component));
	exports.Main = Main;


/***/ },

/***/ 601:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Todos_1 = __webpack_require__(602);
	exports.TodosCollection = Todos_1.Todos;


/***/ },

/***/ 602:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var one_framework_1 = __webpack_require__(4);
	var models_1 = __webpack_require__(603);
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


/***/ },

/***/ 603:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Todo_1 = __webpack_require__(604);
	exports.TodoModel = Todo_1.Todo;


/***/ },

/***/ 604:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var one_framework_1 = __webpack_require__(4);
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
	        this.delete()
	            .subscribe();
	    };
	    return Todo;
	}(one_framework_1.Model));
	exports.Todo = Todo;


/***/ },

/***/ 605:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var _ = __webpack_require__(11);
	var React = __webpack_require__(13);
	var one_framework_1 = __webpack_require__(4);
	var collections_1 = __webpack_require__(601);
	var _1 = __webpack_require__(599);
	var Todos = (function (_super) {
	    __extends(Todos, _super);
	    function Todos(props) {
	        _super.call(this, props);
	        this.todos = collections_1.TodosCollection.instance;
	        this.setInitialState({
	            todos: this.todos.filter(props.params.status)
	        });
	    }
	    Todos.prototype.componentDidMount = function () {
	        var _this = this;
	        this.todos.on('set', 'remove')
	            .merge(this.onRoute.mapTo(this.todos))
	            .takeUntil(this.onUnmount)
	            .map(function (todos) { return todos.filter(_this.props.params.status); })
	            .subscribe(function (todos) { return _this.setState({ todos: todos }); });
	    };
	    Todos.prototype.render = function () {
	        var todos = this.state.todos.map(function (todo) { return React.createElement(_1.TodoComponent, {key: todo.cid, todo: todo}); });
	        return (React.createElement("section", {className: "ui divided list"}, _.size(todos) ? todos : React.createElement("div", {className: "item"}, "No todos"), React.createElement(_1.InputComponent, {todos: this.todos})));
	    };
	    return Todos;
	}(one_framework_1.Component));
	exports.Todos = Todos;


/***/ },

/***/ 606:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(13);
	var one_framework_1 = __webpack_require__(4);
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


/***/ },

/***/ 607:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(13);
	var one_framework_1 = __webpack_require__(4);
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


/***/ }

});
//# sourceMappingURL=bundle.js.map