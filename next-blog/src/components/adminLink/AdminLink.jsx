import Link from "next/link"
import styles from "./adminLinks.module.css";
import { getUser } from "@/utils/getData";
import { useSession } from "next-auth/react";


const AdminLink = () => {

  // const { data } = useSession();
  // console.log(data)

  return (
    <>
      <Link href="/write" className={styles.link}>
        Write
      </Link>
    </>
  )
}

export default AdminLink