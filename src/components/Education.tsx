import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export function Education() {
  const educationData = [
    {
      degree: "MCA (Master in Computer Applications)",
      institution: "Savitribai Phule University, Pune",
      duration: "11/2022 - 05/2024",
      location: "Pune, India",
      percentage: "78.00%",
      type: "Master's Degree"
    },
    {
      degree: "BSc (Computer Science)",
      institution: "Savitribai Phule University, Pune",
      duration: "07/2019 - 08/2022",
      location: "Pune, India", 
      percentage: "74.54%",
      type: "Bachelor's Degree"
    },
    {
      degree: "HSC (State Board Of Maharashtra)",
      institution: "State Board Of Maharashtra",
      duration: "07/2017 - 03/2019",
      location: "Satara, India",
      percentage: "60.15%",
      type: "Higher Secondary"
    },
    {
      degree: "SSC (State Board Of Maharashtra)",
      institution: "State Board Of Maharashtra",
      duration: "06/2016 - 03/2017",
      location: "Satara, India",
      percentage: "81.80%",
      type: "Secondary School"
    }
  ];

  return (
    <section id="education" className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Education</h2>
          
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <GraduationCap className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="text-lg mb-1">{edu.degree}</h3>
                        <p className="text-muted-foreground">{edu.institution}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <Badge variant="outline">{edu.type}</Badge>
                    <div className="text-lg text-primary">
                      {edu.percentage}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Educational Journey Timeline */}
          <div className="mt-12">
            <h3 className="text-xl text-center mb-8">Educational Journey</h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-border"></div>
              {educationData.map((edu, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-8`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="p-4">
                      <div className="text-sm text-muted-foreground">{edu.duration}</div>
                      <div className="font-medium">{edu.degree}</div>
                      <div className="text-sm text-muted-foreground">{edu.institution}</div>
                      <Badge variant="secondary" className="mt-2">{edu.percentage}</Badge>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}