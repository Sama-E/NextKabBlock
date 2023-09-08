import styles from "./categoryPosts.module.css";
import CardList from '@/components/Card/CardList/CardList';
import Menu from '@/components/Menu/Menu/Menu';

const CategoryPosts = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat}</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat}/>
        <Menu />
      </div>
    </div>
  )
}

export default CategoryPosts;