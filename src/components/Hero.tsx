import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StarryBackground } from './StarryBackground';
import { useTypewriter } from '@/hooks/useTypewriter';

export const Hero = () => {
  const roles = ['Vibe Coders', 'Web Developers', 'Entrepreneurs', 'App Developers', 'Marketers'];
  const currentRole = useTypewriter(roles, 100, 50, 2000);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <StarryBackground />
      
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <p className="text-xl text-foreground/80 animate-slide-up">Hello, we are</p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Aroon Zafar &
                <br />
                Kamran Aslam
              </h1>
              <div className="text-2xl md:text-3xl text-foreground/90 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <span>We are </span>
                <span className="gradient-text font-semibold">
                  {currentRole}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Building beautiful mobile apps and full-stack web solutions. 
              From cross-platform Flutter applications to scalable MERN architectures.
            </p>

            <div className="flex flex-wrap items-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 glow-effect rounded-full px-8"
                onClick={() => scrollToSection('#projects')}
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-foreground/20 hover:bg-foreground/5 rounded-full px-8"
                onClick={() => scrollToSection('#contact')}
              >
                Get in touch
              </Button>
            </div>

            <div className="flex items-center gap-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={28} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={28} />
              </a>
              <a
                href="mailto:contact@portfolio.com"
                className="text-foreground/60 hover:text-primary transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>

          {/* Right side - Glowing Circle */}
          <div className="hidden lg:flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-[500px] h-[500px] rounded-full border-2 border-primary/30 glow-circle" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/5 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
