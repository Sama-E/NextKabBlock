import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};

import React from 'react'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Me</h2>
        <h1 className={styles.title}>
          Tech enthusiast. Full Stack developer. Nature Lover. Cultured Traveler. Spirited Historian. Peace maker. Foodie. Tinker.
        </h1>
        {/* <p className={styles.desc}>
          I created this blog to further explore new concepts and technologies, to test my knowledge and skills, to document my triumphs and shortcomings and to learn from it all. Some posts are technical, others are experiential, and some are just memories. I hope you enjoyed whatever I put out there - into the ether.
        </p> */}
        {/* <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div> */}
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/ottertux.webp"
          alt="About Image"
          fill
          className={styles.img}
        />
      </div>
    </div>
  )
}

export default About