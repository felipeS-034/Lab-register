import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore, collection, query, where, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCzeGyuWuL1PurYi3sRHq2VYVDVLFKSBbs",
  authDomain: "taller-ig.firebaseapp.com",
  projectId: "taller-ig",
  storageBucket: "taller-ig.appspot.com",
  messagingSenderId: "451909488603",
  appId: "1:451909488603:web:63437e400723b89a1b61fe"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

  const usersRef = collection(db,"Usuarios");

  export const queryUser = async ({
    email,
    password
  }:{
    email: string;
    password: string;
  }) => {
    try {
        const q = query(usersRef, where("email", "==", email),where("password","==",password));
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot);

        querySnapshot.forEach((doc:any) => {
            console.log(doc.id,"=>",doc.data());
        });

        // if(querySnapshot.empty){
        //   return false;
        // } else {
        //   return true;
        // }
        
        return !querySnapshot.empty;
    } catch (error) {
        return false;
    }
  }

  export const addUser = async ({
    email,
    password
  }:{
    email: string;
    password: string;
  }) => {
    try {
        const docRef = await addDoc(collection(db,"Usuarios"),{
            email,
            password
        });
        return true;
    } catch (error) {
        return false;
    }
  }