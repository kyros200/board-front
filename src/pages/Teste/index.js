import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

function Teste() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [room, setRoom] = useState("");
  const [client, setClient] = useState(io(`http://localhost:80`, {
    autoConnect: false,
    query: {
      user,
      pass,
      room,
    }
  }))
  const [isConnected, setIsConnected] = useState(client.connected);
  const [clientId, setClientId] = useState();
  const [userServerCount, setUserServerCount] = useState(0);
  const [userRoomCount, setUserRoomCount] = useState(0);

  const [message, setMessage] = useState("");
  const [receivedMessages, setReceivedMessages] = useState([]);

  useEffect(() => {
    setClient(io(`http://localhost:80`, {
      autoConnect: false,
      query: {
        user,
        pass,
        room,
      }
    }))
  }, [user, pass, room]);

  useEffect(() => {
    client.on('connect', () => {
      setIsConnected(true);
      setClientId(client.id);
      client.emit("joinRoom", (res) => {
        console.log(res)
      })
    });

    client.on("connect_error", (err) => {
      console.log(err.message); // not authorized
    });
 
    client.on('disconnect', () => {
      setIsConnected(false);
    });
    
    client.on('getServerUsersCount', (count) => {
      setUserServerCount(count);
    });

    client.on('getRoomUsersCount', (count) => {
      setUserRoomCount(count);
    });

    client.on('joinRoom', (res) => {
      console.log(res)
    })

    client.on('receiveMessageRoom', (res) => {
      setReceivedMessages([res, ...receivedMessages])
    })

    return () => {
      client.off('connect');
      client.off('connect_error');
      client.off('disconnect');
      client.off('getServerUsersCount');
      client.off('getRoomUsersCount');
      client.off('receiveMessageRoom');
      client.off('joinRoom');
    };
  }, [client, receivedMessages]);

  const tryConnect = () => {
    console.log("trying to connect...")
    client.connect();
  }

  const tryDisconnect = () => {
    client.disconnect();
    setClientId()
  }

  const sendMessage = () => {
    client.emit("sendMessageRoom", message)
  }

  return (
    <div>
      <p>Are you Connected? { '' + isConnected }</p>
      <p>Your ID: { clientId || '-' }</p>
      <p>Users Connected to Server: { isConnected ? userServerCount : "Not connected to Server" }</p>
      <p>Users Connected to Room: { isConnected ? userRoomCount : "Not connected to Server" }</p>
      <input value={user} onChange={(e) => setUser(e.target.value)} />
      <input value={pass} onChange={(e) => setPass(e.target.value)} />
      <input value={room} onChange={(e) => setRoom(e.target.value)} />
      <button onClick={ tryConnect }>Connect</button>
      <button onClick={ tryDisconnect }>Disconnect</button>
      <br/><br/>
      {isConnected ?
      <>
        <h2>Chat</h2>
        <input value={message} onChange={(e) => setMessage(e.target.value)} />
        <button onClick={ sendMessage }>Send</button>
        {receivedMessages.map((message) => {
          return (
            <>
            <p>{message}</p>
            </>
          )
        })}
      </>
      :<></>
      }
    </div>
  );
}

export default Teste;