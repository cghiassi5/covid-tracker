'use strict';

var React = require("react");
var ReasonReact = require("reason-react/src/legacy/ReasonReact.bs.js");

var component = ReasonReact.statelessComponent("Hello");

function Hello(Props) {
  var data = Props.data;
  return React.createElement("div", undefined, data);
}

var make = Hello;

exports.component = component;
exports.make = make;
/* component Not a pure module */
