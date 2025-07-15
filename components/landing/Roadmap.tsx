'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Roadmap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section className="w-full bg-black text-white px-4 sm:px-6 md:px-12 pt-12 pb-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold font-orbitron mb-16 sm:mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Roadmap
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <RoadmapItem
            title="Early Whitelist"
            subtitle="Now Live"
            description="Get early access to test the first version of the app. Spots are limited – early users help shape what's next."
            isLive={true}
            index={0}
            isVisible={isInView}
          />
          <RoadmapItem
            title="Q3 2025"
            subtitle="MVP Launch + Feedback Loop"
            description="We're rolling out the basic prediction flow with select markets. Early adopters can forecast, give feedback, and earn exclusive rewards."
            isLive={false}
            index={1}
            isVisible={isInView}
          />
          <RoadmapItem
            title="Q4 2025"
            subtitle="Iteration & Market Expansion"
            description="Based on user input, we'll expand market categories, improve UX, and experiment with lightweight incentives."
            isLive={false}
            index={2}
            isVisible={isInView}
          />
        </motion.div>
      </div>
      {/* Base Line */}
      <motion.div 
        className="absolute left-0 right-0 w-full h-[2px] bg-green-500 z-0"
        initial={{ scaleX: 0, opacity: 0, x: "-50%" }}
        animate={isInView ? { scaleX: 1, opacity: 1, x: "0%" } : { scaleX: 0, opacity: 0, x: "-50%" }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        style={{ 
          transformOrigin: 'left',
          boxShadow: '0px 0px 25px #62e977',
          bottom: '126px'
        }}
      />
    </section>
  );
}

function RoadmapItem({
  title,
  subtitle,
  description,
  isLive,
  index,
  isVisible,
}: {
  title: string;
  subtitle: string;
  description: string;
  isLive: boolean;
  index: number;
  isVisible: boolean;
}) {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.2
      }
    }
  };

  return (
    <motion.div 
      className="flex flex-col items-center text-center relative"
      variants={itemVariants}
    >
      {/* Text Content */}
      <motion.div 
        className="mb-28 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
      >
        <motion.h3 
          className="text-base sm:text-lg font-semibold font-orbitron"
          whileHover={{ color: "#00ff99", scale: 1.05 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className={`font-medium font-orbitron ${isLive ? 'text-green-400' : 'text-green-500'}`}
          animate={isLive ? {
            color: ['#4ade80', '#00ff99', '#4ade80'],
            textShadow: [
              '0 0 5px rgba(0, 255, 153, 0.3)',
              '0 0 10px rgba(0, 255, 153, 0.7)',
              '0 0 5px rgba(0, 255, 153, 0.3)'
            ]
          } : {}}
          transition={isLive ? {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          } : {}}
        >
          {subtitle}
        </motion.p>
        <motion.p 
          className="text-xs sm:text-sm text-gray-400 leading-relaxed mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
        >
          {description}
        </motion.p>
      </motion.div>

      {/* Point and vertical line */}
      <div className="absolute bottom-0 flex flex-col items-center z-10 mt-10">
        {/* Glowing point with sonar effect */}
        <div className="relative">
          {/* Single sonar pulse ring */}
          <motion.div
            className="absolute rounded-full border-2 border-[#00ffcc]"
            initial={{ width: '100%', height: '100%', opacity: 0.7, top: 0, left: 0 }}
            animate={{ 
              width: ['100%', '300%'], 
              height: ['100%', '300%'], 
              opacity: [0.5, 0],
              top: ['0%', '-100%'],
              left: ['0%', '-100%']
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear"
            }}
            style={{
              boxShadow: '0 0 6px rgba(0, 255, 204, 0.3)',
            }}
          />
          <motion.div
            className="absolute rounded-full border border-[#00ffcc]"
            initial={{ width: '100%', height: '100%', opacity: 0.3, top: 0, left: 0 }}
            animate={{ 
              width: ['100%', '250%'], 
              height: ['100%', '250%'], 
              opacity: [0.3, 0],
              top: ['0%', '-75%'],
              left: ['0%', '-75%']
            }}
            transition={{
              duration: 3,
              delay: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeOut",
              times: [0, 1]
            }}
            style={{
              boxShadow: '0 0 4px rgba(0, 255, 204, 0.2)',
            }}
          />
          <motion.div
            className="absolute rounded-full border border-[#00ffcc]"
            initial={{ width: '100%', height: '100%', opacity: 0.5, top: 0, left: 0 }}
            animate={{ 
              width: ['100%', '400%'], 
              height: ['100%', '400%'], 
              opacity: [0.5, 0],
              top: ['0%', '-150%'],
              left: ['0%', '-150%']
            }}
            transition={{
              duration: 3,
              delay: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeOut",
              times: [0, 1]
            }}
            style={{
              boxShadow: '0 0 4px rgba(0, 255, 204, 0.2)',
            }}
          />
          
          {/* Main glowing point */}
          <motion.div 
            className={`w-4 h-4 rounded-full ${isLive ? 'bg-green-400' : 'bg-green-500'} relative z-20`}
            initial={{ scale: 0 }}
            animate={isVisible ? {
              scale: 1,
              boxShadow: isLive ? [
                '0 0 15px 5px rgba(0, 255, 153, 0.5)',
                '0 0 25px 10px rgba(0, 255, 153, 0.8)',
                '0 0 15px 5px rgba(0, 255, 153, 0.5)'
              ] : '0px 0px 16px #62e977'
            } : { scale: 0 }}
            transition={isLive ? {
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              },
              scale: {
                duration: 0.5,
                delay: index * 0.2 + 0.7
              }
            } : {
              duration: 0.5,
              delay: index * 0.2 + 0.7
            }}
          />
        </div>
        
        {/* Vertical line */}
        <motion.div 
          className={`w-[2px] ${isLive ? 'bg-green-400' : 'bg-green-500'} shadow-[0px_0px_16px_#62e977]`}
          initial={{ height: 0 }}
          animate={isVisible ? { height: 80 } : { height: 0 }}
          transition={{ duration: 0.7, delay: index * 0.2 + 0.8 }}
          style={{ transformOrigin: 'top' }}
        />
      </div>
    </motion.div>
  );
}
