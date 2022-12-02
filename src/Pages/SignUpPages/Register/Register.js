import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../context/AuthProvider';
import toast from 'react-hot-toast';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);


    const handleRegister = data => {
        const navigate = Navigate();

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('User Created Successfully')
                navigate('/');
                const userInfo = {
                    displayName: data.name
                }
                // console.log(userInfo)
                updateUser(userInfo)
                    .then(() => {

                    })
            })
            .catch(error => console.error(error));
    }


    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 border border-spacing-5'>
                <h2 className='text-2xl text-center font-bold'>Register!</h2>
                <form onSubmit={handleSubmit(handleRegister)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text"
                            {...register("name", {
                                required: true
                            })}
                            className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email"
                            {...register("email", {
                                required: "Email Address is Required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">PassWord</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "PassWord is Required",
                                minLength: { value: 6, message: "Password must be 6 currecter or longer" }

                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn w-full my-5' value='Register' type="submit" />
                </form>
                <p className='text-center'>Alredy have an acount <Link to='/login' className='text-red-500 font-semibold'>Please LogIn</Link></p>
                <div className="divider">OR</div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;