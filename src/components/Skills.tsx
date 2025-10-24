import { Card } from '@/components/ui/card';

export const Skills = () => {
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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our technical toolkit for building modern applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-6 text-primary">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 0.1 + 0.2}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
