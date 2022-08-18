import React, { useState } from "react";
import socket from "../socket";
import axios from "axios";

function JoinBlock() {
  const [roomID, setRoomID] = useState("");
  const [userName, setUserName] = useState("");

  const onEnter = () => {
    if (!roomID || !userName) {
      alert("Pleas, enter your ID or name");
    }
    axios.post("http://localhost:5000/rooms", {
      roomID,
      userName,
    });
  };
  return (
    <div className="join-block">
      <input
        type="text"
        placeholder="Room ID"
        value={roomID}
        onChange={(e) => setRoomID(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      ></input>
      <button className="btn" onClick={onEnter}>
        ENTER
      </button>
    </div>
  );
}
export default JoinBlock;
