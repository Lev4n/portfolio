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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavLink */ \"(app-pages-browser)/./app/components/NavLink.jsx\");\n/* harmony import */ var _barrel_optimize_names_Bars3Icon_XMarkIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Bars3Icon,XMarkIcon!=!@heroicons/react/24/solid */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/Bars3Icon.js\");\n/* harmony import */ var _barrel_optimize_names_Bars3Icon_XMarkIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Bars3Icon,XMarkIcon!=!@heroicons/react/24/solid */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/XMarkIcon.js\");\n/* harmony import */ var _MenuOverlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuOverlay */ \"(app-pages-browser)/./app/components/MenuOverlay.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst navLinks = [\n    {\n        title: \"About\",\n        path: \"#about\"\n    },\n    {\n        title: \"Projects\",\n        path: \"#projects\"\n    },\n    {\n        title: \"Contact\",\n        path: \"#contact\"\n    }\n];\nconst Navbar = ()=>{\n    _s();\n    const [navbarOpen, setNavbarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        href: \"/\",\n                        className: \"text-2xl md:text-5xl text-white font-semibold\",\n                        children: \"LOGO\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lomidze\\\\OneDrive\\\\Рабочий стол\\\\DEV\\\\portfolio\\\\app\\\\components\\\\NavBar.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mobile-menu block md:hidden\",\n                        children: !navbarOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setNavbarOpen(true),\n                            className: \"flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bars3Icon_XMarkIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                className: \"h-5 w-5\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lomidze\\\\OneDrive\\\\Рабочий стол\\\\DEV\\\\portfolio\\\\app\\\\components\\\\NavBar.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Lomidze\\\\OneDrive\\\\Рабочий стол\\\\DEV\\\\portfolio\\\\app\\\\components\\\\NavBar.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setNavbarOpen(false),\n                            className: \"flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bars3Icon_XMarkIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: \"h-5 w-5\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lomidze\\\\OneDrive\\\\Рабочий стол\\\\DEV\\\\portfolio\\\\app\\\\components\\\\NavBar.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Lomidze\\\\OneDrive\\\\Рабочий стол\\\\DEV\\\\portfolio\\\\app\\\\components\\\\NavBar.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lomidze\\\\OneDrive\\\\Рабочий стол\\\\DEV\\\\portfolio\\\\app\\\\components\\\\NavBar.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"menu hidden md:block md:w-auto\",\n                        id: \"navbar\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0\",\n                            children: navLinks.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        href: link.path,\n                                        title: link.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lomidze\\\\OneDrive\\\\Рабочий стол\\\\DEV\\\\portfolio\\\\app\\\\components\\\\NavBar.jsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\Lomidze\\\\OneDrive\\\\Рабочий стол\\\\DEV\\\\portfolio\\\\app\\\\components\\\\NavBar.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Lomidze\\\\OneDrive\\\\Рабочий стол\\\\DEV\\\\portfolio\\\\app\\\\components\\\\NavBar.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lomidze\\\\OneDrive\\\\Рабочий стол\\\\DEV\\\\portfolio\\\\app\\\\components\\\\NavBar.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lomidze\\\\OneDrive\\\\Рабочий стол\\\\DEV\\\\portfolio\\\\app\\\\components\\\\NavBar.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            navbarOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuOverlay__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                links: navLinks\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lomidze\\\\OneDrive\\\\Рабочий стол\\\\DEV\\\\portfolio\\\\app\\\\components\\\\NavBar.jsx\",\n                lineNumber: 62,\n                columnNumber: 21\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lomidze\\\\OneDrive\\\\Рабочий стол\\\\DEV\\\\portfolio\\\\app\\\\components\\\\NavBar.jsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"15c5sM/hZYq2eTRu58QbId6xljA=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL05hdkJhci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDNkI7QUFDVztBQUNSO0FBQ2lDO0FBQ3pCO0FBRXhDLE1BQU1PLFdBQVc7SUFDZjtRQUNFQyxPQUFPO1FBQ1BDLE1BQU07SUFDUjtJQUNBO1FBQ0VELE9BQU87UUFDUEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsT0FBTztRQUNQQyxNQUFNO0lBQ1I7Q0FDRDtBQUVELE1BQU1DLFNBQVM7O0lBQ2IsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQSxDQUFDO0lBRTdDLHFCQUNFLDhEQUFDVztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDZCxpREFBSUE7d0JBQ0hnQixNQUFNO3dCQUNORixXQUFVO2tDQUNYOzs7Ozs7a0NBR0QsOERBQUNDO3dCQUFJRCxXQUFVO2tDQUNaLENBQUNILDJCQUNBLDhEQUFDTTs0QkFDQ0MsU0FBUyxJQUFNTixjQUFjOzRCQUM3QkUsV0FBVTtzQ0FFViw0RUFBQ1YsMkdBQVNBO2dDQUFDVSxXQUFVOzs7Ozs7Ozs7O3NEQUd2Qiw4REFBQ0c7NEJBQ0NDLFNBQVMsSUFBTU4sY0FBYzs0QkFDN0JFLFdBQVU7c0NBRVYsNEVBQUNULDJHQUFTQTtnQ0FBQ1MsV0FBVTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJM0IsOERBQUNDO3dCQUFJRCxXQUFVO3dCQUFpQ0ssSUFBRztrQ0FDakQsNEVBQUNDOzRCQUFHTixXQUFVO3NDQUNYUCxTQUFTYyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ25CLDhEQUFDQzs4Q0FDQyw0RUFBQ3JCLGdEQUFPQTt3Q0FBQ2EsTUFBTU0sS0FBS2IsSUFBSTt3Q0FBRUQsT0FBT2MsS0FBS2QsS0FBSzs7Ozs7O21DQURwQ2U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9oQlosMkJBQWEsOERBQUNMLG9EQUFXQTtnQkFBQ21CLE9BQU9sQjs7Ozs7NEJBQWU7Ozs7Ozs7QUFHdkQ7R0ExQ01HO0tBQUFBO0FBNENOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL05hdkJhci5qc3g/NzYwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5hdkxpbmsgZnJvbSBcIi4vTmF2TGlua1wiO1xyXG5pbXBvcnQgeyBCYXJzM0ljb24sIFhNYXJrSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0LzI0L3NvbGlkXCI7XHJcbmltcG9ydCBNZW51T3ZlcmxheSBmcm9tIFwiLi9NZW51T3ZlcmxheVwiO1xyXG5cclxuY29uc3QgbmF2TGlua3MgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQWJvdXRcIixcclxuICAgIHBhdGg6IFwiI2Fib3V0XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJQcm9qZWN0c1wiLFxyXG4gICAgcGF0aDogXCIjcHJvamVjdHNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkNvbnRhY3RcIixcclxuICAgIHBhdGg6IFwiI2NvbnRhY3RcIixcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtuYXZiYXJPcGVuLCBzZXROYXZiYXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwiZml4ZWQgbXgtYXV0byBib3JkZXIgYm9yZGVyLVsjMzMzNTNGXSB0b3AtMCBsZWZ0LTAgcmlnaHQtMCB6LTEwIGJnLVsjMTIxMjEyXSBiZy1vcGFjaXR5LTEwMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggY29udGFpbmVyIGxnOnB5LTQgZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbXgtYXV0byBweC00IHB5LTJcIj5cclxuICAgICAgICA8TGlua1xyXG4gICAgICAgICAgaHJlZj17XCIvXCJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtZDp0ZXh0LTV4bCB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIExPR09cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtbWVudSBibG9jayBtZDpoaWRkZW5cIj5cclxuICAgICAgICAgIHshbmF2YmFyT3BlbiA/IChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE5hdmJhck9wZW4odHJ1ZSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIGJvcmRlciByb3VuZGVkIGJvcmRlci1zbGF0ZS0yMDAgdGV4dC1zbGF0ZS0yMDAgaG92ZXI6dGV4dC13aGl0ZSBob3Zlcjpib3JkZXItd2hpdGVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEJhcnMzSWNvbiBjbGFzc05hbWU9XCJoLTUgdy01XCIgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TmF2YmFyT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIGJvcmRlciByb3VuZGVkIGJvcmRlci1zbGF0ZS0yMDAgdGV4dC1zbGF0ZS0yMDAgaG92ZXI6dGV4dC13aGl0ZSBob3Zlcjpib3JkZXItd2hpdGVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFhNYXJrSWNvbiBjbGFzc05hbWU9XCJoLTUgdy01XCIgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudSBoaWRkZW4gbWQ6YmxvY2sgbWQ6dy1hdXRvXCIgaWQ9XCJuYXZiYXJcIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IHAtNCBtZDpwLTAgbWQ6ZmxleC1yb3cgbWQ6c3BhY2UteC04IG10LTBcIj5cclxuICAgICAgICAgICAge25hdkxpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPXtsaW5rLnBhdGh9IHRpdGxlPXtsaW5rLnRpdGxlfSAvPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtuYXZiYXJPcGVuID8gPE1lbnVPdmVybGF5IGxpbmtzPXtuYXZMaW5rc30gLz4gOiBudWxsfVxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInVzZVN0YXRlIiwiTmF2TGluayIsIkJhcnMzSWNvbiIsIlhNYXJrSWNvbiIsIk1lbnVPdmVybGF5IiwibmF2TGlua3MiLCJ0aXRsZSIsInBhdGgiLCJOYXZiYXIiLCJuYXZiYXJPcGVuIiwic2V0TmF2YmFyT3BlbiIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsImhyZWYiLCJidXR0b24iLCJvbkNsaWNrIiwiaWQiLCJ1bCIsIm1hcCIsImxpbmsiLCJpbmRleCIsImxpIiwibGlua3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/NavBar.jsx\n"));

/***/ })

});