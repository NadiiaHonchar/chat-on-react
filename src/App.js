import React, { useEffect, useReducer } from "react";
import "./App.css";
// import io from 'socket.io-client';
import JoinBlock from "./components/JoinBlock";
import Chat from "./components/Chat";
import axios from "axios";
import reducer from "./reducer";
import socket from "./socket";

// const socket =io('http://localhost:5000/', { transports: ['websocket'] });
// const socket =io();

function App() {
  const [state, dispatch] = useReducer(reducer, {
    joined: false,
    roomID: null,
    userName: null,
    users: [],
    messages: [],
  });

  const onLogin = async (obj) => {
    dispatch({
      type: "JOINED",
      payload: obj,
    });
    socket.emit("ROOM:JOIN", obj);
    const { data } = await axios.get(`http://localhost:5000/rooms/${obj.roomID}`);
    setUsers(data.users)
  };

  const setUsers = (users) => {
    dispatch({
      type: "SET_USERS",
      payload: users,
    });
  };

  useEffect(() => {
    // socket.on("ROOM:JOINED", setUsers);
    socket.on("ROOM:SET_USERS", setUsers);
  }, []);
  // const connectSocket = ()=>{
  //   io('http://localhost:5000/', { transports: ['websocket'] });
  // }
  return (
    <div className="wrapper">
      {!state.joined ? (
        <JoinBlock onLogin={onLogin}></JoinBlock>
      ) : (
        <Chat {...state}></Chat>
      )}
    </div>
  );
}

export default App;
