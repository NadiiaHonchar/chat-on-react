import React, { useState } from "react";
import axios from "axios";

function JoinBlock({ onLogin }) {
  const [roomID, setRoomID] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoading, setLoading] = useState(false);

  const onEnter = async () => {
    if (!roomID || !userName) {
      alert("Pleas, enter your ID or name");
    }
    const obj = {
      roomID,
      userName,
    }
    setLoading(true);
    await axios.post("http://localhost:5000/rooms", obj);
    onLogin(obj);
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
      <button
        disabled={isLoading}
        className="btn btn-success"
        onClick={onEnter}
      >
        {isLoading ? "sign in..." : "sign in"}
      </button>
    </div>
  );
}
export default JoinBlock;
