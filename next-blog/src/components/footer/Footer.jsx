import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <h1 className={styles.logoText}>Next Kab [Block]</h1>
        </div>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          necessitatibus similique aspernatur obcaecati veritatis.
        </p>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        {/* <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/"></Link>
          <Link href="/"></Link>
          <Link href="/"></Link>
          <Link href="/"></Link>
        </div> */}
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">LinkedIn</Link>
          <Link href="/">Github</Link>
          <Link href="/">Twitter</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
