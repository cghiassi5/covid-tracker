'use strict';

var React = require("react");
var Recharts = require("recharts");
var ReasonReact = require("reason-react/src/legacy/ReasonReact.bs.js");
var BsRecharts__XAxis = require("@ahrefs/bs-recharts/src/BsRecharts__XAxis.bs.js");
var BsRecharts__YAxis = require("@ahrefs/bs-recharts/src/BsRecharts__YAxis.bs.js");

var component = ReasonReact.statelessComponent("Chart");

function Chart(Props) {
  var data = Props.data;
  return React.createElement(Recharts.LineChart, {
              data: data,
              height: 250,
              width: 730,
              children: null
            }, React.createElement(Recharts.CartesianGrid, {
                  strokeDasharray: "3 3"
                }), React.createElement(Recharts.XAxis, BsRecharts__XAxis.makeProps(undefined, undefined, undefined, undefined, undefined, undefined, "hash", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)), React.createElement(Recharts.YAxis, BsRecharts__YAxis.makeProps(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)), React.createElement(Recharts.Line, {
                  dataKey: "date",
                  stroke: "#8884d8"
                }));
}

var make = Chart;

exports.component = component;
exports.make = make;
/* component Not a pure module */
