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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/app.js":
/*!********************!*\
  !*** ./app/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _assets_css_common_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/css/common.css */ \"./app/assets/css/common.css\");\n/* harmony import */ var _assets_css_common_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_css_common_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _views_home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/home */ \"./app/views/home/index.js\");\n/* harmony import */ var _views_news__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/news */ \"./app/views/news/index.js\");\n/* harmony import */ var _views_prize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/prize */ \"./app/views/prize/index.js\");\n/* harmony import */ var _views_my_campus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/my-campus */ \"./app/views/my-campus/index.js\");\n/* harmony import */ var _views_life__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/life */ \"./app/views/life/index.js\");\n/* harmony import */ var _views_detail__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/detail */ \"./app/views/detail/index.js\");\n/* harmony import */ var _views_noMatch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/noMatch */ \"./app/views/noMatch.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(App, _Component);\n\n  function App() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(App).apply(this, arguments));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"root\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"Route\"], {\n        path: \"/index\",\n        component: _views_home__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n        exact: true\n      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"Route\"], {\n        path: \"/my-campus\",\n        component: _views_my_campus__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"Route\"], {\n        path: \"/news\",\n        component: _views_news__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"Route\"], {\n        path: \"/prize\",\n        component: _views_prize__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"Route\"], {\n        path: \"/life\",\n        component: _views_life__WEBPACK_IMPORTED_MODULE_13__[\"default\"]\n      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"Route\"], {\n        path: \"/article/:type/:id\",\n        component: _views_detail__WEBPACK_IMPORTED_MODULE_14__[\"default\"]\n      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"Route\"], {\n        component: _views_noMatch__WEBPACK_IMPORTED_MODULE_15__[\"default\"]\n      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"style\", {\n        jsx: \"true\"\n      }, \"\\n                    *{\\n                        margin: 0;\\n                        padding: 0;\\n                        box-sizing: border-box;\\n                    }\\n                    html,body{\\n                        height: 100%;\\n                    }\\n                    body{\\n                        width: 100%;\\n                        font-size: .14rem;\\n                        font-family: -apple-system-font,Helvetica Neue,sans-serif;\\n                        overflow-x: hidden;\\n                        color: #686868;\\n                        line-height: 1.6;\\n                    }\\n                    #app,.root{\\n                        height: 100%;\\n                    }\\n                \"));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./app/app.js?");

/***/ }),

/***/ "./app/assets/404.png":
/*!****************************!*\
  !*** ./app/assets/404.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/53189f03370b6e34e77c60f1150b7911.png\";\n\n//# sourceURL=webpack:///./app/assets/404.png?");

/***/ }),

/***/ "./app/assets/css/common.css":
/*!***********************************!*\
  !*** ./app/assets/css/common.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1!./common.css */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./app/assets/css/common.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/_isomorphic-style-loader@5.0.1@isomorphic-style-loader/insertCss.js */ \"./node_modules/_isomorphic-style-loader@5.0.1@isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./app/assets/css/common.css?");

/***/ }),

/***/ "./app/components/mImageItem.js":
/*!**************************************!*\
  !*** ./app/components/mImageItem.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd-mobile */ \"antd-mobile\");\n/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_mobile__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\nvar MImageItem =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(MImageItem, _Component);\n\n  function MImageItem() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MImageItem);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(MImageItem)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"state\", {\n      data: ['1', '2', '3']\n    });\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MImageItem, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      // simulate img loading\n      setTimeout(function () {\n        _this2.setState({\n          data: ['562881461756053', '562881461755955', '562881461756013']\n        });\n      }, 100);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"mImageItem\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        style: styles[\"mImageItem-title\"]\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        style: styles[\"mImageItem-title-con\"]\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        style: styles[\"mImageItem-titel-line\"]\n      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"span\", {\n        style: styles[\"mImageItem-title-txt\"]\n      }, \"\\u65B0\\u751F\\u665A\\u4F1A\\u8868\\u6F14\"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        style: styles[\"mImageItem-image\"]\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_8__[\"WingBlank\"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_8__[\"Carousel\"], {\n        autoplay: true,\n        infinite: true,\n        beforeChange: function beforeChange(from, to) {\n          return console.log(\"slide from \".concat(from, \" to \").concat(to));\n        },\n        afterChange: function afterChange(index) {\n          return console.log('slide to', index);\n        }\n      }, this.state.data.map(function (val) {\n        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"a\", {\n          key: val,\n          href: \"#\",\n          style: {\n            display: 'inline-block',\n            width: '100%',\n            height: '4rem'\n          }\n        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"img\", {\n          src: \"http://p.qpic.cn/smartcampus/0/\".concat(val, \"/360\"),\n          alt: \"\",\n          style: {\n            width: '100%',\n            verticalAlign: 'top'\n          },\n          onLoad: function onLoad() {\n            // fire window resize event to change height\n            if (typeof window !== 'undefined') {\n              window.dispatchEvent(new Event('resize'));\n            }\n          }\n        }));\n      })))));\n    }\n  }]);\n\n  return MImageItem;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\nvar styles = {\n  'mImageItem-title': {\n    padding: '.24rem'\n  },\n  'mImageItem-title-con': {\n    position: 'relative'\n  },\n  'mImageItem-titel-line': {\n    position: 'absolute',\n    left: 0,\n    bottom: '.24rem',\n    width: '100%',\n    height: '1px',\n    transform: 'scaleY(.5)',\n    transformOrigin: '0 0',\n    borderTop: '2px solid #0cb181'\n  },\n  'mImageItem-title-txt': {\n    display: 'inline-block',\n    position: 'relative',\n    fontSize: '.32rem',\n    padding: '0 .2rem',\n    background: '#fff'\n  },\n  'mImageItem-image': {\n    height: '4rem',\n    margin: '.3rem .1rem',\n    overflow: 'hidden'\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (MImageItem);\n\n//# sourceURL=webpack:///./app/components/mImageItem.js?");

/***/ }),

/***/ "./app/components/newsItem.js":
/*!************************************!*\
  !*** ./app/components/newsItem.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd-mobile */ \"antd-mobile\");\n/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_mobile__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\nvar NewsItem =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(NewsItem, _Component);\n\n  function NewsItem() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, NewsItem);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(NewsItem).apply(this, arguments));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(NewsItem, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        style: styles.newsItem\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        style: styles[\"newsItem-left\"]\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"img\", {\n        style: styles[\"newsItem-left-img\"],\n        src: \"http://p.qpic.cn/smartcampus/0/25319021414858096/0\"\n      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        style: styles[\"newsItem-right\"]\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"p\", {\n        style: styles[\"newsItem-right-title\"]\n      }, \"\\u667A\\u6167\\u6821\\u56ED\\u7684\\u6559\\u5BA4\\u6084\\u6084\\u53D1\\u751F\\u4E86\\u53D8\\u5316\"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"p\", {\n        className: \"clearfix\",\n        style: styles[\"newsItem-right-msg\"]\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"span\", {\n        style: styles[\"newsItem-right-msg-time\"]\n      }, \"2019-01-14\"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"Link\"], {\n        to: \"/article/news/2\",\n        style: styles[\"newsItem-right-msg-detail\"]\n      }, \"\\u67E5\\u770B\\u8BE6\\u60C5\", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_6__[\"Icon\"], {\n        type: \"right\"\n      })))));\n    }\n  }]);\n\n  return NewsItem;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\nvar styles = {\n  newsItem: {\n    display: 'flex',\n    padding: '.3rem',\n    borderBottom: '1px solid #ececec'\n  },\n  'newsItem-left': {\n    width: '1.96rem',\n    height: '1.16rem',\n    overflow: 'hidden'\n  },\n  'newsItem-left-img': {\n    height: '100%'\n  },\n  'newsItem-right': {\n    flex: 1,\n    paddingLeft: '.2rem',\n    display: 'flex',\n    flexDirection: 'column',\n    justifyContent: 'space-between'\n  },\n  'newsItem-right-title': {\n    fontSize: '.32rem',\n    lineHeight: 1.2,\n    display: '-webkit-box',\n    wordBreak: 'break-all',\n    overflow: 'hidden',\n    WebkitLineClamp: 2\n  },\n  'newsItem-right-msg': {\n    fontSize: '.28rem',\n    color: '#a3b2c9'\n  },\n  'newsItem-right-msg-time': {\n    \"float\": 'left'\n  },\n  'newsItem-right-msg-detail': {\n    \"float\": 'right',\n    color: '#a3b2c9'\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsItem);\n\n//# sourceURL=webpack:///./app/components/newsItem.js?");

/***/ }),

/***/ "./app/components/sImageItem.js":
/*!**************************************!*\
  !*** ./app/components/sImageItem.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar SImageItem =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SImageItem, _Component);\n\n  function SImageItem() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SImageItem);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SImageItem).apply(this, arguments));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SImageItem, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"imageItem\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        style: styles[\"imageItem-title\"]\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"p\", {\n        style: styles[\"imageItem-title-txt\"]\n      }, \"\\u821E\\u8E48\\u5927\\u8D5B\\u8363\\u83B7\\u4E00\\u7B49\\u5956\")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        style: styles[\"imageItem-image\"]\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"img\", {\n        style: styles[\"imageItem-image-img\"],\n        src: \"http://p.qpic.cn/smartcampus/0/44128296028675/0\"\n      })));\n    }\n  }]);\n\n  return SImageItem;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\nvar styles = {\n  'imageItem-title': {\n    padding: '.24rem',\n    'font-size': '.32rem'\n  },\n  'imageItem-title-icon': {\n    display: 'inline-block',\n    height: '100%',\n    width: '.3rem',\n    background: 'rgb(12, 177, 129)'\n  },\n  'imageItem-title-txt': {\n    display: 'inline-block',\n    lineHeight: '.34rem',\n    paddingLeft: '11px',\n    borderLeft: '7px solid rgb(12, 177, 129)'\n  },\n  'imageItem-image': {\n    margin: '.4rem 0'\n  },\n  'imageItem-image-img': {\n    width: '100%'\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SImageItem);\n\n//# sourceURL=webpack:///./app/components/sImageItem.js?");

/***/ }),

/***/ "./app/server.js":
/*!***********************!*\
  !*** ./app/server.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app */ \"./app/app.js\");\n\n\n\n\n\n\n\n\nvar ServeDOM =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ServeDOM, _Component);\n\n  function ServeDOM() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ServeDOM);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ServeDOM).apply(this, arguments));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ServeDOM, [{\n    key: \"render\",\n    value: function render() {\n      return (// <StaticRouter basename=\"/app\" context={this.props.context} location={this.props.url}>\n        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_app__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null) // </StaticRouter>\n\n      );\n    }\n  }]);\n\n  return ServeDOM;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ServeDOM);\n\n//# sourceURL=webpack:///./app/server.js?");

/***/ }),

/***/ "./app/views/detail/index.js":
/*!***********************************!*\
  !*** ./app/views/detail/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ \"./app/views/detail/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nvar Detail =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Detail, _Component);\n\n  function Detail() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Detail);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Detail).apply(this, arguments));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Detail, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"detail\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"detail-header\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"detail-header-title\"\n      }, \"\\u667A\\u6167\\u6821\\u56ED\\u7684\\u6559\\u5BA4\\u6084\\u6084\\u53D1\\u751F\\u4E86\\u53D8\\u5316\"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"detail-header-msg\"\n      }, \"2019-01-14\")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"detail-img\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"img\", {\n        className: \"detail-img-img\",\n        src: \"http://p.qpic.cn/smartcampus/0/25319021414858096/0\"\n      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"detail-con\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"detail-con-txt\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"p\", {\n        className: \"detail-con-top\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"span\", {\n        className: \"detail-con-span detail-con-green\"\n      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"span\", {\n        className: \"detail-con-span detail-con-black\"\n      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"p\", null, \"\\u5FEB\\u6765\\u627E\\u627E\\u4F60\\u7684\\u6559\\u5BA4\\u6709\\u4EC0\\u4E48\\u4E0D\\u540C\"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"detail-content\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"p\", null, \"\\u5FEB\\u6765\\u627E\\u627E\\u4F60\\u7684\\u6559\\u5BA4\\u6709\\u4EC0\\u4E48\\u4E0D\\u540C\")));\n    }\n  }]);\n\n  return Detail;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detail);\n\n//# sourceURL=webpack:///./app/views/detail/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.css */ \"./app/views/home/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./swiper */ \"./app/views/home/swiper.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu */ \"./app/views/home/menu.js\");\n/* harmony import */ var _components_newsItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/newsItem */ \"./app/components/newsItem.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconsole.log(_style_css__WEBPACK_IMPORTED_MODULE_8___default.a);\n\nvar Home =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Home, _Component);\n\n  function Home() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Home);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Home).apply(this, arguments));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Home, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_8___default.a['home']\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_swiper__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_8___default.a['home-welcome']\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        style: {\n          position: 'relative',\n          width: '100%'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_8___default.a['home-welcome-line']\n      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"span\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_8___default.a['home-welcome-font']\n      }, \"\\u6B22\\u8FCE\\u6765\\u5230\\u667A\\u6167\\u5B66\\u6821\"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_8___default.a['home-cutoff']\n      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_menu__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_8___default.a['home-cutoff']\n      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_8___default.a['home-news']\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"p\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_8___default.a['home-news-title']\n      }, \"\\u6821\\u56ED\\u65B0\\u95FB\"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_newsItem__WEBPACK_IMPORTED_MODULE_11__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_newsItem__WEBPACK_IMPORTED_MODULE_11__[\"default\"], null)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"Link\"], {\n        to: \"news\",\n        className: _style_css__WEBPACK_IMPORTED_MODULE_8___default.a['home-news-more']\n      }, \"\\u66F4\\u591A\\u65B0\\u95FB >>\")));\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(_style_css__WEBPACK_IMPORTED_MODULE_8___default.a)(Home));\n\n//# sourceURL=webpack:///./app/views/home/index.js?");

/***/ }),

/***/ "./app/views/home/menu.js":
/*!********************************!*\
  !*** ./app/views/home/menu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nvar Menu =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Menu, _Component);\n\n  function Menu() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Menu);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Menu).apply(this, arguments));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Menu, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"home-menu\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"home-menu-item\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"home-menu-icon\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"img\", {\n        src: \"http://p.qpic.cn/smartcampus/0/25319021966887216/0\"\n      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"Link\"], {\n        to: \"/my-campus\",\n        className: \"home-menu-name\"\n      }, \"\\u5B66\\u6821\\u7B80\\u4ECB\")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"home-menu-item\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"home-menu-icon\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"img\", {\n        src: \"http://p.qpic.cn/smartcampus/0/25319021795367092/0\"\n      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"Link\"], {\n        to: \"/news\",\n        className: \"home-menu-name\"\n      }, \"\\u6821\\u56ED\\u65B0\\u95FB\")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"home-menu-item\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"home-menu-icon home-menu-hg\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"img\", {\n        src: \"http://p.qpic.cn/smartcampus/0/25319023539621628/0\"\n      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"Link\"], {\n        to: \"/prize\",\n        className: \"home-menu-name\"\n      }, \"\\u8363\\u83B7\\u5956\\u9879\")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"home-menu-item\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"home-menu-icon\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"img\", {\n        src: \"http://p.qpic.cn/smartcampus/0/25319022825701726/0\"\n      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"span\", {\n        className: \"home-menu-name\"\n      }, \"\\u5E08\\u751F\\u4F5C\\u54C1\")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"home-menu-item\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"home-menu-icon\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"img\", {\n        src: \"http://p.qpic.cn/smartcampus/0/25319021886291474/0\"\n      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"Link\"], {\n        to: \"/life\",\n        className: \"home-menu-name\"\n      }, \"\\u6821\\u56ED\\u751F\\u6D3B\")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"home-menu-item\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"home-menu-icon home-menu-hg\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"img\", {\n        src: \"http://p.qpic.cn/smartcampus/0/25319021366965580/0\"\n      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"span\", {\n        className: \"home-menu-name\"\n      }, \"\\u6821\\u56ED\\u8857\\u666F\")));\n    }\n  }]);\n\n  return Menu;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\n//# sourceURL=webpack:///./app/views/home/menu.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd-mobile */ \"antd-mobile\");\n/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_mobile__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n/*\r\n * 首页焦点图\r\n */\n\n\n\nvar Swiper =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Swiper, _Component);\n\n  function Swiper() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Swiper);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Swiper)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"state\", {\n      imgs: ['1', '2', '3'],\n      imgHeight: 150\n    });\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Swiper, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.setState({\n        imgs: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI']\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_8__[\"WingBlank\"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_8__[\"Carousel\"], {\n        className: \"home-space-carousel\",\n        frameOverflow: \"visible\",\n        cellSpacing: 10,\n        slideWidth: 0.8,\n        autoplay: true,\n        infinite: true,\n        afterChange: function afterChange(index) {\n          return _this2.setState({\n            slideIndex: index\n          });\n        }\n      }, this.state.imgs.map(function (val, idx) {\n        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"a\", {\n          key: val,\n          href: \"#\",\n          style: {\n            display: 'block',\n            position: 'relative',\n            top: _this2.state.slideIndex === idx ? -10 : 0,\n            height: _this2.state.imgHeight,\n            boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)'\n          }\n        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"img\", {\n          src: \"https://zos.alipayobjects.com/rmsportal/\".concat(val, \".png\"),\n          style: {\n            width: '100%',\n            verticalAlign: 'top'\n          },\n          onLoad: function onLoad() {\n            if (typeof window !== 'undefined') {\n              window.dispatchEvent(new Event('resize'));\n            }\n\n            _this2.setState({\n              imgHeight: 'auto'\n            });\n          }\n        }));\n      })));\n    }\n  }]);\n\n  return Swiper;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Swiper);\n\n//# sourceURL=webpack:///./app/views/home/swiper.js?");

/***/ }),

/***/ "./app/views/life/index.js":
/*!*********************************!*\
  !*** ./app/views/life/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.css */ \"./app/views/life/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_mImageItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/mImageItem */ \"./app/components/mImageItem.js\");\n\n\n\n\n\n\n\n\n\n\n\nvar Life =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Life, _Component);\n\n  function Life() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Life);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Life)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"state\", {\n      list: ['1', '2', '3']\n    });\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Life, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"life\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"life-header\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"img\", {\n        className: \"life-header-img\",\n        src: \"http://p.qpic.cn/smartcampus/0/441281377990953/0\"\n      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"p\", null, \"\\u6211\\u7684\\u667A\\u6167\\u6821\\u56ED\")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"life-list\"\n      }, this.state.list.map(function (val) {\n        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_mImageItem__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n          key: val\n        });\n      })));\n    }\n  }]);\n\n  return Life;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Life);\n\n//# sourceURL=webpack:///./app/views/life/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ \"./app/views/my-campus/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nvar MyCampus =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(MyCampus, _Component);\n\n  function MyCampus() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MyCampus);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(MyCampus).apply(this, arguments));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MyCampus, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"intro\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"intro-header\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"img\", {\n        className: \"intro-header-img\",\n        src: \"http://p.qpic.cn/smartcampus/0/441281377990953/0\"\n      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"p\", null, \"\\u6211\\u7684\\u667A\\u6167\\u6821\\u56ED\")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"intro-content\"\n      }, \"\\u201C\\u817E\\u8BAF\\u667A\\u6167\\u6821\\u56ED\\u201D\\u662F\\u817E\\u8BAF\\u516C\\u53F8\\u5728\\u201C\\u4E92\\u8054\\u7F51+\\u201D\\u7684\\u6218\\u7565\\u80CC\\u666F\\u4E0B\\uFF0C\\u7ED3\\u5408\\u81EA\\u8EAB\\u4EA7\\u54C1\\u4E0E\\u5E73\\u53F0\\u4F18\\u52BF\\uFF0C\\u9762\\u5411\\u5404\\u7C7B\\u5B66\\u6821\\u7814\\u53D1\\u7684\\u79FB\\u52A8\\u7AEF\\u6821\\u56ED\\u667A\\u6167\\u751F\\u6001\\u5708\\u89E3\\u51B3\\u65B9\\u6848\\u3002\\u6240\\u8C13\\u667A\\u6167\\u6559\\u80B2\\uFF0C\\u5C31\\u662F\\u7528\\u6700\\u7B80\\u5355\\u7684\\u65B9\\u5F0F\\uFF0C\\u8BA9\\u5DE5\\u4F5C\\u3001\\u5B66\\u4E60\\u3001\\u751F\\u6D3B\\u66F4\\u65B9\\u4FBF\\u3001\\u66F4\\u8F7B\\u677E\\u3001\\u66F4\\u7701\\u4E8B\\uFF01\\u63D0\\u5347\\u5DE5\\u4F5C\\u6548\\u7387\\u3001\\u964D\\u4F4E\\u7BA1\\u7406\\u6210\\u672C\\u3001\\u89E3\\u653E\\u5E08\\u751F\\u5BB6\\u957F\\u3001\\u6253\\u9020\\u667A\\u6167\\u5B66\\u6821\\u3002\\u6240\\u8C13\\u201C\\u5927\\u6570\\u636E\\u201D\\u5C31\\u662F\\u901A\\u8FC7\\u70B9\\u6EF4\\u6570\\u636E\\u805A\\u96C6\\uFF0C\\u5BF9\\u6559\\u80B2\\u7684\\u7BA1\\u7406\\u3001\\u6559\\u5B66\\u3001\\u5B66\\u4E60\\u3001\\u5BB6\\u6821\\u3001\\u5BA3\\u4F20\\u548C\\u8BC4\\u4EF7\\u5404\\u4E2A\\u65B9\\u9762\\u8FDB\\u884C\\u591A\\u7EF4\\u5EA6\\u6570\\u636E\\u7684\\u52A8\\u6001\\u7814\\u7A76\\u548C\\u5206\\u6790\\u3002\"));\n    }\n  }]);\n\n  return MyCampus;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyCampus);\n\n//# sourceURL=webpack:///./app/views/my-campus/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_newsItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/newsItem */ \"./app/components/newsItem.js\");\n\n\n\n\n\n\n\n\n\n\nvar News =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(News, _Component);\n\n  function News() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, News);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(News)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"state\", {\n      data: ['1', '2', '3', '4']\n    });\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(News, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"newsList\"\n      }, this.state.data.map(function (val) {\n        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_newsItem__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          key: val\n        });\n      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"style\", {\n        jsx: \"true\"\n      }, \"\\n                    .newsList {\\n                        height: 100%;\\n                        background: #fff;\\n                    }\\n                \"));\n    }\n  }]);\n\n  return News;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (News);\n\n//# sourceURL=webpack:///./app/views/news/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.css */ \"./app/views/prize/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_sImageItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/sImageItem */ \"./app/components/sImageItem.js\");\n\n\n\n\n\n\n\n\n\n\n\nvar Prize =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Prize, _Component);\n\n  function Prize() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Prize);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Prize)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"state\", {\n      list: ['1', '2', '3']\n    });\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Prize, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"prize\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"prize-header\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"prize-header-con\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"prize-header-line\"\n      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"span\", {\n        className: \"prize-header-msg\"\n      }, \"\\u667A\\u6167\\u6821\\u56ED\\u5B66\\u751F\\u83B7\\u5956\\u540D\\u518C\"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"prize-intro\"\n      }, \"2017\\u5E74\\u5B66\\u6821\\u5171\\u6709\\u591A\\u540D\\u5B66\\u751F\\u5728\\u821E\\u8E48\\u3001\\u97F3\\u4E50\\u3001\\u4E66\\u6CD5\\u3001\\u7ED8\\u753B\\u7684\\u5168\\u56FD\\u5927\\u8D5B\\u4E2D\\u8363\\u83B7\\u4E00\\u3001\\u4E8C\\u7B49\\u5956\\uFF0C\\u65BD\\u5C55\\u81EA\\u8EAB\\u624D\\u534E\\u7684\\u540C\\u65F6\\u4E5F\\u4E3A\\u5B66\\u6821\\u4E89\\u5149\"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"prize-list\"\n      }, this.state.list.map(function (val) {\n        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_sImageItem__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n          key: val\n        });\n      })));\n    }\n  }]);\n\n  return Prize;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Prize);\n\n//# sourceURL=webpack:///./app/views/prize/index.js?");

/***/ }),

/***/ "./app/views/prize/style.css":
/*!***********************************!*\
  !*** ./app/views/prize/style.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1!./style.css */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./app/views/prize/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/_isomorphic-style-loader@5.0.1@isomorphic-style-loader/insertCss.js */ \"./node_modules/_isomorphic-style-loader@5.0.1@isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./app/views/prize/style.css?");

/***/ }),

/***/ "./middleware/index.js":
/*!*****************************!*\
  !*** ./middleware/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var _mi_mount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mi-mount */ \"./middleware/mi-mount/index.js\");\n/* harmony import */ var _mi_api_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mi-api-error */ \"./middleware/mi-api-error/index.js\");\n/* harmony import */ var _mi_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mi-session */ \"./middleware/mi-session/index.js\");\n/* harmony import */ var _mi_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mi-validate */ \"./middleware/mi-validate/index.js\");\nvar Path = __webpack_require__(/*! path */ \"path\"); //const bodyParser = require('koa-bodyparser');\n\n\nvar json = __webpack_require__(/*! koa-json */ \"koa-json\");\n\nvar staticFiles = __webpack_require__(/*! koa-static */ \"koa-static\");\n\nvar koaViews = __webpack_require__(/*! koa-views */ \"koa-views\");\n\nvar koaBody = __webpack_require__(/*! koa-body */ \"koa-body\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (app) {\n  /*if (process.env.NODE_ENV!=='production') {\r\n      const koaWebpack = require('koa-webpack');\r\n      const Webpack=require('webpack')\r\n      const config = require('../config/webpack.client.js');\r\n  \r\n      let compiler=Webpack(config);\r\n      koaWebpack({\r\n          compiler:compiler\r\n      })\r\n      .then(middleware => {\r\n          app.use(middleware);\r\n      })\r\n  }*/\n  //设置静态路径\n  app.use(staticFiles(Path.resolve(__dirname, '../public'))); //将ejs设置为我们的模板引擎\n\n  app.use(koaViews(Path.resolve(__dirname, '../views'), {\n    map: {\n      html: 'ejs'\n    }\n  }));\n  Object(_mi_session__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(app);\n  app.use(json()); //app.use(bodyParser());\n\n  app.use(koaBody({\n    multipart: true,\n    formidable: {\n      uploadDir: Path.join(__dirname, '../public/tmp/'),\n      keepExtensions: true,\n      maxFileSize: 2 * 1024 * 1024,\n      // 设置上传文件大小最大限制，默认2M\n      onFileBegin: function onFileBegin(name, file) {\n        var extname = Path.extname(file.name);\n        var dir = Path.join(__dirname, '../public/tmp/'); // 重新覆盖 file.path 属性\n\n        file.path = \"\".concat(dir, \"/\").concat(new Date().getTime()).concat(extname);\n      }\n    }\n  }));\n  app.use(Object(_mi_api_error__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n  app.use(Object(_mi_validate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n  Object(_mi_mount__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    app: app,\n    mounts: [{\n      path: './controller',\n      name: 'controller'\n    }, {\n      path: './controller',\n      name: 'dbHelper'\n    }]\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./middleware/index.js?");

/***/ }),

/***/ "./middleware/mi-api-error/index.js":
/*!******************************************!*\
  !*** ./middleware/mi-api-error/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar config = {\n  \"0\": \"成功\",\n  \"1\": \"未知错误\",\n  \"2\": \"服务暂不可用\",\n  \"3\": \"未知方法\",\n  \"4\": \"无权访问该用户数据\",\n  \"100\": \"请求的参数无效\",\n  \"101\": \"无效签名\",\n  \"102\": \"无效的 userId\",\n  \"103\": \"用户不存在\",\n  \"104\": \"密码错误，请重新输入\",\n  \"105\": \"登录已失效\",\n  \"106\": \"文件类型错误\",\n  \"107\": \"请求参数不正确\",\n  \"800\": \"数据存储出错了\",\n  \"801\": \"指定的对象不存在\",\n  \"802\": \"指定的对象已存在\",\n  \"803\": \"数据库操作出错，请重试\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  function sendError(code) {\n    this.body = {\n      code: code,\n      msg: config[code]\n    };\n  }\n\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx, next) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                ctx.sendError = sendError.bind(ctx);\n                _context.next = 3;\n                return next();\n\n              case 3:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x, _x2) {\n        return _ref.apply(this, arguments);\n      };\n    }()\n  );\n});\n\n//# sourceURL=webpack:///./middleware/mi-api-error/index.js?");

/***/ }),

/***/ "./middleware/mi-mount sync recursive":
/*!**********************************!*\
  !*** ./middleware/mi-mount sync ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./middleware/mi-mount sync recursive\";\n\n//# sourceURL=webpack:///./middleware/mi-mount_sync?");

/***/ }),

/***/ "./middleware/mi-mount/index.js":
/*!**************************************!*\
  !*** ./middleware/mi-mount/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/*\r\n * 将助手类挂载到 app \r\n */\nvar Path = __webpack_require__(/*! path */ \"path\");\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar Readdirectory = function Readdirectory(path) {\n  var content = {};\n  path = path.replace(/\\\\/g, '/');\n  fs.readdirSync(path).forEach(function (filename) {\n    var childPath = Path.join(path, filename);\n    var stat = fs.statSync(childPath);\n    var extname = Path.extname(filename);\n    var fname = Path.basename(filename, extname);\n\n    if (stat.isFile()) {\n      var _extname = Path.extname(filename);\n\n      if (_extname == '.js') {\n        content[fname] = __webpack_require__(\"./middleware/mi-mount sync recursive\")(Path.join(__dirname, '../../', path, filename));\n      }\n    } else {\n      content[fname] = Readdirectory(childPath);\n    }\n  });\n  return content;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (opts) {\n  var app = opts.app,\n      _opts$mounts = opts.mounts,\n      mounts = _opts$mounts === void 0 ? [] : _opts$mounts;\n\n  if (!app) {\n    throw new Error(\"the app params is necessary!\");\n  }\n\n  var appKeys = Object.keys(app);\n  mounts.forEach(function (item) {\n    var path = item.path,\n        name = item.name;\n\n    if (appKeys.includes(name)) {\n      throw new Error(\"the name of \".concat(name, \" already exists!\"));\n    }\n\n    app[name] = Readdirectory(path);\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./middleware/mi-mount/index.js?");

/***/ }),

/***/ "./middleware/mi-session/index.js":
/*!****************************************!*\
  !*** ./middleware/mi-session/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ \"./middleware/mi-session/store.js\");\n/*\r\n *  将session保存在mongodb\r\n */\nvar koaSession = __webpack_require__(/*! koa-session */ \"koa-session\");\n\nvar db = __webpack_require__(/*! ../../model/db */ \"./model/db.js\");\n\n\nvar session_config = {\n  key: 'koa:campusSess',\n  maxAge: 86400000,\n  overWrite: true,\n  httpOnly: true,\n  rolling: false,\n  renew: false,\n  siged: true,\n  store: new _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    connection: db\n  })\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (app) {\n  app.keys = ['1218705779913980b192f0abad40c1aa'];\n  app.use(koaSession(session_config, app));\n});\n\n//# sourceURL=webpack:///./middleware/mi-session/index.js?");

/***/ }),

/***/ "./middleware/mi-session/store.js":
/*!****************************************!*\
  !*** ./middleware/mi-session/store.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"@babel/runtime/helpers/objectSpread\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n/*\r\n *  将session 记录在数据库 collection\r\n */\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar schema = {\n  _id: String,\n  account: String,\n  type: String,\n  data: Object,\n  updateAt: {\n    \"default\": new Date(),\n    expires: 86400,\n    type: Date\n  }\n};\n\nvar MongooseStore =\n/*#__PURE__*/\nfunction () {\n  function MongooseStore() {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n        _ref$collection = _ref.collection,\n        collection = _ref$collection === void 0 ? \"sessions\" : _ref$collection,\n        _ref$connection = _ref.connection,\n        connection = _ref$connection === void 0 ? null : _ref$connection,\n        _ref$expires = _ref.expires,\n        expires = _ref$expires === void 0 ? 86400 : _ref$expires,\n        _ref$name = _ref.name,\n        name = _ref$name === void 0 ? \"Session\" : _ref$name;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, MongooseStore);\n\n    var updateAt = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, schema.updateAt, {\n      expires: expires\n    });\n\n    var Schema = mongoose.Schema;\n    this.session = connection.model(name, new Schema(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, schema, {\n      updateAt: updateAt\n    })));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(MongooseStore, [{\n    key: \"get\",\n    value: function () {\n      var _get = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {\n        var session, _ref2, data;\n\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                session = this.session;\n                _context.next = 3;\n                return session.findById(id);\n\n              case 3:\n                _context.t0 = _context.sent;\n\n                if (_context.t0) {\n                  _context.next = 6;\n                  break;\n                }\n\n                _context.t0 = {};\n\n              case 6:\n                _ref2 = _context.t0;\n                data = _ref2.data;\n                return _context.abrupt(\"return\", data);\n\n              case 9:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function get(_x) {\n        return _get.apply(this, arguments);\n      }\n\n      return get;\n    }()\n  }, {\n    key: \"set\",\n    value: function () {\n      var _set = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id, data, maxAge, _ref3) {\n        var changed, rolling, type, session, record, oldRecord, ids;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                changed = _ref3.changed, rolling = _ref3.rolling;\n\n                if (!(changed || rolling)) {\n                  _context2.next = 18;\n                  break;\n                }\n\n                type = data.type;\n                session = this.session;\n                record = {\n                  _id: id,\n                  account: data.account,\n                  type: type,\n                  data: data,\n                  updatedAt: new Date()\n                };\n                _context2.next = 7;\n                return session.find({\n                  account: data.account,\n                  type: type,\n                  _id: {\n                    $ne: id\n                  }\n                });\n\n              case 7:\n                _context2.t0 = _context2.sent;\n\n                if (_context2.t0) {\n                  _context2.next = 10;\n                  break;\n                }\n\n                _context2.t0 = [];\n\n              case 10:\n                oldRecord = _context2.t0;\n\n                if (!(oldRecord.length > 0)) {\n                  _context2.next = 16;\n                  break;\n                }\n\n                ids = [];\n                oldRecord.forEach(function (item) {\n                  ids.push(item._id);\n                });\n                _context2.next = 16;\n                return session.remove({\n                  _id: {\n                    $in: ids\n                  }\n                });\n\n              case 16:\n                _context2.next = 18;\n                return session.findOneAndUpdate({\n                  _id: id\n                }, record, {\n                  upsert: true,\n                  safe: true\n                });\n\n              case 18:\n                return _context2.abrupt(\"return\", data);\n\n              case 19:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function set(_x2, _x3, _x4, _x5) {\n        return _set.apply(this, arguments);\n      }\n\n      return set;\n    }()\n  }, {\n    key: \"destroy\",\n    value: function () {\n      var _destroy = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {\n        var session;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                session = this.session;\n                return _context3.abrupt(\"return\", session.remove({\n                  _id: id\n                }));\n\n              case 2:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, this);\n      }));\n\n      function destroy(_x6) {\n        return _destroy.apply(this, arguments);\n      }\n\n      return destroy;\n    }()\n  }], [{\n    key: \"create\",\n    value: function create(opts) {\n      return new Store(opts);\n    }\n  }]);\n\n  return MongooseStore;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MongooseStore);\n\n//# sourceURL=webpack:///./middleware/mi-session/store.js?");

/***/ }),

/***/ "./middleware/mi-validate/index.js":
/*!*****************************************!*\
  !*** ./middleware/mi-validate/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n/*\r\n * 请求体/用户登录状态认证\r\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx, next) {\n        var session;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                session = ctx.session; //后台校验session\n\n                if (!(ctx.url.indexOf('/admin') != -1 && ctx.url.indexOf('/admin/login') == -1)) {\n                  _context.next = 10;\n                  break;\n                }\n\n                if (!(JSON.stringify(session) != '{}')) {\n                  _context.next = 7;\n                  break;\n                }\n\n                _context.next = 5;\n                return next();\n\n              case 5:\n                _context.next = 8;\n                break;\n\n              case 7:\n                ctx.sendError('105');\n\n              case 8:\n                _context.next = 12;\n                break;\n\n              case 10:\n                _context.next = 12;\n                return next();\n\n              case 12:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x, _x2) {\n        return _ref.apply(this, arguments);\n      };\n    }()\n  );\n});\n\n//# sourceURL=webpack:///./middleware/mi-validate/index.js?");

/***/ }),

/***/ "./model/db.js":
/*!*********************!*\
  !*** ./model/db.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\r\n *  连接数据库\r\n */\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar chalk = __webpack_require__(/*! chalk */ \"chalk\");\n\nvar db = mongoose.createConnection('mongodb://127.0.0.1/campus', {\n  useNewUrlParser: true\n});\nvar success = chalk.bold.green;\nvar error = chalk.bold.red;\ndb.once('open', function (cb) {\n  console.log(success('数据库连接成功'));\n});\ndb.on('error', function (cb) {\n  console.log(error('数据库连接失败'));\n});\nmodule.exports = db;\n\n//# sourceURL=webpack:///./model/db.js?");

/***/ }),

/***/ "./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./app/assets/css/common.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1!./app/assets/css/common.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"._1_JsGryjWFwsyfHNz3HM8n:after{\\r\\n    content: ' ';\\r\\n    display: block;\\r\\n    clear: both;\\r\\n    visibility:hidden;\\r\\n    line-height: 0;\\r\\n    height:0;\\r\\n}\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"clearfix\": \"_1_JsGryjWFwsyfHNz3HM8n\"\n};\n\n//# sourceURL=webpack:///./app/assets/css/common.css?./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./app/views/detail/style.css":
/*!******************************************************************************************************!*\
  !*** ./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1!./app/views/detail/style.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"._2kFDy2cuLBY0P4TJouR_yc{\\r\\n    background: #fff;\\r\\n    padding-bottom: .3rem;\\r\\n}\\r\\n._2c8L2g5chzn-TMN7MduAGW{\\r\\n    padding: .4rem .3rem;\\r\\n    color: #000;\\r\\n    font-size: .44rem;\\r\\n}\\r\\n._1Fa0EOc-zWAJQ3NwLb-v9E{\\r\\n    padding: 0 .3rem;\\r\\n    color: #a9b5c5;\\r\\n    font-size: .28rem;\\r\\n}\\r\\n._22AHJtBtnx7VErouNso4OJ{\\r\\n    font-size: 0;\\r\\n}\\r\\n.OMUxkFF5HKcCFDAq-F40V{\\r\\n    width: 100%;\\r\\n}\\r\\n._1yulq1eXWqhnP3cMRQLmAw{\\r\\n    position: relative;\\r\\n    top: -.1rem;\\r\\n    padding: 0 .24rem;\\r\\n    margin-bottom: .4rem;   \\r\\n}\\r\\n._32GIxH04SiANbH97Dkt7Ic{\\r\\n    margin-bottom: .24rem;\\r\\n    font-size: 0;\\r\\n}\\r\\n._2MfOtEcl2aSoLT4Yz8Eaf7{\\r\\n    background: #fff;\\r\\n    box-shadow: 0 0 0.6rem rgba(78,131,137,.15);\\r\\n    padding: .4rem .36rem .5rem;\\r\\n    color: #6e7d8f;\\r\\n}\\r\\n._3EuMDDDG6YDKsu8plevDQy{\\r\\n    display: inline-block;\\r\\n    height: 0.06rem;\\r\\n}\\r\\n._1HVENnH7XbD6tVRVFXu0d3{\\r\\n    width: .2rem;\\r\\n    background: #0cb181;\\r\\n}\\r\\n._1QZp_rs-eKiLRB2fkvkrSZ{\\r\\n    width: .36rem;\\r\\n    background: #000;\\r\\n}\\r\\n._31trxpm3gI5X3wvHFYKash{\\r\\n    padding: 0 .24rem;\\r\\n    font-size: .26rem;\\r\\n}\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"detail-header\": \"_2kFDy2cuLBY0P4TJouR_yc\",\n\t\"detail-header-title\": \"_2c8L2g5chzn-TMN7MduAGW\",\n\t\"detail-header-msg\": \"_1Fa0EOc-zWAJQ3NwLb-v9E\",\n\t\"detail-img\": \"_22AHJtBtnx7VErouNso4OJ\",\n\t\"detail-img-img\": \"OMUxkFF5HKcCFDAq-F40V\",\n\t\"detail-con\": \"_1yulq1eXWqhnP3cMRQLmAw\",\n\t\"detail-con-top\": \"_32GIxH04SiANbH97Dkt7Ic\",\n\t\"detail-con-txt\": \"_2MfOtEcl2aSoLT4Yz8Eaf7\",\n\t\"detail-con-span\": \"_3EuMDDDG6YDKsu8plevDQy\",\n\t\"detail-con-green\": \"_1HVENnH7XbD6tVRVFXu0d3\",\n\t\"detail-con-black\": \"_1QZp_rs-eKiLRB2fkvkrSZ\",\n\t\"detail-content\": \"_31trxpm3gI5X3wvHFYKash\"\n};\n\n//# sourceURL=webpack:///./app/views/detail/style.css?./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./app/views/home/style.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1!./app/views/home/style.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"._2qJwFYYzYbuXUhJmLHx87y{\\r\\n    height: 100%;\\r\\n    padding-top: 16px;\\r\\n    background-color: #fff;\\r\\n    overflow-y: auto;\\r\\n}\\r\\n._3h9v28GjXN8I648sFtciRi{\\r\\n    padding: 16px;\\r\\n    overflow: hidden;\\r\\n}\\r\\n._2Dzn6eZPVFZkfeGvHKkXbt{\\r\\n    margin-top: 50px;\\r\\n    padding: 24px;\\r\\n    color: rgb(108, 129, 152);\\r\\n    font-size: 34px;\\r\\n    text-align: center;\\r\\n}\\r\\n._3sraWpf_qQdiiSk-lELLi1{\\r\\n    position: absolute;\\r\\n    right: 0;\\r\\n    bottom: 22px;\\r\\n    border-top: 4px solid #0cb181;\\r\\n    width: 100%;\\r\\n    height: 1px;\\r\\n    transform: scaleY(.5);\\r\\n    transform-origin: 0 0;\\r\\n    border-color: rgb(179, 208, 215);\\r\\n}\\r\\n.ICteE_xBXXKv756p5U68A{\\r\\n    display: inline-block;\\r\\n    position: relative;\\r\\n    z-index: 2;\\r\\n    padding: 0 24px;\\r\\n    background-color: #fff;\\r\\n}\\r\\n.Nhw3px40ZK12BB2g0m1-h{\\r\\n    height: 2px;\\r\\n    border-top: 2px solid #e6eaea;\\r\\n    margin: 30px 0 20px;\\r\\n}\\r\\n._2zggbzy39ZguMZzswiEneZ{\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n    padding: 0 20px;\\r\\n}\\r\\n.CdJqBg0NvRe6KubLWBxwY{\\r\\n    display: flex;\\r\\n    width: 33.33%;\\r\\n    margin: 30px 0;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    flex-direction: column;\\r\\n}\\r\\n.PK4Rw_vc-yUZLrI6XZXq9{\\r\\n    width: 48px;\\r\\n    height: 48px;\\r\\n    overflow: hidden;\\r\\n}\\r\\n.PK4Rw_vc-yUZLrI6XZXq9 img{\\r\\n    width: 100%;\\r\\n}\\r\\n._1AHD26fIFmA41y2ZMvy4gd img{\\r\\n    width: auto;\\r\\n    height: 100%;\\r\\n}\\r\\n._273L-1tfWH6N0cSVLwCutQ{\\r\\n    margin-top: 10px;\\r\\n    font-size: 26px;\\r\\n    color: rgb(110, 125, 143);\\r\\n}\\r\\n._1PSObQ8NWUuvMYYfl4QrMA{\\r\\n    padding-top: 20px;\\r\\n}\\r\\n.f_QfG10CJ0_zIjpoZBeWx{\\r\\n    margin: 30px;\\r\\n    padding-left: 20px;\\r\\n    border-left: 20px solid rgb(142, 178, 187);\\r\\n    color: rgb(87, 108, 132);\\r\\n    font-size: 36px;\\r\\n    line-height: 42px;\\r\\n}\\r\\n._1j67TACNiIbi-mjsxQWoEp{\\r\\n    display: block;\\r\\n    height: 66px;\\r\\n    line-height: 66px;\\r\\n    text-align: center;\\r\\n    background: #f4f8f9;\\r\\n    color: #6e7d8f; \\r\\n}\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"home\": \"_2qJwFYYzYbuXUhJmLHx87y\",\n\t\"home-space-carousel\": \"_3h9v28GjXN8I648sFtciRi\",\n\t\"home-welcome\": \"_2Dzn6eZPVFZkfeGvHKkXbt\",\n\t\"home-welcome-line\": \"_3sraWpf_qQdiiSk-lELLi1\",\n\t\"home-welcome-font\": \"ICteE_xBXXKv756p5U68A\",\n\t\"home-cutoff\": \"Nhw3px40ZK12BB2g0m1-h\",\n\t\"home-menu\": \"_2zggbzy39ZguMZzswiEneZ\",\n\t\"home-menu-item\": \"CdJqBg0NvRe6KubLWBxwY\",\n\t\"home-menu-icon\": \"PK4Rw_vc-yUZLrI6XZXq9\",\n\t\"home-menu-hg\": \"_1AHD26fIFmA41y2ZMvy4gd\",\n\t\"home-menu-name\": \"_273L-1tfWH6N0cSVLwCutQ\",\n\t\"home-news\": \"_1PSObQ8NWUuvMYYfl4QrMA\",\n\t\"home-news-title\": \"f_QfG10CJ0_zIjpoZBeWx\",\n\t\"home-news-more\": \"_1j67TACNiIbi-mjsxQWoEp\"\n};\n\n//# sourceURL=webpack:///./app/views/home/style.css?./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1");

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

/***/ "./router/admin.js":
/*!*************************!*\
  !*** ./router/admin.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);\n/*\r\n *  匹配管理平台 API请求\r\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (app) {\n  var router = new koa_router__WEBPACK_IMPORTED_MODULE_0___default.a({\n    prefix: '/admin'\n  }); // app.dbHelper.admin.addUser({\n  //     \"phone\" : \"13800138000\", \n  //     \"account\" : \"admin\", \n  //     \"password\" : \"21232f297a57a5a743894a0e4a801fc3\", \n  //     \"level\" : \"1\", \n  //     \"nickName\" : \"tresor\"\n  // });\n  //登录\n\n  router.post('/login', app.controller.admin.user.login); //banner图管理\n\n  router.get('/bannerPos', app.controller.admin.banner.pos);\n  router.get('/banner', app.controller.admin.banner.list);\n  router.post('/banner/save', app.controller.admin.banner.save);\n  router.post('/banner/del', app.controller.admin.banner.del); //资讯管理\n\n  router.get('/infoClassify', app.controller.admin.info.classify_list);\n  router.post('/infoClassify/save', app.controller.admin.info.classify_save);\n  router.post('/infoClassify/del', app.controller.admin.info.classify_del);\n  router.get('/info', app.controller.admin.info.list);\n  router.post('/info/save', app.controller.admin.info.save);\n  router.post('/info/del', app.controller.admin.info.del); //校园生活\n\n  router.all('/life', app.controller.admin.life.list);\n  router.post('/life/save', app.controller.admin.life.save);\n  router.post('/life/del', app.controller.admin.life.del);\n  router.get('/lifeImage', app.controller.admin.life.lifeImage_list);\n  router.post('/lifeImage/save', app.controller.admin.life.lifeImage_save);\n  router.post('/lifeImage/del', app.controller.admin.life.lifeImage_del); //内容管理\n\n  router.get('/intro', app.controller.admin.content.intro);\n  router.post('/intro/save', app.controller.admin.content.intro_save);\n  router.get('/menu', app.controller.admin.menu.list);\n  router.post('/menu/save', app.controller.admin.menu.save);\n  router.post('/menu/del', app.controller.admin.menu.del);\n  return router;\n});\n\n//# sourceURL=webpack:///./router/admin.js?");

/***/ }),

/***/ "./router/app.js":
/*!***********************!*\
  !*** ./router/app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-style-loader/StyleContext */ \"isomorphic-style-loader/StyleContext\");\n/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _app_server__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/server */ \"./app/server.js\");\n\n\n\n\n\n\n\n\n\nvar Router = new koa_router__WEBPACK_IMPORTED_MODULE_3___default.a();\nRouter.get('*',\n/*#__PURE__*/\nfunction () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx, next) {\n    var url, css, insertCss, context, html;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            url = ctx.request.url.replace('/app', '');\n            css = new Set(); // CSS for all rendered React components\n\n            insertCss = function insertCss() {\n              for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {\n                styles[_key] = arguments[_key];\n              }\n\n              return styles.forEach(function (style) {\n                return css.add(style._getCss());\n              });\n            };\n\n            context = {\n              css: []\n            };\n            html = react_dom_server__WEBPACK_IMPORTED_MODULE_7___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__[\"StaticRouter\"], {\n              basename: \"/app\",\n              context: context,\n              location: url\n            }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_6___default.a.Provider, {\n              value: {\n                insertCss: insertCss\n              }\n            }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_app_server__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null))));\n            _context.next = 7;\n            return ctx.render('index', {\n              root: html,\n              insertCss: _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(css).join('')\n            });\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Router);\n\n//# sourceURL=webpack:///./router/app.js?");

/***/ }),

/***/ "./router/index.js":
/*!*************************!*\
  !*** ./router/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin */ \"./router/admin.js\");\n/* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload */ \"./router/upload.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app */ \"./router/app.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (app) {\n  var router = new koa_router__WEBPACK_IMPORTED_MODULE_0___default.a();\n  var router_admin = Object(_admin__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(app);\n  var router_upload = Object(_upload__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(app);\n  router.use('/api', router_admin.routes(), router_admin.allowedMethods());\n  router.use('/api', router_upload.routes(), router_upload.allowedMethods());\n  router.use('/app', _app__WEBPACK_IMPORTED_MODULE_3__[\"default\"].routes(), _app__WEBPACK_IMPORTED_MODULE_3__[\"default\"].allowedMethods());\n  app.use(router.routes()).use(router.allowedMethods());\n});\n\n//# sourceURL=webpack:///./router/index.js?");

/***/ }),

/***/ "./router/upload.js":
/*!**************************!*\
  !*** ./router/upload.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (app) {\n  var router = new koa_router__WEBPACK_IMPORTED_MODULE_0___default.a();\n  router.post('/upload', app.controller.upload);\n  return router;\n});\n\n//# sourceURL=webpack:///./router/upload.js?");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ \"./router/index.js\");\n/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middleware */ \"./middleware/index.js\");\n\n\n\nvar app = new koa__WEBPACK_IMPORTED_MODULE_0___default.a();\nObject(_middleware__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(app);\nObject(_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(app);\napp.listen(3000, function () {\n  console.log('server is running at http://localhost:3000');\n});\n\n//# sourceURL=webpack:///./server.js?");

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

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"chalk\");\n\n//# sourceURL=webpack:///external_%22chalk%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

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

/***/ "koa-body":
/*!***************************!*\
  !*** external "koa-body" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-body\");\n\n//# sourceURL=webpack:///external_%22koa-body%22?");

/***/ }),

/***/ "koa-json":
/*!***************************!*\
  !*** external "koa-json" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-json\");\n\n//# sourceURL=webpack:///external_%22koa-json%22?");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-router\");\n\n//# sourceURL=webpack:///external_%22koa-router%22?");

/***/ }),

/***/ "koa-session":
/*!******************************!*\
  !*** external "koa-session" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-session\");\n\n//# sourceURL=webpack:///external_%22koa-session%22?");

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

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

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

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });