import { useEffect } from "react";
import { io } from "socket.io-client";

function App() {
  useEffect(() => {
    const socket = io('http://localhost:3000')
  }, []);

  return (
    <>
      <h2>hello</h2>
    </>
  );
}

export default App;
