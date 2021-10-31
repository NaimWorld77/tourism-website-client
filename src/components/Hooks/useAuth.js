import { useContext } from "react"
import { AuthContext } from "../ConText/AuthProvider"


const useAuth =()=>{
    return useContext(AuthContext);
}
export default useAuth;