/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app-server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app-server/request.js":
/*!*******************************!*\
  !*** ./app-server/request.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (req) {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n    baseURL: 'http://127.0.0.1:3000/api',\n    headers: {\n      cookie: req.get('cookie') || ''\n    }\n  });\n});\n\n//# sourceURL=webpack:///./app-server/request.js?");

/***/ }),

/***/ "./app-server/router.js":
/*!******************************!*\
  !*** ./app-server/router.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-style-loader/StyleContext */ \"isomorphic-style-loader/StyleContext\");\n/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app/store */ \"./app/store/index.js\");\n/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app/routes */ \"./app/routes.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Router = new koa_router__WEBPACK_IMPORTED_MODULE_3___default.a();\nRouter.get('*',\n/*#__PURE__*/\nfunction () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx, next) {\n    var url, css, context, insertCss, store, matchedRoutes, promises, result, html, helmet;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            url = ctx.request.url.replace('/app', '');\n            css = new Set();\n            context = {\n              css: []\n            };\n\n            insertCss = function insertCss() {\n              for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {\n                styles[_key] = arguments[_key];\n              }\n\n              return styles.forEach(function (style) {\n                return css.add(style._getCss());\n              });\n            };\n\n            store = Object(_app_store__WEBPACK_IMPORTED_MODULE_11__[\"getStore\"])(ctx.request); // 根据路由的路径，来往store里面加数据\n\n            matchedRoutes = Object(react_router_config__WEBPACK_IMPORTED_MODULE_10__[\"matchRoutes\"])(_app_routes__WEBPACK_IMPORTED_MODULE_12__[\"default\"], url); // 让matchRoutes里面所有的组件，对应的loadData方法执行一次\n\n            promises = [];\n            matchedRoutes.forEach(function (item) {\n              if (item.route.loadData) {\n                var promise = new Promise(function (resolve, reject) {\n                  item.route.loadData(store, url).then(resolve)[\"catch\"](resolve);\n                });\n                promises.push(promise);\n              }\n            });\n            _context.next = 10;\n            return Promise.all(promises);\n\n          case 10:\n            result = _context.sent;\n            html = react_dom_server__WEBPACK_IMPORTED_MODULE_7___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_9__[\"Provider\"], {\n              store: store\n            }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__[\"StaticRouter\"], {\n              context: context,\n              location: url\n            }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_6___default.a.Provider, {\n              value: {\n                insertCss: insertCss\n              }\n            }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_10__[\"renderRoutes\"])(_app_routes__WEBPACK_IMPORTED_MODULE_12__[\"default\"])))));\n            helmet = react_helmet__WEBPACK_IMPORTED_MODULE_8__[\"Helmet\"].renderStatic();\n            _context.next = 15;\n            return ctx.render('index', {\n              state: JSON.stringify(store.getState()),\n              title: helmet.title.toString(),\n              meta: helmet.meta.toString(),\n              root: html,\n              insertCss: _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(css).join('')\n            });\n\n          case 15:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Router);\n\n//# sourceURL=webpack:///./app-server/router.js?");

/***/ }),

/***/ "./app-server/server.js":
/*!******************************!*\
  !*** ./app-server/server.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var koa_views__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! koa-views */ \"koa-views\");\n/* harmony import */ var koa_views__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(koa_views__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! http-proxy-middleware */ \"http-proxy-middleware\");\n/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(http_proxy_middleware__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var koa2_connect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! koa2-connect */ \"koa2-connect\");\n/* harmony import */ var koa2_connect__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(koa2_connect__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./router */ \"./app-server/router.js\");\n\n\n\n\n\n\n\n\n\n\nvar app = new koa__WEBPACK_IMPORTED_MODULE_2___default.a();\nvar router = new koa_router__WEBPACK_IMPORTED_MODULE_3___default.a(); // 代理兼容封装\n\nvar proxy = function proxy(context, options) {\n  if (typeof options === 'string') {\n    options = {\n      target: options\n    };\n  }\n\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx, next) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return koa2_connect__WEBPACK_IMPORTED_MODULE_8___default()(http_proxy_middleware__WEBPACK_IMPORTED_MODULE_7___default()(context, options))(ctx, next);\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x, _x2) {\n        return _ref.apply(this, arguments);\n      };\n    }()\n  );\n}; // 代理配置\n\n\nvar proxyTable = {\n  '/api': {\n    target: 'http://127.0.0.1:3000',\n    changeOrigin: true\n  }\n};\nObject.keys(proxyTable).map(function (context) {\n  var options = proxyTable[context]; // 使用代理\n\n  app.use(proxy(context, options));\n}); //设置静态路径\n\napp.use(koa_static__WEBPACK_IMPORTED_MODULE_4___default()(path__WEBPACK_IMPORTED_MODULE_6___default.a.resolve(process.cwd(), './public'))); //将ejs设置为我们的模板引擎\n\napp.use(koa_views__WEBPACK_IMPORTED_MODULE_5___default()(path__WEBPACK_IMPORTED_MODULE_6___default.a.resolve(process.cwd(), './views'), {\n  map: {\n    html: 'ejs'\n  }\n}));\nrouter.use('/app', _router__WEBPACK_IMPORTED_MODULE_9__[\"default\"].routes(), _router__WEBPACK_IMPORTED_MODULE_9__[\"default\"].allowedMethods());\napp.use(router.routes()).use(router.allowedMethods());\napp.listen(8080, function () {\n  console.log('server is running at http://127.0.0.1:8080');\n});\n\n//# sourceURL=webpack:///./app-server/server.js?");

/***/ }),

/***/ "./app/app.js":
/*!********************!*\
  !*** ./app/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar App = function App(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      height: '100%',\n      width: '100%'\n    }\n  }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__[\"renderRoutes\"])(props.route.routes));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./app/app.js?");

/***/ }),

/***/ "./app/assets/404.png":
/*!****************************!*\
  !*** ./app/assets/404.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/53189f03370b6e34e77c60f1150b7911.png\";\n\n//# sourceURL=webpack:///./app/assets/404.png?");

/***/ }),

/***/ "./app/assets/utils.js":
/*!*****************************!*\
  !*** ./app/assets/utils.js ***!
  \*****************************/
/*! exports provided: renderTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTime\", function() { return renderTime; });\nvar renderTime = function renderTime(date) {\n  var dateee = new Date(date).toJSON();\n  return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\\.[\\d]{3}Z/, '');\n};\n\n//# sourceURL=webpack:///./app/assets/utils.js?");

/***/ }),

/***/ "./app/components/mImageItem.css":
/*!***************************************!*\
  !*** ./app/components/mImageItem.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1!./mImageItem.css */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./app/components/mImageItem.css\");\n    var insertCss = __webpack_require__(/*! ../../node_modules/_isomorphic-style-loader@5.0.1@isomorphic-style-loader/insertCss.js */ \"./node_modules/_isomorphic-style-loader@5.0.1@isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./app/components/mImageItem.css?");

/***/ }),

/***/ "./app/components/mImageItem.js":
/*!**************************************!*\
  !*** ./app/components/mImageItem.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd-mobile */ \"antd-mobile\");\n/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_mobile__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./withStyles */ \"./app/components/withStyles.js\");\n/* harmony import */ var _mImageItem_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mImageItem.css */ \"./app/components/mImageItem.css\");\n/* harmony import */ var _mImageItem_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mImageItem_css__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\n\nvar MImageItem =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(MImageItem, _Component);\n\n  function MImageItem() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MImageItem);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(MImageItem)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"state\", {\n      data: ['1', '2', '3']\n    });\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MImageItem, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      // simulate img loading\n      setTimeout(function () {\n        _this2.setState({\n          data: ['562881461756053', '562881461755955', '562881461756013']\n        });\n      }, 100);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"mImageItem\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: _mImageItem_css__WEBPACK_IMPORTED_MODULE_10___default.a[\"mImageItem-title\"]\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: _mImageItem_css__WEBPACK_IMPORTED_MODULE_10___default.a[\"mImageItem-title-con\"]\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: _mImageItem_css__WEBPACK_IMPORTED_MODULE_10___default.a[\"mImageItem-titel-line\"]\n      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"span\", {\n        className: _mImageItem_css__WEBPACK_IMPORTED_MODULE_10___default.a[\"mImageItem-title-txt\"]\n      }, \"\\u65B0\\u751F\\u665A\\u4F1A\\u8868\\u6F14\"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: _mImageItem_css__WEBPACK_IMPORTED_MODULE_10___default.a[\"mImageItem-image\"]\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_8__[\"WingBlank\"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_8__[\"Carousel\"], {\n        autoplay: true,\n        infinite: true,\n        beforeChange: function beforeChange(from, to) {\n          return console.log(\"slide from \".concat(from, \" to \").concat(to));\n        },\n        afterChange: function afterChange(index) {\n          return console.log('slide to', index);\n        }\n      }, this.state.data.map(function (val) {\n        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"a\", {\n          key: val,\n          href: \"#\",\n          style: {\n            display: 'inline-block',\n            width: '100%',\n            height: '4rem'\n          }\n        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"img\", {\n          src: \"http://p.qpic.cn/smartcampus/0/\".concat(val, \"/360\"),\n          alt: \"\",\n          style: {\n            width: '100%',\n            verticalAlign: 'top'\n          },\n          onLoad: function onLoad() {\n            // fire window resize event to change height\n            if (typeof window !== 'undefined') {\n              window.dispatchEvent(new Event('resize'));\n            }\n          }\n        }));\n      })))));\n    }\n  }]);\n\n  return MImageItem;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(MImageItem, _mImageItem_css__WEBPACK_IMPORTED_MODULE_10___default.a));\n\n//# sourceURL=webpack:///./app/components/mImageItem.js?");

/***/ }),

/***/ "./app/components/newsItem.css":
/*!*************************************!*\
  !*** ./app/components/newsItem.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1!./newsItem.css */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./app/components/newsItem.css\");\n    var insertCss = __webpack_require__(/*! ../../node_modules/_isomorphic-style-loader@5.0.1@isomorphic-style-loader/insertCss.js */ \"./node_modules/_isomorphic-style-loader@5.0.1@isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./app/components/newsItem.css?");

/***/ }),

/***/ "./app/components/newsItem.js":
/*!************************************!*\
  !*** ./app/components/newsItem.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./withStyles */ \"./app/components/withStyles.js\");\n/* harmony import */ var _assets_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/utils */ \"./app/assets/utils.js\");\n/* harmony import */ var _newsItem_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./newsItem.css */ \"./app/components/newsItem.css\");\n/* harmony import */ var _newsItem_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_newsItem_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var antd_mobile_lib_tab_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd-mobile/lib/tab-bar */ \"antd-mobile/lib/tab-bar\");\n/* harmony import */ var antd_mobile_lib_tab_bar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_tab_bar__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\n\nvar NewsItem =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(NewsItem, _Component);\n\n  function NewsItem() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, NewsItem);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(NewsItem).apply(this, arguments));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(NewsItem, [{\n    key: \"setClass2Type\",\n    value: function setClass2Type(classify) {\n      switch (classify) {\n        case '校园新闻':\n          return 'news';\n\n        default:\n          return '';\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var news = this.props.data;\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: _newsItem_css__WEBPACK_IMPORTED_MODULE_9___default.a.newsItem\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: _newsItem_css__WEBPACK_IMPORTED_MODULE_9___default.a[\"newsItem-left\"]\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"img\", {\n        className: _newsItem_css__WEBPACK_IMPORTED_MODULE_9___default.a[\"newsItem-left-img\"],\n        src: news.img\n      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: _newsItem_css__WEBPACK_IMPORTED_MODULE_9___default.a[\"newsItem-right\"]\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"p\", {\n        className: _newsItem_css__WEBPACK_IMPORTED_MODULE_9___default.a[\"newsItem-right-title\"]\n      }, news.title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"p\", {\n        className: _newsItem_css__WEBPACK_IMPORTED_MODULE_9___default.a[\"newsItem-right-msg\"]\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"span\", {\n        className: _newsItem_css__WEBPACK_IMPORTED_MODULE_9___default.a[\"newsItem-right-msg-time\"]\n      }, Object(_assets_utils__WEBPACK_IMPORTED_MODULE_8__[\"renderTime\"])(news.createdAt)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"Link\"], {\n        to: \"/article/\".concat(this.setClass2Type(news.classify), \"/\").concat(news._id),\n        className: _newsItem_css__WEBPACK_IMPORTED_MODULE_9___default.a[\"newsItem-right-msg-detail\"]\n      }, \"\\u67E5\\u770B\\u8BE6\\u60C5\"))));\n    }\n  }]);\n\n  return NewsItem;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(NewsItem, _newsItem_css__WEBPACK_IMPORTED_MODULE_9___default.a));\n\n//# sourceURL=webpack:///./app/components/newsItem.js?");

/***/ }),

/***/ "./app/components/sImageItem.css":
/*!***************************************!*\
  !*** ./app/components/sImageItem.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1!./sImageItem.css */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./app/components/sImageItem.css\");\n    var insertCss = __webpack_require__(/*! ../../node_modules/_isomorphic-style-loader@5.0.1@isomorphic-style-loader/insertCss.js */ \"./node_modules/_isomorphic-style-loader@5.0.1@isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./app/components/sImageItem.css?");

/***/ }),

/***/ "./app/components/sImageItem.js":
/*!**************************************!*\
  !*** ./app/components/sImageItem.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./withStyles */ \"./app/components/withStyles.js\");\n/* harmony import */ var _sImageItem_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sImageItem.css */ \"./app/components/sImageItem.css\");\n/* harmony import */ var _sImageItem_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sImageItem_css__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\nvar SImageItem =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SImageItem, _Component);\n\n  function SImageItem() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SImageItem);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SImageItem).apply(this, arguments));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SImageItem, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"imageItem\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: _sImageItem_css__WEBPACK_IMPORTED_MODULE_7___default.a[\"imageItem-title\"]\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"p\", {\n        className: _sImageItem_css__WEBPACK_IMPORTED_MODULE_7___default.a[\"imageItem-title-txt\"]\n      }, \"\\u821E\\u8E48\\u5927\\u8D5B\\u8363\\u83B7\\u4E00\\u7B49\\u5956\")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: _sImageItem_css__WEBPACK_IMPORTED_MODULE_7___default.a[\"imageItem-image\"]\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"img\", {\n        className: _sImageItem_css__WEBPACK_IMPORTED_MODULE_7___default.a[\"imageItem-image-img\"],\n        src: \"http://p.qpic.cn/smartcampus/0/44128296028675/0\"\n      })));\n    }\n  }]);\n\n  return SImageItem;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(SImageItem, _sImageItem_css__WEBPACK_IMPORTED_MODULE_7___default.a));\n\n//# sourceURL=webpack:///./app/components/sImageItem.js?");

/***/ }),

/***/ "./app/components/withStyles.js":
/*!**************************************!*\
  !*** ./app/components/withStyles.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n // 这个函数，是生成高阶组件的函数\n// 这个函数，返回一个组件\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (DecoratedComponent, styles) {\n  // 返回的这个组件，叫做高阶组件\n  return (\n    /*#__PURE__*/\n    function (_Component) {\n      _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(NewComponent, _Component);\n\n      function NewComponent() {\n        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, NewComponent);\n\n        return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(NewComponent).apply(this, arguments));\n      }\n\n      _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(NewComponent, [{\n        key: \"render\",\n        value: function render() {\n          if (this.props.staticContext) {\n            return isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(styles)(DecoratedComponent);\n          }\n\n          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(DecoratedComponent, this.props);\n        }\n      }]);\n\n      return NewComponent;\n    }(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"])\n  );\n});\n\n//# sourceURL=webpack:///./app/components/withStyles.js?");

/***/ }),

/***/ "./app/request.js":
/*!************************!*\
  !*** ./app/request.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: '/api'\n}));\n\n//# sourceURL=webpack:///./app/request.js?");

/***/ }),

/***/ "./app/routes.js":
/*!***********************!*\
  !*** ./app/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./app/app.js\");\n/* harmony import */ var _views_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/home */ \"./app/views/home/index.js\");\n/* harmony import */ var _views_news__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/news */ \"./app/views/news/index.js\");\n/* harmony import */ var _views_prize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/prize */ \"./app/views/prize/index.js\");\n/* harmony import */ var _views_my_campus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/my-campus */ \"./app/views/my-campus/index.js\");\n/* harmony import */ var _views_life__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/life */ \"./app/views/life/index.js\");\n/* harmony import */ var _views_works__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/works */ \"./app/views/works/index.js\");\n/* harmony import */ var _views_detail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/detail */ \"./app/views/detail/index.js\");\n/* harmony import */ var _views_noMatch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/noMatch */ \"./app/views/noMatch.js\");\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: '/',\n  component: _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  routes: [{\n    path: '/',\n    component: _views_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    exact: true,\n    loadData: _views_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loadData,\n    key: 'index'\n  }, {\n    path: '/my-campus',\n    component: _views_my_campus__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    exact: true,\n    key: 'my-campus'\n  }, {\n    path: '/news',\n    component: _views_news__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    exact: true,\n    key: 'news'\n  }, {\n    path: '/prize',\n    component: _views_prize__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    exact: true,\n    key: 'prize'\n  }, {\n    path: '/life',\n    component: _views_life__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    exact: true,\n    key: 'life'\n  }, {\n    path: '/works',\n    component: _views_works__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    exact: true,\n    key: 'works'\n  }, {\n    path: '/article/:type/:id',\n    component: _views_detail__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    exact: true,\n    loadData: _views_detail__WEBPACK_IMPORTED_MODULE_7__[\"default\"].loadData,\n    key: 'article'\n  }, {\n    component: _views_noMatch__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n  }]\n}]);\n\n//# sourceURL=webpack:///./app/routes.js?");

/***/ }),

/***/ "./app/store/constants.js":
/*!********************************!*\
  !*** ./app/store/constants.js ***!
  \********************************/
/*! exports provided: HOME_CHANGE_LIST, DETAIL_GET_DATA, NEWS_GET_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HOME_CHANGE_LIST\", function() { return HOME_CHANGE_LIST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DETAIL_GET_DATA\", function() { return DETAIL_GET_DATA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NEWS_GET_LIST\", function() { return NEWS_GET_LIST; });\nvar HOME_CHANGE_LIST = 'HOME/CHANGE_LIST';\nvar DETAIL_GET_DATA = 'DETAIL/GET_DATA';\nvar NEWS_GET_LIST = 'NEWS_GET_LIST';\n\n//# sourceURL=webpack:///./app/store/constants.js?");

/***/ }),

/***/ "./app/store/detail.js":
/*!*****************************!*\
  !*** ./app/store/detail.js ***!
  \*****************************/
/*! exports provided: actions, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"actions\", function() { return actions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reducer\", function() { return reducer; });\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"@babel/runtime/helpers/objectSpread\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./app/store/constants.js\");\n\n\nvar defaultState = {\n  data: {}\n};\nvar actions = {\n  getInfoData: function getInfoData(_id) {\n    return function (dispatch, getState, axiosInstance) {\n      return axiosInstance.get('/app/getInfoDetail', {\n        params: {\n          _id: _id\n        }\n      }).then(function (res) {\n        var data = res.data.data;\n        dispatch({\n          type: _constants__WEBPACK_IMPORTED_MODULE_1__[\"DETAIL_GET_DATA\"],\n          data: data\n        });\n      });\n    };\n  }\n};\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_1__[\"DETAIL_GET_DATA\"]:\n      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {\n        data: action.data\n      });\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./app/store/detail.js?");

/***/ }),

/***/ "./app/store/home.js":
/*!***************************!*\
  !*** ./app/store/home.js ***!
  \***************************/
/*! exports provided: actions, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"actions\", function() { return actions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reducer\", function() { return reducer; });\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"@babel/runtime/helpers/objectSpread\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./app/store/constants.js\");\n\n\nvar defaultState = {\n  data: {}\n};\nvar actions = {\n  getHomeData: function getHomeData() {\n    return function (dispatch, getState, axiosInstance) {\n      return axiosInstance.get('/app/getHomeData').then(function (res) {\n        var data = res.data.data;\n        dispatch({\n          type: _constants__WEBPACK_IMPORTED_MODULE_1__[\"HOME_CHANGE_LIST\"],\n          data: data\n        });\n      })[\"catch\"](function (e) {\n        console.log(\"catch\".concat(JSON.stringify(e)));\n      });\n    };\n  }\n};\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_1__[\"HOME_CHANGE_LIST\"]:\n      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {\n        data: action.data\n      });\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./app/store/home.js?");

/***/ }),

/***/ "./app/store/index.js":
/*!****************************!*\
  !*** ./app/store/index.js ***!
  \****************************/
/*! exports provided: getStore, getClientStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStore\", function() { return getStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getClientStore\", function() { return getClientStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_server_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-server/request */ \"./app-server/request.js\");\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../request */ \"./app/request.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home */ \"./app/store/home.js\");\n/* harmony import */ var _detail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail */ \"./app/store/detail.js\");\n/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news */ \"./app/store/news.js\");\n/* harmony import */ var array_flatten__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! array-flatten */ \"array-flatten\");\n/* harmony import */ var array_flatten__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(array_flatten__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nvar reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  home: _home__WEBPACK_IMPORTED_MODULE_4__[\"reducer\"],\n  detail: _detail__WEBPACK_IMPORTED_MODULE_5__[\"reducer\"],\n  news: _news__WEBPACK_IMPORTED_MODULE_6__[\"reducer\"]\n});\nvar getStore = function getStore(req) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducers, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(Object(_app_server_request__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(req))));\n};\nvar getClientStore = function getClientStore() {\n  var defaultState = window.context.state;\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducers, defaultState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(_request__WEBPACK_IMPORTED_MODULE_3__[\"default\"])));\n};\n\n//# sourceURL=webpack:///./app/store/index.js?");

/***/ }),

/***/ "./app/store/news.js":
/*!***************************!*\
  !*** ./app/store/news.js ***!
  \***************************/
/*! exports provided: actions, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"actions\", function() { return actions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reducer\", function() { return reducer; });\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"@babel/runtime/helpers/objectSpread\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./app/store/constants.js\");\n\n\nvar defaultState = {\n  data: []\n};\nvar actions = {\n  getNewsList: function getNewsList() {\n    return function (dispatch, getState, axiosInstance) {\n      return axiosInstance.get('/app/getNewsList', {\n        params: {\n          pageNo: 1,\n          pageSize: 10\n        }\n      }).then(function (res) {\n        var data = res.data.data;\n        dispatch({\n          type: _constants__WEBPACK_IMPORTED_MODULE_1__[\"NEWS_GET_LIST\"],\n          data: data\n        });\n      });\n    };\n  }\n};\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_1__[\"NEWS_GET_LIST\"]:\n      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {\n        data: action.data\n      });\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./app/store/news.js?");

/***/ }),

/***/ "./app/views/detail/index.js":
/*!***********************************!*\
  !*** ./app/views/detail/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/withStyles */ \"./app/components/withStyles.js\");\n/* harmony import */ var _store_detail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/detail */ \"./app/store/detail.js\");\n/* harmony import */ var _assets_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/utils */ \"./app/assets/utils.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style.css */ \"./app/views/detail/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Detail =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Detail, _Component);\n\n  function Detail() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Detail);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Detail).apply(this, arguments));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Detail, [{\n    key: \"createMarkup\",\n    value: function createMarkup(code) {\n      return {\n        __html: code\n      };\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var detail = this.props.detail;\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_7__[\"Helmet\"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"title\", null, \"\\u8BE6\\u60C5 - \\u6211\\u7684\\u6821\\u56ED\"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"meta\", {\n        name: \"description\",\n        content: \"\".concat(detail.title, \" - \\u6211\\u7684\\u6821\\u56ED\")\n      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_11___default.a.detail\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_11___default.a['detail-header']\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_11___default.a['detail-header-title']\n      }, detail.title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_11___default.a['detail-header-msg']\n      }, Object(_assets_utils__WEBPACK_IMPORTED_MODULE_10__[\"renderTime\"])(detail.createdAt))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_11___default.a['detail-img']\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"img\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_11___default.a['detail-img-img'],\n        src: detail.img\n      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        style: {\n          display: 'none'\n        },\n        className: _style_css__WEBPACK_IMPORTED_MODULE_11___default.a['detail-con']\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_11___default.a['detail-con-txt']\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"p\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_11___default.a['detail-con-top']\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"span\", {\n        className: {\n          'detail-con-span': _style_css__WEBPACK_IMPORTED_MODULE_11___default.a['detail-con-span'],\n          'detail-con-green': _style_css__WEBPACK_IMPORTED_MODULE_11___default.a['detail-con-green']\n        }\n      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"span\", {\n        className: {\n          'detail-con-span': _style_css__WEBPACK_IMPORTED_MODULE_11___default.a['detail-con-span'],\n          'detail-con-green': _style_css__WEBPACK_IMPORTED_MODULE_11___default.a['detail-con-black']\n        }\n      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"p\", null, \"\\u5FEB\\u6765\\u627E\\u627E\\u4F60\\u7684\\u6559\\u5BA4\\u6709\\u4EC0\\u4E48\\u4E0D\\u540C\"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_11___default.a['detail-content'],\n        dangerouslySetInnerHTML: this.createMarkup(detail.content)\n      })));\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this$props = this.props,\n          detail = _this$props.detail,\n          getDetail = _this$props.getDetail;\n\n      if (!Object.keys(detail).length) {\n        var _this$props$match$par = this.props.match.params,\n            type = _this$props$match$par.type,\n            id = _this$props$match$par.id;\n        getDetail({\n          classify: type,\n          _id: id\n        });\n      }\n    }\n  }]);\n\n  return Detail;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    detail: state.detail.data\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getDetail: function getDetail(_ref) {\n      var classify = _ref.classify,\n          _id = _ref._id;\n\n      switch (classify) {\n        case 'news':\n          dispatch(_store_detail__WEBPACK_IMPORTED_MODULE_9__[\"actions\"].getInfoData(_id));\n          break;\n\n        default:\n          return;\n      }\n    }\n  };\n};\n\nvar ExportDetail = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Object(_components_withStyles__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Detail, _style_css__WEBPACK_IMPORTED_MODULE_11___default.a));\n\nExportDetail.loadData = function (store, url) {\n  var sArray = url.split('/');\n\n  var _id = sArray.pop();\n\n  var classify = sArray.pop();\n\n  switch (classify) {\n    case 'news':\n      return store.dispatch(_store_detail__WEBPACK_IMPORTED_MODULE_9__[\"actions\"].getInfoData(_id));\n\n    default:\n      return new Promise();\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExportDetail);\n\n//# sourceURL=webpack:///./app/views/detail/index.js?");

/***/ }),

/***/ "./app/views/detail/style.css":
/*!************************************!*\
  !*** ./app/views/detail/style.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1!./style.css */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./app/views/detail/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/_isomorphic-style-loader@5.0.1@isomorphic-style-loader/insertCss.js */ \"./node_modules/_isomorphic-style-loader@5.0.1@isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./app/views/detail/style.css?");

/***/ }),

/***/ "./app/views/home/index.js":
/*!*********************************!*\
  !*** ./app/views/home/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/withStyles */ \"./app/components/withStyles.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style.css */ \"./app/views/home/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./swiper */ \"./app/views/home/swiper.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menu */ \"./app/views/home/menu.js\");\n/* harmony import */ var _components_newsItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/newsItem */ \"./app/components/newsItem.js\");\n/* harmony import */ var _store_home__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../store/home */ \"./app/store/home.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Home =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Home, _Component);\n\n  function Home() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Home);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Home).apply(this, arguments));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Home, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props$data = this.props.data,\n          _this$props$data$bann = _this$props$data.banners,\n          banners = _this$props$data$bann === void 0 ? [] : _this$props$data$bann,\n          _this$props$data$menu = _this$props$data.menus,\n          menus = _this$props$data$menu === void 0 ? [] : _this$props$data$menu,\n          _this$props$data$news = _this$props$data.news,\n          news = _this$props$data$news === void 0 ? [] : _this$props$data$news;\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_7__[\"Helmet\"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"title\", null, \"\\u9996\\u9875 - \\u6211\\u7684\\u6821\\u56ED\"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"meta\", {\n        name: \"description\",\n        content: \"\\u9996\\u9875 - \\u6211\\u7684\\u6821\\u56ED\"\n      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a['home']\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_swiper__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        banners: banners\n      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a['home-welcome']\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        style: {\n          position: 'relative',\n          width: '100%'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a['home-welcome-line']\n      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"span\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a['home-welcome-font']\n      }, \"\\u6B22\\u8FCE\\u6765\\u5230\\u667A\\u6167\\u5B66\\u6821\"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a['home-cutoff']\n      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_menu__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n        data: menus\n      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a['home-cutoff']\n      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a['home-news']\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"p\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a['home-news-title']\n      }, \"\\u6821\\u56ED\\u65B0\\u95FB\"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", null, news.map(function (item) {\n        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_newsItem__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n          data: item,\n          key: item._id\n        });\n      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"Link\"], {\n        to: \"news\",\n        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a['home-news-more']\n      }, \"\\u66F4\\u591A\\u65B0\\u95FB >>\"))));\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this$props = this.props,\n          data = _this$props.data,\n          getHomeData = _this$props.getHomeData;\n\n      if (!Object.keys(data).length) {\n        getHomeData();\n      }\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    data: state.home.data\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getHomeData: function getHomeData() {\n      dispatch(_store_home__WEBPACK_IMPORTED_MODULE_14__[\"actions\"].getHomeData());\n    }\n  };\n};\n\nvar ExportHome = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Object(_components_withStyles__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(Home, _style_css__WEBPACK_IMPORTED_MODULE_10___default.a));\n\nExportHome.loadData = function (store) {\n  return store.dispatch(_store_home__WEBPACK_IMPORTED_MODULE_14__[\"actions\"].getHomeData());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExportHome);\n\n//# sourceURL=webpack:///./app/views/home/index.js?");

/***/ }),

/***/ "./app/views/home/menu.js":
/*!********************************!*\
  !*** ./app/views/home/menu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/withStyles */ \"./app/components/withStyles.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style.css */ \"./app/views/home/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\n\nvar Menu =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Menu, _Component);\n\n  function Menu() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Menu);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Menu)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"state\", {\n      link: {\n        'type-1': '/my-campus',\n        'type-2': '/news',\n        'type-3': '/prize',\n        'type-4': '/works',\n        'type-5': '/life'\n      }\n    });\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Menu, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a['home-menu']\n      }, this.props.data.map(function (item, idx) {\n        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n          key: item._id,\n          className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a['home-menu-item']\n        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n          className: (idx + 1) % 3 == 0 ? _style_css__WEBPACK_IMPORTED_MODULE_10___default.a['home-menu-hg'] : _style_css__WEBPACK_IMPORTED_MODULE_10___default.a['home-menu-icon']\n        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"img\", {\n          src: item.icon\n        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"Link\"], {\n          to: _this2.state.link[\"type-\".concat(item.type)],\n          className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a['home-menu-name']\n        }, item.name));\n      }));\n    }\n  }]);\n\n  return Menu;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_components_withStyles__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(Menu, _style_css__WEBPACK_IMPORTED_MODULE_10___default.a));\n\n//# sourceURL=webpack:///./app/views/home/menu.js?");

/***/ }),

/***/ "./app/views/home/style.css":
/*!**********************************!*\
  !*** ./app/views/home/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1!./style.css */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./app/views/home/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/_isomorphic-style-loader@5.0.1@isomorphic-style-loader/insertCss.js */ \"./node_modules/_isomorphic-style-loader@5.0.1@isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./app/views/home/style.css?");

/***/ }),

/***/ "./app/views/home/swiper.js":
/*!**********************************!*\
  !*** ./app/views/home/swiper.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd-mobile */ \"antd-mobile\");\n/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_mobile__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n/*\r\n * 首页焦点图\r\n */\n\n\n\nvar Swiper =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Swiper, _Component);\n\n  function Swiper() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Swiper);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Swiper)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"state\", {\n      imgs: [],\n      imgHeight: 150\n    });\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Swiper, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.setState({\n        imgs: this.props.banners\n      });\n    }\n  }, {\n    key: \"componentWillReceiveProps\",\n    value: function componentWillReceiveProps(nextProps) {\n      this.setState({\n        imgs: nextProps.banners\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_8__[\"WingBlank\"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_8__[\"Carousel\"], {\n        className: \"home-space-carousel\",\n        frameOverflow: \"visible\",\n        cellSpacing: 10,\n        slideWidth: 0.8,\n        autoplay: true,\n        infinite: true,\n        afterChange: function afterChange(index) {\n          return _this2.setState({\n            slideIndex: index\n          });\n        }\n      }, this.state.imgs.map(function (val, idx) {\n        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"a\", {\n          key: val,\n          href: \"#\",\n          style: {\n            display: 'block',\n            position: 'relative',\n            top: _this2.state.slideIndex === idx ? -10 : 0,\n            height: _this2.state.imgHeight,\n            boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)'\n          }\n        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"img\", {\n          src: val.url,\n          style: {\n            width: '100%',\n            verticalAlign: 'top'\n          },\n          onLoad: function onLoad() {\n            if (typeof window !== 'undefined') {\n              window.dispatchEvent(new Event('resize'));\n            }\n\n            _this2.setState({\n              imgHeight: 'auto'\n            });\n          }\n        }));\n      })));\n    }\n  }]);\n\n  return Swiper;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Swiper);\n\n//# sourceURL=webpack:///./app/views/home/swiper.js?");

/***/ }),

/***/ "./app/views/life/index.js":
/*!*********************************!*\
  !*** ./app/views/life/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/withStyles */ \"./app/components/withStyles.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style.css */ \"./app/views/life/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_mImageItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/mImageItem */ \"./app/components/mImageItem.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Life =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Life, _Component);\n\n  function Life() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Life);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Life)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"state\", {\n      list: ['1', '2', '3']\n    });\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Life, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_8__[\"Helmet\"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"title\", null, \"\\u6821\\u56ED\\u751F\\u6D3B - \\u6211\\u7684\\u6821\\u56ED\"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"meta\", {\n        name: \"description\",\n        content: \"\\u6821\\u56ED\\u751F\\u6D3B - \\u6211\\u7684\\u6821\\u56ED\"\n      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a.life\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a['life-header']\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"img\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a['life-header-img'],\n        src: \"http://p.qpic.cn/smartcampus/0/441281377990953/0\"\n      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"p\", null, \"\\u6211\\u7684\\u667A\\u6167\\u6821\\u56ED\")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a['life-list']\n      }, this.state.list.map(function (val) {\n        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_mImageItem__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n          key: val\n        });\n      }))));\n    }\n  }]);\n\n  return Life;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_components_withStyles__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(Life, _style_css__WEBPACK_IMPORTED_MODULE_10___default.a));\n\n//# sourceURL=webpack:///./app/views/life/index.js?");

/***/ }),

/***/ "./app/views/life/style.css":
/*!**********************************!*\
  !*** ./app/views/life/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1!./style.css */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./app/views/life/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/_isomorphic-style-loader@5.0.1@isomorphic-style-loader/insertCss.js */ \"./node_modules/_isomorphic-style-loader@5.0.1@isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./app/views/life/style.css?");

/***/ }),

/***/ "./app/views/my-campus/index.js":
/*!**************************************!*\
  !*** ./app/views/my-campus/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/withStyles */ \"./app/components/withStyles.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.css */ \"./app/views/my-campus/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\nvar MyCampus =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(MyCampus, _Component);\n\n  function MyCampus() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MyCampus);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(MyCampus).apply(this, arguments));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MyCampus, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_6__[\"Helmet\"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"title\", null, \"\\u6821\\u56ED\\u7B80\\u4ECB - \\u6211\\u7684\\u6821\\u56ED\"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"meta\", {\n        name: \"description\",\n        content: \"\\u6821\\u56ED\\u7B80\\u4ECB - \\u6211\\u7684\\u6821\\u56ED\"\n      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_8___default.a.intro\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_8___default.a['intro-header']\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"img\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_8___default.a['intro-header-img'],\n        src: \"http://p.qpic.cn/smartcampus/0/441281377990953/0\"\n      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"p\", null, \"\\u6211\\u7684\\u667A\\u6167\\u6821\\u56ED\")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_8___default.a['intro-content']\n      }, \"\\u201C\\u817E\\u8BAF\\u667A\\u6167\\u6821\\u56ED\\u201D\\u662F\\u817E\\u8BAF\\u516C\\u53F8\\u5728\\u201C\\u4E92\\u8054\\u7F51+\\u201D\\u7684\\u6218\\u7565\\u80CC\\u666F\\u4E0B\\uFF0C\\u7ED3\\u5408\\u81EA\\u8EAB\\u4EA7\\u54C1\\u4E0E\\u5E73\\u53F0\\u4F18\\u52BF\\uFF0C\\u9762\\u5411\\u5404\\u7C7B\\u5B66\\u6821\\u7814\\u53D1\\u7684\\u79FB\\u52A8\\u7AEF\\u6821\\u56ED\\u667A\\u6167\\u751F\\u6001\\u5708\\u89E3\\u51B3\\u65B9\\u6848\\u3002\\u6240\\u8C13\\u667A\\u6167\\u6559\\u80B2\\uFF0C\\u5C31\\u662F\\u7528\\u6700\\u7B80\\u5355\\u7684\\u65B9\\u5F0F\\uFF0C\\u8BA9\\u5DE5\\u4F5C\\u3001\\u5B66\\u4E60\\u3001\\u751F\\u6D3B\\u66F4\\u65B9\\u4FBF\\u3001\\u66F4\\u8F7B\\u677E\\u3001\\u66F4\\u7701\\u4E8B\\uFF01\\u63D0\\u5347\\u5DE5\\u4F5C\\u6548\\u7387\\u3001\\u964D\\u4F4E\\u7BA1\\u7406\\u6210\\u672C\\u3001\\u89E3\\u653E\\u5E08\\u751F\\u5BB6\\u957F\\u3001\\u6253\\u9020\\u667A\\u6167\\u5B66\\u6821\\u3002\\u6240\\u8C13\\u201C\\u5927\\u6570\\u636E\\u201D\\u5C31\\u662F\\u901A\\u8FC7\\u70B9\\u6EF4\\u6570\\u636E\\u805A\\u96C6\\uFF0C\\u5BF9\\u6559\\u80B2\\u7684\\u7BA1\\u7406\\u3001\\u6559\\u5B66\\u3001\\u5B66\\u4E60\\u3001\\u5BB6\\u6821\\u3001\\u5BA3\\u4F20\\u548C\\u8BC4\\u4EF7\\u5404\\u4E2A\\u65B9\\u9762\\u8FDB\\u884C\\u591A\\u7EF4\\u5EA6\\u6570\\u636E\\u7684\\u52A8\\u6001\\u7814\\u7A76\\u548C\\u5206\\u6790\\u3002\")));\n    }\n  }]);\n\n  return MyCampus;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_components_withStyles__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(MyCampus, _style_css__WEBPACK_IMPORTED_MODULE_8___default.a));\n\n//# sourceURL=webpack:///./app/views/my-campus/index.js?");

/***/ }),

/***/ "./app/views/my-campus/style.css":
/*!***************************************!*\
  !*** ./app/views/my-campus/style.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1!./style.css */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./app/views/my-campus/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/_isomorphic-style-loader@5.0.1@isomorphic-style-loader/insertCss.js */ \"./node_modules/_isomorphic-style-loader@5.0.1@isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./app/views/my-campus/style.css?");

/***/ }),

/***/ "./app/views/news/index.js":
/*!*********************************!*\
  !*** ./app/views/news/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_newsItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/newsItem */ \"./app/components/newsItem.js\");\n/* harmony import */ var _store_news__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/news */ \"./app/store/news.js\");\n\n\n\n\n\n\n\n\n\n\n\nvar News =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(News, _Component);\n\n  function News() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, News);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(News).apply(this, arguments));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(News, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this$props = this.props,\n          list = _this$props.list,\n          getNewsList = _this$props.getNewsList;\n      console.log(list.length);\n\n      if (!list.length) {\n        getNewsList();\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_7__[\"Helmet\"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"title\", null, \"\\u65B0\\u95FB\\u5217\\u8868 - \\u6211\\u7684\\u6821\\u56ED\"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"meta\", {\n        name: \"description\",\n        content: \"\\u65B0\\u95FB\\u5217\\u8868 - \\u6211\\u7684\\u6821\\u56ED\"\n      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"newsList\",\n        style: {\n          height: '100%',\n          background: '#fff'\n        }\n      }, this.props.list.map(function (item) {\n        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_newsItem__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          data: item,\n          key: item._id\n        });\n      })));\n    }\n  }]);\n\n  return News;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    list: state.news.data\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getNewsList: function getNewsList() {\n      dispatch(_store_news__WEBPACK_IMPORTED_MODULE_9__[\"actions\"].getNewsList());\n    }\n  };\n};\n\nvar ExportNews = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"connect\"])(mapStateToProps, mapDispatchToProps)(News);\n\nExportNews.loadData = function (store) {\n  return store.dispatch(_store_news__WEBPACK_IMPORTED_MODULE_9__[\"actions\"].getNewsList());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExportNews);\n\n//# sourceURL=webpack:///./app/views/news/index.js?");

/***/ }),

/***/ "./app/views/noMatch.js":
/*!******************************!*\
  !*** ./app/views/noMatch.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar NoMatch =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(NoMatch, _Component);\n\n  function NoMatch() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, NoMatch);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(NoMatch).apply(this, arguments));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(NoMatch, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"noFound\",\n        style: style\n      });\n    }\n  }]);\n\n  return NoMatch;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\nvar style = {\n  height: '100%',\n  background: \"url(\".concat(__webpack_require__(/*! ../assets/404.png */ \"./app/assets/404.png\"), \") center center no-repeat\"),\n  backgroundSize: 'contain'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NoMatch);\n\n//# sourceURL=webpack:///./app/views/noMatch.js?");

/***/ }),

/***/ "./app/views/prize/index.js":
/*!**********************************!*\
  !*** ./app/views/prize/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/withStyles */ \"./app/components/withStyles.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style.css */ \"./app/views/prize/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_sImageItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/sImageItem */ \"./app/components/sImageItem.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Prize =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Prize, _Component);\n\n  function Prize() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Prize);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Prize)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"state\", {\n      list: ['1', '2', '3']\n    });\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Prize, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_8__[\"Helmet\"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"title\", null, \"\\u8363\\u83B7\\u5956\\u9879 - \\u6211\\u7684\\u6821\\u56ED\"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"meta\", {\n        name: \"description\",\n        content: \"\\u8363\\u83B7\\u5956\\u9879 - \\u6211\\u7684\\u6821\\u56ED\"\n      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a.prize\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a['prize-header']\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a['prize-header-con']\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a['prize-header-line']\n      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"span\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a['prize-header-msg']\n      }, \"\\u667A\\u6167\\u6821\\u56ED\\u5B66\\u751F\\u83B7\\u5956\\u540D\\u518C\"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a['prize-intro']\n      }, \"2017\\u5E74\\u5B66\\u6821\\u5171\\u6709\\u591A\\u540D\\u5B66\\u751F\\u5728\\u821E\\u8E48\\u3001\\u97F3\\u4E50\\u3001\\u4E66\\u6CD5\\u3001\\u7ED8\\u753B\\u7684\\u5168\\u56FD\\u5927\\u8D5B\\u4E2D\\u8363\\u83B7\\u4E00\\u3001\\u4E8C\\u7B49\\u5956\\uFF0C\\u65BD\\u5C55\\u81EA\\u8EAB\\u624D\\u534E\\u7684\\u540C\\u65F6\\u4E5F\\u4E3A\\u5B66\\u6821\\u4E89\\u5149\"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a['prize-list']\n      }, this.state.list.map(function (val) {\n        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_sImageItem__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n          key: val\n        });\n      }))));\n    }\n  }]);\n\n  return Prize;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_components_withStyles__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(Prize, _style_css__WEBPACK_IMPORTED_MODULE_10___default.a));\n\n//# sourceURL=webpack:///./app/views/prize/index.js?");

/***/ }),

/***/ "./app/views/prize/style.css":
/*!***********************************!*\
  !*** ./app/views/prize/style.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1!./style.css */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./app/views/prize/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/_isomorphic-style-loader@5.0.1@isomorphic-style-loader/insertCss.js */ \"./node_modules/_isomorphic-style-loader@5.0.1@isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./app/views/prize/style.css?");

/***/ }),

/***/ "./app/views/works/index.js":
/*!**********************************!*\
  !*** ./app/views/works/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar Prize =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Prize, _Component);\n\n  function Prize() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Prize);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Prize).apply(this, arguments));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Prize, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", null);\n    }\n  }]);\n\n  return Prize;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Prize);\n\n//# sourceURL=webpack:///./app/views/works/index.js?");

/***/ }),

/***/ "./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./app/components/mImageItem.css":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1!./app/components/mImageItem.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"._1GZtGKoiPYVdyG61Yuv_ML {\\r\\n    padding: .24rem;\\r\\n}\\r\\n._3TgqvmvMiVieyh1HMC63DQ {\\r\\n    position: relative\\r\\n}\\r\\n._3HxV9EY5aWq2whPWS_tZnp {\\r\\n    position: absolute;\\r\\n    left: 0;\\r\\n    bottom: .24rem;\\r\\n    width: 100%;\\r\\n    height: 1px;\\r\\n    transform: scaleY(.5);\\r\\n    transform-origin: 0 0;\\r\\n    border-top: 2px solid #0cb181;\\r\\n}\\r\\n._2UXwc-HphFgJuHKCAJZpYr {\\r\\n    display: inline-block;\\r\\n    position: relative;\\r\\n    font-size: .32rem;\\r\\n    padding: 0 .2rem;\\r\\n    background: #fff;\\r\\n}\\r\\n._2k9lj-9I1sRbnjTYczmql8 {\\r\\n    height: 4rem;\\r\\n    margin: .3rem .1rem;\\r\\n    overflow: hidden;\\r\\n}\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"mImageItem-title\": \"_1GZtGKoiPYVdyG61Yuv_ML\",\n\t\"mImageItem-title-con\": \"_3TgqvmvMiVieyh1HMC63DQ\",\n\t\"mImageItem-titel-line\": \"_3HxV9EY5aWq2whPWS_tZnp\",\n\t\"mImageItem-title-txt\": \"_2UXwc-HphFgJuHKCAJZpYr\",\n\t\"mImageItem-image\": \"_2k9lj-9I1sRbnjTYczmql8\"\n};\n\n//# sourceURL=webpack:///./app/components/mImageItem.css?./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./app/components/newsItem.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1!./app/components/newsItem.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"._3d2ElqWwA4OaVsJe7tafiB {\\r\\n    display: flex;\\r\\n    padding: .3rem;\\r\\n    border-bottom: '1px solid #ececec';\\r\\n}\\r\\n._1NIj0yt3fkEy8-xLgkI2wU {\\r\\n    width: 1.96rem;\\r\\n    height: 1.16rem;\\r\\n    overflow: hidden;\\r\\n}\\r\\n._1Z0kHHNY6SE2ICsLJnylHP {\\r\\n    height: 100%;\\r\\n}\\r\\n._2FqHihZmmfzItHgLbKtV04 {\\r\\n    flex: 1;\\r\\n    padding-left: .2rem;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n._3MT8jStPvOCUvKLbV4J7TV {\\r\\n    font-size: .32rem;\\r\\n    line-height: 1.2;\\r\\n    display: -webkit-box;\\r\\n    word-break: break-all;\\r\\n    overflow: hidden;\\r\\n    -webkit-line-clamp: 2;\\r\\n}\\r\\n._3bQKf3n5S3G-aDTVcfwFce {\\r\\n    font-size: .28rem;\\r\\n    color: #a3b2c9\\r\\n}\\r\\n._3bQKf3n5S3G-aDTVcfwFce:after{\\r\\n    content: ' ';\\r\\n    display: block;\\r\\n    clear: both;\\r\\n    visibility:hidden;\\r\\n    line-height: 0;\\r\\n    height:0;\\r\\n}\\r\\n._3BmAXsgpscHPHNAYbxqarR {\\r\\n    float: left;\\r\\n}\\r\\n._1MZswClNpyGs7B31kRf1Vo {\\r\\n    float: right;\\r\\n    color: #a3b2c9;\\r\\n}\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"newsItem\": \"_3d2ElqWwA4OaVsJe7tafiB\",\n\t\"newsItem-left\": \"_1NIj0yt3fkEy8-xLgkI2wU\",\n\t\"newsItem-left-img\": \"_1Z0kHHNY6SE2ICsLJnylHP\",\n\t\"newsItem-right\": \"_2FqHihZmmfzItHgLbKtV04\",\n\t\"newsItem-right-title\": \"_3MT8jStPvOCUvKLbV4J7TV\",\n\t\"newsItem-right-msg\": \"_3bQKf3n5S3G-aDTVcfwFce\",\n\t\"newsItem-right-msg-time\": \"_3BmAXsgpscHPHNAYbxqarR\",\n\t\"newsItem-right-msg-detail\": \"_1MZswClNpyGs7B31kRf1Vo\"\n};\n\n//# sourceURL=webpack:///./app/components/newsItem.css?./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./app/components/sImageItem.css":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1!./app/components/sImageItem.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"._1lPLGiy7fysIDltQHMGRM- {\\r\\n    padding: .24rem;\\r\\n    font-size: .32rem;\\r\\n}\\r\\n._3WgKUStO5hpN3ffMDMWSHw {\\r\\n    display: inline-block;\\r\\n    height: 100%;\\r\\n    width: .3rem;\\r\\n    background: rgb(12, 177, 129);\\r\\n}\\r\\n._2_sovpEsZczodZn9J0B0jV {\\r\\n    display: inline-block;\\r\\n    line-height: .34rem;\\r\\n    padding-left: 11px;\\r\\n    border-left: 7px solid rgb(12, 177, 129)\\r\\n}\\r\\n._2Te_qlvpwSLL2gKSjVaU7A {\\r\\n    margin: .4rem 0;\\r\\n}\\r\\n.qXX5tWn4eqKeSsuNaQZuK {\\r\\n    width: 100%;\\r\\n}\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"imageItem-title\": \"_1lPLGiy7fysIDltQHMGRM-\",\n\t\"imageItem-title-icon\": \"_3WgKUStO5hpN3ffMDMWSHw\",\n\t\"imageItem-title-txt\": \"_2_sovpEsZczodZn9J0B0jV\",\n\t\"imageItem-image\": \"_2Te_qlvpwSLL2gKSjVaU7A\",\n\t\"imageItem-image-img\": \"qXX5tWn4eqKeSsuNaQZuK\"\n};\n\n//# sourceURL=webpack:///./app/components/sImageItem.css?./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./app/views/detail/style.css":
/*!******************************************************************************************************!*\
  !*** ./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1!./app/views/detail/style.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"._2kFDy2cuLBY0P4TJouR_yc{\\r\\n    background: #fff;\\r\\n    padding-bottom: .3rem;\\r\\n}\\r\\n._2c8L2g5chzn-TMN7MduAGW{\\r\\n    padding: .4rem .3rem;\\r\\n    color: #000;\\r\\n    font-size: .44rem;\\r\\n}\\r\\n._1Fa0EOc-zWAJQ3NwLb-v9E{\\r\\n    padding: 0 .3rem;\\r\\n    color: #a9b5c5;\\r\\n    font-size: .28rem;\\r\\n}\\r\\n._22AHJtBtnx7VErouNso4OJ{\\r\\n    font-size: 0;\\r\\n}\\r\\n.OMUxkFF5HKcCFDAq-F40V{\\r\\n    width: 100%;\\r\\n}\\r\\n._1yulq1eXWqhnP3cMRQLmAw{\\r\\n    position: relative;\\r\\n    top: -.1rem;\\r\\n    padding: 0 .24rem;\\r\\n    margin-bottom: .4rem;   \\r\\n}\\r\\n._32GIxH04SiANbH97Dkt7Ic{\\r\\n    margin-bottom: .24rem;\\r\\n    font-size: 0;\\r\\n}\\r\\n._2MfOtEcl2aSoLT4Yz8Eaf7{\\r\\n    background: #fff;\\r\\n    box-shadow: 0 0 0.6rem rgba(78,131,137,.15);\\r\\n    padding: .4rem .36rem .5rem;\\r\\n    color: #6e7d8f;\\r\\n}\\r\\n._3EuMDDDG6YDKsu8plevDQy{\\r\\n    display: inline-block;\\r\\n    height: 0.06rem;\\r\\n}\\r\\n._1HVENnH7XbD6tVRVFXu0d3{\\r\\n    width: .2rem;\\r\\n    background: #0cb181;\\r\\n}\\r\\n._1QZp_rs-eKiLRB2fkvkrSZ{\\r\\n    width: .36rem;\\r\\n    background: #000;\\r\\n}\\r\\n._31trxpm3gI5X3wvHFYKash{\\r\\n    padding: .3rem .24rem;\\r\\n    font-size: .26rem;\\r\\n}\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"detail-header\": \"_2kFDy2cuLBY0P4TJouR_yc\",\n\t\"detail-header-title\": \"_2c8L2g5chzn-TMN7MduAGW\",\n\t\"detail-header-msg\": \"_1Fa0EOc-zWAJQ3NwLb-v9E\",\n\t\"detail-img\": \"_22AHJtBtnx7VErouNso4OJ\",\n\t\"detail-img-img\": \"OMUxkFF5HKcCFDAq-F40V\",\n\t\"detail-con\": \"_1yulq1eXWqhnP3cMRQLmAw\",\n\t\"detail-con-top\": \"_32GIxH04SiANbH97Dkt7Ic\",\n\t\"detail-con-txt\": \"_2MfOtEcl2aSoLT4Yz8Eaf7\",\n\t\"detail-con-span\": \"_3EuMDDDG6YDKsu8plevDQy\",\n\t\"detail-con-green\": \"_1HVENnH7XbD6tVRVFXu0d3\",\n\t\"detail-con-black\": \"_1QZp_rs-eKiLRB2fkvkrSZ\",\n\t\"detail-content\": \"_31trxpm3gI5X3wvHFYKash\"\n};\n\n//# sourceURL=webpack:///./app/views/detail/style.css?./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./app/views/home/style.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1!./app/views/home/style.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"._2qJwFYYzYbuXUhJmLHx87y{\\r\\n    height: 100%;\\r\\n    padding-top: .16rem;\\r\\n    background-color: #fff;\\r\\n    overflow-y: auto;\\r\\n}\\r\\n._3h9v28GjXN8I648sFtciRi{\\r\\n    padding: .16rem;\\r\\n    overflow: hidden;\\r\\n}\\r\\n._2Dzn6eZPVFZkfeGvHKkXbt{\\r\\n    margin-top: .5rem;\\r\\n    padding: .24rem;\\r\\n    color: rgb(108, 129, 152);\\r\\n    font-size: .34rem;\\r\\n    text-align: center;\\r\\n}\\r\\n._3sraWpf_qQdiiSk-lELLi1{\\r\\n    position: absolute;\\r\\n    right: 0;\\r\\n    bottom: .22rem;\\r\\n    border-top: 2px solid #0cb181;\\r\\n    width: 100%;\\r\\n    height: 1px;\\r\\n    transform: scaleY(.5);\\r\\n    transform-origin: 0 0;\\r\\n    border-color: rgb(179, 208, 215);\\r\\n}\\r\\n.ICteE_xBXXKv756p5U68A{\\r\\n    display: inline-block;\\r\\n    position: relative;\\r\\n    z-index: 2;\\r\\n    padding: 0 .24rem;\\r\\n    background-color: #fff;\\r\\n}\\r\\n.Nhw3px40ZK12BB2g0m1-h{\\r\\n    height: 1px;\\r\\n    border-top: 1px solid #e6eaea;\\r\\n    margin: .3rem 0 .2rem;\\r\\n}\\r\\n._2zggbzy39ZguMZzswiEneZ{\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n    padding: 0 .2rem;\\r\\n}\\r\\n.CdJqBg0NvRe6KubLWBxwY{\\r\\n    display: flex;\\r\\n    width: 33.33%;\\r\\n    margin: .3rem 0;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    flex-direction: column;\\r\\n}\\r\\n.PK4Rw_vc-yUZLrI6XZXq9,._1AHD26fIFmA41y2ZMvy4gd{\\r\\n    width: .48rem;\\r\\n    height: .48rem;\\r\\n    overflow: hidden;\\r\\n}\\r\\n.PK4Rw_vc-yUZLrI6XZXq9 img{\\r\\n    width: 100%;\\r\\n}\\r\\n._1AHD26fIFmA41y2ZMvy4gd img{\\r\\n    width: auto;\\r\\n    height: 100%;\\r\\n}\\r\\n._273L-1tfWH6N0cSVLwCutQ{\\r\\n    margin-top: .1rem;\\r\\n    font-size: .26rem;\\r\\n    color: rgb(110, 125, 143);\\r\\n}\\r\\n._1PSObQ8NWUuvMYYfl4QrMA{\\r\\n    padding-top: .2rem;\\r\\n}\\r\\n.f_QfG10CJ0_zIjpoZBeWx{\\r\\n    margin: .3rem;\\r\\n    padding-left: .2rem;\\r\\n    border-left: .2rem solid rgb(142, 178, 187);\\r\\n    color: rgb(87, 108, 132);\\r\\n    font-size: .36rem;\\r\\n    line-height: .42rem;\\r\\n}\\r\\n._1j67TACNiIbi-mjsxQWoEp{\\r\\n    display: block;\\r\\n    height: .66rem;\\r\\n    line-height: .66rem;\\r\\n    text-align: center;\\r\\n    background: #f4f8f9;\\r\\n    color: #6e7d8f; \\r\\n}\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"home\": \"_2qJwFYYzYbuXUhJmLHx87y\",\n\t\"home-space-carousel\": \"_3h9v28GjXN8I648sFtciRi\",\n\t\"home-welcome\": \"_2Dzn6eZPVFZkfeGvHKkXbt\",\n\t\"home-welcome-line\": \"_3sraWpf_qQdiiSk-lELLi1\",\n\t\"home-welcome-font\": \"ICteE_xBXXKv756p5U68A\",\n\t\"home-cutoff\": \"Nhw3px40ZK12BB2g0m1-h\",\n\t\"home-menu\": \"_2zggbzy39ZguMZzswiEneZ\",\n\t\"home-menu-item\": \"CdJqBg0NvRe6KubLWBxwY\",\n\t\"home-menu-icon\": \"PK4Rw_vc-yUZLrI6XZXq9\",\n\t\"home-menu-hg\": \"_1AHD26fIFmA41y2ZMvy4gd\",\n\t\"home-menu-name\": \"_273L-1tfWH6N0cSVLwCutQ\",\n\t\"home-news\": \"_1PSObQ8NWUuvMYYfl4QrMA\",\n\t\"home-news-title\": \"f_QfG10CJ0_zIjpoZBeWx\",\n\t\"home-news-more\": \"_1j67TACNiIbi-mjsxQWoEp\"\n};\n\n//# sourceURL=webpack:///./app/views/home/style.css?./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./app/views/life/style.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1!./app/views/life/style.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"._1jkXH65y_OHAAFwIWYq3MN{\\r\\n    background: #fff;\\r\\n    height: 100%;\\r\\n}\\r\\n._2dZEYXFgoCyLTdMzyIt9wH{\\r\\n    font-size: .28rem;\\r\\n    padding: .2rem;\\r\\n    text-align: center;\\r\\n    color: rgb(110, 125, 143);\\r\\n    border-bottom: 1px solid rgb(221, 222, 225);\\r\\n}\\r\\n._2Nr9zAtz9uFIRAoKVZ3Aao{\\r\\n    width: .5rem;\\r\\n    height: .5rem;    \\r\\n}\\r\\n._3Xh6HNPU2tEAjCH9hWe9UL{\\r\\n    padding: .6rem .2rem;\\r\\n}\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"life\": \"_1jkXH65y_OHAAFwIWYq3MN\",\n\t\"life-header\": \"_2dZEYXFgoCyLTdMzyIt9wH\",\n\t\"life-header-img\": \"_2Nr9zAtz9uFIRAoKVZ3Aao\",\n\t\"life-content\": \"_3Xh6HNPU2tEAjCH9hWe9UL\"\n};\n\n//# sourceURL=webpack:///./app/views/life/style.css?./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./app/views/my-campus/style.css":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1!./app/views/my-campus/style.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"._3WxR6L37lCrqHTgAbEWFSV{\\r\\n    background: #fff;\\r\\n    height: 100%;\\r\\n}\\r\\n._25JcIExa4oZJYclWNzBlfM{\\r\\n    font-size: .28rem;\\r\\n    padding: .2rem;\\r\\n    text-align: center;\\r\\n    color: rgb(110, 125, 143);\\r\\n    border-bottom: 1px solid rgb(221, 222, 225);\\r\\n}\\r\\n.rODKXGoqf9pdyK8OR17al{\\r\\n    width: .5rem;\\r\\n    height: .5rem; \\r\\n}\\r\\n._118yNwCr0rTFraXXblnw9M{\\r\\n    padding: .6rem .2rem;   \\r\\n}\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"intro\": \"_3WxR6L37lCrqHTgAbEWFSV\",\n\t\"intro-header\": \"_25JcIExa4oZJYclWNzBlfM\",\n\t\"intro-header-img\": \"rODKXGoqf9pdyK8OR17al\",\n\t\"intro-content\": \"_118yNwCr0rTFraXXblnw9M\"\n};\n\n//# sourceURL=webpack:///./app/views/my-campus/style.css?./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./app/views/prize/style.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1!./app/views/prize/style.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"._26AE9WnBrg8qQvioErCigX {\\r\\n    height: 100%;\\r\\n    background: #fff;\\r\\n}\\r\\n._1wuSUY7hgZlU7sEOPTX-QC{\\r\\n    font-size: .38rem;\\r\\n    color: rgb(105, 105, 105);\\r\\n    text-align: center;\\r\\n    font-weight: bold;\\r\\n    padding: .3rem;\\r\\n}\\r\\n._22Nr4VmL-FI5mosJg6Kj17{\\r\\n    position: relative;\\r\\n    width: 100%;\\r\\n    word-break: break-all;\\r\\n}\\r\\n._1Q8_fgmxIkFJPUawjq0Ozl{\\r\\n    position: absolute;\\r\\n    right: 0;\\r\\n    bottom: .25rem;\\r\\n    border-top: 2px solid #0cb181;\\r\\n    width: 100%;\\r\\n    height: 1px;\\r\\n    transform: scaleY(.5);\\r\\n    transform-origin: 0 0;\\r\\n}\\r\\n._2_bLKC3FSWMrpZLMSL3s1W{\\r\\n    position: relative;\\r\\n    z-index: 2;\\r\\n    padding: 0 .24rem;\\r\\n    background: #fff;\\r\\n}\\r\\n._2cw-HSZ-MnHXaijCeP6Cjj{\\r\\n    padding: .2rem .24rem;\\r\\n    font-size: .32rem;\\r\\n    color: rgb(31, 201, 158);\\r\\n    background: rgb(242, 242, 242);   \\r\\n}\\r\\n._2xsdr4EmUWOzOcPbzd6BNx{\\r\\n    padding-top: .2rem;\\r\\n}\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"prize\": \"_26AE9WnBrg8qQvioErCigX\",\n\t\"prize-header\": \"_1wuSUY7hgZlU7sEOPTX-QC\",\n\t\"prize-header-con\": \"_22Nr4VmL-FI5mosJg6Kj17\",\n\t\"prize-header-line\": \"_1Q8_fgmxIkFJPUawjq0Ozl\",\n\t\"prize-header-msg\": \"_2_bLKC3FSWMrpZLMSL3s1W\",\n\t\"prize-intro\": \"_2cw-HSZ-MnHXaijCeP6Cjj\",\n\t\"prize-list\": \"_2xsdr4EmUWOzOcPbzd6BNx\"\n};\n\n//# sourceURL=webpack:///./app/views/prize/style.css?./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/_isomorphic-style-loader@5.0.1@isomorphic-style-loader/insertCss.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_isomorphic-style-loader@5.0.1@isomorphic-style-loader/insertCss.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack:///./node_modules/_isomorphic-style-loader@5.0.1@isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "@babel/runtime/helpers/assertThisInitialized":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/assertThisInitialized" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/assertThisInitialized\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/assertThisInitialized%22?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/classCallCheck\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/classCallCheck%22?");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/createClass\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/createClass%22?");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/defineProperty\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/defineProperty%22?");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/getPrototypeOf\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/getPrototypeOf%22?");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/inherits\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/inherits%22?");

/***/ }),

/***/ "@babel/runtime/helpers/objectSpread":
/*!******************************************************!*\
  !*** external "@babel/runtime/helpers/objectSpread" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/objectSpread\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/objectSpread%22?");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/possibleConstructorReturn\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/possibleConstructorReturn%22?");

/***/ }),

/***/ "@babel/runtime/helpers/toConsumableArray":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/toConsumableArray\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/toConsumableArray%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "antd-mobile":
/*!******************************!*\
  !*** external "antd-mobile" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd-mobile\");\n\n//# sourceURL=webpack:///external_%22antd-mobile%22?");

/***/ }),

/***/ "antd-mobile/lib/tab-bar":
/*!******************************************!*\
  !*** external "antd-mobile/lib/tab-bar" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd-mobile/lib/tab-bar\");\n\n//# sourceURL=webpack:///external_%22antd-mobile/lib/tab-bar%22?");

/***/ }),

/***/ "array-flatten":
/*!********************************!*\
  !*** external "array-flatten" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"array-flatten\");\n\n//# sourceURL=webpack:///external_%22array-flatten%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "http-proxy-middleware":
/*!****************************************!*\
  !*** external "http-proxy-middleware" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-proxy-middleware\");\n\n//# sourceURL=webpack:///external_%22http-proxy-middleware%22?");

/***/ }),

/***/ "isomorphic-style-loader/StyleContext":
/*!*******************************************************!*\
  !*** external "isomorphic-style-loader/StyleContext" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-style-loader/StyleContext\");\n\n//# sourceURL=webpack:///external_%22isomorphic-style-loader/StyleContext%22?");

/***/ }),

/***/ "isomorphic-style-loader/withStyles":
/*!*****************************************************!*\
  !*** external "isomorphic-style-loader/withStyles" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-style-loader/withStyles\");\n\n//# sourceURL=webpack:///external_%22isomorphic-style-loader/withStyles%22?");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa\");\n\n//# sourceURL=webpack:///external_%22koa%22?");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-router\");\n\n//# sourceURL=webpack:///external_%22koa-router%22?");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-static\");\n\n//# sourceURL=webpack:///external_%22koa-static%22?");

/***/ }),

/***/ "koa-views":
/*!****************************!*\
  !*** external "koa-views" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-views\");\n\n//# sourceURL=webpack:///external_%22koa-views%22?");

/***/ }),

/***/ "koa2-connect":
/*!*******************************!*\
  !*** external "koa2-connect" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa2-connect\");\n\n//# sourceURL=webpack:///external_%22koa2-connect%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });