import React, { useReducer } from "react";
import "./App.css";
// import io from 'socket.io-client';
import JoinBlock from "./components/JoinBlock";
import reducer from "./reducer";
import socket from "./socket";

// const socket =io('http://localhost:5000/', { transports: ['websocket'] });
// const socket =io();

function App() {
  const [state, dispatch] = useReducer(reducer, {
    joined: false,
    roomID: null,
    userName: null,
  });

  const onLogin = (obj) => {
    dispatch({
      type: "JOINED",
      payload: obj,
    });
    socket.emit("ROOM:JOIN", obj);
  };

  console.log(state);
  // const connectSocket = ()=>{
  //   io('http://localhost:5000/', { transports: ['websocket'] });
  // }
  return (
    <div className="wrapper">
      {!state.joined && <JoinBlock onLogin={onLogin}></JoinBlock>}
    </div>
  );
}

export default App;
