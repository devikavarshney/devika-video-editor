import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clapperboard, Palette, Wand2 } from "lucide-react";

export const About = () => {
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

  const skills = [
    { category: "Editing Software", items: ["DaVinci Resolve", "Canva", "VN"] },
    { category: "Specializations", items: ["Narrative-driven editing", "Color grading", "Motion graphics", "Sound design"] }
  ];

  const features = [
    {
      icon: Clapperboard,
      title: "Storytelling Excellence",
      description: "Every frame tells a story. I focus on the emotion and rhythm that makes viewers connect."
    },
    {
      icon: Palette,
      title: "Visual Artistry",
      description: "From color grading to motion graphics, I bring technical precision to creative vision."
    },
    {
      icon: Wand2,
      title: "Technical Mastery",
      description: "Proficient in industry-standard tools with a focus on efficiency and quality."
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Personal Story */}
            <div className="space-y-8">
              <Card className="neuro-elevated p-8">
                <h3 className="text-2xl font-semibold text-primary mb-6">My Story</h3>
                <div className="space-y-4 text-foreground leading-relaxed">{/* Changed from muted-foreground to foreground */}
                  <p>
                    I've always been deeply captivated by the magic of films — the stories they tell, 
                    the emotions they evoke, and the worlds they create. That love turned into a quiet 
                    dream to become a part of that storytelling process. Editing became my way in.
                  </p>
                  <p>
                    For me, video editing is not just about cutting clips or syncing music — it's about 
                    feeling every frame, understanding the emotion behind every scene, and stitching it 
                    all together in a way that moves people.
                  </p>
                  <p>
                    I strive to add a touch of heart to every project I work on, creating narratives 
                    that hook the audience and stay with them long after the video ends.
                  </p>
                </div>
              </Card>

              {/* USP */}
              <Card className="neuro-elevated p-8 border-primary/20">
                <h3 className="text-xl font-semibold text-accent mb-4">What Sets Me Apart</h3>
                <p className="text-foreground">{/* Changed from muted-foreground to foreground */}
                  My ability to blend creativity with technical precision, ensuring each video 
                  not only meets but exceeds client expectations.
                </p>
              </Card>
            </div>

            {/* Skills and Features */}
            <div className="space-y-8">
              {/* Skills */}
              <Card className="neuro-elevated p-8">
                <h3 className="text-2xl font-semibold text-primary mb-6">Skills & Expertise</h3>
                <div className="space-y-6">
                  {skills.map((skillGroup, index) => (
                    <div key={index}>
                      <h4 className="font-medium text-accent mb-3">{skillGroup.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            variant="secondary" 
                            className="neuro-button text-sm py-1 px-3"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Features */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <Card 
                    key={index} 
                    className="neuro-elevated p-6 hover:glow-effect transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="neuro-button p-3 rounded-xl">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};