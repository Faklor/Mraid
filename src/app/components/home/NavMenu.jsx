'use clients'

//=================tools===================
import { motion,AnimatePresence  } from 'framer-motion'

//=================styles==================
import './NavMenu.scss'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.7,
    },
  },
  exit: { opacity: 0 },
}

const itemVariants = {
  hidden: { y: -50, opacity: 0 },
  show: { y: 0, opacity: 1 },
  exit: { y: -50, opacity: 0 },
}

export default function NavMenu({ onClose, origin, isOpen }) {
  const { x, y } = origin
  const menuItems = ["HOME", "PRICE LIST", "PROJECTS", "ABOUT", "CONTACT"]

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="navmenu-overlay"
          initial={{ clipPath: `circle(0% at ${x}px ${y}px)` }}
          animate={{ clipPath: `circle(150% at ${x}px ${y}px)` }}
          exit={{ clipPath: `circle(0% at ${x}px ${y}px)` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          onClick={onClose}
        >
          <motion.div
            className="navmenu-content"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            {menuItems.map((item) => (
              <motion.h2
                key={item} // ключи стабильные, но анимация управляется через variants
                className={`navmenu-item ${item === "HOME" ? "active" : ""}`}
                variants={itemVariants}
              >
                {item}
              </motion.h2>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}



