import Head from "next/head";
import Image from "next/image";
import Link from 'next/link'
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React, { useState } from "react";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <>
      <Head>
        <title>OOPS Project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
      <main className={styles.main}>
      {/* <SignUp /> */}
      </main>
    </>
  );
}
