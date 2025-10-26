import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const Projects = () => {
  const projects = [
    {
      title: 'BBQ Restaurant Website',
      description: 'Modern restaurant website with online ordering system, menu showcase, and table reservations. Features responsive design and smooth animations.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/kami2611',
      demo: '#',
      type: 'MERN',
      image: '/projects/bbqwebdesign.png',
    },
    {
      title: 'Cryptology App',
      description: 'A secure cross-platform application for exploring the world of cryptology. Features include advanced encryption tools, secure message sharing.',
      tags: ['Flutter', 'Firebase', 'Provider', 'Charts'],
      github: 'https://github.com/kami2611',
      demo: '#',
      type: 'Flutter',
      image: '/projects/DriFit.png',
    },
    {
      title: 'FoodMood Delivery App',
      description: 'Food delivery mobile application with real-time tracking, multiple restaurant partnerships, and seamless payment integration.',
      tags: ['Flutter', 'Firebase', 'Google Maps', 'Razorpay'],
      github: 'https://github.com/kami2611',
      demo: '#',
      type: 'Flutter',
      image: '/projects/foodmood.png',
    },
    {
      title: 'Social Design Platform',
      description: 'Creative social platform for designers to showcase portfolios, collaborate on projects, and connect with potential clients.',
      tags: ['React', 'Express', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/kami2611',
      demo: '#',
      type: 'MERN',
      image: '/projects/socialdesign.png',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of our recent work in mobile and web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
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
