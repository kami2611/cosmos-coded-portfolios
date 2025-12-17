import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'royale canadian mint gold website',
      description: 'Premium online marketplace for authentic Canadian gold bullion and precious metals. Features secure transactions, real-time pricing updates, detailed product specifications, and expert guidance for collectors and investors.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/kami2611',
      demo: 'https://finegoldbullion.ca/',
      type: 'MERN',
      image: '/projects/royalcanadian.png',
    },
    {
      title: 'Bitso crypto app',
      description: 'A secure cross-platform application for exploring the world of cryptology. Features include advanced encryption tools, secure message sharing. it contains real-time market data, portfolio management, and seamless trading functionalities.',
      tags: ['Flutter', 'Firebase', 'Provider', 'Charts'],
      github: 'https://github.com/kami2611',
      demo: 'https://bitso.com/',
      type: 'Flutter',
      image: '/projects/bitsoo.png',
    },
    {
      title: 'Funded next',
      description: 'Food delivery mobile application with real-time tracking, multiple restaurant partnerships, and seamless payment integration.',
      tags: ['Flutter', 'Firebase', 'Google Maps', 'Razorpay'],
      github: 'https://github.com/kami2611',
      demo: 'https://fundednext.com/',
      type: 'Flutter',
      image: '/projects/fundednext.png',
    },
    {
      title: 'Zera Creative',
      description: 'Creative social platform for designers to showcase portfolios, collaborate on projects, and connect with potential clients.',
      tags: ['React', 'Express', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/kami2611',
      demo: 'https://zeracreative.com/',
      type: 'MERN',
      image: '/projects/zeracreative.png',
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-card/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Our Work
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-white transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            A showcase of our recent work in mobile and web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`p-6 bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group overflow-hidden hover:-translate-y-2 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => window.open(project.demo, '_blank')}
            >
              {/* Project Image */}
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20">
                    {project.type}
                  </span>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.demo}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-secondary text-foreground rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
