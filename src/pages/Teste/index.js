import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io("http://localhost:80");

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('pong_public', () => {
        setLastPong(new Date().toISOString());
        alert("public")
    });

    socket.on('pong_private', () => {
        setLastPong(new Date().toISOString());
        alert("private")
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
    };
  }, []);

  const sendPing = () => {
    socket.emit('ping', (res) => {
        console.log(res)
    });
  }

  return (
    <div>
      <p>Connected: { '' + isConnected }</p>
      <p>Last pong: { lastPong || '-' }</p>
      <button onClick={ sendPing }>Send ping</button>
    </div>
  );
}

export default App;