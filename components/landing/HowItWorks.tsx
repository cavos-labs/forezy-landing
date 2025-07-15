'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
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
    <section className="w-full bg-black text-white px-4 sm:px-6 md:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold font-orbitron mb-8 sm:mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          How it works
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Step
            number="1"
            title="Make Predictions"
            description="Browse events and make your forecasts on events you believe in"
            index={0}
            isVisible={isInView}
          />
          <Step
            number="2"
            title="Track Performance"
            description="Monitor your predictions and see how you compare up against others"
            index={1}
            isVisible={isInView}
          />
          <Step
            number="3"
            title="Earn & Grow"
            description="Collect rewards for accurate predictions and build your reputation"
            index={2}
            isVisible={isInView}
          />
        </motion.div>
      </div>
    </section>
  );
}

function Step({
  number,
  title,
  description,
  index,
  isVisible,
}: {
  number: string;
  title: string;
  description: string;
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
  
  const circleVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
        delay: index * 0.2 + 0.3
      }
    }
  };

  // Create a connecting line between steps (except for the last one)
  const showConnector = index < 2;

  return (
    <motion.div 
      className="flex flex-col items-center text-center gap-3 relative"
      variants={itemVariants}
    >
      {/* Connector Line (for desktop) */}
      {showConnector && (
        <motion.div 
          className="hidden sm:block absolute h-[2px] bg-green-500 top-[32px] left-[calc(50%+8px)] w-[calc(100%)]"
          style={{ opacity: 0.6, zIndex: 5 }}
          initial={{ scaleX: 0, transformOrigin: "left" }}
          animate={{ scaleX: isVisible ? 1 : 0 }}
          transition={{ delay: index * 0.2 + 0.8, duration: 0.8 }}
        />
      )}

      {/* Green Circle */}
      <motion.div 
        className="w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center rounded-full border-2 border-green-500 text-green-500 text-xl sm:text-2xl font-orbitron relative z-10 bg-black"
        variants={circleVariants}
        whileHover={{ 
          scale: 1.1, 
          boxShadow: "0 0 30px rgba(0, 255, 153, 0.4)",
          borderWidth: "3px"
        }}
        initial={{ boxShadow: "0 0 0px rgba(0, 255, 153, 0)" }}
        animate={{ boxShadow: "0 0 15px rgba(0, 255, 153, 0.3)" }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.5, duration: 0.3 }}
        >
          {number}
        </motion.span>
      </motion.div>

      {/* Title */}
      <motion.h3 
        className="text-base sm:text-lg font-semibold font-orbitron"
        whileHover={{ color: "#00ff99", scale: 1.05 }}
      >
        {title}
      </motion.h3>

      {/* Description */}
      <motion.p 
        className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-[220px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.2 + 0.6, duration: 0.5 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
