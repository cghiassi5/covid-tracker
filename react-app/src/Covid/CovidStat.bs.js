'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Hello$MyReactApp = require("./Hello.bs.js");
var DataFetch$MyReactApp = require("./DataFetch.bs.js");

var blah = [{
    date: 1234,
    hospitalizedCurrently: 1234,
    hospitalizedCumulative: 1234,
    hash: "string"
  }];

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
  return React.createElement("div", {
              style: {
                display: "flex",
                height: "120px",
                alignItems: "center",
                justifyContent: "center"
              }
            }, typeof state === "number" ? (
                state !== 0 ? "An error occurred!" : "Loading..."
              ) : (console.log(state._0), React.createElement(Hello$MyReactApp.make, {
                      data: "stats"
                    })));
}

var student1 = {
  name: "John",
  age: 30
};

var make = CovidStat;

exports.blah = blah;
exports.student1 = student1;
exports.make = make;
/* react Not a pure module */
