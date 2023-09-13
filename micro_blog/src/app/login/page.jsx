"use client";

import styles from './login.module.css';
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from 'react';

const Login = () => {
  const { status } = useSession();

  const router = useRouter();

    //Loading
    if (status === "loading") {
      return <div className={styles.loading}>Loading...</div>;
    }

    //Authenticated
    if (status === "authenticated") {
      router.push('/',  { scroll: false });
    }


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          Sign in with Google
        </div>
        {/* <div className={styles.socialButton}>Sign in with Facebook</div> */}
      </div>
    </div>
  )
}

export default Login;