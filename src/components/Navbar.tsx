"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export function Navbar() {
  const pathname = usePathname()
  
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 w-full z-50"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center"
        >
          <Link 
            href="/" 
            className="text-xl font-bold text-white hover:text-indigo-400 transition-colors duration-300"
          >
            RV
          </Link>
        </motion.div>
        
        {/* Navigation - Centered */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-1 sm:gap-4 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300">
          <NavItem href="/" isActive={pathname === "/"}>
            Home
          </NavItem>
          <NavItem href="/#projects" isActive={pathname === "/projects"}>
            Projects
          </NavItem>
          <NavItem href="/blogs" isActive={pathname === "/blogs"}>
            Blogs
          </NavItem>
        </nav>
        
        {/* Empty div to maintain flex spacing */}
        <div className="w-[42px]"></div>
      </div>
    </motion.header>
  )
}

interface NavItemProps {
  href: string
  isActive: boolean
  children: React.ReactNode
}

function NavItem({ href, isActive, children }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "relative px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 group overflow-hidden",
        isActive 
          ? "text-white bg-white/10" 
          : "text-gray-400 hover:text-white"
      )}
    >
      <motion.span
        className="absolute inset-0 bg-white/10 rounded-full z-0"
        initial={{ scale: 0 }}
        animate={{ scale: isActive ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="absolute inset-0 bg-white/10 rounded-full z-0"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10">{children}</span>
      {isActive && (
        <motion.span 
          layoutId="activeTab"
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-indigo-400 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"
          transition={{ duration: 0.3 }}
        />
      )}
    </Link>
  )
}