import React from 'react'
import loginbox from '../styles/loginpage.module.css'


function Sign() {
  return (
    <form className={loginbox.page}>
        <div className={loginbox.heading}>
            Sign In
        </div>
        <div className={loginbox.email}>
            <div className={loginbox.label}>Email:</div>
            <div><input type="text" className={loginbox.input} /></div>
        </div>
        <div className={loginbox.password}>
            <div className={loginbox.label}>Password:</div>
            <div><input type="text" className={loginbox.input} /></div>
        </div>
        <div className={loginbox.password}>
            <div className={loginbox.label}>Confirm Password:</div>
            <div><input type="text" className={loginbox.input} /></div>
        </div>
        <button className={loginbox.submit} type="submit">Submit</button>
    </form>
  )
}

export default Sign