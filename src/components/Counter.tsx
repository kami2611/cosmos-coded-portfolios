import { useEffect, useRef, useState } from 'react';
import { Briefcase, Users, Clock, Heart } from 'lucide-react';

interface CounterItemProps {
  end: number;
  label: string;
  suffix?: string;
  icon: React.ElementType;
  delay?: number;
}

const CounterItem = ({ end, label, suffix = '', icon: Icon, delay = 0 }: CounterItemProps) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const timeout = setTimeout(() => {
      let startTime: number | null = null;
      let animationFrame: number;
      const duration = 2500;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }, delay);

    return () => clearTimeout(timeout);
  }, [end, hasStarted, delay]);

  return (
    <div
      ref={ref}
      className="relative group"
    >
      <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
        {/* Animated background glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Icon */}
        <div className="relative z-10 p-4 mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 group-hover:scale-110 transition-transform duration-500">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        
        {/* Number */}
        <div className="relative z-10 text-5xl md:text-6xl font-bold gradient-text mb-2">
          {count}
          <span className="text-3xl">{suffix}</span>
        </div>
        
        {/* Label */}
        <p className="relative z-10 text-muted-foreground font-medium tracking-wide uppercase text-sm">
          {label}
        </p>
        
        {/* Decorative line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-1/2 transition-all duration-500" />
      </div>
    </div>
  );
};

export const Counter = () => {
  const stats = [
    {
      end: 150,
      label: 'Projects Completed',
      suffix: '+',
      icon: Briefcase,
      delay: 0,
    },
    {
      end: 50,
      label: 'Tech Partners',
      suffix: '+',
      icon: Users,
      delay: 200,
    },
    {
      end: 8,
      label: 'Years Experience',
      suffix: '+',
      icon: Clock,
      delay: 400,
    },
    {
      end: 98,
      label: 'Happy Clients',
      suffix: '%',
      icon: Heart,
      delay: 600,
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-pulse">
            Our Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Numbers That <span className="gradient-text">Speak</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A track record of success, delivering exceptional results for our clients
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat) => (
            <CounterItem
              key={stat.label}
              end={stat.end}
              label={stat.label}
              suffix={stat.suffix}
              icon={stat.icon}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
