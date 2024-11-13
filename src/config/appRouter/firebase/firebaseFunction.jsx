import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { createUserWithEmailAndPassword } from "firebase/auth"
import app from "./firebaseConfig"
import { getFirestore, doc, getDocs, deleteDoc, updateDoc } from "firebase/firestore"
import { addDoc, collection } from "firebase/firestore";


const auth = getAuth(app)
const db = getFirestore(app)


export const signUn = async (obj) => {
  return await createUserWithEmailAndPassword(auth, obj.email, obj.password)


}

export const login = async (obj) => {
  return await signInWithEmailAndPassword(auth, obj.email, obj.password)
}


export let userSignOut = () => {
  signOut(auth)
}



export let addPost = async (folderName, obj) => {
  return await addDoc(collection(db, folderName), obj);
}

export let getData = async (folderName) => {

  const querySnapshot = await getDocs(collection(db, folderName));
  let posts = [];
  querySnapshot.forEach((doc) => {
    posts.push({ id: doc.id, ...doc.data() });
  });
  return (posts)

}

export let deleteData = async (folderName, id) => {

  return await deleteDoc(doc(db, folderName, id));
}

export let editData = async (folderName, id, obj) => {
console.log(obj);

  return await updateDoc(doc(db, folderName, id), obj);
}