"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/NavBar.jsx":
/*!***********************************!*\
  !*** ./app/components/NavBar.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavLink */ \"(app-pages-browser)/./app/components/NavLink.jsx\");\n/* harmony import */ var _barrel_optimize_names_Bars3Icon_XMarkIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Bars3Icon,XMarkIcon!=!@heroicons/react/24/solid */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/Bars3Icon.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst navLinks = [\n    {\n        title: \"About\",\n        path: \"#about\"\n    },\n    {\n        title: \"Projects\",\n        path: \"#projects\"\n    },\n    {\n        title: \"Contact\",\n        path: \"#contact\"\n    }\n];\nconst NavBar = ()=>{\n    _s();\n    const [navbarOpen, setNavbarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-wrap items-center justify-between mx-auto px-4 pt-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    href: \"/\",\n                    className: \"text-2xl md:text-5xl text-white font-semibold\",\n                    children: \"Logo\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Lomidze\\\\OneDrive\\\\Рабочий стол\\\\DEV\\\\portfolio\\\\app\\\\components\\\\NavBar.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mobile-menu block md:hidden\",\n                    children: navbarOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bars3Icon_XMarkIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            className: \"h-5 w-5\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Lomidze\\\\OneDrive\\\\Рабочий стол\\\\DEV\\\\portfolio\\\\app\\\\components\\\\NavBar.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lomidze\\\\OneDrive\\\\Рабочий стол\\\\DEV\\\\portfolio\\\\app\\\\components\\\\NavBar.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 15\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lomidze\\\\OneDrive\\\\Рабочий стол\\\\DEV\\\\portfolio\\\\app\\\\components\\\\NavBar.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Lomidze\\\\OneDrive\\\\Рабочий стол\\\\DEV\\\\portfolio\\\\app\\\\components\\\\NavBar.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"menu hidden md:block md:w-auto\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0\",\n                        children: navLinks.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    href: link.path,\n                                    title: link.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Lomidze\\\\OneDrive\\\\Рабочий стол\\\\DEV\\\\portfolio\\\\app\\\\components\\\\NavBar.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\Lomidze\\\\OneDrive\\\\Рабочий стол\\\\DEV\\\\portfolio\\\\app\\\\components\\\\NavBar.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lomidze\\\\OneDrive\\\\Рабочий стол\\\\DEV\\\\portfolio\\\\app\\\\components\\\\NavBar.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Lomidze\\\\OneDrive\\\\Рабочий стол\\\\DEV\\\\portfolio\\\\app\\\\components\\\\NavBar.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Lomidze\\\\OneDrive\\\\Рабочий стол\\\\DEV\\\\portfolio\\\\app\\\\components\\\\NavBar.jsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lomidze\\\\OneDrive\\\\Рабочий стол\\\\DEV\\\\portfolio\\\\app\\\\components\\\\NavBar.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NavBar, \"15c5sM/hZYq2eTRu58QbId6xljA=\");\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL05hdkJhci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzZCO0FBQ1c7QUFDUjtBQUNpQztBQUVqRSxNQUFNTSxXQUFXO0lBQ2Y7UUFDRUMsT0FBTztRQUNQQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxPQUFPO1FBQ1BDLE1BQU07SUFDUjtJQUNBO1FBQ0VELE9BQU87UUFDUEMsTUFBTTtJQUNSO0NBQ0Q7QUFFRCxNQUFNQyxTQUFTOztJQUNiLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUU3QyxxQkFDRSw4REFBQ1U7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNiLGlEQUFJQTtvQkFBQ2UsTUFBTTtvQkFBS0YsV0FBVTs4QkFBZ0Q7Ozs7Ozs4QkFHM0UsOERBQUNDO29CQUFJRCxXQUFVOzhCQUVYSCwyQkFDRSw4REFBQ007d0JBQ0RILFdBQVU7a0NBRVIsNEVBQUNULDJHQUFTQTs0QkFBQ1MsV0FBVTs7Ozs7Ozs7OztrREFHdkIsOERBQUNHOzs7Ozs7Ozs7OzhCQU1QLDhEQUFDRjtvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ0k7d0JBQUdKLFdBQVU7a0NBQ1hQLFNBQVNZLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDbkIsOERBQUNDOzBDQUNDLDRFQUFDbEIsZ0RBQU9BO29DQUFDWSxNQUFNSSxLQUFLWCxJQUFJO29DQUFFRCxPQUFPWSxLQUFLWixLQUFLOzs7Ozs7K0JBRHBDYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTdkI7R0FwQ01YO0tBQUFBO0FBc0NOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL05hdkJhci5qc3g/NzYwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5hdkxpbmsgZnJvbSBcIi4vTmF2TGlua1wiO1xyXG5pbXBvcnQgeyBCYXJzM0ljb24sIFhNYXJrSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0LzI0L3NvbGlkXCI7XHJcblxyXG5jb25zdCBuYXZMaW5rcyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJBYm91dFwiLFxyXG4gICAgcGF0aDogXCIjYWJvdXRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlByb2plY3RzXCIsXHJcbiAgICBwYXRoOiBcIiNwcm9qZWN0c1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQ29udGFjdFwiLFxyXG4gICAgcGF0aDogXCIjY29udGFjdFwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW25hdmJhck9wZW4sIHNldE5hdmJhck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9J2ZpeGVkIHRvcC0wIGxlZnQtMCByaWdodC0wIHotMTAgYmctWyMxMjEyMTJdIGJnLW9wYWNpdHktOTAnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBteC1hdXRvIHB4LTQgcHQtNCc+XHJcbiAgICAgICAgPExpbmsgaHJlZj17Jy8nfSBjbGFzc05hbWU9J3RleHQtMnhsIG1kOnRleHQtNXhsIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCc+XHJcbiAgICAgICAgICBMb2dvXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnUgYmxvY2sgbWQ6aGlkZGVuXCI+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hdmJhck9wZW4gPyAoXHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHB4LTMgcHktMiBib3JkZXIgcm91bmRlZCBib3JkZXItc2xhdGUtMjAwIHRleHQtc2xhdGUtMjAwIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ym9yZGVyLXdoaXRlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QmFyczNJY29uIGNsYXNzTmFtZT1cImgtNSB3LTVcIiAvPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxidXR0b24+XHJcblxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lbnUgaGlkZGVuIG1kOmJsb2NrIG1kOnctYXV0byc+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdmbGV4IHAtNCBtZDpwLTAgbWQ6ZmxleC1yb3cgbWQ6c3BhY2UteC04IG10LTAnPlxyXG4gICAgICAgICAgICB7bmF2TGlua3MubWFwKChsaW5rLCBpbmRleCkgPT4oXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj17bGluay5wYXRofSB0aXRsZT17bGluay50aXRsZX0vPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInVzZVN0YXRlIiwiTmF2TGluayIsIkJhcnMzSWNvbiIsIlhNYXJrSWNvbiIsIm5hdkxpbmtzIiwidGl0bGUiLCJwYXRoIiwiTmF2QmFyIiwibmF2YmFyT3BlbiIsInNldE5hdmJhck9wZW4iLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJocmVmIiwiYnV0dG9uIiwidWwiLCJtYXAiLCJsaW5rIiwiaW5kZXgiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/NavBar.jsx\n"));

/***/ })

});