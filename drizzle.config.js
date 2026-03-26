require("dotenv").config({ path: ".env.local" });
const { defineConfig } = require("drizzle-kit");

module.exports = defineConfig({
  schema: "./lib/schema.js",
  out: "./drizzle",
  dialect: "turso",
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
});