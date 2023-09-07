"use client";
import styles from './login.module.css';
import { signIn, useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

const Login = () => {
  // const { status } = useSession();
  const { status, data } = useSession();

  // const router = useRouter();

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "authenticated") {
    // router.push("/")
    console.log("authenticated")
    console.log(data)
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          Sign in with Google
        </div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
    </div>
  )
}

export default Login;