import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StarryBackground } from './StarryBackground';

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <StarryBackground />
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground animate-slide-up">Hello, We're</p>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Aroon Zafar & Kamran Aslam
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-xl md:text-2xl text-muted-foreground animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <span className="gradient-text font-semibold">Flutter Developer</span>
              <span className="hidden md:inline">•</span>
              <span className="gradient-text font-semibold">MERN Stack Developer</span>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Building beautiful mobile apps and full-stack web solutions. 
            From cross-platform Flutter applications to scalable MERN architectures.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect"
              onClick={() => scrollToSection('#projects')}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
              onClick={() => scrollToSection('#contact')}
            >
              Get in Touch
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href="mailto:contact@portfolio.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
