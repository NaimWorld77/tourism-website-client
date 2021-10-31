import initializeAuthentication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut,onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";




initializeAuthentication();
const auth = getAuth();

const useFirebase =()=>{
    const googleProvider = new GoogleAuthProvider();

    const [user,setUser] = useState({});

    const signInUsingGoogle = ()=>{
        return signInWithPopup(auth,googleProvider);
    }
    
    const LogOut =()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }

    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
          });
          
    },[])


    return {
        signInUsingGoogle,
        LogOut,
        user
        
    }
    
}
export default useFirebase;