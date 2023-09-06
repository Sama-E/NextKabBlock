"use client";
import styles from "./comments.module.css";
import Image from "next/image";
// import useSWR from "swr";
// import { useSession } from "next-auth/react";
// import { useState } from "react";
// import Link from "next/link";


const Comments = () => {
  // const { status } = useSession();

  // const { data, mutate, isLoading } = useSWR(
  //   `http://localhost:3000/api/comments?postSlug=${postSlug}`,
  //   fetcher
  // );

  // const [desc, setDesc] = useState("");

  // const handleSubmit = async () => {
  //   await fetch("/api/comments", {
  //     method: "POST",
  //     body: JSON.stringify({ desc, postSlug }),
  //   });
  //   mutate();
  // };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {/* {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "loading"
          : data?.map((item) => (
              <div className={styles.comment} key={item._id}>
                <div className={styles.user}>
                  {item?.user?.image && (
                    <Image
                      src={item.user.image}
                      alt=""
                      width={50}
                      height={50}
                      className={styles.image}
                    />
                  )}
                  <div className={styles.userInfo}>
                    <span className={styles.username}>{item.user.name}</span>
                    <span className={styles.date}>{item.createdAt}</span>
                  </div>
                </div>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            ))} */}

        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
          />
          <button className={styles.button}>
            Send
          </button>
        </div>
          <div className={styles.comments}>
            <div className={styles.comment}>
              <div className={styles.user}>
                  <Image
                    src=""
                    alt=""
                    width={50}
                    height={50}
                    className={styles.image}
                  />
                <div className={styles.userInfo}>
                  <span className={styles.username}>Name</span>
                  <span className={styles.date}>Date</span>
                </div>
              </div>
              <p className={styles.desc}>Body Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, obcaecati laboriosam exercitationem repellendus velit voluptatum quidem illo atque doloribus sint ipsam perferendis ex maiores quaerat culpa dicta tenetur aperiam magni.</p>
            </div>

            {/* Keep bottom ending div */}

      </div>
    </div>
  )
}

export default Comments