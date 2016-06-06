webpackJsonp([0],{0:function(t,o,n){t.exports=n(1)},1:function(t,o,n){"use strict";var e=n(2);e.one.bootstrap()},2:function(t,o,n){"use strict";var e=n(3),r=n(343);o.one=r.one;var s=n(584),i=n(587),c=new i.TodosCollection;r.one.routes={path:"/",component:s.MainComponent,prefetch:function(t){return c.stream.map(function(t){return{todos:t}}).first()},indexRoute:{component:s.TodosComponent,prefetch:function(t){return e.Observable.of(t.prefetchedData.todos).map(function(t){return t.get()}).map(function(t){return{todos:t}})}},childRoutes:[{path:"/:status",component:s.TodosComponent,prefetch:function(t){return e.Observable.of(t.prefetchedData.todos).map(function(o){return o.filter(t.status)}).map(function(t){return{todos:t}})}}]}},584:function(t,o,n){"use strict";var e=n(585);o.MainComponent=e.Main;var r=n(586);o.TodosComponent=r.Todos;var s=n(591);o.TodoComponent=s.Todo;var i=n(592);o.InputComponent=i.Input},585:function(t,o,n){"use strict";var e=this&&this.__extends||function(t,o){function n(){this.constructor=t}for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e]);t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)},r=n(346),s=n(343),i=n(517),c=function(t){function o(o){t.call(this,o)}return e(o,t),o.prototype.render=function(){return r.createElement("section",null,r.createElement(i.Link,{to:"/"},"All"),r.createElement(i.Link,{to:"/done"},"Done"),this.props.children)},o}(s.Component);o.Main=c},586:function(t,o,n){"use strict";var e=this&&this.__extends||function(t,o){function n(){this.constructor=t}for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e]);t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)},r=n(345),s=n(346),i=n(343),c=n(587),u=n(584),a=function(t){function o(o){t.call(this,o),this.todos=new c.TodosCollection,this.setInitialState({todos:this.prefetchedData?this.prefetchedData.todos:[]})}return e(o,t),o.prototype.componentDidMount=function(){var t=this;this.todos.stream.merge(this.onRoute.mapTo(this.todos)).takeUntil(this.onUnmount).map(function(o){return o.filter(t.props.params.status)}).subscribe(function(o){return t.setState({todos:o})})},o.prototype.render=function(){var t=this.state.todos.map(function(t){return s.createElement(u.TodoComponent,{key:t.cid,todo:t})});return s.createElement("section",{className:"tasks"},s.createElement("ul",null,r.size(t)?t:s.createElement("li",null,"No todos")),s.createElement(u.InputComponent,{todos:this.todos}))},o}(i.Component);o.Todos=a},587:function(t,o,n){"use strict";var e=n(588);o.TodosCollection=e.Todos},588:function(t,o,n){"use strict";var e=this&&this.__extends||function(t,o){function n(){this.constructor=t}for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e]);t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)},r=n(345),s=n(343),i=n(589),c=function(t){function o(){t.call(this,i.TodoModel,r.times(10,function(t){return{text:"task-"+t}})),this.defaultOrder={done:"desc",text:"asc"}}return e(o,t),o}(s.Collection);o.Todos=c},589:function(t,o,n){"use strict";var e=n(590);o.TodoModel=e.Todo},590:function(t,o,n){"use strict";var e=this&&this.__extends||function(t,o){function n(){this.constructor=t}for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e]);t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)},r=n(343),s=function(t){function o(){t.call(this),this.idAttribute="text",this.defaults={text:"",done:!1}}return e(o,t),o}(r.Model);o.Todo=s},591:function(t,o,n){"use strict";var e=this&&this.__extends||function(t,o){function n(){this.constructor=t}for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e]);t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)},r=n(346),s=n(343),i=function(t){function o(o){var n=this;t.call(this,o),this.lastSet=o.todo.lastSet,this.fromPool("onDone").subscribe(function(t){t.stopPropagation(),n.props.todo.set({done:!0})}),this.fromPool("onDestroy").subscribe(function(t){t.stopPropagation(),n.props.todo.destroy()})}return e(o,t),o.prototype.shouldComponentUpdate=function(t){var o=!1;return this.lastSet!==t.todo.lastSet&&(this.lastSet=t.todo.lastSet,o=!0),o},o.prototype.render=function(){var t=this;return r.createElement("li",{className:this.props.todo.get("done")?"done":"",onClick:function(o){return t.toPool("onDone",o)}},this.props.todo.get("text"),r.createElement("button",{onClick:function(o){return t.toPool("onDestroy",o)}},"Remove"))},o}(s.Component);o.Todo=i},592:function(t,o,n){"use strict";var e=this&&this.__extends||function(t,o){function n(){this.constructor=t}for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e]);t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)},r=n(346),s=n(343),i=function(t){function o(o){var n=this;t.call(this,o),this.fromPool("onAddTask").subscribe(function(t){if(13===t.keyCode){var o=t.target,e=o.value;o.value="",n.props.todos.set({text:e})}})}return e(o,t),o.prototype.render=function(){var t=this;return r.createElement("input",{type:"text",placeholder:"Add todo and press enter",onKeyUp:function(o){return t.toPool("onAddTask",o)}})},o}(s.Component);o.Input=i}});
//# sourceMappingURL=bundle.js.map