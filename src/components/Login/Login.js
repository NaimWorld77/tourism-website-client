import React from 'react';
import {useLocation,useHistory} from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Login = () => {

    const {signInUsingGoogle} = useAuth();
    ;

        const location = useLocation();
        const history = useHistory();
        const redirect_uri =location.state?.from || '/home';
        console.log(redirect_uri);

        const handleGoogleLogin =() =>{
            signInUsingGoogle()
            .then(result=>{
                history.push(redirect_uri)
            })
        }


     return (
        <div>
            <div className="bg-primary text-center">
                <h2 className="text-danger">Login</h2>
                <form >
                    <input className="mt-3 py-2 px-4 rounded" type="email" placeholder="your email" />
                    <br />
                    <br />
                    <input  className="py-2 px-4 rounded" type="password" placeholder="enter password" />
                    <br />
                    <br />
                    <input  className="btn btn-warning mb-3" type="submit" value="Submit" />
                </form>
                <div className="text-danger pb-2">------------------OR----------------</div>
                
                <button className="btn btn-warning mb-3"
                onClick={handleGoogleLogin}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;