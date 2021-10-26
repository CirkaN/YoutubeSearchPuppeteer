"use strict";

var _require = require("./index"),
    YTSearch = _require.YTSearch;

var test = new YTSearch().radio('https://www.youtube.com/watch?v=mdJQZHodyxo').then(function (r) {// console.log(r)
});