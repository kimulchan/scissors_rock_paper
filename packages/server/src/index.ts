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

const io = redisAdapter(
  new socketIO.Server(httpServer, {
    cors: { origin: "*", methods: ["GET", "POST"] },
    path: "/",
  })
);

io.on("connection", (socket) => {
  socket.on("create", (done) => {
    const newRoomId = generateId(6);
    socket.join(newRoomId);
    console.log(done);
    done(newRoomId);
  });

  socket.on("join", (roomId, done) => {
    socket.join(roomId);
    done();
    socket.in(roomId).emit("on_join");
  });

  socket.on("play", (roomId, SRPValue, done) => {
    done(SRPValue);
    socket.in(roomId).emit("on_play", SRPValue);
  });

  socket.on("leave-room");

  socket.on("disconnect", () => {});
});

httpServer.listen(env.SERVER_PORT, () => {
  console.log(`${env.SERVER_PORT} start`);
});
