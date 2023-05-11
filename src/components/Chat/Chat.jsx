import React, { useRef, useContext } from "react";
import { UserContext } from "../../utils/UserProvider";
import { sendMessage } from "../../utils/RealTimeDatabase";

const Chat = () => {
  const user = useContext(UserContext);
  const username = user.displayName;
  const imageUrl = user.photoURL;

  const messageRef = useRef("");

  const handleSendMessage = (event) => {
    event.preventdefault();
    const message = messageRef.current.value;
    console.log(message);
    sendMessage(username, imageUrl, message);
  };

  return (
    <form>
      <input type="text" ref={messageRef} />
      <button
        type="submit"
        onClick={(event) => {
          handleSendMessage(event);
        }}
      >
        Send
      </button>
    </form>
  );
};

export default Chat;
