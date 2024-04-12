import React, { useContext, useState } from 'react'
import { Context, server } from '..'
import axios from "axios"
const Signup = () => {
    const [name,setname]=useState("")
    const [username,setusername]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [cpassword,setcpassword]=useState("")
    const [gender,setgender]=useState("")

    const {isauthenticated,setisauthenticated}=useContext(Context)

    const submithandler=async (e)=>{
        e.preventDefault();
        try{
            const {data}= await axios.post(`${server}/signup`,{name,username,password,email,confirmpassword:cpassword,gender},{
                headers:{
                    "Content-Type":"application/json"
                },
                withCredentials:true
            })
            setisauthenticated(true)
            console.log(data);
            // console.log(isauthenticated);

        }
        catch(error){
            setisauthenticated(false)
            console.log(error.respone.data.message);
        }
    }
  return (
    <div>
      <form onSubmit={submithandler}>
        <input type="text" placeholder="name" className='name' value={name} onChange={(e)=>setname(e.target.value)} />
        <input type="text" placeholder="username" className='username' value={username} onChange={(e)=>setusername(e.target.value)} />
        <input type="email" placeholder="email" className='email' value={email} onChange={(e)=>setemail(e.target.value)} />
        <input type="password" placeholder="password" className='password' value={password} onChange={(e)=>setpassword(e.target.value)} />
        <input type="password" placeholder="cpassword" className='cpassword' value={cpassword} onChange={(e)=>setcpassword(e.target.value)} />
        <input type="text" placeholder="gender" className='gender' value={gender} onChange={(e)=>setgender(e.target.value)} />
        <input type="submit" className='submit'/>
      </form>
    </div>
  )
}

export default Signup

