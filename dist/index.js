'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.enable('trust proxy');

app.get('/', function (_ref, res) {
  var ip = _ref.ip;
  var headers = _ref.headers;
  var ips = _ref.ips;

  var _ips = _slicedToArray(ips, 1);

  var ipaddress = _ips[0];

  var _headers$userAgent$m = headers['user-agent'].match(/\(([^\)]+)\)/);

  var _headers$userAgent$m2 = _slicedToArray(_headers$userAgent$m, 1);

  var ua = _headers$userAgent$m2[0];

  var software = ua.replace('(', '').replace(')', '');

  var _headers$acceptLangu = headers['accept-language'].match(/.+(?=,)/);

  var _headers$acceptLangu2 = _slicedToArray(_headers$acceptLangu, 1);

  var language = _headers$acceptLangu2[0];


  res.json({ ipaddress: ipaddress, language: language, software: software });
});

app.listen(process.env.PORT || 3000);