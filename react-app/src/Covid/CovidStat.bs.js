'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");

var myUrl = "https://api.covidtracking.com/v1/us/daily.json";

function item(json) {
  return {
          date: Json_decode.field("date", Json_decode.$$int, json),
          hospitalizedCurrently: Json_decode.field("hospitalizedCurrently", (function (param) {
                  return Json_decode.optional(Json_decode.$$int, param);
                }), json),
          hospitalizedCumulative: Json_decode.field("hospitalizedCumulative", (function (param) {
                  return Json_decode.optional(Json_decode.$$int, param);
                }), json),
          hash: Json_decode.field("hash", Json_decode.string, json)
        };
}

function all(param) {
  return Json_decode.array(item, param);
}

var Decode = {
  item: item,
  all: all
};

function fetchJson(url, decoder) {
  return fetch(url).then(function (prim) {
                return prim.json();
              }).then(function (obj) {
              return Promise.resolve(Curry._1(decoder, obj));
            });
}

function fetchCovidData(param) {
  return fetchJson(myUrl, all);
}

function CovidStat(Props) {
  var match = React.useState(function () {
        return /* LoadingDogs */0;
      });
  var state = match[0];
  React.useEffect((function () {
          fetchJson(myUrl, all).then(function (data) {
                return Promise.resolve((console.log(data), undefined));
              });
          
        }), []);
  var tmp;
  if (typeof state === "number") {
    tmp = state !== 0 ? "An error occurred!" : "Loading...";
  } else {
    var dogs = state._0;
    console.log(dogs);
    tmp = Belt_Array.map(dogs, (function (dog) {
            return React.createElement("div", undefined, dog.hash);
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

exports.myUrl = myUrl;
exports.Decode = Decode;
exports.fetchJson = fetchJson;
exports.fetchCovidData = fetchCovidData;
exports.make = make;
/* react Not a pure module */
