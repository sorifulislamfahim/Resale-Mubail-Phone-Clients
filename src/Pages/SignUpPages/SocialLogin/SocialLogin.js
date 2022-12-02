import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const SocialLogin = () => {
    const { googleSignin } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignin()
            .then(result => {
                const user = result.user;

                const currentUser = {
                    email: user.email
                }
                console.log(currentUser)

                fetch('https://resale-mubail-phones-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        localStorage.setItem('token', data.token)
                    })
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className='btn btn-outline w-full '>Continew With Google</button>
        </div>
    );
};

export default SocialLogin;