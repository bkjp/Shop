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

/***/ "./src/containers/homePage/categoriesBox.tsx":
/*!***************************************************!*\
  !*** ./src/containers/homePage/categoriesBox.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  padding: 2vh 0;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: 1.5rem;\\n  font-weight: bold;\\n  padding: 0;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin: 3vh 0;\\n  padding: 0 10vw;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  background-color: green;\\n  display: block;\\n  width: 200px;\\n  height: 200px;\\n  cursor: pointer;\\n  border-radius: 20px;\\n  margin: 5px 10px;\\n  padding: 10px;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    query GET_CATEGORIES {\\n      categories {\\n        edges {\\n          node {\\n            id\\n            name\\n            thumbnail\\n          }\\n        }\\n      }\\n    }\\n  \"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n////////////////////////////////////////////////////////////////////////////\nvar SContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"categoriesBox__SContainer\",\n    componentId: \"sc-df79005a-0\"\n})(_templateObject());\n_c = SContainer;\nvar STitle = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"categoriesBox__STitle\",\n    componentId: \"sc-df79005a-1\"\n})(_templateObject1());\n_c1 = STitle;\nvar SSubTitle = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"categoriesBox__SSubTitle\",\n    componentId: \"sc-df79005a-2\"\n})(_templateObject2());\n_c2 = SSubTitle;\nvar SContent = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"categoriesBox__SContent\",\n    componentId: \"sc-df79005a-3\"\n})(_templateObject3());\n_c3 = SContent;\nvar SImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"categoriesBox__SImgWrapper\",\n    componentId: \"sc-df79005a-4\"\n})(_templateObject4());\n_c4 = SImgWrapper;\n/////////////////////////////////////////////////////////////////////////////\nvar CategoriesBox = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), new_categories = ref[0], setCategories = ref[1];\n    //const data = loadCategoriesProductsTags();\n    var ref1 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)((0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql)(_templateObject5())), loading = ref1.loading, data = ref1.data, error = ref1.error;\n    console.log(\"/////////////////////// APOLLO LOADING ///\", loading);\n    console.log(\"/////////////////////// APOLLO DATA ///\", data);\n    console.log(\"/////////////////////// APOLLO ERROR ///\", error);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/home/paulin/projects/Epicerie-gql/frontend/src/containers/homePage/categoriesBox.tsx\",\n        lineNumber: 82,\n        columnNumber: 23\n    }, _this);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Error occured: \"\n            }, void 0, false, {\n                fileName: \"/home/paulin/projects/Epicerie-gql/frontend/src/containers/homePage/categoriesBox.tsx\",\n                lineNumber: 87,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/paulin/projects/Epicerie-gql/frontend/src/containers/homePage/categoriesBox.tsx\",\n            lineNumber: 86,\n            columnNumber: 7\n        }, _this);\n    }\n    //const categories = [];\n    var categories = data ? data.categories.edges : null;\n    var one = categories[0].node.thumbnail;\n    console.log(\"//////////////  ONE  ////\");\n    var onSelectCategoryId = function(id) {\n        router.push(\"/products/\".concat(id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SContainer, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(STitle, {\n                    children: \"Magasinez par categories\"\n                }, void 0, false, {\n                    fileName: \"/home/paulin/projects/Epicerie-gql/frontend/src/containers/homePage/categoriesBox.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SSubTitle, {\n                    children: \"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium\"\n                }, void 0, false, {\n                    fileName: \"/home/paulin/projects/Epicerie-gql/frontend/src/containers/homePage/categoriesBox.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SContent, {\n                    children: categories && categories !== null ? categories.map(function(category) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SImgWrapper, {\n                            onClick: function() {\n                                return onSelectCategoryId(category.node.id);\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                children: \"Quelque chose\"\n                            }, void 0, false, {\n                                fileName: \"/home/paulin/projects/Epicerie-gql/frontend/src/containers/homePage/categoriesBox.tsx\",\n                                lineNumber: 130,\n                                columnNumber: 17\n                            }, _this)\n                        }, category.node.id, false, {\n                            fileName: \"/home/paulin/projects/Epicerie-gql/frontend/src/containers/homePage/categoriesBox.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 15\n                        }, _this);\n                    }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            children: \"Category list empty\"\n                        }, void 0, false, {\n                            fileName: \"/home/paulin/projects/Epicerie-gql/frontend/src/containers/homePage/categoriesBox.tsx\",\n                            lineNumber: 135,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/paulin/projects/Epicerie-gql/frontend/src/containers/homePage/categoriesBox.tsx\",\n                        lineNumber: 134,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/paulin/projects/Epicerie-gql/frontend/src/containers/homePage/categoriesBox.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/paulin/projects/Epicerie-gql/frontend/src/containers/homePage/categoriesBox.tsx\",\n            lineNumber: 106,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/paulin/projects/Epicerie-gql/frontend/src/containers/homePage/categoriesBox.tsx\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, _this);\n};\n_s(CategoriesBox, \"XcvkvmYfJlfsdThdRWpKI3b7Mac=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery\n    ];\n});\n_c5 = CategoriesBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoriesBox);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"SContainer\");\n$RefreshReg$(_c1, \"STitle\");\n$RefreshReg$(_c2, \"SSubTitle\");\n$RefreshReg$(_c3, \"SContent\");\n$RefreshReg$(_c4, \"SImgWrapper\");\n$RefreshReg$(_c5, \"CategoriesBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9ob21lUGFnZS9jYXRlZ29yaWVzQm94LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDd0M7QUFDVztBQUNaO0FBT1E7QUFJL0MsNEVBQTRFO0FBRTVFLElBQU1NLFVBQVUsR0FBR0gsd0VBQVU7OztxQkFFNUI7QUFGS0csS0FBQUEsVUFBVTtBQUloQixJQUFNRSxNQUFNLEdBQUdMLHdFQUFVOzs7c0JBT3hCO0FBUEtLLE1BQUFBLE1BQU07QUFTWixJQUFNQyxTQUFTLEdBQUdOLHdFQUFVOzs7c0JBSTNCO0FBSktNLE1BQUFBLFNBQVM7QUFNZixJQUFNQyxRQUFRLEdBQUdQLHdFQUFVOzs7c0JBTzFCO0FBUEtPLE1BQUFBLFFBQVE7QUFTZCxJQUFNQyxXQUFXLEdBQUdSLHdFQUFVOzs7c0JBUzdCO0FBVEtRLE1BQUFBLFdBQVc7QUFXakIsNkVBQTZFO0FBRTdFLElBQU1DLGFBQWEsR0FBRyxXQUFNOztJQUMxQixJQUFNQyxNQUFNLEdBQUdiLHNEQUFTLEVBQUU7SUFDMUIsSUFBd0NFLEdBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUEzQ1ksY0FBYyxHQUFtQlosR0FBVSxHQUE3QixFQUFFYSxhQUFhLEdBQUliLEdBQVUsR0FBZDtJQUVwQyw0Q0FBNEM7SUFFNUMsSUFBaUNFLElBWS9CLEdBWitCQSx3REFBUSxDQUFDQyxtREFBRyxxQkFZM0MsRUFaTVcsT0FBTyxHQUFrQlosSUFZL0IsQ0FaTVksT0FBTyxFQUFFQyxJQUFJLEdBQVliLElBWS9CLENBWmVhLElBQUksRUFBRUMsS0FBSyxHQUFLZCxJQVkvQixDQVpxQmMsS0FBSztJQWM1QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsNENBQTRDLEVBQUVKLE9BQU8sQ0FBQyxDQUFDO0lBQ25FRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyx5Q0FBeUMsRUFBRUgsSUFBSSxDQUFDLENBQUM7SUFDN0RFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDBDQUEwQyxFQUFFRixLQUFLLENBQUMsQ0FBQztJQUUvRCxJQUFJRixPQUFPLEVBQUUscUJBQU8sOERBQUNLLElBQUU7a0JBQUMsWUFBVTs7Ozs7YUFBSyxDQUFDO0lBRXhDLElBQUlILEtBQUssRUFBRTtRQUNULHFCQUNFLDhEQUFDWCxLQUFHO3NCQUNGLDRFQUFDYyxJQUFFOzBCQUFDLGlCQUFlOzs7OztxQkFBSzs7Ozs7aUJBQ3BCLENBQ047SUFDSixDQUFDO0lBRUQsd0JBQXdCO0lBQ3hCLElBQU1DLFVBQVUsR0FBR0wsSUFBSSxHQUFHQSxJQUFJLENBQUNLLFVBQVUsQ0FBQ0MsS0FBSyxHQUFHLElBQUk7SUFFdEQsSUFBTUMsR0FBRyxHQUFHRixVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUNHLElBQUksQ0FBQ0MsU0FBUztJQUV4Q1AsT0FBTyxDQUFDQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUd6QyxJQUFNTyxrQkFBa0IsR0FBRyxTQUFDQyxFQUFVLEVBQUs7UUFDekNmLE1BQU0sQ0FBQ2dCLElBQUksQ0FBQyxZQUFXLENBQUssT0FBSEQsRUFBRSxDQUFFLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQscUJBQ0UsOERBQUN0QixVQUFVO2tCQUNULDRFQUFDQyxLQUFHOzs4QkFDRiw4REFBQ0MsTUFBTTs4QkFBQywwQkFBd0I7Ozs7O3lCQUFTOzhCQUN6Qyw4REFBQ0MsU0FBUzs4QkFBQyx1RUFFWDs7Ozs7eUJBQVk7OEJBRVosOERBQUNDLFFBQVE7OEJBQ05ZLFVBQVUsSUFBSUEsVUFBVSxLQUFLLElBQUksR0FDaENBLFVBQVUsQ0FBQ1EsR0FBRyxDQUFDLFNBQUNDLFFBQXVCOzZDQUNyQyw4REFBQ3BCLFdBQVc7NEJBRVZxQixPQUFPLEVBQUU7dUNBQU1MLGtCQUFrQixDQUFDSSxRQUFRLENBQUNOLElBQUksQ0FBQ0csRUFBRSxDQUFDOzZCQUFBO3NDQWFuRCw0RUFBQ1AsSUFBRTswQ0FBQyxlQUFhOzs7OztxQ0FBSzsyQkFkakJVLFFBQVEsQ0FBQ04sSUFBSSxDQUFDRyxFQUFFOzs7O2lDQWVUO3FCQUNmLENBQUMsaUJBRUYsOERBQUNyQixLQUFHO2tDQUNGLDRFQUFDYyxJQUFFO3NDQUFDLHFCQUFtQjs7Ozs7aUNBQUs7Ozs7OzZCQUN4Qjs7Ozs7eUJBRUM7Ozs7OztpQkFDUDs7Ozs7YUFDSyxDQUNiO0FBQ0osQ0FBQztHQXBGS1QsYUFBYTs7UUFDRlosa0RBQVM7UUFLU0ksb0RBQVE7OztBQU5yQ1EsTUFBQUEsYUFBYTtBQXNGbkIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGFpbmVycy9ob21lUGFnZS9jYXRlZ29yaWVzQm94LnRzeD9iZTMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBkZWZhdWx0SW1hZ2UgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvZGVmYXVsdC9kZWZhdWx0X2ltYWdlLndlYnBcIjtcbmltcG9ydCB7XG4gIElDYXRlZ29yeSxcbiAgSUNhdGVnb3J5Tm9kZSxcbn0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzL2N1c3RvbS10eXBpbmcvaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBHcmlkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5LCBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IGxvZyB9IGZyb20gXCJjb25zb2xlXCI7XG5pbXBvcnQgeyBsb2FkQ2F0ZWdvcmllc1Byb2R1Y3RzVGFncyB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2xpYi9sb2FkRGF0YXMvbG9hZENhdGVnb3JpZXNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuY29uc3QgU0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDJ2aCAwO1xuYDtcblxuY29uc3QgU1RpdGxlID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMDtcbmA7XG5cbmNvbnN0IFNTdWJUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgU0NvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAzdmggMDtcbiAgcGFkZGluZzogMCAxMHZ3O1xuYDtcblxuY29uc3QgU0ltZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW46IDVweCAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuYDtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuY29uc3QgQ2F0ZWdvcmllc0JveCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtuZXdfY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZSgpO1xuXG4gIC8vY29uc3QgZGF0YSA9IGxvYWRDYXRlZ29yaWVzUHJvZHVjdHNUYWdzKCk7XG5cbiAgY29uc3QgeyBsb2FkaW5nLCBkYXRhLCBlcnJvciB9ID0gdXNlUXVlcnkoZ3FsYFxuICAgIHF1ZXJ5IEdFVF9DQVRFR09SSUVTIHtcbiAgICAgIGNhdGVnb3JpZXMge1xuICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgdGh1bWJuYWlsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgKTtcblxuICBjb25zb2xlLmxvZyhcIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIEFQT0xMTyBMT0FESU5HIC8vL1wiLCBsb2FkaW5nKTtcbiAgY29uc29sZS5sb2coXCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBBUE9MTE8gREFUQSAvLy9cIiwgZGF0YSk7XG4gIGNvbnNvbGUubG9nKFwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gQVBPTExPIEVSUk9SIC8vL1wiLCBlcnJvcik7XG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8aDE+TG9hZGluZy4uLjwvaDE+O1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+RXJyb3Igb2NjdXJlZDogPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICAvL2NvbnN0IGNhdGVnb3JpZXMgPSBbXTtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGRhdGEgPyBkYXRhLmNhdGVnb3JpZXMuZWRnZXMgOiBudWxsO1xuXG4gIGNvbnN0IG9uZSA9IGNhdGVnb3JpZXNbMF0ubm9kZS50aHVtYm5haWw7XG5cbiAgY29uc29sZS5sb2coXCIvLy8vLy8vLy8vLy8vLyAgT05FICAvLy8vXCIpO1xuICBcblxuICBjb25zdCBvblNlbGVjdENhdGVnb3J5SWQgPSAoaWQ6IG51bWJlcikgPT4ge1xuICAgIHJvdXRlci5wdXNoKGAvcHJvZHVjdHMvJHtpZH1gKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxTQ29udGFpbmVyPlxuICAgICAgPGRpdj5cbiAgICAgICAgPFNUaXRsZT5NYWdhc2luZXogcGFyIGNhdGVnb3JpZXM8L1NUaXRsZT5cbiAgICAgICAgPFNTdWJUaXRsZT5cbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciwgYWRpcGlzaWNpbmcgZWxpdC4gQWNjdXNhbnRpdW1cbiAgICAgICAgPC9TU3ViVGl0bGU+XG5cbiAgICAgICAgPFNDb250ZW50PlxuICAgICAgICAgIHtjYXRlZ29yaWVzICYmIGNhdGVnb3JpZXMgIT09IG51bGwgPyAoXG4gICAgICAgICAgICBjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnk6IElDYXRlZ29yeU5vZGUpID0+IChcbiAgICAgICAgICAgICAgPFNJbWdXcmFwcGVyXG4gICAgICAgICAgICAgICAga2V5PXtjYXRlZ29yeS5ub2RlLmlkfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0Q2F0ZWdvcnlJZChjYXRlZ29yeS5ub2RlLmlkKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsvKiA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Lm5vZGUudGh1bWJuYWlsXG4gICAgICAgICAgICAgICAgICAgICAgPyBjYXRlZ29yeS5ub2RlLnRodW1ibmFpbFxuICAgICAgICAgICAgICAgICAgICAgIDogZGVmYXVsdEltYWdlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBhbHQ9e2NhdGVnb3J5Lm5vZGUubmFtZX1cbiAgICAgICAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgICAgICAgIDxoMT5RdWVscXVlIGNob3NlPC9oMT5cbiAgICAgICAgICAgICAgPC9TSW1nV3JhcHBlcj5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMT5DYXRlZ29yeSBsaXN0IGVtcHR5PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvU0NvbnRlbnQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L1NDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yaWVzQm94O1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJ1c2VRdWVyeSIsImdxbCIsIlNDb250YWluZXIiLCJkaXYiLCJTVGl0bGUiLCJTU3ViVGl0bGUiLCJTQ29udGVudCIsIlNJbWdXcmFwcGVyIiwiQ2F0ZWdvcmllc0JveCIsInJvdXRlciIsIm5ld19jYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsImxvYWRpbmciLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaDEiLCJjYXRlZ29yaWVzIiwiZWRnZXMiLCJvbmUiLCJub2RlIiwidGh1bWJuYWlsIiwib25TZWxlY3RDYXRlZ29yeUlkIiwiaWQiLCJwdXNoIiwibWFwIiwiY2F0ZWdvcnkiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/containers/homePage/categoriesBox.tsx\n"));

/***/ })

});