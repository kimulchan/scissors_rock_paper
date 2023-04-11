require("dotenv").config();

export const env = {
  WS_PORT: +process.env.WS_PORT!,
  REDIS_URL: process.env.REDIS_URL,
  SERVER_PORT: +process.env.SERVER_PORT!,
};
