import React, { useRef, useContext, useEffect, useState } from "react";
import { UserContext } from "../../utils/UserProvider";
import { sendMessage, retrieveMessage } from "../../utils/RealTimeDatabase";
import MessageList from "./MessageList";

const Chat = () => {
  const user = useContext(UserContext);
  const username = user.displayName;
  const imageUrl = user.photoURL;
  const [messages, setMessages] = useState({});

  const messageRef = useRef("");

  const handleSendMessage = (event) => {
    event.preventDefault();
    const message = messageRef.current.value;
    console.log(message);
    sendMessage(username, imageUrl, message);
  };

  useEffect(() => {
    retrieveMessage(setMessages);
  }, []);

  return (
    <>
      <div>
        <h1>PokeChat</h1>
        <MessageList messages={messages} />
      </div>

      <form>
        <input type="text" ref={messageRef} />
        <button
          onClick={(event) => {
            handleSendMessage(event);
          }}
        >
          Send
        </button>
      </form>
      <br />
    </>
  );
};

export default Chat;
