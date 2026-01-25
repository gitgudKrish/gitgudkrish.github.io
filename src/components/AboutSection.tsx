import { motion } from "framer-motion";
import { Target, MapPin, GraduationCap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono">01.</span> About Me
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Career Objective */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 rounded-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Career Objective</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Driven by a strong interest in computer networking and system security, I have developed 
              a solid foundation in Linux, network configuration, and hands-on troubleshooting. My goal 
              is to grow into a <span className="text-primary">Network Administrator</span> role by gaining 
              real-world experience in managing, supporting, and securing network systems. I am eager to 
              work in collaborative environments where I can contribute to reliable IT operations while 
              continuing to strengthen my technical and problem-solving skills.
            </p>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-secondary/10 border border-secondary/20">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Location</h3>
              </div>
              <p className="text-muted-foreground font-mono">Gokarna, Kathmandu, Nepal</p>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
                  <GraduationCap className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">BSc (Hons) Computer Networking and IT Security</p>
                  <p className="text-sm text-muted-foreground">Islington College / London Metropolitan University</p>
                  <p className="text-xs text-primary font-mono">2023 - Present</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;