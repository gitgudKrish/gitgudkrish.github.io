import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono">06.</span> Get In Touch
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent mx-auto" />
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            I'm currently looking for opportunities in network administration and cybersecurity. 
            Feel free to reach out if you'd like to connect!
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <a
                href="mailto:Krishshrestha768@gmail.com"
                className="flex items-center gap-4 p-4 glass-card rounded-xl group hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:neon-border transition-all">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-mono text-sm group-hover:text-primary transition-colors">
                    Krishshrestha768@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:9841405466"
                className="flex items-center gap-4 p-4 glass-card rounded-xl group hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/20 group-hover:neon-border transition-all">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-mono text-sm group-hover:text-primary transition-colors">
                    +977 9841405466
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 glass-card rounded-xl">
                <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-mono text-sm">Gokarna, Kathmandu, Nepal</p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              <a
                href="https://github.com/gitgudKrish"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass-card rounded-xl group hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-muted border border-border group-hover:neon-border transition-all">
                  <Github className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="font-mono text-sm group-hover:text-primary transition-colors">
                    @gitgudKrish
                  </p>
                </div>
                <Send className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              <a
                href="https://www.linkedin.com/in/krishshrestha768/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass-card rounded-xl group hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-muted border border-border group-hover:neon-border transition-all">
                  <Linkedin className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-mono text-sm group-hover:text-primary transition-colors">
                    Krish Shrestha
                  </p>
                </div>
                <Send className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              <motion.a
                href="mailto:Krishshrestha768@gmail.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-auto p-4 bg-primary text-primary-foreground rounded-xl font-mono text-center font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 neon-border"
              >
                Say Hello 👋
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
