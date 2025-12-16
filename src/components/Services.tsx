import { useRef, useState, useEffect } from 'react';
import { 
  Globe, 
  Smartphone, 
  Search, 
  Megaphone, 
  Palette, 
  ShoppingCart,
  TrendingUp,
  Headphones,
  ArrowRight
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  index: number;
  gradient: string;
}

const ServiceCard = ({ title, description, icon: Icon, features, index, gradient }: ServiceCardProps) => {
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
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className="h-full p-6 bg-card border-border hover:border-primary/50 transition-all duration-500 group relative overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${gradient}`} />
        
        {/* Floating icon background */}
        <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-primary/5 group-hover:scale-150 transition-transform duration-700" />
        
        {/* Icon */}
        <div className="relative z-10 mb-6">
          <div className={`inline-flex p-4 rounded-2xl ${gradient} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
        </div>
        
        {/* Title */}
        <h3 className="relative z-10 text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="relative z-10 text-muted-foreground mb-4 text-sm leading-relaxed">
          {description}
        </p>
        
        {/* Features */}
        <ul className="relative z-10 space-y-2 mb-6">
          {features.map((feature, i) => (
            <li 
              key={i} 
              className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        
        {/* CTA */}
        <div className="relative z-10 mt-auto">
          <Button 
            variant="ghost" 
            className="p-0 h-auto text-primary hover:text-primary/80 group/btn"
          >
            Learn More 
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export const Services = () => {
  const services = [
    {
      title: 'Website Development',
      description: 'Transform your business with a stunning, fast, and responsive website that converts visitors into customers.',
      icon: Globe,
      gradient: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      features: [
        'Custom responsive design',
        'SEO-optimized structure',
        'Fast loading speeds',
        'Mobile-first approach',
      ],
    },
    {
      title: 'Mobile App Development',
      description: 'Reach your customers anywhere with beautiful cross-platform mobile applications for iOS and Android.',
      icon: Smartphone,
      gradient: 'bg-gradient-to-br from-purple-500 to-pink-500',
      features: [
        'Cross-platform development',
        'Native performance',
        'Intuitive UI/UX design',
        'App Store optimization',
      ],
    },
    {
      title: 'SEO Optimization',
      description: "Get found online! We'll boost your search rankings and drive organic traffic to your business.",
      icon: Search,
      gradient: 'bg-gradient-to-br from-green-500 to-emerald-500',
      features: [
        'Keyword research & strategy',
        'On-page optimization',
        'Local SEO services',
        'Performance analytics',
      ],
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns that reach your target audience and grow your business exponentially.',
      icon: Megaphone,
      gradient: 'bg-gradient-to-br from-orange-500 to-red-500',
      features: [
        'Social media marketing',
        'Email campaigns',
        'Content strategy',
        'PPC advertising',
      ],
    },
    {
      title: 'Brand Identity Design',
      description: 'Create a memorable brand identity that resonates with your audience and sets you apart from competitors.',
      icon: Palette,
      gradient: 'bg-gradient-to-br from-pink-500 to-rose-500',
      features: [
        'Logo design',
        'Brand guidelines',
        'Visual identity system',
        'Marketing materials',
      ],
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Launch your online store with a powerful e-commerce platform that drives sales 24/7.',
      icon: ShoppingCart,
      gradient: 'bg-gradient-to-br from-indigo-500 to-violet-500',
      features: [
        'Custom storefronts',
        'Payment integration',
        'Inventory management',
        'Order tracking',
      ],
    },
    {
      title: 'Growth Consulting',
      description: "Expert guidance to scale your business with data-driven strategies and actionable insights.",
      icon: TrendingUp,
      gradient: 'bg-gradient-to-br from-teal-500 to-cyan-500',
      features: [
        'Business analysis',
        'Growth roadmaps',
        'Conversion optimization',
        'Market research',
      ],
    },
    {
      title: 'Ongoing Support',
      description: "We don't just build and leave. Get continuous support to keep your digital presence running smoothly.",
      icon: Headphones,
      gradient: 'bg-gradient-to-br from-amber-500 to-yellow-500',
      features: [
        '24/7 technical support',
        'Regular maintenance',
        'Security updates',
        'Performance monitoring',
      ],
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-card/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Services We Provide at <span className="gradient-text">Best</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Is your business struggling online? No website or stuck with an outdated one? 
            We specialize in helping local businesses establish a powerful digital presence 
            that attracts customers and drives growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
              index={index}
              gradient={service.gradient}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-card to-accent/10 border border-border">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold mb-2">Ready to Transform Your Business?</h3>
              <p className="text-muted-foreground">Let's discuss how we can help you succeed online.</p>
            </div>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 glow-effect rounded-full px-8 whitespace-nowrap"
              onClick={scrollToContact}
            >
              Get Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
