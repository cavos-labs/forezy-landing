'use client';

import { motion, Variants, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import { joinWaitlist } from '../../app/actions';
import dynamic from 'next/dynamic';
import AnimatedBackground from './AnimatedBackground';
import Image from 'next/image';

// Dynamically import AnimatedBackground with no SSR
const DynamicAnimatedBackground = dynamic(() => import('./AnimatedBackground'), {
  ssr: false
});

export default function Hero() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const imageControls = useAnimation();

  // Continuous fluid up and down animation
  useEffect(() => {
    imageControls.start({
      y: [0, -10, 0, 10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.25, 0.5, 0.75, 1]
      }
    });
  }, [imageControls]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    setError(null);
    
    const result = await joinWaitlist(email);

    if (result.error) {
      setError(result.error);
    } else {
      setIsSubmitted(true);
    }
    
    setIsLoading(false);
  };
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="hero" className="w-full min-h-screen bg-black text-white flex items-center justify-center overflow-hidden relative">
      {/* Animated Background - Full width and height */}
      <div className="absolute inset-0 w-full h-full">
        <DynamicAnimatedBackground />
      </div>
      
      {/* Content */}
      <div className="w-full px-4 sm:px-6 md:px-12 relative z-10">
        <motion.div 
          className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 pt-20 pb-12 md:py-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left - Text Content */}
          <div className="flex flex-col max-w-full md:max-w-xl w-full z-10">
            {/* Headline */}
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 font-orbitron"
              variants={itemVariants}
            >
              Forecast the <br className="hidden sm:block" /> Future. Earn <br className="hidden sm:block" /> Rewards.
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-sm md:text-base text-gray-400 mb-6 sm:mb-8"
              variants={itemVariants}
            >
              The easiest way to predict real-world events, earn rewards and build your prediction reputation.
            </motion.p>

            {/* Waitlist Form */}
            <motion.div variants={itemVariants} className="w-full">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex w-full max-w-full sm:max-w-md flex-col sm:flex-row gap-4 sm:gap-0 relative">
                  <motion.input
                    whileFocus={{ boxShadow: "0 0 0 2px rgba(0, 255, 153, 0.5)" }}
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 p-3 rounded-md sm:rounded-l-md sm:rounded-r-none bg-black border border-gray-600 text-white focus:outline-none transition-shadow duration-300"
                    required
                  />
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="px-6 py-3 rounded-md sm:rounded-l-none sm:rounded-r-md border border-green-500 text-white font-medium font-orbitron shadow-[0_0_15px_#00ff99] hover:shadow-[0_0_25px_#00ff99] transition duration-200 sm:ml-0"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" />
                    ) : (
                      <>
                        Join Waitlist
                      </>
                    )}
                  </motion.button>
                  {error && <p className="text-sm text-red-500 mt-2 absolute left-0 -bottom-6">{error}</p>}
                </form>
              ) : (
                <motion.p 
                  className="text-green-400 font-semibold mt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  ✅ You&apos;re on the waitlist! We&apos;ll notify you at <strong>{email}</strong>.
                </motion.p>
              )}
            </motion.div>
          </div>

          {/* Right - Cloud Forecast Image */}
          <motion.div 
            className="w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[550px] md:h-[550px] lg:w-[650px] lg:h-[650px] relative mt-8 md:mt-0 flex items-center justify-center"
            variants={itemVariants}
            animate={imageControls}
            style={{
              position: 'relative',
              zIndex: 1
            }}
          >
            <div className="w-full h-full relative flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full relative"
              >
                <Image
                  src="/images/cloud-forecast.png"
                  alt="Cloud Forecast"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1"
          initial={{ y: 0 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <motion.div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
        </motion.div>
        <p className="text-xs text-gray-400 mt-2">Scroll to explore</p>
      </motion.div>
    </section>
  );
}
