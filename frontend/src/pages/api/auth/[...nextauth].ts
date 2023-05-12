import axios from "axios";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { API_BASE_URL } from "../../../config/VariableConfig";

// Fonction will help us to refresh token
async function refreshAccessToken(tokenObject: any) {
  try {
    // Get a new set of tokens with a refreshToken
    const { data } = await axios({
      method: "post",
      url: `${API_BASE_URL}/api/users/login/tokens/refresh/`,
      data: {
        refresh: tokenObject.refreshToken,
      },
    });

    return {
      ...tokenObject,
      accessToken: data.access,
      accessTokenExpiry: data.access_token_expiry,
      refreshToken: data.refresh,
    };
  } catch (error) {
    return {
      ...tokenObject,
      error: "RefreshAccessTokenError",
    };
  }
}

// callbackUrl: `${window.location.origin}`,

const authOptions: NextAuthOptions = {
  // Providers  /////////////////////////////////////////////////////
  providers: [
    CredentialsProvider({
      id: "login",
      name: "credentials",
      credentials: {},
      authorize: async (
        credentials: { email: string; password: string },
        req
      ) => {
        // Add logic here to look up the user from the credentials supplied
        if (credentials && credentials.email && credentials.password) {
          // Any object returned will be saved in `user` property of the JWT

          try {
            const { data } = await axios({
              method: "post",
              url: `${API_BASE_URL}/api/auth/login/tokens/`,
              data: {
                email: credentials.email,
                password: credentials.password,
              },
            });

            return data;
          } catch (error) {
            throw new Error(error.response.data.detail);
          }
        } else {
          return null;
        }
      },
    }),
  ],

  // Callbacks  /////////////////////////////////////////////////
  callbacks: {
    //async signIn({user, account,profile}){return true}

    redirect: async ({ url, baseUrl }) => {
      return url.startsWith(baseUrl)
        ? Promise.resolve(url)
        : Promise.resolve(baseUrl);
    },

    jwt: async ({ token, user, account, profile, isNewUser }) => {
      if (user) {
        //...logic to construct and return a token
        token.id = user.id;
        token.username = user.username;
        token.firstName = user.first_name;
        token.lastName = user.last_name;
        token.email = user.email;
        token.phone = user.phone;
        token.profile = user.profile_image;

        token.isActive = user.is_active;
        token.isSuperuser = user.is_superuser;
        token.isAdmin = user.is_admin;
        token.isStaff = user.is_staff;

        token.accessToken = user.access;
        token.refreshToken = user.refresh;
        token.accessTokenExpiry = user.access_token_lifetime;
      }

      return token;
    },

    session: async ({ session, token, user }) => {
      // We construct values we want to make available in the client side (useSession)
      session.user.id = token.id;
      session.user.firstName = token.firstName;
      session.user.lastName = token.lastName;
      session.user.email = token.email;
      session.user.phone = token.phone;
      session.user.profile = token.profile;

      session.user.isActive = token.isActive;
      session.user.isSuperuser = token.isSuperuser;
      session.user.isAdmin = token.isAdmin;
      session.user.isStaff = token.isStaff;
      session.user.accessToken = token.accessToken;

      return session;
    },
  },
  
  session: {
    strategy: "jwt",
    maxAge: 60 * 25,
  },

  secret: process.env.NEXTAUTH_SECRET,

  /////////////////////////   EVENTS    ////////////////////////

  events: {
    signIn: async (message) => {
      // console.log("signIn", message);
    },
    signOut: async (message) => {
      // console.log("signOut", message);
    },
    createUser: async (message) => {
      // console.log("createUser", message);
    },
    updateUser: async (message) => {
      // console.log("updateUser", message);
    },
    linkAccount: async (message) => {
      //console.log("linkAccount", message);
    },
    session: async (message) => {
      //console.log("session", message);
    },
  },

  // Pages ///////////////////////////////////////////////////////
  // debug: true,
  pages: {
    signIn: "/",
    // signOut: "/auth/logout",
    // error: "/auth/error",
  },
};

export default NextAuth(authOptions);
