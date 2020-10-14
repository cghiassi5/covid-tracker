'use strict';

var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");

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

exports.Decode = Decode;
/* No side effect */
