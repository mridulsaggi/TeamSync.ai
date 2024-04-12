import React, { useContext, useState } from 'react'
import axios from "axios"
import { server } from '../main'
import { toast } from 'react-hot-toast'

const Login = () => {
  const [name, setname] = useState("")
  const [password, setpassword] = useState("")
  const [email,setemail ] = useState("")
  const [companyname, setcompanyname] = useState("")
  const [description, setdescription] = useState("")

  // const { isauthenticated, setisauthenticated } = useContext(Context)

  const submithandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${server}/login`, { email, password }, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
      console.log(data?.message);
      // toast.success(`Welcome back , ${data.data.name}`);
      // setisauthenticated(true)
    }
    catch (error) {
      console.log("error mila h koi")
      // toast.error(error.response.data.message)

      // setisauthenticated(false)
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={submithandler}>
        <input type="email" placeholder="email" className='email' value={email} onChange={(e)=>setemail(e.target.value)} />
        <input type="password" placeholder="password" className='password' value={password} onChange={(e)=>setpassword(e.target.value)} />
        <input type="submit" className='submit'/>
      </form>
      
    </div>
  )
}

export default Login
