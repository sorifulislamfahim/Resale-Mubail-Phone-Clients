import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 border border-spacing-5'>
                <h2 className='text-xl text-center font-bold'>LogIn</h2>
                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" {...register("email")} className="input input-bordered w-full max-w-xs"/>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">PassWord</span></label>
                        <input type="password" {...register("password")} className="input input-bordered w-full max-w-xs"/>
                        <label className="label"><span className="label-text">Forget PassWord?</span></label>
                    </div>
                    <input className='btn w-full' value='LogIn' type="submit" />
                </form>
                <p>New To Our Website <Link to='/register' className='text-red-500 font-semibold'>Create a new acount</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>Continew With Google</button>
            </div>
        </div>
    );
};

export default Login;