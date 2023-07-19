import Head from "next/head";
import styles from "@/styles/Login.module.css";
import React, { useState } from "react";
import Login from '../components/Login'
import Sign from '../components/Signin'

var bool = false;


export default function SignUp() {

    const [activeComponent, setActiveComponent] = useState('A');
    const handleClick = (component: React.SetStateAction<string>) => {
        setActiveComponent(component);
    };

    return (
        <>
        <Head>
            <title>Sign Up</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <div className={styles.choice}>
                <div className={styles.option1} onClick={() => handleClick('A')}>Login</div>
                <div className={styles.option2} onClick={() => handleClick('B')}>Sign Up</div>
            </div>
            <div>
            {activeComponent === 'A' && <Login />}
            {activeComponent === 'B' && <Sign />}
            </div>
        </main>
    </>
  );
}
