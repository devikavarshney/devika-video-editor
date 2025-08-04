import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play, Eye } from "lucide-react";

export const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Funny Reels - Trippin with Trups",
      description: "Edited reels for the popular 'Trippin with Trups' series, focusing on comedic timing and engaging visual storytelling.",
      client: "BeBerryQuiet",
      link: "https://www.youtube.com/@Beberryquiet/featured",
      type: "YouTube Series",
      metrics: "Consistent engagement",
      category: "Comedy"
    },
    {
      title: "Viral Instagram Reel",
      description: "Created a compelling reel for Chulha Chauki da Dhabha that achieved exceptional viral success.",
      client: "Chulha Chauki da Dhabha",
      link: "https://www.instagram.com/reel/DB0k-VuvAa3/?igsh=MWg3dDIyNHdkczFzbw==",
      type: "Social Media",
      metrics: "5.5M Views",
      category: "Food & Lifestyle"
    },
    {
      title: "Client Projects",
      description: "Various editing projects for Morethankannadagottila, showcasing versatility in different content styles.",
      client: "Morethankannadagottila",
      type: "Mixed Content",
      metrics: "Ongoing collaboration",
      category: "Branded Content"
    }
  ];

  const services = [
    {
      title: "Video Editing",
      description: "Professional video editing with attention to pacing, storytelling, and visual flow.",
      features: ["Narrative structure", "Pacing optimization", "Transition effects", "Audio sync"]
    },
    {
      title: "Color Grading",
      description: "Enhance your footage with professional color correction and cinematic grading.",
      features: ["Color correction", "Cinematic looks", "Mood enhancement", "Consistency"]
    },
    {
      title: "Motion Graphics",
      description: "Add dynamic visual elements to elevate your content and engage viewers.",
      features: ["Animated titles", "Lower thirds", "Transitions", "Visual effects"]
    }
  ];

  return (
    <section ref={sectionRef} id="portfolio" className="py-20 px-6 bg-background-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              My Work
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">{/* Changed from muted-foreground */}
              A showcase of recent projects demonstrating storytelling excellence and technical expertise
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-primary">Featured Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card 
                  key={index} 
                  className="neuro-elevated p-6 hover:glow-effect transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <Badge variant="secondary" className="neuro-button text-xs">
                        {project.category}
                      </Badge>
                      <div className="neuro-button p-2 rounded-lg group-hover:animate-pulse-glow">
                        <Play className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{project.title}</h4>
                      <p className="text-sm text-foreground mb-3">{project.description}</p>{/* Changed from muted-foreground */}
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-accent">Client:</span>
                        <span className="text-foreground font-medium">{project.client}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-accent">Type:</span>
                        <span className="text-foreground">{project.type}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-accent">Result:</span>
                        <span className="text-primary font-medium">{project.metrics}</span>
                      </div>
                    </div>

                    {project.link && (
                      <Button 
                        asChild 
                        size="sm" 
                        className="neuro-button w-full mt-4"
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </a>
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-primary">Services Offered</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="neuro-elevated p-8 text-center hover:glow-effect transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="neuro-button w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">{service.title}</h4>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-accent">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="neuro-elevated p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-primary mb-4">Ready to Collaborate?</h3>
              <p className="text-muted-foreground mb-6">
                Whether it's a promotional video, short film, or documentary, I ensure high-quality 
                results that captivate and engage your audience.
              </p>
              <Button 
                className="neuro-button px-8 py-3 hover:glow-effect"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Project
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};