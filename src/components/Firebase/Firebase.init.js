import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";



const initializeAuthentication=()=>{

    const app = initializeApp(firebaseConfig);
}

export default initializeAuthentication;