import { motion } from "framer-motion";
import { Terminal, Shield, Network } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Cybersecurity Enthusiast & Network Security Specialist";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-30"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{ 
              y: [null, -20, 20],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2, 
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Terminal-style intro */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-border bg-card/50 backdrop-blur-sm"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="font-mono text-sm text-muted-foreground">
              ~/portfolio <span className="text-primary">$</span> whoami
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-foreground">Krish</span>
            <span className="text-gradient neon-glow"> Shrestha</span>
          </motion.h1>

          {/* Typing effect title */}
          <motion.div 
            className="h-8 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-xl md:text-2xl font-mono text-muted-foreground">
              {displayText}
              <span className="typing-cursor" />
            </p>
          </motion.div>

          {/* Icon badges */}
          <motion.div 
            className="flex justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { icon: Shield, label: "Offensive Security" },
              { icon: Network, label: "Networking" },
              { icon: Terminal, label: "Linux" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="flex flex-col items-center gap-2 group"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="p-3 rounded-lg border border-border bg-card/50 group-hover:border-primary group-hover:neon-border transition-all duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a
              href="#contact"
              className="px-8 py-3 font-mono text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 neon-border"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 font-mono text-sm font-medium border border-border text-foreground rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;