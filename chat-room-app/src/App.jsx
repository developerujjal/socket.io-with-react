import { useEffect, useState } from "react";
import { io } from "socket.io-client";

function App() {

  const [showMess, setShowMess] = useState('')


  useEffect(() => {
    const socket = io('http://localhost:5000')
    socket.on('message', (data) => {
      setShowMess(data);
    })
  }, []);



  return (
    <>
      <h2>hello</h2>
      <p>{showMess && showMess}</p>
    </>
  );
}

export default App;
