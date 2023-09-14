import styles from "./menuCategories.module.css";
import Link from "next/link";
import Image from "next/image";

// Categories
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
    // cache: "default", - nextjs constantly cache
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const MenuCategories = async () => {
  const data = await getData();

  return (
    <div className={styles.categoryList}>
      {data?.map((item) => (
        <Link
          href={`/blog/categoryPosts?cat=${item.slug}`}
          className={`${styles.categoryItem} ${styles[item.slug]}`}
          key={item._id}
        >
          {item.img && (
            <Image
              src={item.img}
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />
          )}
          {item.title}
        </Link>
      ))}
    </div>
  )
}

export default MenuCategories;