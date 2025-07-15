'use client';

import { RocketIcon, StarIcon, UserIcon, ShuffleIcon } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function WhyChoose() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
          Why Choose Forezy?
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Feature
            icon={<RocketIcon size={32} strokeWidth={1.5} />}
            title="Easy Forecasting"
            description="Predict real events with our easy forecasting"
            delay={0}
          />
          <Feature
            icon={<StarIcon size={32} strokeWidth={1.5} />}
            title="Earn Rewards"
            description="Get rewarded for accurate predictions and participation"
            delay={0.1}
          />
          <Feature
            icon={<UserIcon size={32} strokeWidth={1.5} />}
            title="Build Reputation"
            description="Establish yourself as a top predictor in the community"
            delay={0.2}
          />
          <Feature
            icon={<ShuffleIcon size={32} strokeWidth={1.5} />}
            title="Decentralized"
            description="Powered by blockchain for transparency and trust"
            delay={0.3}
          />
        </motion.div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;  // y position within the element
    
    setMousePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay
      }
    }
  };

  return (
    <motion.div 
      className="flex flex-col items-center text-center"
      variants={itemVariants}
    >
      <motion.div 
        className="w-full h-full min-h-[280px] p-6 rounded-xl relative overflow-hidden"
        style={{
          background: isHovering 
            ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 255, 153, 0.15), rgba(0, 0, 0, 0) 60%),
               linear-gradient(135deg, rgba(0, 255, 153, 0.1), rgba(0, 0, 0, 0.2), rgba(0, 255, 153, 0.1))`
            : `linear-gradient(135deg, rgba(0, 255, 153, 0.05), rgba(0, 0, 0, 0.2), rgba(0, 255, 153, 0.05))`,
          boxShadow: isHovering 
            ? `0 0 20px rgba(0, 255, 153, 0.3), inset 0 0 20px rgba(0, 255, 153, 0.1)` 
            : `0 0 10px rgba(0, 255, 153, 0.1), inset 0 0 10px rgba(0, 255, 153, 0.05)`,
          border: '1px solid rgba(0, 255, 153, 0.3)',
          backdropFilter: 'blur(5px)',
          transform: isHovering ? `perspective(1000px) rotateX(${(mousePosition.y - 50) / 10}deg) rotateY(${(mousePosition.x - 50) / -10}deg) scale3d(1.02, 1.02, 1.02)` : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transition: 'all 0.3s ease'
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        whileHover={{ 
          boxShadow: "0 0 30px rgba(0, 255, 153, 0.3), inset 0 0 20px rgba(0, 255, 153, 0.2)"
        }}
      >
        {/* Holographic overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `linear-gradient(135deg, 
              rgba(255, 255, 255, 0) 0%, 
              rgba(255, 255, 255, 0.05) 40%, 
              rgba(255, 255, 255, 0.1) 60%, 
              rgba(255, 255, 255, 0) 100%)`,
            transform: isHovering ? `translateX(${(mousePosition.x - 50) / 2}%)` : 'translateX(0%)',
            transition: 'transform 0.3s ease'
          }}
        />
        
        {/* Content */}
        <div className="flex flex-col items-center justify-center h-full gap-4 relative z-10">
          <motion.div 
            className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full border-2 border-green-500 bg-black bg-opacity-50"
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(0, 255, 153, 0.5)" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            initial={{ boxShadow: "0 0 0px rgba(0, 255, 153, 0)" }}
            animate={{ boxShadow: "0 0 15px rgba(0, 255, 153, 0.3)" }}
          >
            <motion.div 
              className="text-green-500"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              {icon}
            </motion.div>
          </motion.div>
          <motion.h3 
            className="text-sm sm:text-base font-semibold font-orbitron"
            whileHover={{ scale: 1.05, color: "#00ff99" }}
          >
            {title}
          </motion.h3>
          <motion.p className="text-xs text-gray-400 leading-relaxed max-w-[180px]">
            {description}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}
