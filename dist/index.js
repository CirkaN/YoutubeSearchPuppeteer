"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YTSearch = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _search = require("./search");

var YTSearch = /*#__PURE__*/function () {
  function YTSearch() {
    (0, _classCallCheck2["default"])(this, YTSearch);
    this.search = new _search.Search();
  }

  (0, _createClass2["default"])(YTSearch, [{
    key: "singleSearch",
    value: function singleSearch(query) {
      var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10000;
      var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 80;
      return this.search.singleSearch(query);
    }
  }, {
    key: "radio",
    value: function radio(query) {
      var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10000;
      return this.search.radio(query);
    }
  }]);
  return YTSearch;
}();

exports.YTSearch = YTSearch;