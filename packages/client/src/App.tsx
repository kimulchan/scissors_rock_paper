import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import StyleProvider from "./styles/StyleProvider";
import styled from "styled-components";
import MainRouter from "./routes";

function App() {
  const [count, setCount] = useState("");
  const socket = io("http://localhost:8000", {
    path: "/",
  });

  useEffect(() => {
    socket.emit("create-room", (id: string) => setCount(id));
  }, []);

  return (
    <StyleProvider>
      <MainRouter />
    </StyleProvider>
  );
}

const test = styled.div`
  display: flex;
`;

export default App;
