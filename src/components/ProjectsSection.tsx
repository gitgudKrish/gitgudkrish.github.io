import { motion } from "framer-motion";
import { ExternalLink, Terminal, Shield, Car, Users } from "lucide-react";

const projects = [
  {
    title: "ARP Spoofing Simulation",
    description:
      "Simulated ARP spoofing and Man-in-the-Middle attacks in a lab environment to capture unencrypted credentials. Tested and evaluated mitigation techniques including static ARP entries, Dynamic ARP Inspection (DAI), and Snort IDS.",
    tools: ["Ettercap", "Bettercap", "Wireshark", "Metasploitable"],
    icon: Shield,
    color: "primary",
  },
  {
    title: "Land Rental Automation System",
    description:
      "Developed a land rental management system that enforces full-parcel rentals and returns, preventing partial transactions. The system applies a 10% penalty fee for late returns and automatically updates land status.",
    tools: ["Python"],
    icon: Terminal,
    color: "secondary",
  },
  {
    title: "Student & Teacher Management System",
    description:
      "Built a GUI-based application applying OOP concepts to manage student grading, teacher performance evaluation, and salary tracking. The system includes the ability to update records and remove teachers when required.",
    tools: ["Java", "AWT", "Swing"],
    icon: Users,
    color: "accent",
  },
  {
    title: "Autonomous Arduino Car",
    description:
      "Created a cost-effective IoT project using Arduino to build a self-driving car with real-time obstacle detection and avoidance using ultrasonic sensors. Integrated motor driver shields and servo motors for autonomous movement.",
    tools: ["Arduino", "C/C++", "IoT"],
    icon: Car,
    color: "primary",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono">04.</span> Projects
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass-card rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Header */}
              <div className="p-6 pb-0">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-${project.color}/10 border border-${project.color}/20 group-hover:neon-border transition-all duration-300`}>
                    <project.icon className={`w-6 h-6 text-${project.color}`} />
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-muted-foreground hover:text-primary cursor-pointer"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.div>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Footer */}
              <div className="p-6 pt-4 border-t border-border/50">
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 text-xs font-mono bg-muted rounded text-muted-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;