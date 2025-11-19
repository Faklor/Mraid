'use client'
//===============tools======================
import { useEffect,useState } from 'react'

//================styles====================
import './PreLoader.scss'
//===============assets=====================
import LogoSvg from '../data/LogoSVG'

export default function PreLoader({delayPreLoader}) {

    
    const speed = 1.3 // длительность анимации в секундах
    const delayStep = 0.001 // задержка между блоками
    //const sliderOffset = 150
    const raidDelay = speed * 0.2
    //const exitDelay = 20000

    const [exit, setExit] = useState(false)

   

    useEffect(() => {
        const blocks = document.querySelectorAll('.fly-in')
        blocks.forEach((el, i) => {
            el.style.setProperty('--tx', `${Math.random() * 400 - 200}px`)
            el.style.setProperty('--ty', `${Math.random() * 400 - 200}px`)
            el.style.animationDelay = `${i * delayStep}s`
            el.style.animationDuration = `${speed}s`
        })

        setTimeout(() => {
            document.querySelector('.logo-container')?.classList.add('slide-left')
            document.querySelector('.raid-text')?.classList.add('show-raid')
        }, raidDelay * 5000)


        setTimeout(() => {
            setExit(true)
        }, delayPreLoader)

    }, [])
   
    return (
        <div className={`preloader-wrapper ${exit ? 'preloader-exit' : ''}`}>
            <h1 className="raid-text">
                <span>m</span><span>r</span><span>a</span><span>i</span><span>d</span><span>.</span><span>i</span><span>o</span>
            </h1>
            <div className='logo-container'>
                <LogoSvg/>
            </div>

            <div className="scan-line"></div>

        </div>
    )
}
