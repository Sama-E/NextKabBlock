import Link from "next/link"
import styles from "./adminLinks.module.css";
import { useSession } from "next-auth/react";


const AdminLink = () => {


  return (
    <>
      <Link href="/write" className={styles.link}>
        Write
      </Link>
    </>
  )
}

export default AdminLink