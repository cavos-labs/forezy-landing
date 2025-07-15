'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header 
      id='header' 
      className="w-full bg-black bg-opacity-50 backdrop-blur-sm text-white px-4 sm:px-6 md:px-12 py-3 fixed top-0 left-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Text */}
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
            className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
          >
            <Image
              src="/images/logo.png"
              alt="Forezy Logo"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, 56px"
              priority
            />
          </motion.div>
          <motion.span 
            className="text-base sm:text-lg font-orbitron font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Forezy
          </motion.span>
        </motion.div>

        {/* Login Button - Uncomment when ready */}
        {/* <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/login"
            className="px-3 py-1.5 sm:px-4 sm:py-2 border border-green-500 text-white font-orbitron text-xs sm:text-sm rounded-md hover:bg-green-500 hover:text-black transition duration-300 shadow-[0_0_10px_rgba(0,255,153,0.3)] hover:shadow-[0_0_15px_rgba(0,255,153,0.5)]"
          >
            Login
          </Link>
        </motion.div> */}
      </div>
    </motion.header>
  );
}
