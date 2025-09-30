import { motion } from 'framer-motion';
import { Shirt, Scissors, Tag, Sparkles } from 'lucide-react';

// Define clothing-themed icons with properties
const clothingIcons = [
  { icon: Shirt, size: 50, color: 'from-blue-400/20 to-blue-600/20' },
  { icon: Scissors, size: 40, color: 'from-purple-400/20 to-purple-600/20' },
  { icon: Tag, size: 45, color: 'from-yellow-400/20 to-yellow-600/20' },
  { icon: Sparkles, size: 35, color: 'from-orange-400/20 to-orange-600/20' },
  { icon: Shirt, size: 55, color: 'from-teal-400/20 to-teal-600/20' },
  { icon: Scissors, size: 38, color: 'from-pink-400/20 to-pink-600/20' },
  { icon: Tag, size: 50, color: 'from-green-400/20 to-green-600/20' },
  { icon: Sparkles, size: 42, color: 'from-blue-400/20 to-blue-600/20' },
  { icon: Shirt, size: 60, color: 'from-purple-400/20 to-purple-600/20' },
  { icon: Tag, size: 48, color: 'from-orange-400/20 to-orange-600/20' },
];

// Floating elements component
const HeroFloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {clothingIcons.map((element, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * 1200,
            y: Math.random() * 800,
            scale: Math.random() * 0.5 + 0.5,
            rotate: Math.random() * 20 - 10,
          }}
          animate={{
            y: [null, -30, null],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeInOut',
          }}
          style={{
            width: element.size,
            height: element.size,
          }}
        >
          <div className={`w-full h-full bg-gradient-to-r ${element.color} rounded-full flex items-center justify-center border border-white/30`}>
            <element.icon size={element.size * 0.6} className="text-white/80" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroFloatingElements;