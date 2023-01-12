import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const client = io("http://localhost:80");

function App() {
  const [isConnected, setIsConnected] = useState(client.connected);
  const [lastPong, setLastPong] = useState(null);

  useEffect(() => {
    client.on('connect', () => {
      setIsConnected(true);
    });
 
    client.on('disconnect', () => {
      setIsConnected(false);
    });

    client.on('pong_public', () => {
        setLastPong(new Date().toISOString());
        console.log("public")
    });

    client.on('pong_private', () => {
        setLastPong(new Date().toISOString());
        console.log("private")
    });

    return () => {
      client.off('connect');
      client.off('disconnect');
      client.off('pong_public');
      client.off('pong_private');
    };
  }, []);

  const sendPing = () => {
    client.emit('ping', (res) => {
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