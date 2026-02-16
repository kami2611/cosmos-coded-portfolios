import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StarryBackground } from './StarryBackground';
import { useTypewriter } from '@/hooks/useTypewriter';

export const Hero = () => {
  const roles = ['Web Developers', 'Entrepreneurs', 'App Developers', 'Marketers', 'Vibe Coders'];
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
              {/* Updated: 'Hello, we are' is now a styled badge placed above and aligned with the headline */}
              <div className="relative">
                <div className="absolute -top-6 md:-top-8 left-0">
                  <span className="inline-flex items-center gap-3 bg-foreground/6 text-foreground/80 px-3 py-1 rounded-full text-sm uppercase tracking-widest font-medium shadow-sm animate-slide-up" style={{ animationDelay: '0s' }}>
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent inline-block" />
                    Hello, we are
                  </span>
                </div>

                <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-foreground leading-tight mt-8 md:mt-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  NovaNest
                  <br />
                  EnterPrises
                </h1>
              </div>

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
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 hover:scale-105 glow-effect rounded-full px-8 transition-all duration-300"
                onClick={() => scrollToSection('#projects')}
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-foreground bg-transparent hover:bg-primary/20 hover:border-primary hover:text-white rounded-full px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                onClick={() => scrollToSection('#contact')}
              >
                Get in touch
              </Button>
            </div>

            <div className="flex items-center gap-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <a
                href="https://github.com/kami2611"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github size={28} />
              </a>
              <a
                href="https://pk.linkedin.com/in/muhammad-kamran-61796836a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:kamranmemories26@gmail.com"
                className="text-foreground/60 hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>

          {/* Right side - Glowing Circle */}
          <div className="hidden lg:flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative animate-float">
              <div className="w-[500px] h-[500px] rounded-full border-2 border-primary/30 glow-circle" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/5 to-transparent" />
              {/* Inner rotating ring */}
              <div className="absolute inset-8 rounded-full border border-dashed border-primary/20 animate-spin-slow" />
              {/* Center glow */}
              <div className="absolute inset-20 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
