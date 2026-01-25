import { motion } from "framer-motion";
import { Code, Wrench, Brain, Server } from "lucide-react";

const skillCategories = [
  {
    title: "Networking",
    icon: Server,
    color: "primary",
    skills: [
      "VLAN Configuration",
      "Network Segmentation",
      "Subnetting",
      "Layer 1 & 2 Troubleshooting",
      "Cisco Packet Tracer",
      "TCP/IP",
      "DNS",
      "DHCP",
    ],
  },
  {
    title: "Security Frameworks",
    icon: Wrench,
    color: "secondary",
    skills: [
      "MITRE ATT&CK",
      "Metasploit Framework",
      "ISO/IEC 27001",
      "VAPT Process",
      "CVSS Scoring",
    ],
  },
  {
    title: "Security Tools",
    icon: Code,
    color: "accent",
    skills: [
      "Nmap",
      "Wireshark",
      "Bettercap",
      "Burp Suite",
      "Metasploit",
      "DVWA",
      "TryHackMe",
    ],
  },
  {
    title: "Operating Systems",
    icon: Brain,
    color: "primary",
    skills: ["Kali Linux", "Ubuntu", "Windows", "VirtualBox", "VMware"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono">02.</span> Skills & Tools
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-card p-6 rounded-xl group hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-${category.color}/10 border border-${category.color}/20`}>
                  <category.icon className={`w-5 h-5 text-${category.color}`} />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="px-3 py-1 text-sm font-mono bg-muted rounded-md border border-border hover:border-primary hover:text-primary transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 glass-card p-6 rounded-xl"
        >
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Brain className="w-5 h-5 text-secondary" />
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Problem-solving",
              "Analytical Thinking",
              "Attention to Detail",
              "Teamwork",
              "Adaptability",
              "Time Management",
              "Critical Thinking",
              "Self-motivation",
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 text-sm bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20 text-foreground"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;