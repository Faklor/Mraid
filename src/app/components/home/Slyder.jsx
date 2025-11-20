'use clients'

//=================tools=====================
import Image from "next/image"
import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'


//=================styles====================
import './Slyder.scss'


export default function Slyder() {
  const icons = Array.from({ length: 20 }, (_, i) => `sl-${i + 1}.png`)
  const trackRef = useRef(null)
  const offsetRef = useRef(0)

  useEffect(() => {
    let frame
    const speed = 0.5 // скорость в px за кадр

    const step = () => {
      const track = trackRef.current
      if (!track) return

      const firstItem = track.children[0]
      const itemWidth = firstItem?.offsetWidth || 0

      offsetRef.current += speed
      track.style.transform = `translateX(${-offsetRef.current}px)`

      if (offsetRef.current >= itemWidth) {
        track.appendChild(firstItem)       // переброс в конец
        offsetRef.current -= itemWidth     // корректируем смещение
        track.style.transform = `translateX(${-offsetRef.current}px)`
      }

      frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div className="slyder-wrapper">
      <div className="slyder-track" ref={trackRef}>
        {icons.map((src, index) => (
          <div className="slyder-item" key={index}>
            <img
              src={`${process.env.NEXT_PUBLIC_BASEURL}/slyder/${src}`}
              alt={`partner-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}









//ex

{/* <Image
          className="mainpicInner"
          //src={`${process.env.NEXT_PUBLIC_BASEURL}/pic/main.jpg`}
          alt=""
          width={400}
          height={300}
          priority
        /> */}
