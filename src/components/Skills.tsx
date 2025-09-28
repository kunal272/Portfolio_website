import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Code, Palette, Settings, Zap, Database, Globe, Layers, GitBranch } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: "Backend Technologies",
      icon: Database,
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50/80 to-pink-50/80 dark:from-red-900/20 dark:to-pink-900/20",
      borderColor: "border-red-200/50",
      textColor: "text-red-700 dark:text-red-300",
      badgeColor: "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300",
      skills: ["PHP", "Laravel Framework", "MySQL", "Object Oriented Programming (OOPS)"]
    },
    {
      title: "Frontend Technologies",
      icon: Palette,
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50/80 to-indigo-50/80 dark:from-blue-900/20 dark:to-indigo-900/20",
      borderColor: "border-blue-200/50",
      textColor: "text-blue-700 dark:text-blue-300",
      badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300",
      skills: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Ajax"]
    },
    {
      title: "Tools & Others",
      icon: Settings,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50/80 to-emerald-50/80 dark:from-green-900/20 dark:to-emerald-900/20",
      borderColor: "border-green-200/50",
      textColor: "text-green-700 dark:text-green-300",
      badgeColor: "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300",
      skills: ["Git and GitHub", "Responsive Web Design", "Database Design", "API Development"]
    }
  ];

  const skillsWithIcons = [
    { name: "PHP", icon: Code, color: "bg-purple-500" },
    { name: "Laravel Framework", icon: Layers, color: "bg-red-500" },
    { name: "HTML", icon: Globe, color: "bg-orange-500" },
    { name: "CSS", icon: Palette, color: "bg-blue-500" },
    { name: "Bootstrap", icon: Layers, color: "bg-purple-600" },
    { name: "JavaScript", icon: Zap, color: "bg-yellow-500" },
    { name: "jQuery", icon: Code, color: "bg-blue-600" },
    { name: "MySQL", icon: Database, color: "bg-green-600" },
    { name: "Object Oriented Programming (OOPS)", icon: Settings, color: "bg-indigo-500" },
    { name: "Git and GitHub", icon: GitBranch, color: "bg-gray-700" },
    { name: "Ajax", icon: Zap, color: "bg-teal-500" }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-pink-50/50 dark:from-indigo-900/20 dark:via-purple-900/10 dark:to-pink-900/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 px-4 py-2 rounded-full mb-4">
              <Code className="h-4 w-4 text-indigo-600" />
              <span className="text-sm text-indigo-700 dark:text-indigo-300">Technical Skills</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications
            </p>
          </div>
          
          {/* Skills Overview with Icons */}
          <div className="mb-16">
            <Card className="p-8 bg-gradient-to-r from-white/80 via-gray-50/80 to-white/80 dark:from-gray-800/80 dark:via-gray-900/80 dark:to-gray-800/80 border-gray-200/50">
              <h3 className="text-2xl mb-8 text-center bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
                Technical Expertise
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skillsWithIcons.map((skill) => (
                  <div key={skill.name} className="group">
                    <Card className="p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 ${skill.color} rounded-lg group-hover:scale-110 transition-transform`}>
                          <skill.icon className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Categorized Skills */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className={`p-8 bg-gradient-to-br ${category.bgColor} ${category.borderColor} hover:shadow-xl transition-all duration-300 hover:scale-105 group`}>
                <div className="text-center mb-6">
                  <div className={`p-4 bg-gradient-to-r ${category.color} rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className={`text-xl ${category.textColor}`}>{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center group/item">
                      <div className={`w-3 h-3 bg-gradient-to-r ${category.color} rounded-full mr-3 group-hover/item:scale-125 transition-transform`}></div>
                      <span className="text-sm text-gray-700 dark:text-gray-300 group-hover/item:text-gray-900 dark:group-hover/item:text-gray-100 transition-colors">{skill}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Skill Levels with Animated Bars */}
          <div>
            <Card className="p-8 bg-gradient-to-br from-gray-50/80 to-white/80 dark:from-gray-900/80 dark:to-gray-800/80 border-gray-200/50">
              <h3 className="text-2xl mb-8 text-center bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
                Proficiency Levels
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { skill: "PHP & Laravel", level: 90, color: "from-red-500 to-pink-500" },
                  { skill: "JavaScript & jQuery", level: 85, color: "from-yellow-500 to-orange-500" },
                  { skill: "HTML & CSS", level: 95, color: "from-blue-500 to-indigo-500" },
                  { skill: "MySQL", level: 80, color: "from-green-500 to-emerald-500" },
                  { skill: "Bootstrap", level: 90, color: "from-purple-500 to-violet-500" },
                  { skill: "Git & GitHub", level: 75, color: "from-gray-600 to-gray-800" }
                ].map((item) => (
                  <div key={item.skill} className="group">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">{item.skill}</span>
                      <span className={`text-sm px-2 py-1 rounded-full bg-gradient-to-r ${item.color} text-white`}>
                        {item.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-3 rounded-full bg-gradient-to-r ${item.color} transition-all duration-1000 ease-out shadow-lg`}
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}