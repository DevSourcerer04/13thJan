
import React from 'react';
import { motion } from 'framer-motion';
import BackgroundLayer from '../BackgroundLayer';

const SnowBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Background layer: Tiny, slow, blurred flakes */}
    {Array.from({ length: 80 }).map((_, i) => {
      const size = Math.random() * 2 + 1;
      return (
        <motion.div
          key={`bg-snow-${i}`}
          className="absolute bg-white rounded-full blur-[1px]"
          style={{ 
            width: size, 
            height: size,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.3 + 0.1,
          }}
          initial={{ y: -50 }}
          animate={{
            y: '110dvh',
            x: Math.random() * 40 - 20,
          }}
          transition={{
            duration: 20 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * -30 // Start mid-animation
          }}
        />
      );
    })}
    
    {/* Foreground layer: Larger, crisp flakes */}
    {Array.from({ length: 60 }).map((_, i) => {
      const size = Math.random() * 4 + 2;
      return (
        <motion.div
          key={`fg-snow-${i}`}
          className="absolute bg-white rounded-full blur-[0.3px] shadow-[0_0_8px_rgba(255,255,255,0.3)]"
          style={{ 
            width: size, 
            height: size,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.6 + 0.2,
          }}
          initial={{ y: -50 }}
          animate={{
            y: '110dvh',
            x: Math.random() * 100 - 50,
            rotate: 360
          }}
          transition={{
            duration: 10 + Math.random() * 12,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * -15 // Start mid-animation
          }}
        />
      );
    })}
  </div>
);

const IntroCard: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0F172A] px-4 text-center relative overflow-hidden">
      <BackgroundLayer isActive={isActive}>
        <SnowBackground />
      </BackgroundLayer>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="z-10 relative"
      >
        <h1 className="text-4xl md:text-8xl font-serif text-[#F8F5F0] mb-4 md:mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] leading-tight">
          Hey Ishani.
        </h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 0.8 } : { opacity: 0 }}
          transition={{ delay: 1.2, duration: 1.5 }}
          className="text-lg md:text-3xl text-[#C7BCA1] italic font-serif"
        >
          I made something small — <br className="md:hidden" /> just for your birthday.
        </motion.p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 md:bottom-16 text-[#D4AF37] uppercase tracking-[0.4em] text-[9px] md:text-xs font-bold"
      >
        scroll to begin
      </motion.div>
    </div>
  );
};

export default IntroCard;
