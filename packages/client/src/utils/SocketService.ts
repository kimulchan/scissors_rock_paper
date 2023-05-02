import { Socket, io } from "socket.io-client";
import { SRPEventMap, SRPType } from "@packages/types";
class SocketService {
  public socket: Socket<SRPEventMap> | null = null;

  public connect(url: string): Promise<Socket<SRPEventMap>> {
    return new Promise((rs, rj) => {
      this.socket = io(url, {
        path: "/",
      });

      if (!this.socket) return rj();

      this.socket.on("connect", () => {
        rs(this.socket as Socket);
      });

      this.socket.on("connect_error", (err) => {
        console.log("Connection error: ", err);
        rj(err);
      });
    });
  }

  public createRoom(done: (randomId: string) => void) {
    if (this.socket) {
      this.socket.emit("create", done);
    }
  }

  public joinRoom(roomId: string, done: () => void) {
    if (this.socket) {
      this.socket.emit("join", roomId, done);
    }
  }

  public onJoinRoom(callBack: () => void) {
    if (this.socket) {
      this.socket.on("on_join", callBack);
    }
  }

  public playSRPGame(
    roomId: string,
    SRPValue: SRPType,
    done: (value: SRPType) => void
  ) {
    if (this.socket) {
      this.socket.emit("play", roomId, SRPValue, done);
    }
  }

  public onPlaySRPGame(callBack: (value: SRPType) => void) {
    if (this.socket) {
      this.socket.on("on_play", callBack);
    }
  }
}
export default new SocketService();
