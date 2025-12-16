import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';

interface SkillBarProps {
  name: string;
  level: number;
  isVisible: boolean;
  delay: number;
}

const SkillBar = ({ name, level, isVisible, delay }: SkillBarProps) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        setWidth(level);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, level, delay]);

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Flutter & Mobile',
      skills: [
        { name: 'Flutter', level: 95 },
        { name: 'Dart', level: 90 },
        { name: 'Firebase', level: 85 },
        { name: 'State Management', level: 90 },
        { name: 'UI/UX Design', level: 88 },
        { name: 'API Integration', level: 92 },
      ],
    },
    {
      title: 'MERN Stack',
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'React', level: 92 },
        { name: 'Node.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'REST APIs', level: 93 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS/Cloud', level: 80 },
        { name: 'Figma', level: 85 },
        { name: 'Agile/Scrum', level: 88 },
        { name: 'CI/CD', level: 82 },
      ],
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Our Expertise
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-white transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Our technical toolkit for building modern applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className={`p-6 bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              <h3 className="text-xl font-bold mb-6 text-primary">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    isVisible={isVisible}
                    delay={categoryIndex * 150 + skillIndex * 100 + 300}
                  />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
