webpackJsonp([2],{1082:function(e,t,a){try{(function(){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1),r=l(n),u=(a(51),a(71)),d=a(12),f=(l(d),a(100)),o=l(f),s=r.default.createClass({displayName:"person",componentDidMount:function(){o.default.ajax({url:"/api/userinfo",method:"GET"}).done(function(e){(0,o.default)("#firstname").html("First Name: "+e.firstName),(0,o.default)("#lastname").html("Last Name: "+e.lastName),(0,o.default)("#goals").html("Goals: "+e.myGoal+" lbs")})},render:function(){return r.default.createElement("div",{className:"overview-page",key:"calendar"},r.default.createElement("h2",null,"Your Personal Info"),r.default.createElement(u.Jumbotron,{id:"profileJumbo"},r.default.createElement("h2",{id:"firstname"},"First Name:"),r.default.createElement("br",null),r.default.createElement("h2",{id:"lastname"},"Last Name:"),r.default.createElement("br",null),r.default.createElement("h2",{id:"goals"},"Goals:"),r.default.createElement("br",null)))}});t.default=s,e.exports=t.default}).call(this)}finally{}}});