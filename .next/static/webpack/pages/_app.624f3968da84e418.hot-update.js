"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi/chains */ \"./node_modules/wagmi/dist/chains.js\");\n/* harmony import */ var _wagmi_core_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wagmi/core/providers/jsonRpc */ \"./node_modules/@wagmi/core/dist/providers/jsonRpc.js\");\n/* harmony import */ var _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3modal/ethereum */ \"./node_modules/@web3modal/ethereum/dist/index.js\");\n/* harmony import */ var _web3modal_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web3modal/react */ \"./node_modules/@web3modal/react/dist/index.js\");\n\n\n\n\n\n\n\n// Define chains\nconst chains = [\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.mainnet,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.polygon,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.optimism,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.arbitrum\n];\nconst projectId = \"02a231b2406ed316c861abefc95c5e59\";\n// Configure chains with jsonRpcProvider, adding RPC URLs for all chains\nconst { publicClient } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)(chains, [\n    (0,_wagmi_core_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_5__.jsonRpcProvider)({\n        rpc: (chain)=>{\n            switch(chain.id){\n                case wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.mainnet.id:\n                    return {\n                        http: \"https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID\"\n                    } // Replace with a valid project ID\n                    ;\n                case wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.polygon.id:\n                    return {\n                        http: \"https://polygon-rpc.com\"\n                    };\n                case wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.optimism.id:\n                    return {\n                        http: \"https://mainnet.optimism.io\"\n                    };\n                case wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.arbitrum.id:\n                    return {\n                        http: \"https://arb1.arbitrum.io/rpc\"\n                    };\n                default:\n                    return null;\n            }\n        }\n    })\n]);\nconst wagmiConfig = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createConfig)({\n    autoConnect: true,\n    connectors: (0,_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_2__.w3mConnectors)({\n        projectId,\n        chains\n    }),\n    publicClient\n});\nconst ethereumClient = new _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_2__.EthereumClient(wagmiConfig, chains);\nfunction MyApp(param) {\n    let { Component, pageProps } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n        config: wagmiConfig,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/cameron/Desktop/code/station_dapp/pages/_app.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3modal_react__WEBPACK_IMPORTED_MODULE_6__.Web3Modal, {\n                projectId: projectId,\n                ethereumClient: ethereumClient\n            }, void 0, false, {\n                fileName: \"/Users/cameron/Desktop/code/station_dapp/pages/_app.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cameron/Desktop/code/station_dapp/pages/_app.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4QjtBQUVvQztBQUNDO0FBQ0o7QUFDSTtBQUN2QjtBQUU1QyxnQkFBZ0I7QUFDaEIsTUFBTVcsU0FBUztJQUFDUixpREFBT0E7SUFBRUMsaURBQU9BO0lBQUVDLGtEQUFRQTtJQUFFQyxrREFBUUE7Q0FBQztBQUNyRCxNQUFNTSxZQUFZO0FBRWxCLHdFQUF3RTtBQUN4RSxNQUFNLEVBQUVDLFlBQVksRUFBRSxHQUFHWixzREFBZUEsQ0FBQ1UsUUFBUTtJQUMvQ0osOEVBQWVBLENBQUM7UUFDZE8sS0FBSyxDQUFDQztZQUNKLE9BQVFBLE1BQU1DLEVBQUU7Z0JBQ2QsS0FBS2IsaURBQU9BLENBQUNhLEVBQUU7b0JBQ2IsT0FBTzt3QkFBRUMsTUFBTTtvQkFBc0QsRUFBRSxrQ0FBa0M7O2dCQUMzRyxLQUFLYixpREFBT0EsQ0FBQ1ksRUFBRTtvQkFDYixPQUFPO3dCQUFFQyxNQUFNO29CQUEwQjtnQkFDM0MsS0FBS1osa0RBQVFBLENBQUNXLEVBQUU7b0JBQ2QsT0FBTzt3QkFBRUMsTUFBTTtvQkFBOEI7Z0JBQy9DLEtBQUtYLGtEQUFRQSxDQUFDVSxFQUFFO29CQUNkLE9BQU87d0JBQUVDLE1BQU07b0JBQStCO2dCQUNoRDtvQkFDRSxPQUFPO1lBQ1g7UUFDRjtJQUNGO0NBQ0Q7QUFFRCxNQUFNQyxjQUFjaEIsbURBQVlBLENBQUM7SUFDL0JpQixhQUFhO0lBQ2JDLFlBQVlYLGtFQUFhQSxDQUFDO1FBQUVHO1FBQVdEO0lBQU87SUFDOUNFO0FBQ0Y7QUFFQSxNQUFNUSxpQkFBaUIsSUFBSWIsK0RBQWNBLENBQUNVLGFBQWFQO0FBRXZELFNBQVNXLE1BQU0sS0FBa0M7UUFBbEMsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVksR0FBbEM7SUFDYixxQkFDRSw4REFBQ3hCLDhDQUFXQTtRQUFDeUIsUUFBUVA7OzBCQUNuQiw4REFBQ0s7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7OzBCQUN4Qiw4REFBQ2QsdURBQVNBO2dCQUFDRSxXQUFXQTtnQkFBV1MsZ0JBQWdCQTs7Ozs7Ozs7Ozs7O0FBR3ZEO0tBUFNDO0FBU1QsK0RBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IFdhZ21pQ29uZmlnLCBjb25maWd1cmVDaGFpbnMsIGNyZWF0ZUNvbmZpZyB9IGZyb20gJ3dhZ21pJ1xuaW1wb3J0IHsgbWFpbm5ldCwgcG9seWdvbiwgb3B0aW1pc20sIGFyYml0cnVtIH0gZnJvbSAnd2FnbWkvY2hhaW5zJ1xuaW1wb3J0IHsganNvblJwY1Byb3ZpZGVyIH0gZnJvbSAnQHdhZ21pL2NvcmUvcHJvdmlkZXJzL2pzb25ScGMnXG5pbXBvcnQgeyBFdGhlcmV1bUNsaWVudCwgdzNtQ29ubmVjdG9ycyB9IGZyb20gJ0B3ZWIzbW9kYWwvZXRoZXJldW0nXG5pbXBvcnQgeyBXZWIzTW9kYWwgfSBmcm9tICdAd2ViM21vZGFsL3JlYWN0J1xuXG4vLyBEZWZpbmUgY2hhaW5zXG5jb25zdCBjaGFpbnMgPSBbbWFpbm5ldCwgcG9seWdvbiwgb3B0aW1pc20sIGFyYml0cnVtXVxuY29uc3QgcHJvamVjdElkID0gJzAyYTIzMWIyNDA2ZWQzMTZjODYxYWJlZmM5NWM1ZTU5J1xuXG4vLyBDb25maWd1cmUgY2hhaW5zIHdpdGgganNvblJwY1Byb3ZpZGVyLCBhZGRpbmcgUlBDIFVSTHMgZm9yIGFsbCBjaGFpbnNcbmNvbnN0IHsgcHVibGljQ2xpZW50IH0gPSBjb25maWd1cmVDaGFpbnMoY2hhaW5zLCBbXG4gIGpzb25ScGNQcm92aWRlcih7XG4gICAgcnBjOiAoY2hhaW4pID0+IHtcbiAgICAgIHN3aXRjaCAoY2hhaW4uaWQpIHtcbiAgICAgICAgY2FzZSBtYWlubmV0LmlkOlxuICAgICAgICAgIHJldHVybiB7IGh0dHA6ICdodHRwczovL21haW5uZXQuaW5mdXJhLmlvL3YzL1lPVVJfSU5GVVJBX1BST0pFQ1RfSUQnIH0gLy8gUmVwbGFjZSB3aXRoIGEgdmFsaWQgcHJvamVjdCBJRFxuICAgICAgICBjYXNlIHBvbHlnb24uaWQ6XG4gICAgICAgICAgcmV0dXJuIHsgaHR0cDogJ2h0dHBzOi8vcG9seWdvbi1ycGMuY29tJyB9XG4gICAgICAgIGNhc2Ugb3B0aW1pc20uaWQ6XG4gICAgICAgICAgcmV0dXJuIHsgaHR0cDogJ2h0dHBzOi8vbWFpbm5ldC5vcHRpbWlzbS5pbycgfVxuICAgICAgICBjYXNlIGFyYml0cnVtLmlkOlxuICAgICAgICAgIHJldHVybiB7IGh0dHA6ICdodHRwczovL2FyYjEuYXJiaXRydW0uaW8vcnBjJyB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICB9LFxuICB9KSxcbl0pXG5cbmNvbnN0IHdhZ21pQ29uZmlnID0gY3JlYXRlQ29uZmlnKHtcbiAgYXV0b0Nvbm5lY3Q6IHRydWUsXG4gIGNvbm5lY3RvcnM6IHczbUNvbm5lY3RvcnMoeyBwcm9qZWN0SWQsIGNoYWlucyB9KSxcbiAgcHVibGljQ2xpZW50LFxufSlcblxuY29uc3QgZXRoZXJldW1DbGllbnQgPSBuZXcgRXRoZXJldW1DbGllbnQod2FnbWlDb25maWcsIGNoYWlucylcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxXYWdtaUNvbmZpZyBjb25maWc9e3dhZ21pQ29uZmlnfT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDxXZWIzTW9kYWwgcHJvamVjdElkPXtwcm9qZWN0SWR9IGV0aGVyZXVtQ2xpZW50PXtldGhlcmV1bUNsaWVudH0gLz5cbiAgICA8L1dhZ21pQ29uZmlnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiV2FnbWlDb25maWciLCJjb25maWd1cmVDaGFpbnMiLCJjcmVhdGVDb25maWciLCJtYWlubmV0IiwicG9seWdvbiIsIm9wdGltaXNtIiwiYXJiaXRydW0iLCJqc29uUnBjUHJvdmlkZXIiLCJFdGhlcmV1bUNsaWVudCIsInczbUNvbm5lY3RvcnMiLCJXZWIzTW9kYWwiLCJjaGFpbnMiLCJwcm9qZWN0SWQiLCJwdWJsaWNDbGllbnQiLCJycGMiLCJjaGFpbiIsImlkIiwiaHR0cCIsIndhZ21pQ29uZmlnIiwiYXV0b0Nvbm5lY3QiLCJjb25uZWN0b3JzIiwiZXRoZXJldW1DbGllbnQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNvbmZpZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});