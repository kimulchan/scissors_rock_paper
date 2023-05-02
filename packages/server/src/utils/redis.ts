import { createAdapter } from "@socket.io/redis-adapter";
import { createClient } from "redis";
import SocketIO from "socket.io";
import { env } from "./env";
import { SRPEventMap } from "../../../types";

export const redisClient = createClient({
  url: env.REDIS_URL,
});

export const redisAdapter = (io: SocketIO.Server<SRPEventMap>) => {
  const subClient = redisClient.duplicate();
  Promise.all([redisClient.connect(), subClient.connect()]).then(() => {
    io.adapter(createAdapter(redisClient, subClient));
    io.listen(env.WS_PORT);
  });
  return io;
};
