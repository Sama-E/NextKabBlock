import styles from "./singlePost.module.css";
import Menu from "@/components/Menu/Menu/Menu";
import Image from "next/image";
import Comments from "@/components/Comments/Comments";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePost = async ({ params }) => {

  const { slug } = params;
  const data = await getData(slug);

  return (
    <div className={styles.container}>
    <div className={styles.infoContainer}>
    </div>
    <div className={styles.content}>
      <div className={styles.post}>
      {data?.img && (
        <div className={styles.imageContainer}>
          <Image src={data.img} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{data?.title}</h1>
        <div className={styles.user}>
          {data?.user?.image && (
            <div className={styles.userImageContainer}>
              <Image 
                src={data.user.image} 
                alt="" 
                fill
                className={styles.avatar} />
            </div>
          )}
          <div className={styles.userTextContainer}>
            <span className={styles.username}>{data?.user.name}</span>
            <span className={styles.date}>{data.createdAt.substring(0, 10)}</span>
          </div>
        </div>
      </div>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: data?.desc }}
        />
        <div className={styles.comment}>
          <Comments postSlug={slug}/>
        </div>
      </div>
      <Menu cat={data.catSlug}/>
    </div>
  </div>
  )
}

export default SinglePost;