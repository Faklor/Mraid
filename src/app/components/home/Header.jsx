'use client'


//=================tools=====================
import Image from "next/image"
import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
//=================styles====================
import './Header.scss'
//=================data====================
import LogoSvg from "@/app/data/LogoSVG"
import IconNavBar from "@/app/data/IconNavBar"
//==================components================
import NavMenu from "./NavMenu"


export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [origin, setOrigin] = useState({ x: 0, y: 0 })
  const navRef = useRef(null)

  const openMenu = () => {
    if (navRef.current) {
      const rect = navRef.current.getBoundingClientRect()
      setOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
    }
    setIsOpen(true)
  }

  return (
    <>
      <header className="header">
        <div className="header__logo">
          <LogoSvg />
          {/* <h2>mraid.io</h2> */}
        </div>
        <nav className="header__nav" ref={navRef} onClick={openMenu}>
          <IconNavBar isOpen={isOpen}/>
        </nav>
      </header>

      <NavMenu origin={origin} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
