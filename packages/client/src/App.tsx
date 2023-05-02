import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import StyleProvider from "./styles/StyleProvider";
import styled from "styled-components";
import MainRouter from "./routes";
import TimerContainer from "./components/common/timer/TimerContainer";
import SocketService from "./utils/SocketService";
function App() {
  const [count, setCount] = useState("");
  const connectSocket = async () => {
    SocketService.connect("http://localhost:8000")
      .then(() => console.log("socketSuccess"))
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  useEffect(() => {
    connectSocket();
  }, []);

  return (
    <StyleProvider>
      <TimerContainer>
        <MainRouter />
      </TimerContainer>
    </StyleProvider>
  );
}

export default App;
