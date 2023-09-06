import styles from "./categoryPosts.module.css";
import CardList from '@/components/Card/CardList/CardList';
import Menu from '@/components/Menu/Menu/Menu';
import React from 'react';

// const CategoryPosts = ({ searchParams }) => {
//   const page = parseInt(searchParams.page) || 1;
//   const { cat } = searchParams;

const CategoryPosts = () => {
  return (
    <div className={styles.container}>
      {/* <h1 className={styles.title}>{cat} Blog</h1> */}
      <h1 className={styles.title}>Category Blog</h1>
      <div className={styles.content}>
        {/* <CardList page={page} cat={cat}/> */}
        <CardList />
        <Menu />
      </div>
    </div>
  )
}

export default CategoryPosts;