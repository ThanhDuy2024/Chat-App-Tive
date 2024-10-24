import React, { useState } from 'react'

const SignUp = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [pic, setPic] = useState();

    const postDetails = (pics) => {

    }

    const submitHander = () => {
        
    }

    return (
        <>
            <form className=''>
                <div className='mt-[10px]'>
                    <label className='block mb-[10px] font-[700]'>Name:</label>
                    <input
                        className='bg-white w-full border-[1px] border-solid h-[42px] px-[10px] rounded-[20px]'
                        type='text'
                        placeholder='Enter your name...'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className='mt-[10px]'>
                    <label className='block mb-[10px] font-[700]'>Email:</label>
                    <input
                        className='bg-white w-full border-[1px] border-solid h-[42px] px-[10px] rounded-[20px]'
                        type='text'
                        placeholder='Enter your email...'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='mt-[10px]'>
                    <label className='block mb-[10px] font-[700]'>Password:</label>
                    <input
                        className='bg-white w-full border-[1px] border-solid h-[42px] px-[10px] rounded-[20px]'
                        type='text'
                        placeholder='Enter your email...'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className='mt-[10px]'>
                    <label className='block mb-[10px] font-[700]'>Comfirm Password:</label>
                    <input
                        className='bg-white w-full border-[1px] border-solid h-[42px] px-[10px] rounded-[20px]'
                        type='text'
                        placeholder='Enter your email...'
                        onChange={(e) => setConfirmpassword(e.target.value)}
                    />
                </div>

                <div className='mt-[10px]'>
                    <label className='block mb-[10px] font-[700]'>Comfirm Password:</label>
                    <input
                        className='bg-white w-full border-[1px] border-solid h-[42px] px-[10px] rounded-[20px] py-[5px]'
                        type='file'
                        placeholder='Enter your email...'
                        onChange={(e) => postDetails(e.target.files[0])}
                    />
                </div>

                <button 
                    className='text-white w-full mt-[15px] bg-[#554BF2] h-[42px] rounded-[10px]'
                    onClick={submitHander}
                >
                    Sign Up
                </button>

            </form>
        </>
    )
}


export default SignUp;