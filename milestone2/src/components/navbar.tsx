import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    // NOTE: we use "class" in HTML but React is quirky so we have to 
    // change all the "class" to "className"
    <header className={style.navbar} >
      <ul className={style.navList}>
        <li><Link href="/blogs">Blog</Link></li>
        <li><Link href="/portfolio">Portfolio</Link></li>
        <li>
          <Link href="/">
            <img className={style.homeImage} src="/me.jpg" alt="home-page image" />
          </Link>
        </li>
        <li><Link href="/resume">Resume</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </header>
  );
}