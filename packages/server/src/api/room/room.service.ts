import Socket from "socket.io";

const joinRoom = (io: Socket.Server, id: string) => {
  const rooms = io.sockets.adapter.rooms.get(id);
};
