import { motion } from "framer-motion";
import { Award, Cloud, Shield, Settings } from "lucide-react";

const certifications = [
  { name: "AWS Academy Cloud Architecting", year: "2025", icon: Cloud },
  { name: "AWS Academy Cloud Foundations", year: "2025", icon: Cloud },
  { name: "AWS Academy Cloud Operations", year: "2025", icon: Settings },
  { name: "AWS Academy Cloud Security Foundations", year: "2025", icon: Shield },
  { name: "DevOps Foundations: Bridging Development and Operations", year: "2025", icon: Settings },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono">05.</span> Certifications
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-5 rounded-xl group hover:border-primary/50 transition-all duration-300 cursor-default"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover:neon-border transition-all">
                  <cert.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-sm leading-tight mb-1 group-hover:text-primary transition-colors">
                    {cert.name}
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground">
                    {cert.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;