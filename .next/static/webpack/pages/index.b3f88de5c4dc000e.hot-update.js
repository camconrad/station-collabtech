"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _web3modal_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @web3modal/react */ \"./node_modules/@web3modal/react/dist/index.js\");\n/* harmony import */ var _components_common_Popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/common/Popover */ \"./components/common/Popover/index.tsx\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/helpers */ \"./utils/helpers.ts\");\n/* harmony import */ var _barrel_optimize_names_FiLogOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=FiLogOut!=!react-icons/fi */ \"__barrel_optimize__?names=FiLogOut!=!./node_modules/react-icons/fi/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const { address } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)();\n    const { open } = (0,_web3modal_react__WEBPACK_IMPORTED_MODULE_5__.useWeb3Modal)();\n    const { disconnect } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useDisconnect)();\n    const handleDisconnect = ()=>{\n        disconnect();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"fixed inset-x-0 top-0 z-10 bg-white dark:bg-black mx-auto max-w-[800px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container flex items-center justify-between pt-4 pb-4 mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    className: \"flex items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://cdn.prod.website-files.com/671597a7dd56e19ff494a076/67159857e034eba568b415ae_station.png\",\n                            alt: \"Station\",\n                            className: \"h-6\"\n                        }, void 0, false, {\n                            fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"ml-2 text-xl font-bold\",\n                            children: \"Station\"\n                        }, void 0, false, {\n                            fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center space-x-4 text-[14px]\",\n                    children: address ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Popover__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        placement: \"bottom-right\",\n                        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center cursor-pointer\",\n                            onClick: handleDisconnect,\n                            children: [\n                                \"Disconnect \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiLogOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.FiLogOut, {\n                                    className: \"ml-2\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 30\n                                }, void 0)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 17\n                        }, void 0),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"px-3 py-1 text-black border border-black rounded-full cursor-pointer\",\n                            children: (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_3__.shortenAddress)(address)\n                        }, void 0, false, {\n                            fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"px-3 py-1 text-black border border-black rounded-full cursor-pointer\",\n                        onClick: open,\n                        children: \"Connect\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/cameron/Desktop/code/station_dapp/components/Header.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"qFg8TXd0exqoYZt+1M3PyiD99wE=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount,\n        _web3modal_react__WEBPACK_IMPORTED_MODULE_5__.useWeb3Modal,\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useDisconnect\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTRCO0FBRXFCO0FBQ0Y7QUFDRztBQUNEO0FBQ1I7QUFFekMsTUFBTU8sU0FBUzs7SUFDYixNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHUCxpREFBVUE7SUFDOUIsTUFBTSxFQUFFUSxJQUFJLEVBQUUsR0FBR04sOERBQVlBO0lBQzdCLE1BQU0sRUFBRU8sVUFBVSxFQUFFLEdBQUdSLG9EQUFhQTtJQUVwQyxNQUFNUyxtQkFBbUI7UUFDdkJEO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0U7UUFBT0MsV0FBVTtrQkFDaEIsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDYixrREFBSUE7b0JBQUNlLE1BQUs7b0JBQUlGLFdBQVU7O3NDQUN2Qiw4REFBQ0c7NEJBQ0NDLEtBQUk7NEJBQ0pDLEtBQUk7NEJBQ0pMLFdBQVU7Ozs7OztzQ0FFWiw4REFBQ007NEJBQUdOLFdBQVU7c0NBQXlCOzs7Ozs7Ozs7Ozs7OEJBR3pDLDhEQUFDQztvQkFBSUQsV0FBVTs4QkFDWkwsd0JBQ0MsOERBQUNKLGtFQUFPQTt3QkFDTmdCLFdBQVU7d0JBQ1ZDLHVCQUNFLDhEQUFDUDs0QkFDQ0QsV0FBVTs0QkFDVlMsU0FBU1g7O2dDQUNWOzhDQUNZLDhEQUFDTCxvRkFBUUE7b0NBQUNPLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FJbkMsNEVBQUNDOzRCQUFJRCxXQUFVO3NDQUNaUiw4REFBY0EsQ0FBQ0c7Ozs7Ozs7Ozs7a0RBSXBCLDhEQUFDZTt3QkFDQ1YsV0FBVTt3QkFDVlMsU0FBU2I7a0NBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRYjtHQWxETUY7O1FBQ2dCTiw2Q0FBVUE7UUFDYkUsMERBQVlBO1FBQ05ELGdEQUFhQTs7O0tBSGhDSztBQW9ETiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci50c3g/MDM2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlQWNjb3VudCwgdXNlRGlzY29ubmVjdCB9IGZyb20gJ3dhZ21pJ1xuaW1wb3J0IHsgdXNlV2ViM01vZGFsIH0gZnJvbSAnQHdlYjNtb2RhbC9yZWFjdCdcbmltcG9ydCBQb3BvdmVyIGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL1BvcG92ZXInXG5pbXBvcnQgeyBzaG9ydGVuQWRkcmVzcyB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcnMnXG5pbXBvcnQgeyBGaUxvZ091dCB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJ1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYWRkcmVzcyB9ID0gdXNlQWNjb3VudCgpXG4gIGNvbnN0IHsgb3BlbiB9ID0gdXNlV2ViM01vZGFsKClcbiAgY29uc3QgeyBkaXNjb25uZWN0IH0gPSB1c2VEaXNjb25uZWN0KClcblxuICBjb25zdCBoYW5kbGVEaXNjb25uZWN0ID0gKCkgPT4ge1xuICAgIGRpc2Nvbm5lY3QoKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LXgtMCB0b3AtMCB6LTEwIGJnLXdoaXRlIGRhcms6YmctYmxhY2sgbXgtYXV0byBtYXgtdy1bODAwcHhdXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHQtNCBwYi00IG14LWF1dG9cIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5wcm9kLndlYnNpdGUtZmlsZXMuY29tLzY3MTU5N2E3ZGQ1NmUxOWZmNDk0YTA3Ni82NzE1OTg1N2UwMzRlYmE1NjhiNDE1YWVfc3RhdGlvbi5wbmdcIiBcbiAgICAgICAgICAgIGFsdD1cIlN0YXRpb25cIiBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNlwiIFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1sLTIgdGV4dC14bCBmb250LWJvbGRcIj5TdGF0aW9uPC9oMj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTQgdGV4dC1bMTRweF1cIj5cbiAgICAgICAgICB7YWRkcmVzcyA/IChcbiAgICAgICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbS1yaWdodFwiXG4gICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURpc2Nvbm5lY3R9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgRGlzY29ubmVjdCA8RmlMb2dPdXQgY2xhc3NOYW1lPVwibWwtMlwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0zIHB5LTEgdGV4dC1ibGFjayBib3JkZXIgYm9yZGVyLWJsYWNrIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgIHtzaG9ydGVuQWRkcmVzcyhhZGRyZXNzKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMyBweS0xIHRleHQtYmxhY2sgYm9yZGVyIGJvcmRlci1ibGFjayByb3VuZGVkLWZ1bGwgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtvcGVufVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDb25uZWN0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VBY2NvdW50IiwidXNlRGlzY29ubmVjdCIsInVzZVdlYjNNb2RhbCIsIlBvcG92ZXIiLCJzaG9ydGVuQWRkcmVzcyIsIkZpTG9nT3V0IiwiSGVhZGVyIiwiYWRkcmVzcyIsIm9wZW4iLCJkaXNjb25uZWN0IiwiaGFuZGxlRGlzY29ubmVjdCIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsImhyZWYiLCJpbWciLCJzcmMiLCJhbHQiLCJoMiIsInBsYWNlbWVudCIsImNvbnRlbnQiLCJvbkNsaWNrIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.tsx\n"));

/***/ })

});