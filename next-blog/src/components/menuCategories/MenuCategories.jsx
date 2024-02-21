import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.dev}`}
      >
        Dev
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.data}`}>
        Data
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.blockchain}`}>
        Blockchain
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.security}`}>
        Security
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.histories}`}>
        Histories
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.ai}`}>
        AI
      </Link>
    </div>
  );
};

export default MenuCategories;
