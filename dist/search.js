"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Search = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var puppeteer = require('puppeteer');

var Search = /*#__PURE__*/function () {
  function Search() {
    (0, _classCallCheck2["default"])(this, Search);
  }

  (0, _createClass2["default"])(Search, [{
    key: "singleSearch",
    value: function () {
      var _singleSearch = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(query, timeout, delay) {
        var browser, page, element, result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return puppeteer.launch();

              case 2:
                browser = _context.sent;
                _context.next = 5;
                return browser.newPage();

              case 5:
                page = _context.sent;
                _context.next = 8;
                return page["goto"]('https://youtube.com');

              case 8:
                _context.next = 10;
                return page.type("input#search", query, {
                  delay: delay
                });

              case 10:
                _context.next = 12;
                return page.click('#search-icon-legacy');

              case 12:
                _context.next = 14;
                return page.waitForSelector('a#video-title', {
                  timeout: timeout
                });

              case 14:
                element = _context.sent;
                _context.next = 17;
                return element.evaluate(function (el) {
                  return el.getAttribute('title');
                });

              case 17:
                _context.t0 = _context.sent;
                _context.next = 20;
                return element.evaluate(function (el) {
                  return el.getAttribute('href');
                });

              case 20:
                _context.t1 = _context.sent;
                _context.t2 = 'https://youtube.com' + _context.t1;
                result = {
                  title: _context.t0,
                  url: _context.t2
                };
                _context.next = 25;
                return page.waitForTimeout(4000);

              case 25:
                _context.next = 27;
                return browser.close();

              case 27:
                return _context.abrupt("return", result);

              case 28:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function singleSearch(_x, _x2, _x3) {
        return _singleSearch.apply(this, arguments);
      }

      return singleSearch;
    }()
  }, {
    key: "radio",
    value: function () {
      var _radio = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(query, timeout) {
        var browser, page, titleSelector, hrefSelector, result;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return puppeteer.launch();

              case 2:
                browser = _context2.sent;
                _context2.next = 5;
                return browser.newPage();

              case 5:
                page = _context2.sent;
                _context2.next = 8;
                return page["goto"](query);

              case 8:
                _context2.next = 10;
                return page.waitForSelector('a.yt-simple-endpoint > h3 > span#video-title', {
                  timeout: timeout
                });

              case 10:
                titleSelector = _context2.sent;
                _context2.next = 13;
                return page.waitForSelector('a.yt-simple-endpoint.style-scope.ytd-compact-video-renderer', {
                  timeout: timeout
                });

              case 13:
                hrefSelector = _context2.sent;
                _context2.next = 16;
                return titleSelector.evaluate(function (el) {
                  return el.textContent;
                });

              case 16:
                _context2.t0 = _context2.sent.trim();
                _context2.next = 19;
                return hrefSelector.evaluate(function (el) {
                  return el.getAttribute('href');
                });

              case 19:
                _context2.t1 = _context2.sent;
                _context2.t2 = 'https://youtube.com' + _context2.t1;
                result = {
                  title: _context2.t0,
                  url: _context2.t2
                };
                _context2.next = 24;
                return browser.close();

              case 24:
                return _context2.abrupt("return", result);

              case 25:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function radio(_x4, _x5) {
        return _radio.apply(this, arguments);
      }

      return radio;
    }()
  }]);
  return Search;
}();

exports.Search = Search;