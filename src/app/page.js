'use client'

//================styles============================
import './page.scss'
//================tools=============================
import Image from "next/image";
import { useEffect, useState } from "react";

import { AnimatePresence, motion } from 'framer-motion'



//===================components=====================
import PreLoader from "./components/PreLoader";
import Slyder from './components/home/Slyder';
import Header from './components/home/Header';

export default function Home() {

  const delayPreLoader = 5000

 const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, delayPreLoader); // 20 секунд

    return () => clearTimeout(timer);
  }, []);


  return (
    <div>
      <main className='main'>
        <AnimatePresence>

          {/* {showPreloader && <PreLoader delayPreLoader={delayPreLoader} />}
          {!showPreloader && <div className={styles.content}></div>} */}
          {showPreloader && <PreLoader delayPreLoader={delayPreLoader} />}

        </AnimatePresence>


        {!showPreloader && (
          <>
            <Slyder />
            <Header/>
            
          </>
        )}
        

      </main>
    </div>
  );
}
