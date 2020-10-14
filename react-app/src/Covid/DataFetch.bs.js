'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Decoder$MyReactApp = require("./Decoder.bs.js");

var myUrl = "https://api.covidtracking.com/v1/us/daily.json";

function fetchJson(url, decoder) {
  return fetch(url).then(function (prim) {
                return prim.json();
              }).then(function (obj) {
              return Promise.resolve(Curry._1(decoder, obj));
            });
}

function fetchCovidData(param) {
  return fetchJson(myUrl, Decoder$MyReactApp.Decode.all);
}

exports.myUrl = myUrl;
exports.fetchJson = fetchJson;
exports.fetchCovidData = fetchCovidData;
/* No side effect */
