import { db } from "./firebase";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

export const fetchOrCreateUserData = async (id) => {
  try {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // Document already exists, fetch data
      return docSnap.data();
    } else {
      // Document doesn't exist, create new document with default data
      console.log(
        `Document with id ${id} doesn't exist, creating a new one...`
      );
      const newData = {
        caught: [],
      };
      await setDoc(docRef, newData);
      console.log("New document created with default data:", newData);
    }
  } catch (err) {
    console.error(err);
  }
};

export const addCollectedPokemon = async (id, newData) => {
  try {
    const docRef = doc(db, "users", id);
    await updateDoc(docRef, {
      caught: arrayUnion(newData),
    });
  } catch (err) {
    console.error(err);
  }
};

export const removeCollectedPokemon = async (id, newData) => {
  try {
    const docRef = doc(db, "users", id);
    await updateDoc(docRef, {
      caught: arrayRemove(newData),
    });
  } catch (err) {
    console.error(err);
  }
};
