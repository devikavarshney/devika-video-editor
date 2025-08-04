import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

export const Testimonial = () => {
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

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              What Clients Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Testimonial Card */}
          <Card className="neuro-elevated p-12 text-center relative overflow-hidden">
            {/* Background Quote */}
            <div className="absolute top-8 left-8 opacity-10">
              <Quote className="w-16 h-16 text-primary" />
            </div>
            <div className="absolute bottom-8 right-8 opacity-10 rotate-180">
              <Quote className="w-16 h-16 text-primary" />
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, index) => (
                <Star 
                  key={index} 
                  className="w-6 h-6 text-primary fill-current animate-pulse-glow" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-8 leading-relaxed relative z-10">
              "Devika has speedy delivery, she delivers as per the script and notes provided. 
              She also asks questions that help elevate the collaboration"
            </blockquote>

            {/* Author */}
            <div className="neuro-inset rounded-2xl p-6 max-w-md mx-auto">
              <div className="text-lg font-semibold text-primary mb-1">Trupti S</div>
              <div className="text-muted-foreground">Content Creator</div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
            <div className="absolute top-1/3 right-6 w-3 h-3 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-1/3 left-6 w-2 h-2 bg-primary-glow rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
          </Card>

          {/* Additional Info */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground text-lg">
              Join satisfied clients who trust me to bring their vision to life
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};