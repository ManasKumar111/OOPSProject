import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarBrand}>
                <Link href="/" className={styles.navbarItem}>
                    My App
                </Link>
            </div>
            <div className={styles.bar}>
                <div className={styles.start}>
                    <Link href="/" className={styles.item}>
                        Home
                    </Link>
                    <Link href="/about" className={styles.item}>
                        About
                    </Link>
                    <Link href="/contact" className={styles.item}>
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
