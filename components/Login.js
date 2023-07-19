import React from 'react'
import loginbox from '../styles/loginpage.module.css'


function Login() {
  return (
    <form className={loginbox.page}>
        <div className={loginbox.heading}>
            Login
        </div>
        <div className={loginbox.email}>
            <div className={loginbox.label}>Email:</div>
            <div><input type="text" className={loginbox.input} /></div>
        </div>
        <div className={loginbox.password}>
            <div className={loginbox.label}>Password:</div>
            <div><input type="text" className={loginbox.input} /></div>
        </div><br/>
        <button className={loginbox.submit} type="submit">Submit</button>
    </form>
  )
}

export default Login