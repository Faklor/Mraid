'use client'
//================tools=============================
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";


//===================components=====================
import PreLoader from "./components/PreLoader";

export default function Home() {

  const delayPreLoader = 20000

 const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 20000); // 20 секунд

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {showPreloader && <PreLoader delayPreLoader={delayPreLoader} />}
        {!showPreloader && <div className={styles.content}></div>}
      </main>
    </div>
  );
}
