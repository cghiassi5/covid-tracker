'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var DataFetch$MyReactApp = require("./DataFetch.bs.js");

function CovidStat(Props) {
  var match = React.useState(function () {
        return /* LoadingDogs */0;
      });
  var setState = match[1];
  var state = match[0];
  React.useEffect((function () {
          DataFetch$MyReactApp.fetchCovidData(undefined).then(function (data) {
                return Promise.resolve(Curry._1(setState, (function (_previousState) {
                                  return /* LoadedDogs */{
                                          _0: data
                                        };
                                })));
              });
          
        }), []);
  var tmp;
  if (typeof state === "number") {
    tmp = state !== 0 ? "An error occurred!" : "Loading...";
  } else {
    var dogs = state._0;
    console.log(dogs);
    tmp = Belt_Array.map(dogs, (function (dog) {
            return React.createElement("div", {
                        key: dog.hash
                      }, dog.hash);
          }));
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
