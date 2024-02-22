import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image 
            src="/techbulb.jpeg" 
            alt="" 
            fill
            className={styles.image} 
            />
        </div>
        <div className={styles.textContainer}>
          {/* <h1 className={styles.postTitle}> 
            I'm a ...
          </h1> */}
          <h2 className={styles.postSubTitle}>
          <span className={styles.postTitle}>I </span>
          created this blog to further explore new concepts and technologies, to test my knowledge and skills, to document my triumphs and shortcomings and to learn from it all. Some posts are technical, others are experiential, and some are just memories. I hope you enjoyed whatever I put out there - into the ether.
          </h2>
          <h3>-- [Sama]</h3>
          <Link href='/about' className={styles.button}>Read More</Link>
          <p className={styles.postDesc}>
          "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.
          </p>
          <h4> --Isaac Asimov</h4>
        </div>
      </div>
    </div>
  );
};

export default Featured;
