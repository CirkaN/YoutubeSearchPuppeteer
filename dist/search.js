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

var moment = require('moment');

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
                return puppeteer.launch({
                  args: ['--no-sandbox', '--disable-setuid-sandbox']
                });

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
        var max_length,
            browser,
            page,
            titleSelector,
            hrefSelector,
            videoLengthSelector,
            videoLength,
            seconds,
            n,
            result,
            _args2 = arguments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                max_length = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : 10;
                _context2.next = 3;
                return puppeteer.launch({
                  args: ['--no-sandbox', '--disable-setuid-sandbox'],
                  headless: false
                });

              case 3:
                browser = _context2.sent;
                _context2.next = 6;
                return browser.newPage();

              case 6:
                page = _context2.sent;
                _context2.next = 9;
                return page["goto"](query);

              case 9:
                _context2.next = 11;
                return page.waitForSelector('a.yt-simple-endpoint > h3 > span#video-title', {
                  timeout: timeout
                });

              case 11:
                titleSelector = _context2.sent;
                _context2.next = 14;
                return page.waitForSelector('a.yt-simple-endpoint.style-scope.ytd-compact-video-renderer', {
                  timeout: timeout
                });

              case 14:
                hrefSelector = _context2.sent;
                _context2.next = 17;
                return page.waitForSelector('a.yt-simple-endpoint.inline-block.style-scope.ytd-thumbnail > div.style-scope.ytd-thumbnail > ytd-thumbnail-overlay-time-status-renderer > span.style-scope.ytd-thumbnail-overlay-time-status-renderer', {
                  timeout: timeout
                });

              case 17:
                videoLengthSelector = _context2.sent;
                _context2.next = 20;
                return videoLengthSelector.evaluate(function (el) {
                  return el.textContent;
                });

              case 20:
                _context2.next = 22;
                return _context2.sent.trim();

              case 22:
                videoLength = _context2.sent;
                seconds = moment.duration(videoLength).asSeconds(); //
                // const test = await page.$$('ytd-compact-video-renderer',(element=>{console.log(element.textContent)}));
                // const text = await page.evaluate(() => Array.from(document.querySelectorAll('ytd-compact-video-renderer'), element => {
                //     console.log(element)
                // }));
                // console.log(text[0])
                // text.forEach(e => {
                //      console.log('h' + e)
                // })

                _context2.next = 26;
                return page.evaluate(function () {
                  console.log(document.querySelectorAll('ytd-compact-video-renderer'));
                  /*      let divs = [...document.querySelectorAll('ytd-compact-video-renderer')]
                        console.log(divs);
                        return divs.map((div)=>{return div.textContent});*/
                });

              case 26:
                n = _context2.sent;
                console.log(n);
                _context2.next = 30;
                return titleSelector.evaluate(function (el) {
                  return el.textContent;
                });

              case 30:
                _context2.t0 = _context2.sent.trim();
                _context2.next = 33;
                return hrefSelector.evaluate(function (el) {
                  return el.getAttribute('href');
                });

              case 33:
                _context2.t1 = _context2.sent;
                _context2.t2 = 'https://youtube.com' + _context2.t1;
                _context2.next = 37;
                return videoLengthSelector.evaluate(function (el) {
                  return el.textContent;
                });

              case 37:
                _context2.t3 = _context2.sent.trim();
                result = {
                  title: _context2.t0,
                  url: _context2.t2,
                  length: _context2.t3
                };
                _context2.next = 41;
                return browser.close();

              case 41:
                return _context2.abrupt("return", result);

              case 42:
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