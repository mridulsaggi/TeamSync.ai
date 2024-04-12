import React, { useContext, useState } from 'react'
import { Context, server } from '..'
import axios from "axios"

const Login = () => {
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")

  const { isauthenticated, setisauthenticated } = useContext(Context)

  const submithandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${server}/login`, { username, password }, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
      console.log(data.message);
      setisauthenticated(true)
    }
    catch (error) {
      console.log("error mila h koi")
      setisauthenticated(false)
      console.log(error.response.data.message);
    }
  }

  return (
    <div>
      {/* <form onSubmit={submithandler}>
        <input type="text" placeholder="username" className='username' value={username} onChange={(e)=>setusername(e.target.value)} />
        <input type="password" placeholder="password" className='password' value={password} onChange={(e)=>setpassword(e.target.value)} />
        <input type="submit" className='submit'/>
      </form> */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
