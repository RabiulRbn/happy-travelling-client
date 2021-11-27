import React from 'react';

import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin1 = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })



    }

    
    return (
        <div>
            <div className="login-form " style={{margin:"80px"}}>
                <div>
                    <h2> Please Register and Booked Your TourEO!YaY!!</h2>
                    <form  className="w-50 mx-auto">
                        <input className="form-control" type="email" name="" id="" placeholder="Your Email" />
                        <br />
                        <input className="form-control" type="password" name="" id="" placeholder="Your Password" />
                        <br />
                        <input className="form-control" type="password" name="" id="" placeholder="Re-enter Password" />
                        <br />
                        <input className="btn btn-success" type="submit" value="Register" />
                    </form>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                    <div>----------or-------------</div>
                    <button onClick={handleGoogleLogin1} className="btn btn-success" >Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Register;