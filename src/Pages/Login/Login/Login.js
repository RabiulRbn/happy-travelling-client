import React from 'react';

import { Link, useLocation, useHistory  } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    
    
     const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div style={{ margin: "80px" }}>
            <h2> Please Login First</h2>
            <form  className="w-50 mx-auto">
                <input  className="form-control" type="email" name="" id="" placeholder="Your Email" />
                <br />
                <input className="form-control" type="password" name="" id="" placeholder="Password"/>
                <br />
                <input className="btn btn-success" type="submit" value="Submit" />
            </form>
            <p>new to TourEo website? <Link to="/register">Create Account</Link></p>
            <div>-------or----------</div>
            <button onClick={handleGoogleLogin}  className="btn btn-success">Google Sign In</button>
        </div>
    );
};

export default Login;