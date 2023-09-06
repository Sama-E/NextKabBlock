import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    // <div className={styles.container} key={key}>
      <div className={styles.container}>
      {/* {item.img && (
        <div className={styles.imageContainer}>
          <Image src={item.img} alt="" fill className={styles.image} />
        </div>
      )} */}
      <Image src="" alt="" fill className={styles.image} />
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {/* {item.createdAt.substring(0, 10)} -{" "} */}
            Date 
          </span>
          {/* <span className={styles.category}>{item.catSlug}</span> */}
          <span className={styles.category}> Category</span>
        </div>
        {/* <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1> */}
        <Link href="">
          <h1>Title</h1>
        </Link>
        {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
        {/* <div className={styles.desc} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,60) }}/> */}
        <div className={styles.desc} />
        Body
        {/* <Link href={`/posts/${item.slug}`} className={styles.link}> */}
        <Link href="" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  )
}

export default Card