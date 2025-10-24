import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Mobile App',
      description: 'Full-featured shopping app built with Flutter, featuring product catalogs, cart management, and payment integration.',
      tags: ['Flutter', 'Firebase', 'Stripe', 'Provider'],
      github: '#',
      demo: '#',
      type: 'Flutter',
    },
    {
      title: 'Social Media Platform',
      description: 'MERN stack social network with real-time messaging, posts, likes, and user profiles.',
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      github: '#',
      demo: '#',
      type: 'MERN',
    },
    {
      title: 'Fitness Tracker App',
      description: 'Cross-platform fitness app with workout tracking, progress charts, and health metrics.',
      tags: ['Flutter', 'Dart', 'SQLite', 'Charts'],
      github: '#',
      demo: '#',
      type: 'Flutter',
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates, teams, and analytics.',
      tags: ['React', 'Express', 'MongoDB', 'Redux'],
      github: '#',
      demo: '#',
      type: 'MERN',
    },
    {
      title: 'Food Delivery App',
      description: 'Restaurant ordering app with real-time tracking, payments, and user reviews.',
      tags: ['Flutter', 'Firebase', 'Google Maps', 'Razorpay'],
      github: '#',
      demo: '#',
      type: 'Flutter',
    },
    {
      title: 'Blog CMS',
      description: 'Content management system with markdown editor, SEO optimization, and analytics.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Next.js'],
      github: '#',
      demo: '#',
      type: 'MERN',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of our recent work in mobile and web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
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

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-secondary text-foreground rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Button
                variant="outline"
                className="w-full mt-4 border-primary/30 hover:bg-primary/10"
                onClick={() => window.open(project.demo, '_blank')}
              >
                View Project
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
