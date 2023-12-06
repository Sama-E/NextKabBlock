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
        <div className={styles.socialButton}>Sign in with Github</div>
      </div>
      {/* <div className={styles.wrapper2}>
        <form className={styles.form}>
          <h1>Login</h1>
          <input
            required
            type="email"
            placeholder="Email"
            name="email"
            className={styles.inputs}
          />
          <input
            required
            type="password"
            placeholder="Password"
            name="password"
            className={styles.inputs}
            />
          <button className={styles.submitButton}>Login</button>
        </form>
      </div> */}
    </div>
  )
}

export default Login;