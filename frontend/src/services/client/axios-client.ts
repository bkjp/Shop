import axios from "axios";
import cookie from "cookie";

// Pour travailler en production, enlever tout simplement _prod dans 2 et mettez le
// dans 1 et vice versa. Cela signifie que l'instance qui est utilisé dans le
// codebase c'est "axioInstance". Donc pour désactiver l'instance que vous ne
// voulez pas utiliser entre 1 et 2 ajouter tout simplement "_off"

// 1. Creation of axios instance
export const axiosInstance_off = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 2. Production with nginx
export const axiosInstance_off_nginx = axios.create({
  baseURL: "https://administration-lea.herokuapp.com/api",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 2. Production for heroku
export const axiosInstance_off_heroku = axios.create({
  baseURL: "https://administration-lea.herokuapp.com/api",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

//////////////////////////////////////////////////////////////////////////////////////

//const axiosInstance = axios.create({});

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (err) => {
//     const originalConfig = err.config;

//     // We check the status code of the error response
//     if (err.response.status === 401 && !originalConfig._retry) {
//       // We retrieve the the refresh token from cookies and delete the cookies after retrieving
//       //const cookies = cookie.parse(req.headers.cookie ?? "");
//      // const refresh = cookies.refresh ?? false;

//       // We decrypt our refreshToken

//       // We delete the previous cookies
//       // if (axiosInstance.defaults.headers.setCookie) {
//       //   delete axiosInstance.defaults.headers.setCookie;
//       // }
//       try {
//         // We make a get request to Next.js Api with refresh as data to get new access and refresh tokens
//         const { data } = await axios({
//           method: "get",
//           url: "/api/account/refresh",
//           //data: refresh,
//         });

//         // We set up new new access token in the Authorization headers
//         const bearer = `Bearer ${data.refresh}`;
//         axiosInstance.defaults.headers.common["Authorization"] = bearer;

//         // We store new refresh token into cookies
//         res.setHeader("Set-Cookie", [
//           cookie.serialize("refresh", data.refresh, {
//             httpOnly: true,
//             secure: process.env.NODE_ENV !== "development",
//             maxAge: 60 * 60 * 24,
//             sameSite: "strict",
//             path: "/api/",
//           }),
//         ]);

//         // We retry the request with the new setup
//         return Promise.resolve();
//       } catch (error) {
//         // We redirect to the homepage
//         window.location.replace("/");
//       }
//     }

//     return Promise.reject(err);
//   }
// );
