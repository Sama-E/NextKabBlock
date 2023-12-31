import Featured from "@/components/Featured/Featured";
import styles from "./page.module.css";
import CategoryList from "@/components/CategoryList/CategoryList";
import CardList from "@/components/Card/CardList/CardList";
import Menu from "@/components/Menu/Menu/Menu";

export default function Home({searchParams}) {

  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <Featured page={page} />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
}
