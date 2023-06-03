import { chatDb } from "./firebase";
import { ref, set, get, child, onValue } from "firebase/database";

export const sendMessage = (username, imageUrl, message) => {
  const timestamp = Date.now();

  set(ref(chatDb, "messages/" + timestamp), {
    username,
    imageUrl,
    message,
  });
};

export const retrieveMessage = (setMessages) => {
  const messageRef = ref(chatDb, "messages/");
  let messages;
  onValue(messageRef, (snapShot) => {
    messages = snapShot.val();
    setMessages(messages);
  });
};
