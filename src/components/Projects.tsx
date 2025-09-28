import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Calendar, Code, Database, Users } from 'lucide-react';

export function Projects() {
  const mainProject = {
    title: "Session Tracker Laravel PHP Project",
    duration: "11/2024 - present",
    description: "A comprehensive web application for tracking and managing user sessions with advanced features for employee management, admin reporting, and cross-verification systems.",
    technologies: ["Laravel (PHP)", "HTML", "CSS", "Bootstrap", "Ajax", "jQuery", "MySQL"],
    features: [
      "Employee, TL and admin reporting with cross-verification",
      "Developed system architecture and database schema",
      "Implemented employee TL and admin reporting features",
      "Created admin dashboard for issue management and user administration",
      "Enabled session tracking with cross-verification",
      "Built admin dashboard with Master Admin functionality"
    ],
    highlights: [
      "Team Lead (TL), Admin, Master Admin",
      "Cross-verification system implementation", 
      "Complete system architecture design",
      "Database schema development"
    ]
  };

  const additionalProjects = [
    {
      title: "E-Commerce Web Application",
      description: "Full-featured e-commerce platform with user management, product catalog, and payment integration.",
      technologies: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
      status: "Completed"
    },
    {
      title: "Inventory Management System",
      description: "Comprehensive inventory tracking system for small businesses with real-time stock updates.",
      technologies: ["PHP", "MySQL", "Ajax", "CSS"],
      status: "In Development"
    },
    {
      title: "Content Management System",
      description: "Custom CMS for blog and content management with user roles and permissions.",
      technologies: ["Laravel", "jQuery", "Bootstrap", "MySQL"],
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Projects</h2>
          
          {/* Featured Project */}
          <Card className="p-8 mb-12 border-l-4 border-l-primary">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl">{mainProject.title}</h3>
                  <Badge variant="secondary">Featured</Badge>
                </div>
                
                <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{mainProject.duration}</span>
                </div>
                
                <p className="text-lg mb-6 text-muted-foreground">
                  {mainProject.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="mb-3 flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {mainProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="mb-3 flex items-center gap-2">
                    <Database className="h-4 w-4" />
                    Project Highlights
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {mainProject.highlights.map((highlight, index) => (
                      <Badge key={index} variant="outline">{highlight}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="lg:w-80">
                <div className="bg-muted/50 rounded-lg p-4 mb-4">
                  <h4 className="mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {mainProject.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button className="w-full" variant="outline">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project Details
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Additional Projects */}
          <div>
            <h3 className="text-xl mb-6">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalProjects.map((project, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg">{project.title}</h4>
                      <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}