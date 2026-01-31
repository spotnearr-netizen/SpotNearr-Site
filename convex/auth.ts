import { createClient, type GenericCtx } from "@convex-dev/better-auth";
import { convex } from "@convex-dev/better-auth/plugins";
import { betterAuth } from "better-auth/minimal";
import { components } from "./_generated/api";
import { DataModel } from "./_generated/dataModel";
import { query } from "./_generated/server";
import authConfig from "./auth.config";

// Conditionally import expo plugin only if available
let expo: any = null;
try {
  expo = require("@better-auth/expo").expo;
} catch (error) {
  // Expo plugin not available (running in Next.js context)
  expo = null;
}

// The component client has methods needed for integrating Convex with Better Auth,
// as well as helper methods for general use.
export const authComponent = createClient<DataModel>(components.betterAuth);

export const createAuth = (ctx: GenericCtx<DataModel>) => {
  // Determine if we're in Expo or Next.js context
  const isExpo = !!process.env.EXPO_PUBLIC_CONVEX_SITE_URL;

  // Build plugins array conditionally
  const plugins = [convex({ authConfig })];
  if (isExpo && expo) {
    plugins.unshift(expo());
  }

  return betterAuth({
    trustedOrigins: [
      "spotnearr://",
      "exp://595s90w-shrey2711-8081.exp.direct",
      "exp://qf7vdl4-anonymous-8081.exp.direct",
      "https://spotnearr.in",
      "exp+spotnearr://expo-development-client/?url=https%3A%2F%2F595s90w-shrey2711-8081.exp.direct",
      "http://localhost:3000",
      "http://localhost:3001",
    ],
    database: authComponent.adapter(ctx),
    emailAndPassword: {
      enabled: true,
      requireEmailVerification: false,
    },
    // Use EXPO_PUBLIC_CONVEX_SITE_URL for Expo, SITE_URL for Next.js
    baseURL: process.env.EXPO_PUBLIC_CONVEX_SITE_URL || process.env.SITE_URL,
    socialProviders: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      },
    },
    plugins,
  });
};

// Example function for getting the current user
// Feel free to edit, omit, etc.
export const getCurrentUser = query({
  args: {},
  handler: async (ctx) => {
    try {
      return await authComponent.getAuthUser(ctx);
    } catch (error) {
      // Return null if user is not authenticated
      return null;
    }
  },
});


