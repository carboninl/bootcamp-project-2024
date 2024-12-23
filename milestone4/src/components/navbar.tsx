import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.navbar}>
      <ul className={style.navList}>
        <Link href="/" className={style.navItem}>About</Link>
        <Link href="/resume" className={style.navItem}>Resume</Link>
        <Link href="/projects" className={style.navItem}>Projects</Link>
        <Link href="/blogs" className={style.navItem}>Blogs</Link>
        <Link href="/contact" className={style.navItem}>Contact</Link>
      </ul>
    </header>
  );
}