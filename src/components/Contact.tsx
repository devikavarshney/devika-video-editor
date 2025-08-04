import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Instagram, MessageCircle } from "lucide-react";

export const Contact = () => {
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

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "devikavarshney0602@gmail.com",
      href: "mailto:devikavarshney0602@gmail.com",
      description: "For project inquiries and collaborations"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "7505992112",
      href: "https://wa.me/917505992112",
      description: "Quick discussions and urgent queries"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect professionally",
      href: "https://in.linkedin.com/in/devikavarshney",
      description: "Professional networking and portfolio"
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@naam.hai.devika",
      href: "https://www.instagram.com/naam.hai.devika/",
      description: "Behind the scenes and creative updates"
    }
  ];

  const faqs = [
    {
      question: "What are your rates?",
      answer: "My rates vary based on the project complexity, duration, and requirements. Contact me for a detailed quote tailored to your specific needs."
    },
    {
      question: "What's your typical turnaround time?",
      answer: "I pride myself on speedy delivery while maintaining quality. Turnaround time depends on project scope, but I always communicate clear timelines upfront."
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! I work with clients globally and am comfortable with different time zones and communication preferences."
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 px-6 bg-background-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Let's Collaborate
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your vision to life? Get in touch and let's create something amazing together.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
          </div>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card 
                key={index}
                className="neuro-elevated p-6 text-center hover:glow-effect transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="neuro-button w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:animate-pulse-glow">
                  <method.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                <Button 
                  asChild 
                  size="sm" 
                  className="neuro-button w-full"
                >
                  <a href={method.href} target="_blank" rel="noopener noreferrer">
                    {method.value}
                  </a>
                </Button>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* CTA Card */}
            <Card className="neuro-elevated p-8">
              <div className="text-center">
                <div className="neuro-button w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center animate-pulse-glow">
                  <MessageCircle className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Start Your Project</h3>
                <p className="text-muted-foreground mb-6">
                  Whether it's a promotional video, short film, or documentary, I ensure high-quality 
                  results that captivate and engage your audience.
                </p>
                <div className="space-y-4">
                  <Button 
                    asChild 
                    className="neuro-button w-full py-3 hover:glow-effect"
                  >
                    <a href="mailto:devikavarshney0602@gmail.com">
                      <Mail className="w-5 h-5 mr-2" />
                      Send Email
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="neuro-button w-full py-3"
                  >
                    <a href="https://wa.me/917505992112" target="_blank" rel="noopener noreferrer">
                      <Phone className="w-5 h-5 mr-2" />
                      WhatsApp Chat
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            {/* FAQ */}
            <Card className="neuro-elevated p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">Frequently Asked Questions</h3>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="neuro-inset rounded-xl p-4">
                    <h4 className="font-semibold text-accent mb-2">{faq.question}</h4>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-border">
            <p className="text-muted-foreground">
              © 2024 Devika Varshney. Crafting visual stories with passion and precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};