import express, { Express, Request, Response } from "express";
import http from "http";
import socketIO from "socket.io";
import { createAdapter } from "@socket.io/redis-adapter";
import { createClient } from "redis";
import { redisClient, redisAdapter } from "./utils/redis";
import { generateId } from "./utils/func/generateId";
import { env } from "./utils/env";

const app: Express = express();
const httpServer = http.createServer(app);
app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

type CallbackType = {
  status: "error" | "success";
};

const io = redisAdapter(
  new socketIO.Server(httpServer, {
    cors: { origin: "*", methods: ["GET", "POST"] },
    path: "/",
  })
);

io.on("connection", (socket) => {
  socket.on("join-room", async (roomId: string, cb: () => void) => {
    socket.join(roomId);
    const roomMembers = await redisClient.get(roomId);
    if (!!roomMembers) {
      const roomMemberToNum = parseInt(roomMembers);
      if (roomMemberToNum >= 2) cb({ status: "error" });
    }
  });

  socket.on("create-room", (cb: (id: string) => void) => {
    const newRoomId = generateId(6);
    socket.join(newRoomId);
    redisClient.set(newRoomId, "1");
    if (typeof cb !== "function") return;
    cb(newRoomId);
  });
});

httpServer.listen(env.SERVER_PORT, () => {
  console.log(`${env.SERVER_PORT} start`);
});
