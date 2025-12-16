import { useState, useEffect, useRef } from 'react';
import { 
  Linkedin, 
  Twitter, 
  Mail,
  Code,
  Palette,
  TrendingUp,
  Megaphone,
  Users
} from 'lucide-react';
import { Card } from '@/components/ui/card';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  expertise: string[];
  icon: React.ElementType;
  socials: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  index: number;
}

const TeamMemberCard = ({ name, role, description, expertise, icon: Icon, socials, index }: TeamMemberProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card className="h-full p-6 bg-card border-border hover:border-primary/50 transition-all duration-500 group relative overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Photo placeholder */}
        <div className="relative z-10 mb-6 flex justify-center">
          <div className="relative">
            {/* Photo container with placeholder */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-4 border-primary/30 flex items-center justify-center overflow-hidden group-hover:scale-105 group-hover:border-primary/50 transition-all duration-500">
              {/* Placeholder icon - replace with actual image */}
              <Icon className="w-16 h-16 text-primary/60" />
              {/* When you have actual photos, replace above with:
              <img 
                src={photoUrl} 
                alt={name} 
                className="w-full h-full object-cover"
              />
              */}
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" style={{ animationDuration: '20s' }} />
          </div>
        </div>

        {/* Name & Role */}
        <div className="relative z-10 text-center mb-4">
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
          <p className="text-primary font-medium text-sm">{role}</p>
        </div>

        {/* Description */}
        <p className="relative z-10 text-muted-foreground text-sm text-center mb-4 leading-relaxed">
          {description}
        </p>

        {/* Expertise tags */}
        <div className="relative z-10 flex flex-wrap justify-center gap-2 mb-6">
          {expertise.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Social links */}
        <div className="relative z-10 flex justify-center gap-4">
          {socials.linkedin && (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label={`${name}'s LinkedIn`}
            >
              <Linkedin size={18} />
            </a>
          )}
          {socials.twitter && (
            <a
              href={socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label={`${name}'s Twitter`}
            >
              <Twitter size={18} />
            </a>
          )}
          {socials.email && (
            <a
              href={`mailto:${socials.email}`}
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label={`Email ${name}`}
            >
              <Mail size={18} />
            </a>
          )}
        </div>
      </Card>
    </div>
  );
};

export const About = () => {
  const teamMembers = [
    {
      name: 'Kamran Aslam',
      role: 'Co-Founder & Lead Developer',
      icon: Code,
      description: 'Full-stack developer leading our technical team. Expert in building scalable web applications and creating seamless digital experiences for businesses.',
      expertise: ['MERN Stack', 'Web Architecture', 'Cloud Solutions'],
      socials: {
        linkedin: 'https://pk.linkedin.com/in/muhammad-kamran-61796836a',
        email: 'novaenterprisescontact@gmail.com',
      },
    },
    {
      name: 'Aroon Zafar',
      role: 'Co-Founder & Mobile Lead',
      icon: Code,
      description: 'Flutter specialist crafting beautiful cross-platform mobile apps. Passionate about delivering pixel-perfect UI and smooth user experiences.',
      expertise: ['Flutter/Dart', 'Mobile UI/UX', 'App Strategy'],
      socials: {
        linkedin: '#',
        email: 'novaenterprisescontact@gmail.com',
      },
    },
    {
      name: 'Sarah Khan',
      role: 'Creative Director',
      icon: Palette,
      description: 'Visionary designer transforming brands with stunning visual identities. Creates memorable designs that connect businesses with their audience.',
      expertise: ['Brand Design', 'UI/UX', 'Visual Strategy'],
      socials: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'Ahmed Hassan',
      role: 'Marketing Strategist',
      icon: Megaphone,
      description: 'Digital marketing expert helping businesses reach their target audience. Specializes in growth strategies and conversion optimization.',
      expertise: ['Digital Marketing', 'SEO/SEM', 'Growth Hacking'],
      socials: {
        linkedin: '#',
        email: 'novaenterprisescontact@gmail.com',
      },
    },
    {
      name: 'Fatima Ali',
      role: 'SEO Specialist',
      icon: TrendingUp,
      description: 'Search engine optimization guru driving organic traffic. Helps local businesses get found online and dominate their market.',
      expertise: ['Local SEO', 'Content Strategy', 'Analytics'],
      socials: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'Usman Malik',
      role: 'Project Manager',
      icon: Users,
      description: 'Experienced project manager ensuring smooth delivery. Bridges the gap between clients and our technical team for seamless communication.',
      expertise: ['Agile/Scrum', 'Client Relations', 'Team Leadership'],
      socials: {
        linkedin: '#',
        email: 'novaenterprisescontact@gmail.com',
      },
    },
  ];

  return (
    <section id="about" className="py-20 bg-card/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Meet Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            The <span className="gradient-text">Minds</span> Behind NovaNest
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're a passionate team of developers, designers, and marketers dedicated to 
            transforming local businesses with powerful digital solutions. Your success is our mission.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              role={member.role}
              description={member.description}
              expertise={member.expertise}
              icon={member.icon}
              socials={member.socials}
              index={index}
            />
          ))}
        </div>

        {/* Agency Values */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-wrap justify-center gap-6 p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-card to-accent/5 border border-border max-w-4xl">
            <div className="flex flex-col items-center px-6">
              <span className="text-3xl font-bold gradient-text">Quality</span>
              <span className="text-sm text-muted-foreground">First Approach</span>
            </div>
            <div className="hidden sm:block w-px h-16 bg-border" />
            <div className="flex flex-col items-center px-6">
              <span className="text-3xl font-bold gradient-text">Client</span>
              <span className="text-sm text-muted-foreground">Focused Solutions</span>
            </div>
            <div className="hidden sm:block w-px h-16 bg-border" />
            <div className="flex flex-col items-center px-6">
              <span className="text-3xl font-bold gradient-text">Results</span>
              <span className="text-sm text-muted-foreground">Driven Strategy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
