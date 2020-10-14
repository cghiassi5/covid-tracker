'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Recharts = require("recharts");
var BsRecharts__BarChart = require("@ahrefs/bs-recharts/src/BsRecharts__BarChart.bs.js");
var DataFetch$MyReactApp = require("./DataFetch.bs.js");
var BsRecharts__ResponsiveContainer = require("@ahrefs/bs-recharts/src/BsRecharts__ResponsiveContainer.bs.js");

function CovidStat(Props) {
  var match = React.useState(function () {
        return /* Loading */0;
      });
  var setState = match[1];
  var state = match[0];
  React.useEffect((function () {
          DataFetch$MyReactApp.fetchCovidData(undefined).then(function (data) {
                  return Promise.resolve(Curry._1(setState, (function (_previousState) {
                                    return /* Loaded */{
                                            _0: data
                                          };
                                  })));
                }).catch(function (_err) {
                Curry._1(setState, (function (_previousState) {
                        return /* ErrorFetching */1;
                      }));
                return Promise.resolve(undefined);
              });
          
        }), []);
  var tmp;
  if (typeof state === "number") {
    tmp = state !== 0 ? "An error occurred!" : "Loading...";
  } else {
    var stats = state._0;
    console.log(stats);
    tmp = React.createElement(Recharts.ResponsiveContainer, BsRecharts__ResponsiveContainer.makeProps(undefined, undefined, {
              TAG: /* Px */0,
              _0: 200
            }, undefined, undefined, {
              TAG: /* Px */0,
              _0: 300
            }, React.createElement(Recharts.BarChart, BsRecharts__BarChart.makeProps(stats, {
                      TAG: /* Px */0,
                      _0: 1
                    }, undefined, undefined, undefined, undefined, undefined, {
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0
                    }, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, null, undefined), React.createElement(Recharts.Bar, {
                      dataKey: "date",
                      fill: "#ff7f02",
                      name: "bar",
                      stackId: "a"
                    }), React.createElement(Recharts.Tooltip, {}), React.createElement(Recharts.Legend, {
                      align: "left",
                      iconType: "circle"
                    })), undefined));
  }
  return React.createElement("div", {
              style: {
                display: "flex",
                height: "120px",
                alignItems: "center",
                justifyContent: "center"
              }
            }, tmp);
}

var make = CovidStat;

exports.make = make;
/* react Not a pure module */
