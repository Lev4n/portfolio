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

/***/ "(app-pages-browser)/./app/components/ProjectsSection.jsx":
/*!********************************************!*\
  !*** ./app/components/ProjectsSection.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectCard */ \"(app-pages-browser)/./app/components/ProjectCard.jsx\");\n/* harmony import */ var _ProjectTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectTag */ \"(app-pages-browser)/./app/components/ProjectTag.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst projectsData = [\n    {\n        id: 1,\n        title: \"ThreeJS T-shirt configurator\",\n        description: \"This app allows you to customize a t-shirt: upload your logo, change color etc.\",\n        image: \"/images/projects/T-shirtConfigurator.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"https://github.com/Lev4n/project_threejs_ai\",\n        previewUrl: \"https://project-threejs-tshirt.vercel.app/\"\n    },\n    {\n        id: 2,\n        title: \"carHub\",\n        description: \"carHub allows you to find a car for rent that suits your personal needs. You can filter by make, model, fuel type and year. \",\n        image: \"/images/projects/carHub.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"https://github.com/Lev4n/carHub\",\n        previewUrl: \"https://car-hub-lounge.vercel.app/\"\n    },\n    {\n        id: 3,\n        title: \"Metaversus\",\n        description: \"Next13 With Framer Motion & Tailwind CSS\",\n        image: \"/images/projects/Metaversus.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"https://github.com/Lev4n/Metaversus\",\n        previewUrl: \"https://metaversus-mocha.vercel.app/\"\n    },\n    {\n        id: 4,\n        title: \"React Native Jobs\",\n        description: \"React Native project using Node.js, React Native, Axios, Expo and Stylesheet!\",\n        image: \"/images/projects/JobSearchApp.jpg\",\n        tag: [\n            \"All\",\n            \"Mobile\"\n        ],\n        gitUrl: \"https://github.com/Lev4n/react-native-jobs\",\n        previewUrl: \"/\"\n    }\n];\nconst ProjectsSection = ()=>{\n    _s();\n    const [tag, setTag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\");\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleTagChange = (newTag)=>{\n        setTag(newTag);\n    };\n    const filteredProjects = projectsData.filter((project)=>project.tag.includes(tag));\n    const cardVariants = {\n        initial: {\n            y: 50,\n            opacity: 0\n        },\n        animate: {\n            y: 0,\n            opacity: 1\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"projects\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center text-4xl font-mono text-white mt-10 md:mb-12\",\n                children: \"My Projects\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lomidze\\\\OneDrive\\\\Рабочий стол\\\\DEV\\\\portfolio\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white flex flex-row justify-center items-center gap-2 py-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"All\",\n                        isSelected: tag === \"All\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lomidze\\\\OneDrive\\\\Рабочий стол\\\\DEV\\\\portfolio\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Web\",\n                        isSelected: tag === \"Web\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lomidze\\\\OneDrive\\\\Рабочий стол\\\\DEV\\\\portfolio\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Mobile\",\n                        isSelected: tag === \"Mobile\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lomidze\\\\OneDrive\\\\Рабочий стол\\\\DEV\\\\portfolio\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lomidze\\\\OneDrive\\\\Рабочий стол\\\\DEV\\\\portfolio\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                ref: ref,\n                className: \"grid md:grid-cols-3 gap-8 md:gap-12\",\n                children: filteredProjects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        title: project.title,\n                        description: project.description,\n                        imgUrl: project.image,\n                        gitUrl: project.gitUrl,\n                        previewUrl: project.previewUrl\n                    }, project.id, false, {\n                        fileName: \"C:\\\\Users\\\\Lomidze\\\\OneDrive\\\\Рабочий стол\\\\DEV\\\\portfolio\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lomidze\\\\OneDrive\\\\Рабочий стол\\\\DEV\\\\portfolio\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lomidze\\\\OneDrive\\\\Рабочий стол\\\\DEV\\\\portfolio\\\\app\\\\components\\\\ProjectsSection.jsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectsSection, \"y3v5YBRiGlsFeW2q+vXaflxKrJQ=\");\n_c = ProjectsSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsSection);\nvar _c;\n$RefreshReg$(_c, \"ProjectsSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1Byb2plY3RzU2VjdGlvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDZ0Q7QUFDUjtBQUNGO0FBQ1k7QUFFbEQsTUFBTU8sZUFBZTtJQUNuQjtRQUNFQyxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztZQUFPO1NBQU07UUFDbkJDLFFBQVE7UUFDUkMsWUFBWTtJQUNkO0lBQ0E7UUFDRU4sSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxLQUFLO1lBQUM7WUFBTztTQUFNO1FBQ25CQyxRQUFRO1FBQ1JDLFlBQVk7SUFDZDtJQUNBO1FBQ0VOLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsS0FBSztZQUFDO1lBQU87U0FBTTtRQUNuQkMsUUFBUTtRQUNSQyxZQUFZO0lBQ2Q7SUFDQTtRQUNFTixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztZQUFPO1NBQVM7UUFDdEJDLFFBQVE7UUFDUkMsWUFBWTtJQUNkO0NBQ0Q7QUFFRCxNQUFNQyxrQkFBa0I7O0lBQ3RCLE1BQU0sQ0FBQ0gsS0FBS0ksT0FBTyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNZ0IsTUFBTWYsNkNBQU1BLENBQUM7SUFFbkIsTUFBTWdCLGtCQUFrQixDQUFDQztRQUN2QkgsT0FBT0c7SUFDVDtJQUVBLE1BQU1DLG1CQUFtQmIsYUFBYWMsTUFBTSxDQUFDLENBQUNDLFVBQzVDQSxRQUFRVixHQUFHLENBQUNXLFFBQVEsQ0FBQ1g7SUFHdkIsTUFBTVksZUFBZTtRQUNuQkMsU0FBUztZQUFFQyxHQUFHO1lBQUlDLFNBQVM7UUFBRTtRQUM3QkMsU0FBUztZQUFFRixHQUFHO1lBQUdDLFNBQVM7UUFBRTtJQUM5QjtJQUVBLHFCQUNFLDhEQUFDRTtRQUFRckIsSUFBRzs7MEJBQ1YsOERBQUNzQjtnQkFBR0MsV0FBVTswQkFBMkQ7Ozs7OzswQkFHekUsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQzNCLG1EQUFVQTt3QkFDVDZCLFNBQVNmO3dCQUNUZ0IsTUFBSzt3QkFDTEMsWUFBWXZCLFFBQVE7Ozs7OztrQ0FFdEIsOERBQUNSLG1EQUFVQTt3QkFDVDZCLFNBQVNmO3dCQUNUZ0IsTUFBSzt3QkFDTEMsWUFBWXZCLFFBQVE7Ozs7OztrQ0FFdEIsOERBQUNSLG1EQUFVQTt3QkFDVDZCLFNBQVNmO3dCQUNUZ0IsTUFBSzt3QkFDTEMsWUFBWXZCLFFBQVE7Ozs7Ozs7Ozs7OzswQkFHeEIsOERBQUN3QjtnQkFBR25CLEtBQUtBO2dCQUFLYyxXQUFVOzBCQUNyQlgsaUJBQWlCaUIsR0FBRyxDQUFDLENBQUNmLFNBQVNnQixzQkFDNUIsOERBQUNuQyxvREFBV0E7d0JBRVpNLE9BQU9hLFFBQVFiLEtBQUs7d0JBQ3BCQyxhQUFhWSxRQUFRWixXQUFXO3dCQUNoQzZCLFFBQVFqQixRQUFRWCxLQUFLO3dCQUNyQkUsUUFBUVMsUUFBUVQsTUFBTTt3QkFDdEJDLFlBQVlRLFFBQVFSLFVBQVU7dUJBTHpCUSxRQUFRZCxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBVzNCO0dBckRNTztLQUFBQTtBQXVETiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Qcm9qZWN0c1NlY3Rpb24uanN4PzBlOGIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9qZWN0Q2FyZCBmcm9tIFwiLi9Qcm9qZWN0Q2FyZFwiO1xyXG5pbXBvcnQgUHJvamVjdFRhZyBmcm9tIFwiLi9Qcm9qZWN0VGFnXCI7XHJcbmltcG9ydCB7IG1vdGlvbiwgdXNlSW5WaWV3IH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmNvbnN0IHByb2plY3RzRGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHRpdGxlOiBcIlRocmVlSlMgVC1zaGlydCBjb25maWd1cmF0b3JcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgYXBwIGFsbG93cyB5b3UgdG8gY3VzdG9taXplIGEgdC1zaGlydDogdXBsb2FkIHlvdXIgbG9nbywgY2hhbmdlIGNvbG9yIGV0Yy5cIixcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvamVjdHMvVC1zaGlydENvbmZpZ3VyYXRvci5wbmdcIixcclxuICAgIHRhZzogW1wiQWxsXCIsIFwiV2ViXCJdLFxyXG4gICAgZ2l0VXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9MZXY0bi9wcm9qZWN0X3RocmVlanNfYWlcIixcclxuICAgIHByZXZpZXdVcmw6IFwiaHR0cHM6Ly9wcm9qZWN0LXRocmVlanMtdHNoaXJ0LnZlcmNlbC5hcHAvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHRpdGxlOiBcImNhckh1YlwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiY2FySHViIGFsbG93cyB5b3UgdG8gZmluZCBhIGNhciBmb3IgcmVudCB0aGF0IHN1aXRzIHlvdXIgcGVyc29uYWwgbmVlZHMuIFlvdSBjYW4gZmlsdGVyIGJ5IG1ha2UsIG1vZGVsLCBmdWVsIHR5cGUgYW5kIHllYXIuIFwiLFxyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy9jYXJIdWIucG5nXCIsXHJcbiAgICB0YWc6IFtcIkFsbFwiLCBcIldlYlwiXSxcclxuICAgIGdpdFVybDogXCJodHRwczovL2dpdGh1Yi5jb20vTGV2NG4vY2FySHViXCIsXHJcbiAgICBwcmV2aWV3VXJsOiBcImh0dHBzOi8vY2FyLWh1Yi1sb3VuZ2UudmVyY2VsLmFwcC9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgdGl0bGU6IFwiTWV0YXZlcnN1c1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiTmV4dDEzIFdpdGggRnJhbWVyIE1vdGlvbiAmIFRhaWx3aW5kIENTU1wiLFxyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy9NZXRhdmVyc3VzLnBuZ1wiLFxyXG4gICAgdGFnOiBbXCJBbGxcIiwgXCJXZWJcIl0sXHJcbiAgICBnaXRVcmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0xldjRuL01ldGF2ZXJzdXNcIixcclxuICAgIHByZXZpZXdVcmw6IFwiaHR0cHM6Ly9tZXRhdmVyc3VzLW1vY2hhLnZlcmNlbC5hcHAvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIHRpdGxlOiBcIlJlYWN0IE5hdGl2ZSBKb2JzXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJSZWFjdCBOYXRpdmUgcHJvamVjdCB1c2luZyBOb2RlLmpzLCBSZWFjdCBOYXRpdmUsIEF4aW9zLCBFeHBvIGFuZCBTdHlsZXNoZWV0IVwiLFxyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy9Kb2JTZWFyY2hBcHAuanBnXCIsXHJcbiAgICB0YWc6IFtcIkFsbFwiLCBcIk1vYmlsZVwiXSxcclxuICAgIGdpdFVybDogXCJodHRwczovL2dpdGh1Yi5jb20vTGV2NG4vcmVhY3QtbmF0aXZlLWpvYnNcIixcclxuICAgIHByZXZpZXdVcmw6IFwiL1wiLFxyXG4gIH1cclxuXTtcclxuXHJcbmNvbnN0IFByb2plY3RzU2VjdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBbdGFnLCBzZXRUYWddID0gdXNlU3RhdGUoXCJBbGxcIik7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVUYWdDaGFuZ2UgPSAobmV3VGFnKSA9PiB7XHJcbiAgICBzZXRUYWcobmV3VGFnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmaWx0ZXJlZFByb2plY3RzID0gcHJvamVjdHNEYXRhLmZpbHRlcigocHJvamVjdCkgPT5cclxuICAgIHByb2plY3QudGFnLmluY2x1ZGVzKHRhZylcclxuICApO1xyXG5cclxuICBjb25zdCBjYXJkVmFyaWFudHMgPSB7XHJcbiAgICBpbml0aWFsOiB7IHk6IDUwLCBvcGFjaXR5OiAwIH0sXHJcbiAgICBhbmltYXRlOiB7IHk6IDAsIG9wYWNpdHk6IDEgfSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJwcm9qZWN0c1wiPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC00eGwgZm9udC1tb25vIHRleHQtd2hpdGUgbXQtMTAgbWQ6bWItMTJcIj5cclxuICAgICAgICBNeSBQcm9qZWN0c1xyXG4gICAgICA8L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTIgcHktNlwiPlxyXG4gICAgICAgIDxQcm9qZWN0VGFnXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUYWdDaGFuZ2V9XHJcbiAgICAgICAgICBuYW1lPVwiQWxsXCJcclxuICAgICAgICAgIGlzU2VsZWN0ZWQ9e3RhZyA9PT0gXCJBbGxcIn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxQcm9qZWN0VGFnXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUYWdDaGFuZ2V9XHJcbiAgICAgICAgICBuYW1lPVwiV2ViXCJcclxuICAgICAgICAgIGlzU2VsZWN0ZWQ9e3RhZyA9PT0gXCJXZWJcIn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxQcm9qZWN0VGFnXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUYWdDaGFuZ2V9XHJcbiAgICAgICAgICBuYW1lPVwiTW9iaWxlXCJcclxuICAgICAgICAgIGlzU2VsZWN0ZWQ9e3RhZyA9PT0gXCJNb2JpbGVcIn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHVsIHJlZj17cmVmfSBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0zIGdhcC04IG1kOmdhcC0xMlwiPlxyXG4gICAgICAgIHtmaWx0ZXJlZFByb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPFByb2plY3RDYXJkXHJcbiAgICAgICAgICAgIGtleT17cHJvamVjdC5pZH1cclxuICAgICAgICAgICAgdGl0bGU9e3Byb2plY3QudGl0bGV9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9qZWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICBpbWdVcmw9e3Byb2plY3QuaW1hZ2V9XHJcbiAgICAgICAgICAgIGdpdFVybD17cHJvamVjdC5naXRVcmx9XHJcbiAgICAgICAgICAgIHByZXZpZXdVcmw9e3Byb2plY3QucHJldmlld1VybH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzU2VjdGlvbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJQcm9qZWN0Q2FyZCIsIlByb2plY3RUYWciLCJtb3Rpb24iLCJ1c2VJblZpZXciLCJwcm9qZWN0c0RhdGEiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZyIsImdpdFVybCIsInByZXZpZXdVcmwiLCJQcm9qZWN0c1NlY3Rpb24iLCJzZXRUYWciLCJyZWYiLCJoYW5kbGVUYWdDaGFuZ2UiLCJuZXdUYWciLCJmaWx0ZXJlZFByb2plY3RzIiwiZmlsdGVyIiwicHJvamVjdCIsImluY2x1ZGVzIiwiY2FyZFZhcmlhbnRzIiwiaW5pdGlhbCIsInkiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInNlY3Rpb24iLCJoMiIsImNsYXNzTmFtZSIsImRpdiIsIm9uQ2xpY2siLCJuYW1lIiwiaXNTZWxlY3RlZCIsInVsIiwibWFwIiwiaW5kZXgiLCJpbWdVcmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ProjectsSection.jsx\n"));

/***/ })

});