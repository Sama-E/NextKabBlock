import Link from "next/link";
import styles from "./featured.module.css";
import Image from "next/image";


const getData = async () => {
  const res = await fetch(
    `http://localhost:3000/api/featured`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const Featured = async () => {

  const item  = await getData();

  return (
    <div className={styles.container}>
      <div className={styles.post}>

      {item[0].img && (
        <div className={styles.imgContainer}>
          <Image src={item[0].img}
            alt="" 
            fill
            sizes="100vw"
            className={styles.image} />
        </div>
      )}
          <div className={styles.textContainer}>
            <h1 className={styles.postTitle}>{item[0].title}</h1>
            <p className={styles.postDesc} dangerouslySetInnerHTML={{ __html: item[0]?.desc.substring(0,280) }}/>
            <Link href={`/blog/singlePost/${item[0].slug}`}>
              <button className={styles.button}>Read More</button>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default Featured