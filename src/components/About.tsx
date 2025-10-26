import { Code, Smartphone } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const About = () => {
  const developers = [
    {
      name: 'Aroon Zafar',
      role: 'Flutter Developer',
      icon: Smartphone,
      description: 'Passionate Flutter developer specializing in creating beautiful, high-performance cross-platform mobile applications. Expert in Dart, state management (Provider, Riverpod, Bloc), and integrating RESTful APIs.',
      expertise: ['Flutter & Dart', 'Cross-platform Development', 'UI/UX Implementation', 'State Management', 'Firebase Integration', 'API Integration'],
    },
    {
      name: 'Kamran Aslam',
      role: 'MERN Stack Developer',
      icon: Code,
      description: 'Full-stack developer with expertise in building scalable web applications using MongoDB, Express.js, React, and Node.js. Skilled in creating RESTful APIs, database design, and modern frontend architectures.',
      expertise: ['MongoDB & Database Design', 'Express.js & Node.js', 'React & Redux', 'RESTful API Development', 'Authentication & Security', 'Cloud Deployment'],
    },
  ];

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">About Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Two developers, one vision: crafting exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {developers.map((dev, index) => (
            <Card
              key={dev.name}
              className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <dev.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{dev.name}</h3>
                  <p className="text-primary font-medium">{dev.role}</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">{dev.description}</p>

              <div className="space-y-2">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-primary">Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {dev.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
