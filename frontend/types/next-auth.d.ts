import NextAuth, {User, Account, CallbacksOptions, DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User {
    id?: string;
    username?: string;
    first_name?:string;
    last_name?:string;
    email?: string;
    phone?: string;
    social_number?: string;
    driving_license?: string;
    citizen_status?: string;
    marital_status?: string;
    profile_image?: string;
    street_number?: string;
    street_name?: string;
    postal_code?: string;
    town?: string;
    province?: string;
    country?: string;
    created_at?: string;
    is_active?:boolean;
    is_superuser?: boolean;
    is_admin?: boolean;
    is_worker?: boolean;
    is_job_owner?: boolean;
    is_staff?: boolean;
    access?: string;
    refresh?: string;
    access_token_lifetime?: number;
  }
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

  interface Session {
    /**
     * Default value of session.user are: name, email, image
     */
    user: {
      /** The user's postal address. */
      id: string;
      username?: string;
      firstName?: string;
      lastName?: string;
      email?: string;
      phone?: string;
      socialNumber?: string;
      drivingLicense?: string;
      citizenStatus?: string;
      maritalStatus?: string;
      profile?: string;
      streetNumber?: string;
      streetName?: string;
      postalCode?: string;
      town?: string;
      province?: string;
      country?: string;
      createdAt?: string;
      isActive?: boolean;
      isSuperuser?: boolean;
      isStaff?: boolean;
      isAdmin?: boolean;
      isWorker?: boolean;
      isJobOwner?: boolean;
      accessToken?: string;
      refreshToken?: string;
      accessTokenExpiry?: number;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** Default values of token are name, email, picture, iat, exp */
    idToken?: string;
    id?: string;
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    socialNumber?: string;
    drivingLicense?: string;
    citizenStatus?: string;
    maritalStatus?: string;
    profile?: string;
    streetNumber?: string;
    streetName?: string;
    postalCode?: string;
    town?: string;
    province?: string;
    country?: string;
    createdAt?: string;
    isActive?: boolean;
    isSuperuser?: boolean;
    isStaff?: boolean;
    isAdmin?: boolean;
    isWorker?: boolean;
    isJobOwner?: boolean;
    accessToken?: string;
    refreshToken?: string;
    accessTokenExpiry?: number;
  }
}
