import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Building, Calendar, MapPin, Briefcase } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "Software Developer",
      company: "Bio Secure Lab Pvt Ltd (NPAV)",
      duration: "07/2024 - present",
      location: "Pune, India",
      type: "Full-time",
      description: "Currently working as a Software Developer, focusing on web application development using modern technologies and frameworks.",
      responsibilities: [
        "Developing and maintaining web applications using Laravel PHP framework",
        "Collaborating with cross-functional teams to deliver high-quality software solutions",
        "Implementing responsive web designs using HTML, CSS, and JavaScript",
        "Working with MySQL databases for efficient data management",
        "Participating in code reviews and maintaining coding standards"
      ],
      technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML", "CSS", "Bootstrap"],
      current: true
    },
    {
      title: "Trainee Engineer",
      company: "Software Technology",
      duration: "01/2024 - 04/2024",
      location: "Pune, India", 
      type: "Internship",
      description: "Completed a comprehensive training program focusing on software development fundamentals and practical application of programming concepts.",
      responsibilities: [
        "Learned software development best practices and methodologies",
        "Gained hands-on experience with various programming languages and frameworks",
        "Participated in team projects and collaborative development exercises",
        "Developed understanding of software development lifecycle",
        "Built foundational skills in database design and web development"
      ],
      technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "Bootstrap"],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Professional Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <Briefcase className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="text-xl mb-1 flex items-center gap-2">
                          {exp.title}
                          {exp.current && <Badge variant="default">Current</Badge>}
                        </h3>
                        <div className="flex items-center gap-2 text-primary mb-2">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      <Badge variant="outline">{exp.type}</Badge>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="mb-3">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="mb-3">Technologies & Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Career Timeline */}
          <div className="mt-12">
            <h3 className="text-xl text-center mb-8">Career Timeline</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start mb-8 last:mb-0">
                  <div className="absolute left-2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  <div className="ml-12">
                    <Card className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{exp.title}</h4>
                        {exp.current && <Badge variant="default" className="text-xs">Current</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                      <p className="text-xs text-muted-foreground mt-1">{exp.duration}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}