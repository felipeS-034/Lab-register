import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore, collection, query, where, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { DataShape } from "../components/data";


interface dataPostSnapshot extends DataShape {
  data: () => DataShape;
}

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

  export const addPost = async ({
    username,
    image,
    comment
  }:{
    username: string;
    image: string;
    comment: string;
  }) => {
    try {
        await addDoc(collection(db,"posts"),{
          username,
          image,
          comment,
          viewers: 0,
          comments: 0,
          profileimg: '../imagesPost/perfil.png'
        });
        return true;
    } catch (error) {
        return false;
    }
  }

  export const getPosts = async () => {
    try {
      const posts: DataShape[] = [];
      const querySnapshot = await getDocs(collection(db, 'posts'));
      querySnapshot.forEach((post: dataPostSnapshot) => {
        posts.push(post.data());
        console.log(post);
        
      });
      return posts;
    } catch (error) {
      console.error(error);
      alert('Ocurrió un error');
    }
  }