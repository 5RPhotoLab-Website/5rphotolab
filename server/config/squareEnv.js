// server/config/squareEnv.js
import dotenv from "dotenv";
dotenv.config();

const isSandbox = process.env.SQUARE_ENV === "sandbox";

export const squareEnv = {
  environment: isSandbox ? "sandbox" : "production",
  baseUrl: isSandbox
    ? "https://connect.squareupsandbox.com/v2"
    : "https://connect.squareup.com/v2",
  accessToken: isSandbox
    ? process.env.SQUARE_SANDBOX_ACCESS_TOKEN
    : process.env.SQUARE_PROD_ACCESS_TOKEN,
  locationId: isSandbox
    ? process.env.SQUARE_SANDBOX_LOCATION_ID
    : process.env.SQUARE_PROD_LOCATION_ID,
};
