"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./src/config/VariableConfig.ts":
/*!**************************************!*\
  !*** ./src/config/VariableConfig.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_BASE_URL\": () => (/* binding */ API_BASE_URL),\n/* harmony export */   \"API_URL\": () => (/* binding */ API_URL),\n/* harmony export */   \"A_API_URL\": () => (/* binding */ A_API_URL),\n/* harmony export */   \"NEXT_PUBLIC_API_BASE_URL\": () => (/* binding */ NEXT_PUBLIC_API_BASE_URL),\n/* harmony export */   \"NEXT_PUBLIC_API_URL\": () => (/* binding */ NEXT_PUBLIC_API_URL)\n/* harmony export */ });\nconst API_BASE_URL = process.env.API_BASE_URL;\n//export const API_URL = process.env.NEXT_PUBLIC_API_URL;\nconst API_URL = process.env.NEXT_API_URL;\nconst A_API_URL = process.env.API_URL;\nconst NEXT_PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;\n// For graphql api\nconst NEXT_PUBLIC_API_URL = \"http://localhost:8000/graphql/\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvY29uZmlnL1ZhcmlhYmxlQ29uZmlnLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQU8sTUFBTUEsWUFBWSxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsWUFBWSxDQUFDO0FBRXJELHlEQUF5RDtBQUNsRCxNQUFNRyxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxZQUFZLENBQUM7QUFDekMsTUFBTUMsU0FBUyxHQUFHSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDO0FBRXRDLE1BQU1HLHdCQUF3QixHQUFHTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksd0JBQXdCLENBQUM7QUFFN0Usa0JBQWtCO0FBQ1gsTUFBTUMsbUJBQW1CLEdBQUdOLGdDQUErQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9WYXJpYWJsZUNvbmZpZy50cz82ZjY4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBUElfQkFTRV9VUkwgPSBwcm9jZXNzLmVudi5BUElfQkFTRV9VUkw7XHJcblxyXG4vL2V4cG9ydCBjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTDtcclxuZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX0FQSV9VUkw7XHJcbmV4cG9ydCBjb25zdCBBX0FQSV9VUkwgPSBwcm9jZXNzLmVudi5BUElfVVJMO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5FWFRfUFVCTElDX0FQSV9CQVNFX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9CQVNFX1VSTDtcclxuXHJcbi8vIEZvciBncmFwaHFsIGFwaVxyXG5leHBvcnQgY29uc3QgTkVYVF9QVUJMSUNfQVBJX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkw7XHJcbiJdLCJuYW1lcyI6WyJBUElfQkFTRV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiQVBJX1VSTCIsIk5FWFRfQVBJX1VSTCIsIkFfQVBJX1VSTCIsIk5FWFRfUFVCTElDX0FQSV9CQVNFX1VSTCIsIk5FWFRfUFVCTElDX0FQSV9VUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/config/VariableConfig.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_VariableConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/VariableConfig */ \"(api)/./src/config/VariableConfig.ts\");\n\n\n\n\n// Fonction will help us to refresh token\nasync function refreshAccessToken(tokenObject) {\n    try {\n        // Get a new set of tokens with a refreshToken\n        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0___default()({\n            method: \"post\",\n            url: `${_config_VariableConfig__WEBPACK_IMPORTED_MODULE_3__.API_BASE_URL}/api/users/login/tokens/refresh/`,\n            data: {\n                refresh: tokenObject.refreshToken\n            }\n        });\n        return {\n            ...tokenObject,\n            accessToken: data.access,\n            accessTokenExpiry: data.access_token_expiry,\n            refreshToken: data.refresh\n        };\n    } catch (error) {\n        return {\n            ...tokenObject,\n            error: \"RefreshAccessTokenError\"\n        };\n    }\n}\n// callbackUrl: `${window.location.origin}`,\nconst authOptions = {\n    // Providers  /////////////////////////////////////////////////////\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            id: \"login\",\n            name: \"credentials\",\n            credentials: {},\n            authorize: async (credentials, req)=>{\n                // Add logic here to look up the user from the credentials supplied\n                if (credentials && credentials.email && credentials.password) {\n                    // Any object returned will be saved in `user` property of the JWT\n                    try {\n                        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0___default()({\n                            method: \"post\",\n                            url: `${_config_VariableConfig__WEBPACK_IMPORTED_MODULE_3__.API_BASE_URL}/api/auth/login/tokens/`,\n                            data: {\n                                email: credentials.email,\n                                password: credentials.password\n                            }\n                        });\n                        return data;\n                    } catch (error) {\n                        throw new Error(error.response.data.detail);\n                    }\n                } else {\n                    return null;\n                }\n            }\n        }), \n    ],\n    // Callbacks  /////////////////////////////////////////////////\n    callbacks: {\n        //async signIn({user, account,profile}){return true}\n        redirect: async ({ url , baseUrl  })=>{\n            return url.startsWith(baseUrl) ? Promise.resolve(url) : Promise.resolve(baseUrl);\n        },\n        jwt: async ({ token , user , account , profile , isNewUser  })=>{\n            if (user) {\n                //...logic to construct and return a token\n                token.id = user.id;\n                token.username = user.username;\n                token.firstName = user.first_name;\n                token.lastName = user.last_name;\n                token.email = user.email;\n                token.phone = user.phone;\n                token.profile = user.profile_image;\n                token.isActive = user.is_active;\n                token.isSuperuser = user.is_superuser;\n                token.isAdmin = user.is_admin;\n                token.isStaff = user.is_staff;\n                token.accessToken = user.access;\n                token.refreshToken = user.refresh;\n                token.accessTokenExpiry = user.access_token_lifetime;\n            }\n            return token;\n        },\n        session: async ({ session , token , user  })=>{\n            // We construct values we want to make available in the client side (useSession)\n            session.user.id = token.id;\n            session.user.firstName = token.firstName;\n            session.user.lastName = token.lastName;\n            session.user.email = token.email;\n            session.user.phone = token.phone;\n            session.user.profile = token.profile;\n            session.user.isActive = token.isActive;\n            session.user.isSuperuser = token.isSuperuser;\n            session.user.isAdmin = token.isAdmin;\n            session.user.isStaff = token.isStaff;\n            session.user.accessToken = token.accessToken;\n            return session;\n        }\n    },\n    session: {\n        strategy: \"jwt\",\n        maxAge: 60 * 25\n    },\n    secret: process.env.NEXTAUTH_SECRET,\n    /////////////////////////   EVENTS    ////////////////////////\n    events: {\n        signIn: async (message)=>{\n        // console.log(\"signIn\", message);\n        },\n        signOut: async (message)=>{\n        // console.log(\"signOut\", message);\n        },\n        createUser: async (message)=>{\n        // console.log(\"createUser\", message);\n        },\n        updateUser: async (message)=>{\n        // console.log(\"updateUser\", message);\n        },\n        linkAccount: async (message)=>{\n        //console.log(\"linkAccount\", message);\n        },\n        session: async (message)=>{\n        //console.log(\"session\", message);\n        }\n    },\n    // Pages ///////////////////////////////////////////////////////\n    // debug: true,\n    pages: {\n        signIn: \"/\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQjtBQUM0QjtBQUNZO0FBQ0o7QUFFOUQseUNBQXlDO0FBQ3pDLGVBQWVJLGtCQUFrQixDQUFDQyxXQUFnQixFQUFFO0lBQ2xELElBQUk7UUFDRiw4Q0FBOEM7UUFDOUMsTUFBTSxFQUFFQyxJQUFJLEdBQUUsR0FBRyxNQUFNTiw0Q0FBSyxDQUFDO1lBQzNCTyxNQUFNLEVBQUUsTUFBTTtZQUNkQyxHQUFHLEVBQUUsQ0FBQyxFQUFFTCxnRUFBWSxDQUFDLGdDQUFnQyxDQUFDO1lBQ3RERyxJQUFJLEVBQUU7Z0JBQ0pHLE9BQU8sRUFBRUosV0FBVyxDQUFDSyxZQUFZO2FBQ2xDO1NBQ0YsQ0FBQztRQUVGLE9BQU87WUFDTCxHQUFHTCxXQUFXO1lBQ2RNLFdBQVcsRUFBRUwsSUFBSSxDQUFDTSxNQUFNO1lBQ3hCQyxpQkFBaUIsRUFBRVAsSUFBSSxDQUFDUSxtQkFBbUI7WUFDM0NKLFlBQVksRUFBRUosSUFBSSxDQUFDRyxPQUFPO1NBQzNCLENBQUM7SUFDSixFQUFFLE9BQU9NLEtBQUssRUFBRTtRQUNkLE9BQU87WUFDTCxHQUFHVixXQUFXO1lBQ2RVLEtBQUssRUFBRSx5QkFBeUI7U0FDakMsQ0FBQztJQUNKLENBQUM7QUFDSCxDQUFDO0FBRUQsNENBQTRDO0FBRTVDLE1BQU1DLFdBQVcsR0FBb0I7SUFDbkMsbUVBQW1FO0lBQ25FQyxTQUFTLEVBQUU7UUFDVGYsc0VBQW1CLENBQUM7WUFDbEJnQixFQUFFLEVBQUUsT0FBTztZQUNYQyxJQUFJLEVBQUUsYUFBYTtZQUNuQkMsV0FBVyxFQUFFLEVBQUU7WUFDZkMsU0FBUyxFQUFFLE9BQ1RELFdBQWdELEVBQ2hERSxHQUFHLEdBQ0E7Z0JBQ0gsbUVBQW1FO2dCQUNuRSxJQUFJRixXQUFXLElBQUlBLFdBQVcsQ0FBQ0csS0FBSyxJQUFJSCxXQUFXLENBQUNJLFFBQVEsRUFBRTtvQkFDNUQsa0VBQWtFO29CQUVsRSxJQUFJO3dCQUNGLE1BQU0sRUFBRWxCLElBQUksR0FBRSxHQUFHLE1BQU1OLDRDQUFLLENBQUM7NEJBQzNCTyxNQUFNLEVBQUUsTUFBTTs0QkFDZEMsR0FBRyxFQUFFLENBQUMsRUFBRUwsZ0VBQVksQ0FBQyx1QkFBdUIsQ0FBQzs0QkFDN0NHLElBQUksRUFBRTtnQ0FDSmlCLEtBQUssRUFBRUgsV0FBVyxDQUFDRyxLQUFLO2dDQUN4QkMsUUFBUSxFQUFFSixXQUFXLENBQUNJLFFBQVE7NkJBQy9CO3lCQUNGLENBQUM7d0JBRUYsT0FBT2xCLElBQUksQ0FBQztvQkFDZCxFQUFFLE9BQU9TLEtBQUssRUFBRTt3QkFDZCxNQUFNLElBQUlVLEtBQUssQ0FBQ1YsS0FBSyxDQUFDVyxRQUFRLENBQUNwQixJQUFJLENBQUNxQixNQUFNLENBQUMsQ0FBQztvQkFDOUMsQ0FBQztnQkFDSCxPQUFPO29CQUNMLE9BQU8sSUFBSSxDQUFDO2dCQUNkLENBQUM7WUFDSCxDQUFDO1NBQ0YsQ0FBQztLQUNIO0lBRUQsK0RBQStEO0lBQy9EQyxTQUFTLEVBQUU7UUFDVCxvREFBb0Q7UUFFcERDLFFBQVEsRUFBRSxPQUFPLEVBQUVyQixHQUFHLEdBQUVzQixPQUFPLEdBQUUsR0FBSztZQUNwQyxPQUFPdEIsR0FBRyxDQUFDdUIsVUFBVSxDQUFDRCxPQUFPLENBQUMsR0FDMUJFLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDekIsR0FBRyxDQUFDLEdBQ3BCd0IsT0FBTyxDQUFDQyxPQUFPLENBQUNILE9BQU8sQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFFREksR0FBRyxFQUFFLE9BQU8sRUFBRUMsS0FBSyxHQUFFQyxJQUFJLEdBQUVDLE9BQU8sR0FBRUMsT0FBTyxHQUFFQyxTQUFTLEdBQUUsR0FBSztZQUMzRCxJQUFJSCxJQUFJLEVBQUU7Z0JBQ1IsMENBQTBDO2dCQUMxQ0QsS0FBSyxDQUFDakIsRUFBRSxHQUFHa0IsSUFBSSxDQUFDbEIsRUFBRSxDQUFDO2dCQUNuQmlCLEtBQUssQ0FBQ0ssUUFBUSxHQUFHSixJQUFJLENBQUNJLFFBQVEsQ0FBQztnQkFDL0JMLEtBQUssQ0FBQ00sU0FBUyxHQUFHTCxJQUFJLENBQUNNLFVBQVUsQ0FBQztnQkFDbENQLEtBQUssQ0FBQ1EsUUFBUSxHQUFHUCxJQUFJLENBQUNRLFNBQVMsQ0FBQztnQkFDaENULEtBQUssQ0FBQ1osS0FBSyxHQUFHYSxJQUFJLENBQUNiLEtBQUssQ0FBQztnQkFDekJZLEtBQUssQ0FBQ1UsS0FBSyxHQUFHVCxJQUFJLENBQUNTLEtBQUssQ0FBQztnQkFDekJWLEtBQUssQ0FBQ0csT0FBTyxHQUFHRixJQUFJLENBQUNVLGFBQWEsQ0FBQztnQkFFbkNYLEtBQUssQ0FBQ1ksUUFBUSxHQUFHWCxJQUFJLENBQUNZLFNBQVMsQ0FBQztnQkFDaENiLEtBQUssQ0FBQ2MsV0FBVyxHQUFHYixJQUFJLENBQUNjLFlBQVksQ0FBQztnQkFDdENmLEtBQUssQ0FBQ2dCLE9BQU8sR0FBR2YsSUFBSSxDQUFDZ0IsUUFBUSxDQUFDO2dCQUM5QmpCLEtBQUssQ0FBQ2tCLE9BQU8sR0FBR2pCLElBQUksQ0FBQ2tCLFFBQVEsQ0FBQztnQkFFOUJuQixLQUFLLENBQUN4QixXQUFXLEdBQUd5QixJQUFJLENBQUN4QixNQUFNLENBQUM7Z0JBQ2hDdUIsS0FBSyxDQUFDekIsWUFBWSxHQUFHMEIsSUFBSSxDQUFDM0IsT0FBTyxDQUFDO2dCQUNsQzBCLEtBQUssQ0FBQ3RCLGlCQUFpQixHQUFHdUIsSUFBSSxDQUFDbUIscUJBQXFCLENBQUM7WUFDdkQsQ0FBQztZQUVELE9BQU9wQixLQUFLLENBQUM7UUFDZixDQUFDO1FBRURxQixPQUFPLEVBQUUsT0FBTyxFQUFFQSxPQUFPLEdBQUVyQixLQUFLLEdBQUVDLElBQUksR0FBRSxHQUFLO1lBQzNDLGdGQUFnRjtZQUNoRm9CLE9BQU8sQ0FBQ3BCLElBQUksQ0FBQ2xCLEVBQUUsR0FBR2lCLEtBQUssQ0FBQ2pCLEVBQUUsQ0FBQztZQUMzQnNDLE9BQU8sQ0FBQ3BCLElBQUksQ0FBQ0ssU0FBUyxHQUFHTixLQUFLLENBQUNNLFNBQVMsQ0FBQztZQUN6Q2UsT0FBTyxDQUFDcEIsSUFBSSxDQUFDTyxRQUFRLEdBQUdSLEtBQUssQ0FBQ1EsUUFBUSxDQUFDO1lBQ3ZDYSxPQUFPLENBQUNwQixJQUFJLENBQUNiLEtBQUssR0FBR1ksS0FBSyxDQUFDWixLQUFLLENBQUM7WUFDakNpQyxPQUFPLENBQUNwQixJQUFJLENBQUNTLEtBQUssR0FBR1YsS0FBSyxDQUFDVSxLQUFLLENBQUM7WUFDakNXLE9BQU8sQ0FBQ3BCLElBQUksQ0FBQ0UsT0FBTyxHQUFHSCxLQUFLLENBQUNHLE9BQU8sQ0FBQztZQUVyQ2tCLE9BQU8sQ0FBQ3BCLElBQUksQ0FBQ1csUUFBUSxHQUFHWixLQUFLLENBQUNZLFFBQVEsQ0FBQztZQUN2Q1MsT0FBTyxDQUFDcEIsSUFBSSxDQUFDYSxXQUFXLEdBQUdkLEtBQUssQ0FBQ2MsV0FBVyxDQUFDO1lBQzdDTyxPQUFPLENBQUNwQixJQUFJLENBQUNlLE9BQU8sR0FBR2hCLEtBQUssQ0FBQ2dCLE9BQU8sQ0FBQztZQUNyQ0ssT0FBTyxDQUFDcEIsSUFBSSxDQUFDaUIsT0FBTyxHQUFHbEIsS0FBSyxDQUFDa0IsT0FBTyxDQUFDO1lBQ3JDRyxPQUFPLENBQUNwQixJQUFJLENBQUN6QixXQUFXLEdBQUd3QixLQUFLLENBQUN4QixXQUFXLENBQUM7WUFFN0MsT0FBTzZDLE9BQU8sQ0FBQztRQUNqQixDQUFDO0tBQ0Y7SUFFREEsT0FBTyxFQUFFO1FBQ1BDLFFBQVEsRUFBRSxLQUFLO1FBQ2ZDLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRTtLQUNoQjtJQUVEQyxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxlQUFlO0lBRW5DLDhEQUE4RDtJQUU5REMsTUFBTSxFQUFFO1FBQ05DLE1BQU0sRUFBRSxPQUFPQyxPQUFPLEdBQUs7UUFDekIsa0NBQWtDO1FBQ3BDLENBQUM7UUFDREMsT0FBTyxFQUFFLE9BQU9ELE9BQU8sR0FBSztRQUMxQixtQ0FBbUM7UUFDckMsQ0FBQztRQUNERSxVQUFVLEVBQUUsT0FBT0YsT0FBTyxHQUFLO1FBQzdCLHNDQUFzQztRQUN4QyxDQUFDO1FBQ0RHLFVBQVUsRUFBRSxPQUFPSCxPQUFPLEdBQUs7UUFDN0Isc0NBQXNDO1FBQ3hDLENBQUM7UUFDREksV0FBVyxFQUFFLE9BQU9KLE9BQU8sR0FBSztRQUM5QixzQ0FBc0M7UUFDeEMsQ0FBQztRQUNEVCxPQUFPLEVBQUUsT0FBT1MsT0FBTyxHQUFLO1FBQzFCLGtDQUFrQztRQUNwQyxDQUFDO0tBQ0Y7SUFFRCxnRUFBZ0U7SUFDaEUsZUFBZTtJQUNmSyxLQUFLLEVBQUU7UUFDTE4sTUFBTSxFQUFFLEdBQUc7S0FHWjtDQUNGO0FBRUQsaUVBQWUvRCxnREFBUSxDQUFDZSxXQUFXLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzUwYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTmV4dEF1dGgsIHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG5pbXBvcnQgeyBBUElfQkFTRV9VUkwgfSBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL1ZhcmlhYmxlQ29uZmlnXCI7XHJcblxyXG4vLyBGb25jdGlvbiB3aWxsIGhlbHAgdXMgdG8gcmVmcmVzaCB0b2tlblxyXG5hc3luYyBmdW5jdGlvbiByZWZyZXNoQWNjZXNzVG9rZW4odG9rZW5PYmplY3Q6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBHZXQgYSBuZXcgc2V0IG9mIHRva2VucyB3aXRoIGEgcmVmcmVzaFRva2VuXHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiBgJHtBUElfQkFTRV9VUkx9L2FwaS91c2Vycy9sb2dpbi90b2tlbnMvcmVmcmVzaC9gLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcmVmcmVzaDogdG9rZW5PYmplY3QucmVmcmVzaFRva2VuLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4udG9rZW5PYmplY3QsXHJcbiAgICAgIGFjY2Vzc1Rva2VuOiBkYXRhLmFjY2VzcyxcclxuICAgICAgYWNjZXNzVG9rZW5FeHBpcnk6IGRhdGEuYWNjZXNzX3Rva2VuX2V4cGlyeSxcclxuICAgICAgcmVmcmVzaFRva2VuOiBkYXRhLnJlZnJlc2gsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi50b2tlbk9iamVjdCxcclxuICAgICAgZXJyb3I6IFwiUmVmcmVzaEFjY2Vzc1Rva2VuRXJyb3JcIixcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyBjYWxsYmFja1VybDogYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn1gLFxyXG5cclxuY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcclxuICAvLyBQcm92aWRlcnMgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcclxuICAgICAgaWQ6IFwibG9naW5cIixcclxuICAgICAgbmFtZTogXCJjcmVkZW50aWFsc1wiLFxyXG4gICAgICBjcmVkZW50aWFsczoge30sXHJcbiAgICAgIGF1dGhvcml6ZTogYXN5bmMgKFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiB7IGVtYWlsOiBzdHJpbmc7IHBhc3N3b3JkOiBzdHJpbmcgfSxcclxuICAgICAgICByZXFcclxuICAgICAgKSA9PiB7XHJcbiAgICAgICAgLy8gQWRkIGxvZ2ljIGhlcmUgdG8gbG9vayB1cCB0aGUgdXNlciBmcm9tIHRoZSBjcmVkZW50aWFscyBzdXBwbGllZFxyXG4gICAgICAgIGlmIChjcmVkZW50aWFscyAmJiBjcmVkZW50aWFscy5lbWFpbCAmJiBjcmVkZW50aWFscy5wYXNzd29yZCkge1xyXG4gICAgICAgICAgLy8gQW55IG9iamVjdCByZXR1cm5lZCB3aWxsIGJlIHNhdmVkIGluIGB1c2VyYCBwcm9wZXJ0eSBvZiB0aGUgSldUXHJcblxyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICAgICAgICB1cmw6IGAke0FQSV9CQVNFX1VSTH0vYXBpL2F1dGgvbG9naW4vdG9rZW5zL2AsXHJcbiAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWwpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG5cclxuICAvLyBDYWxsYmFja3MgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBjYWxsYmFja3M6IHtcclxuICAgIC8vYXN5bmMgc2lnbkluKHt1c2VyLCBhY2NvdW50LHByb2ZpbGV9KXtyZXR1cm4gdHJ1ZX1cclxuXHJcbiAgICByZWRpcmVjdDogYXN5bmMgKHsgdXJsLCBiYXNlVXJsIH0pID0+IHtcclxuICAgICAgcmV0dXJuIHVybC5zdGFydHNXaXRoKGJhc2VVcmwpXHJcbiAgICAgICAgPyBQcm9taXNlLnJlc29sdmUodXJsKVxyXG4gICAgICAgIDogUHJvbWlzZS5yZXNvbHZlKGJhc2VVcmwpO1xyXG4gICAgfSxcclxuXHJcbiAgICBqd3Q6IGFzeW5jICh7IHRva2VuLCB1c2VyLCBhY2NvdW50LCBwcm9maWxlLCBpc05ld1VzZXIgfSkgPT4ge1xyXG4gICAgICBpZiAodXNlcikge1xyXG4gICAgICAgIC8vLi4ubG9naWMgdG8gY29uc3RydWN0IGFuZCByZXR1cm4gYSB0b2tlblxyXG4gICAgICAgIHRva2VuLmlkID0gdXNlci5pZDtcclxuICAgICAgICB0b2tlbi51c2VybmFtZSA9IHVzZXIudXNlcm5hbWU7XHJcbiAgICAgICAgdG9rZW4uZmlyc3ROYW1lID0gdXNlci5maXJzdF9uYW1lO1xyXG4gICAgICAgIHRva2VuLmxhc3ROYW1lID0gdXNlci5sYXN0X25hbWU7XHJcbiAgICAgICAgdG9rZW4uZW1haWwgPSB1c2VyLmVtYWlsO1xyXG4gICAgICAgIHRva2VuLnBob25lID0gdXNlci5waG9uZTtcclxuICAgICAgICB0b2tlbi5wcm9maWxlID0gdXNlci5wcm9maWxlX2ltYWdlO1xyXG5cclxuICAgICAgICB0b2tlbi5pc0FjdGl2ZSA9IHVzZXIuaXNfYWN0aXZlO1xyXG4gICAgICAgIHRva2VuLmlzU3VwZXJ1c2VyID0gdXNlci5pc19zdXBlcnVzZXI7XHJcbiAgICAgICAgdG9rZW4uaXNBZG1pbiA9IHVzZXIuaXNfYWRtaW47XHJcbiAgICAgICAgdG9rZW4uaXNTdGFmZiA9IHVzZXIuaXNfc3RhZmY7XHJcblxyXG4gICAgICAgIHRva2VuLmFjY2Vzc1Rva2VuID0gdXNlci5hY2Nlc3M7XHJcbiAgICAgICAgdG9rZW4ucmVmcmVzaFRva2VuID0gdXNlci5yZWZyZXNoO1xyXG4gICAgICAgIHRva2VuLmFjY2Vzc1Rva2VuRXhwaXJ5ID0gdXNlci5hY2Nlc3NfdG9rZW5fbGlmZXRpbWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0b2tlbjtcclxuICAgIH0sXHJcblxyXG4gICAgc2Vzc2lvbjogYXN5bmMgKHsgc2Vzc2lvbiwgdG9rZW4sIHVzZXIgfSkgPT4ge1xyXG4gICAgICAvLyBXZSBjb25zdHJ1Y3QgdmFsdWVzIHdlIHdhbnQgdG8gbWFrZSBhdmFpbGFibGUgaW4gdGhlIGNsaWVudCBzaWRlICh1c2VTZXNzaW9uKVxyXG4gICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5pZDtcclxuICAgICAgc2Vzc2lvbi51c2VyLmZpcnN0TmFtZSA9IHRva2VuLmZpcnN0TmFtZTtcclxuICAgICAgc2Vzc2lvbi51c2VyLmxhc3ROYW1lID0gdG9rZW4ubGFzdE5hbWU7XHJcbiAgICAgIHNlc3Npb24udXNlci5lbWFpbCA9IHRva2VuLmVtYWlsO1xyXG4gICAgICBzZXNzaW9uLnVzZXIucGhvbmUgPSB0b2tlbi5waG9uZTtcclxuICAgICAgc2Vzc2lvbi51c2VyLnByb2ZpbGUgPSB0b2tlbi5wcm9maWxlO1xyXG5cclxuICAgICAgc2Vzc2lvbi51c2VyLmlzQWN0aXZlID0gdG9rZW4uaXNBY3RpdmU7XHJcbiAgICAgIHNlc3Npb24udXNlci5pc1N1cGVydXNlciA9IHRva2VuLmlzU3VwZXJ1c2VyO1xyXG4gICAgICBzZXNzaW9uLnVzZXIuaXNBZG1pbiA9IHRva2VuLmlzQWRtaW47XHJcbiAgICAgIHNlc3Npb24udXNlci5pc1N0YWZmID0gdG9rZW4uaXNTdGFmZjtcclxuICAgICAgc2Vzc2lvbi51c2VyLmFjY2Vzc1Rva2VuID0gdG9rZW4uYWNjZXNzVG9rZW47XHJcblxyXG4gICAgICByZXR1cm4gc2Vzc2lvbjtcclxuICAgIH0sXHJcbiAgfSxcclxuICBcclxuICBzZXNzaW9uOiB7XHJcbiAgICBzdHJhdGVneTogXCJqd3RcIixcclxuICAgIG1heEFnZTogNjAgKiAyNSxcclxuICB9LFxyXG5cclxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAgIEVWRU5UUyAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBzaWduSW46IGFzeW5jIChtZXNzYWdlKSA9PiB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwic2lnbkluXCIsIG1lc3NhZ2UpO1xyXG4gICAgfSxcclxuICAgIHNpZ25PdXQ6IGFzeW5jIChtZXNzYWdlKSA9PiB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwic2lnbk91dFwiLCBtZXNzYWdlKTtcclxuICAgIH0sXHJcbiAgICBjcmVhdGVVc2VyOiBhc3luYyAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImNyZWF0ZVVzZXJcIiwgbWVzc2FnZSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlVXNlcjogYXN5bmMgKG1lc3NhZ2UpID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJ1cGRhdGVVc2VyXCIsIG1lc3NhZ2UpO1xyXG4gICAgfSxcclxuICAgIGxpbmtBY2NvdW50OiBhc3luYyAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwibGlua0FjY291bnRcIiwgbWVzc2FnZSk7XHJcbiAgICB9LFxyXG4gICAgc2Vzc2lvbjogYXN5bmMgKG1lc3NhZ2UpID0+IHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcInNlc3Npb25cIiwgbWVzc2FnZSk7XHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIC8vIFBhZ2VzIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAvLyBkZWJ1ZzogdHJ1ZSxcclxuICBwYWdlczoge1xyXG4gICAgc2lnbkluOiBcIi9cIixcclxuICAgIC8vIHNpZ25PdXQ6IFwiL2F1dGgvbG9nb3V0XCIsXHJcbiAgICAvLyBlcnJvcjogXCIvYXV0aC9lcnJvclwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsIkFQSV9CQVNFX1VSTCIsInJlZnJlc2hBY2Nlc3NUb2tlbiIsInRva2VuT2JqZWN0IiwiZGF0YSIsIm1ldGhvZCIsInVybCIsInJlZnJlc2giLCJyZWZyZXNoVG9rZW4iLCJhY2Nlc3NUb2tlbiIsImFjY2VzcyIsImFjY2Vzc1Rva2VuRXhwaXJ5IiwiYWNjZXNzX3Rva2VuX2V4cGlyeSIsImVycm9yIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJpZCIsIm5hbWUiLCJjcmVkZW50aWFscyIsImF1dGhvcml6ZSIsInJlcSIsImVtYWlsIiwicGFzc3dvcmQiLCJFcnJvciIsInJlc3BvbnNlIiwiZGV0YWlsIiwiY2FsbGJhY2tzIiwicmVkaXJlY3QiLCJiYXNlVXJsIiwic3RhcnRzV2l0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwiand0IiwidG9rZW4iLCJ1c2VyIiwiYWNjb3VudCIsInByb2ZpbGUiLCJpc05ld1VzZXIiLCJ1c2VybmFtZSIsImZpcnN0TmFtZSIsImZpcnN0X25hbWUiLCJsYXN0TmFtZSIsImxhc3RfbmFtZSIsInBob25lIiwicHJvZmlsZV9pbWFnZSIsImlzQWN0aXZlIiwiaXNfYWN0aXZlIiwiaXNTdXBlcnVzZXIiLCJpc19zdXBlcnVzZXIiLCJpc0FkbWluIiwiaXNfYWRtaW4iLCJpc1N0YWZmIiwiaXNfc3RhZmYiLCJhY2Nlc3NfdG9rZW5fbGlmZXRpbWUiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJtYXhBZ2UiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwiZXZlbnRzIiwic2lnbkluIiwibWVzc2FnZSIsInNpZ25PdXQiLCJjcmVhdGVVc2VyIiwidXBkYXRlVXNlciIsImxpbmtBY2NvdW50IiwicGFnZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();