import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";
import profileImage from "@/assets/devika-profile.jpg";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">{/* Added pt-24 for nav space */}
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background-secondary/80" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 neuro-elevated rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-20 w-16 h-16 neuro-elevated rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-24 h-24 neuro-elevated rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 container mx-auto px-6 pt-8">{/* Added pt-8 for extra space */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'}`}>
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="neuro-elevated rounded-full p-2 animate-pulse-glow">
              <img 
                src={profileImage} 
                alt="Devika Varshney"
                className="w-40 h-40 rounded-full object-cover"
              />
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Devika Varshney
          </h1>
          
          <div className="neuro-inset rounded-2xl p-6 mb-8 max-w-2xl mx-auto bg-card/80">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
              Video Editor
            </h2>
            <p className="text-xl text-accent mb-4 font-medium">
              Crafting Visual Stories with Precision & Passion
            </p>
            <p className="text-lg text-foreground">
              A dedicated video editor with a knack for transforming raw footage into compelling stories.
              Explore my work and see how I can bring your vision to life.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              className="neuro-button px-8 py-6 text-lg hover:glow-effect"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              className="neuro-button px-8 py-6 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Quick Contact Icons */}
          <div className="flex justify-center gap-6">
            {[
              { icon: Mail, href: "mailto:devikavarshney0602@gmail.com", label: "Email" },
              { icon: Phone, href: "tel:7505992112", label: "Phone" },
              { icon: Linkedin, href: "https://in.linkedin.com/in/devikavarshney", label: "LinkedIn" },
              { icon: Instagram, href: "https://www.instagram.com/naam.hai.devika/", label: "Instagram" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="neuro-button p-4 rounded-full hover:glow-effect transition-all duration-300"
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-primary" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};