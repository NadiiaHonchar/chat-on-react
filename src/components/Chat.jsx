import React, { useState } from "react";

function Chat({users, messages}) {
  const [messageValue, setMessageValue] = useState("");

  return (
    <div className="chat">
      <div className="chat-users">
        <b>Users ({users.length})</b>
        <ul>
          {users.map((name)=>(<li key={name}>{name}</li>))}
        </ul>
      </div>
      <div className="chat-messages">
        <div className="messages">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, ex.
            Ab reiciendis dolorum neque quo quaerat corporis voluptatum debitis?
            In minus culpa quia! Quas accusamus et, ut dolorem modi dolor?
          </p>
          <div>
            <span>Test user</span>
          </div>
        </div>
        <div className="messages">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, ex.
            Ab reiciendis dolorum neque quo quaerat corporis voluptatum debitis?
            In minus culpa quia! Quas accusamus et, ut dolorem modi dolor?
          </p>
          <div>
            <span>Test user</span>
          </div>
        </div>
      </div>
      <form>
        <textarea
          value={messageValue}
          onChange={(e) => setMessageValue(e.target.value)}
          className="form-control"
          rows='3'
        ></textarea>
        <button type="button" className="btn btn-primery"> Send</button>
      </form>
    </div>
  );
}

export default Chat;
