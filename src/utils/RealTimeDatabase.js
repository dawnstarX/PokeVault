import { chatDb } from "./firebase";
import { ref, set } from "firebase/database";

export const sendMessage = (username, imageUrl, message) => {
  const timestamp = Date.now();
  console.log(timestamp);

  set(ref(chatDb, "messages/" + timestamp), {
    username,
    imageUrl,
    message,
  });
};
