// import Swal from 'sweetalert2'
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// import { getFirestore, collection, addDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDuyZQnYV3ToOicarAnc3qPapowumkqYn4",
    authDomain: "olx-web-dd8c4.firebaseapp.com",
    projectId: "olx-web-dd8c4",
    storageBucket: "olx-web-dd8c4.appspot.com",
    messagingSenderId: "31036041860",
    appId: "1:31036041860:web:1fa0ca97e49246e126b0d1"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);


async function  registered(user) {
  try {
    const { email, password, fullname } = user;
    await createUserWithEmailAndPassword(auth, email, password)
    await addDoc(collection(db, "users"), {
      fullname,
      email,
    });
    // Swal.fire({
    //   title: "Good job!",
    //   text: "Successfully Registered",
    //   icon: "success",
    // });
    alert("Successfully Registered")
    return true;
    
    
  } catch (e) {
    // const errorMessage = e.message;
    // Swal.fire({
    //   icon: "error",
    //   title: "Registration Failed",
    //   text: errorMessage,
    // });
    alert(e)
    throw e
  }

}

async function login(user) {
  try {
    const { email, password } = user;
    console.log(email, password)
    await signInWithEmailAndPassword(auth, email, password)
    // Swal.fire({
    //   title: "Good job!",
    //   text: "Successfully Login",
    //   icon: "success",
    // });
    alert("successfully logged in");
    return true;

  } catch (e) {
    // const errorMessage = e.message
    // Swal.fire({
    //   icon: "error",
    //   title: "Login Failed",
    //   text: errorMessage,
    // });
    alert(e.message)
    throw e
    
  }

}

async function  Ads(adsposted) {
  try {
    const {name, rs, title, brand, category, discription} = adsposted;
    await addDoc(collection(db, "Posts"), {
      name,
      rs,
      title,
      brand,
      category,
      discription
    });
    alert("Post added successfully")
    return true;
    
    
  } catch (e) {
    alert("Post added failed")
    throw e
  }

}


export {
  registered,
  login,
  Ads
};
