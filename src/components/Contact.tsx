import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bhosalekunal395@gmail.com",
      href: "mailto:bhosalekunal395@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9168917",
      href: "tel:+919168917"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, India",
      href: "#"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "kunal-bhosale-631473248",
      href: "https://www.linkedin.com/in/kunal-bhosale-631473248"
    }
  ];

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Get In Touch</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl mb-6">Let's Connect</h3>
              <p className="text-lg text-muted-foreground mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology. 
                Feel free to reach out through any of the channels below.
              </p>
              
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                    <a 
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        <p className="text-sm text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Button asChild variant="outline">
                  <a href="https://www.linkedin.com/in/kunal-bhosale-631473248" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <Card className="p-6">
                <h3 className="text-xl mb-6">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm mb-2">Name *</label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm mb-2">Email *</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm mb-2">Subject *</label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What is this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm mb-2">Message *</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project or just say hello..."
                      rows={6}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-primary/5 border-primary/20">
              <h3 className="text-2xl mb-4">Ready to Work Together?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                I'm currently available for freelance work and full-time opportunities. 
                Let's discuss how we can bring your ideas to life.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <a href="mailto:bhosalekunal395@gmail.com">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Me
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://www.linkedin.com/in/kunal-bhosale-631473248" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-16 py-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Kunal Dattatray Bhosale. All rights reserved.</p>
            <p className="text-sm mt-2">Built with React, TypeScript, and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </section>
  );
}