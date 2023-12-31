import Image from "next/image";
import MenuCategories from "../MenuCategories/MenuCategories";
import MenuPosts from "../MenuPosts/MenuPosts";
import styles from "./menu.module.css";
import Link from "next/link";

const Menu = ({cat, searchParams}) => {
  return (
    <div className={styles.container}>
      {/* <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false}  cat={cat} /> */}
      {/* <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Similar Posts</h1>
      <MenuPosts withImage={false}  cat={cat} searchParams={searchParams} /> */}
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts withImage={true} />
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
    </div>
  )
}

export default Menu