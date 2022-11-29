import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import React from 'react';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data);
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 border border-spacing-5'>
                <h2 className='text-xl text-center font-bold'>LogIn</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
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
                                minLength: {value: 6, message: "Password must be 6 currecter or longer"}
                                
                            })}
                            className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forget PassWord?</span></label>
                    </div>
                    <input className='btn w-full my-3' value='LogIn' type="submit" />
                </form>
                <p className='text-center'>New To Website <Link to='/register' className='text-red-500 font-semibold'>Create a new acount</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full '>Continew With Google</button>
            </div>
        </div>
    );
};

export default Login;