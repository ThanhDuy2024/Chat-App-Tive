import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState();

    const history = useHistory();

    const submitHander = async () => {
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            const { data } = await axios.post(
                "/api/user/login",
                {email, password},
                config
            )
            localStorage.setItem("userInfor", JSON.stringify(data));
            history.push("/chats");
            alert("login done")
        }catch(error) {
            alert("error")
            console.log(error);
        }
    }

    return (
        <>
            <form className=''>
                <div className='mt-[10px]' id="email">
                    <label className='block mb-[10px] font-[700]'>Email:</label>
                    <input
                        className='bg-white w-full border-[1px] border-solid h-[42px] px-[10px] rounded-[20px]'
                        type='text'
                        placeholder='Enter your email...'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='mt-[10px]' id="password">
                    <label className='block mb-[10px] font-[700]'>Password:</label>
                    <input
                        className='bg-white w-full border-[1px] border-solid h-[42px] px-[10px] rounded-[20px]'
                        type='password'
                        placeholder='Enter your email...'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button
                    className='text-white w-full mt-[15px] bg-[#554BF2] h-[42px] rounded-[10px]'
                    onClick={submitHander}
                >
                    Login
                </button>

                <button
                    className='text-white w-full mt-[15px] bg-red-600 h-[42px] rounded-[10px]'
                    onClick={() => {
                        setEmail("gest@example.com")
                        setPassword("123456");
                    }}
                >
                    Get Guest User Credentials
                </button>
            </form>
        </>
    )
}

export default Login;