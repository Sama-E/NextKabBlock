import Image from "next/image";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/laptop.jpg" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <h3> Contact me ...</h3>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Social ... " />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact