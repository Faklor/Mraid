'use client'


//=================tools=====================
import Image from "next/image"
import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
//=================styles====================
import './Header.scss'
//=================data====================
import LogoSvg from "@/app/data/LogoSVG"


export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <LogoSvg />
        <h2>mraid.io</h2>
      </div>
      <nav className="header__nav">
        <ul>
          <li className="active">Home</li>
          <li>Projects</li>
          <li>Price list</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}
