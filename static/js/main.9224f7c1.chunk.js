(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(6),r=n.n(c),l=n(1),i=n(2),s=n(4),u=n(3);n(12);var m=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={isClockVisible:!0,clockName:0},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.isClockVisible,a=t.clockName;return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"React clock \u2116",a),o.a.createElement("p",null,"Current time:",n&&o.a.createElement(p,{isClockVisible:n,name:a}),o.a.createElement("button",{className:"button",type:"button",onClick:function(){return e.setState({isClockVisible:!0})}},"Show Clock"),o.a.createElement("button",{className:"button",type:"button",onClick:function(){return e.setState({isClockVisible:!1})}},"Hide Clock"),o.a.createElement("button",{className:"button",type:"button",onClick:function(){return e.setState({clockName:(t=10,Math.floor(Math.random()*Math.floor(t)))});var t}},"Set random name")))}}]),n}(o.a.Component),p=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={date:(new Date).toLocaleTimeString()},e.interval=null,e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){console.log((new Date).toLocaleTimeString()),e.setState({date:(new Date).toLocaleTimeString()})}),1e3)}},{key:"componentDidUpdate",value:function(e){var t=this.props.name;e.name!==t&&console.log("The Clock was renamed from ".concat(e.name," to ").concat(t))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null," ".concat(this.state.date," "))}}]),n}(o.a.Component);p.defaultProps={name:0};var b=m;r.a.render(o.a.createElement(b,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.9224f7c1.chunk.js.map