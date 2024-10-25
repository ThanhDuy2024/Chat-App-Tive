import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
const SignUp = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [pic, setPic] = useState();
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const postDetails = (pics) => {
        setLoading(true);
        if(pics.type === "image/jpeg" || pics.type === "image/png") {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "chat-app");
            data.append("cloud_name", "ddv4cb3u5");
            fetch("https://api.cloudinary.com/v1_1/ddv4cb3u5/image/upload", {
                method: 'post', 
                body: data,
            })  .then((res) => res.json())
                .then(data => {
                    setPic(data.url.toString());
                    console.log(data.url.toString());
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                });
        }
    }

    const submitHander = async () => {
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",

                },
            };

            const { data } = await axios.post("/api/user", {name, email, password, pic}, 
                config
            );

            localStorage.setItem('userInfor', JSON.stringify(data));

            setLoading(false);
            history.push('/chats')
        } catch(error) {
            console.log(error);
        }
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
                        type='password'
                        placeholder='Enter your email...'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className='mt-[10px]'>
                    <label className='block mb-[10px] font-[700]'>Comfirm Password:</label>
                    <input
                        className='bg-white w-full border-[1px] border-solid h-[42px] px-[10px] rounded-[20px]'
                        type='password'
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