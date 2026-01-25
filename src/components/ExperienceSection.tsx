import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Offensive Security Intern",
    company: "inRed Labs Pvt. Ltd.",
    location: "Kamalpokhari, Kathmandu",
    period: "Jul 2025 - Oct 2025",
    points: [
      "Gained hands-on experience with Linux systems, including file system structure, permissions, user management, and process handling.",
      "Applied OSINT and reconnaissance techniques such as Google dorking and DNS enumeration to identify potential vulnerabilities.",
      "Performed vulnerability scanning and exploitation in a controlled lab environment, covering SMB, RDP, and SUID privilege escalation scenarios.",
      "Studied and practiced the VAPT process, from information gathering and scanning to exploitation and reporting.",
      "Built and configured vulnerable virtual labs and web applications for testing, study, and CTF challenges.",
    ],
  },
  {
    title: "Networking and IT Support Intern",
    company: "Dusit Princess Nepal",
    location: "Lazimpat, Kathmandu",
    period: "Aug 2024 - Nov 2024",
    points: [
      "Provided day-to-day IT and network support across hotel departments to ensure uninterrupted operations.",
      "Assisted with network setup, maintenance, and troubleshooting, working closely with the IT team to maintain stable and secure connectivity.",
      "Gained hands-on experience in VLAN configuration, network segmentation, and resolving Layer 1 and Layer 2 issues.",
      "Used Cisco Packet Tracer to simulate and plan network changes prior to implementation.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono">03.</span> Experience
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 w-4 h-4 rounded-full bg-primary border-4 border-background neon-border ${
                  index % 2 === 0
                    ? "left-0 md:left-auto md:-right-2 transform md:translate-x-1/2"
                    : "left-0 md:-left-2 transform md:-translate-x-1/2"
                }`}
              />

              <div className="ml-8 md:ml-0 glass-card p-6 rounded-xl hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-end text-sm text-muted-foreground">
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.points.map((point, pointIndex) => (
                    <motion.li
                      key={pointIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.2 + pointIndex * 0.1 }}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-primary mt-1">▹</span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;