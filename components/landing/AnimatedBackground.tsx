'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Dot {
  x: number;
  y: number;
  size: number;
  opacity: number;
  distance: number;
  id: string;
  baseY: number; // Store original Y position for wave animation
}

interface FocusPoint {
  x: number;
  y: number;
  radius: number;
  intensity: number;
  speed: number;
  direction: { x: number; y: number };
}

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dots, setDots] = useState<Dot[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [time, setTime] = useState(0); // Time state for wave animation
  const animationRef = useRef<number>();
  const [focusPoints, setFocusPoints] = useState<FocusPoint[]>([]);
  
  // Generate dots in a clean grid pattern
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
        
        // Create a denser grid pattern but still organized
        const spacing = 30; // Reduced spacing for more dots
        const newDots: Dot[] = [];
        
        // Calculate rows and columns with padding to ensure full coverage
        const cols = Math.ceil(width / spacing) + 2; // Add extra columns
        const rows = Math.ceil(height / spacing) + 2; // Add extra rows
        
        // Calculate offset to center the grid
        const offsetX = (cols * spacing - width) / 2;
        const offsetY = (rows * spacing - height) / 2;
        
        // Generate organized grid pattern with more dots
        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            // Create different patterns based on position
            // This creates a more interesting but still organized pattern
            const patternType = (Math.floor(row / 3) + Math.floor(col / 3)) % 4;
            
            // Skip dots based on pattern type to create organized variations
            if (patternType === 0) {
              // Pattern 1: Checkerboard
              if ((row + col) % 2 !== 0) continue;
            } else if (patternType === 1) {
              // Pattern 2: Every third dot
              if ((row * col) % 3 !== 0) continue;
            } else if (patternType === 2) {
              // Pattern 3: Diagonal lines
              if ((row - col) % 4 !== 0) continue;
            } else {
              // Pattern 4: Scattered dots
              if ((row + col * 2) % 5 !== 0) continue;
            }
            
            // Calculate position with offset to center the grid
            const x = col * spacing - offsetX;
            const y = row * spacing - offsetY;
            
            // Vary size slightly based on position for visual interest
            const size = ((row + col) % 3) + 1.5;
            
            // Vary opacity slightly based on position
            const opacity = 0.2 + ((row % 5) * 0.03);
            
            newDots.push({
              x,
              y,
              baseY: y, // Store original Y position for wave animation
              size,
              opacity,
              distance: 9999, // Initialize with large distance
              id: `dot-${row}-${col}`
            });
          }
        }
        
        setDots(newDots);
        
        // Create focus points
        const newFocusPoints: FocusPoint[] = [];
        
        // Create 3-5 focus points
        const numPoints = Math.floor(Math.random() * 3) + 3;
        
        for (let i = 0; i < numPoints; i++) {
          // Create focus points at interesting positions
          newFocusPoints.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 100 + 80, // Random radius between 80-180
            intensity: Math.random() * 0.4 + 0.2, // Random intensity
            speed: Math.random() * 1.2 + 0.8, // Increased speed (was 0.5 + 0.2)
            direction: {
              x: Math.random() * 2 - 1, // Random direction vector
              y: Math.random() * 2 - 1
            }
          });
        }
        
        setFocusPoints(newFocusPoints);
      }
    };
    
    updateDimensions();
    
    // Debounce resize event for better performance
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateDimensions, 250);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);
  
  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top } = containerRef.current.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        
        setMousePosition({ x, y });
        setIsHovering(true);
        
        // Use requestAnimationFrame for smoother updates
        requestAnimationFrame(() => {
          setDots(prevDots => 
            prevDots.map(dot => {
              const dx = dot.x - x;
              const dy = dot.y - y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              return { ...dot, distance };
            })
          );
        });
      }
    };
    
    const handleMouseLeave = () => {
      setIsHovering(false);
      
      // Reset all dots to inactive state
      setDots(prevDots => 
        prevDots.map(dot => ({
          ...dot,
          distance: 9999
        }))
      );
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  // Wave animation effect and focus point movement
  useEffect(() => {
    const animateWaves = () => {
      setTime(prevTime => prevTime + 0.02); // Increased time increment (was 0.01)
      
      // Move focus points
      setFocusPoints(prevPoints => 
        prevPoints.map(point => {
          // Calculate new position
          let newX = point.x + point.direction.x * point.speed;
          let newY = point.y + point.direction.y * point.speed;
          
          // Bounce off edges
          let newDirX = point.direction.x;
          let newDirY = point.direction.y;
          
          if (newX < 0 || newX > dimensions.width) {
            newDirX = -newDirX;
            newX = Math.max(0, Math.min(dimensions.width, newX));
          }
          
          if (newY < 0 || newY > dimensions.height) {
            newDirY = -newDirY;
            newY = Math.max(0, Math.min(dimensions.height, newY));
          }
          
          return {
            ...point,
            x: newX,
            y: newY,
            direction: {
              x: newDirX,
              y: newDirY
            }
          };
        })
      );
      
      animationRef.current = requestAnimationFrame(animateWaves);
    };
    
    animationRef.current = requestAnimationFrame(animateWaves);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);
  
  // Process dots for rendering with wave effect and focus points
  const visibleDots = useMemo(() => {
    const maxDistance = 180;
    
    return dots.map(dot => {
      // Calculate mouse proximity
      const isActive = dot.distance < maxDistance;
      const mouseProximity = Math.max(0, 1 - dot.distance / maxDistance);
      
      // Calculate proximity to focus points
      let maxFocusProximity = 0;
      
      focusPoints.forEach(point => {
        const dx = dot.x - point.x;
        const dy = dot.y - point.y; // Use point.y instead of point.baseY
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Calculate proximity with point's radius and intensity
        const proximity = Math.max(0, 1 - distance / point.radius) * point.intensity;
        maxFocusProximity = Math.max(maxFocusProximity, proximity);
      });
      
      // Use the higher of the two proximity values
      const proximity = Math.max(mouseProximity, maxFocusProximity);
      const isActiveFromEither = isActive || maxFocusProximity > 0.1;
      
      const glowOpacity = proximity * 0.8;
      const glowSize = proximity * 12 + 1;
      
      // Wave calculation - multiple overlapping waves for more interesting effect
      const waveAmplitude1 = 8; // First wave amplitude
      const waveAmplitude2 = 5; // Second wave amplitude
      const waveFrequency1 = 0.01; // First wave frequency
      const waveFrequency2 = 0.02; // Second wave frequency
      const waveSpeed1 = 0.8; // Increased first wave speed (was 0.5)
      const waveSpeed2 = 1.2; // Increased second wave speed (was 0.7)
      
      // Calculate wave offset using sine waves
      const wave1 = Math.sin(dot.x * waveFrequency1 + time * waveSpeed1) * waveAmplitude1;
      const wave2 = Math.sin(dot.x * waveFrequency2 + time * waveSpeed2) * waveAmplitude2;
      
      // Add diagonal wave for more complexity
      const diagonalWave = Math.sin((dot.x + dot.baseY) * 0.015 + time * 1.0) // Increased diagonal wave speed (was 0.6)
        * 4;
      
      // Combine waves
      const waveOffset = wave1 + wave2 + diagonalWave;
      
      return {
        ...dot,
        y: dot.baseY + waveOffset, // Apply wave offset to y position
        isActive: isActiveFromEither,
        proximity,
        glowOpacity,
        glowSize
      };
    });
  }, [dots, time, focusPoints]);
  
  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
    >
      {visibleDots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full"
          style={{
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            backgroundColor: dot.isActive ? '#00ff99' : '#1a3a2a',
            opacity: dot.isActive ? dot.opacity + dot.proximity * 0.7 : dot.opacity,
            boxShadow: dot.isActive 
              ? `0 0 ${dot.glowSize}px ${dot.glowSize / 2}px rgba(0, 255, 153, ${dot.glowOpacity})`
              : 'none',
            transition: 'box-shadow 0.3s ease-out, opacity 0.3s ease-out, background-color 0.3s ease-out'
          }}
        />
      ))}
    </div>
  );
} 