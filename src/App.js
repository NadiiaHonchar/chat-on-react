import React from 'react';
import './App.css';
// import io from 'socket.io-client';
import JoinBlock from './components/JoinBlock';

// const socket =io('http://localhost:5000/', { transports: ['websocket'] });
// const socket =io();

function App() {
  // const connectSocket = ()=>{
  //   io('http://localhost:5000/', { transports: ['websocket'] });
  // }
  return (
    <div className="wrapper">
      <JoinBlock></JoinBlock>
    </div>
  );
}

export default App;
