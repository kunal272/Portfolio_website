import { Card } from './ui/card';
import { Code, Database, Globe, Smartphone, Trophy, Target, Heart, Zap, Star, Rocket } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-teal-50/50 dark:from-purple-900/20 dark:via-blue-900/10 dark:to-teal-900/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 px-4 py-2 rounded-full mb-4">
              <Star className="h-4 w-4 text-purple-600" />
              <span className="text-sm text-purple-700 dark:text-purple-300">Get to know me</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Passionate developer turning ideas into digital reality
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Personal Story */}
            <div className="space-y-6">
              <Card className="p-8 bg-gradient-to-br from-purple-50/80 to-blue-50/80 dark:from-purple-900/20 dark:to-blue-900/20 border-purple-200/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-purple-700 dark:text-purple-300">My Journey</h3>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  I'm a dedicated software developer with a Master's in Computer Applications from Savitribai Phule University. 
                  My journey in technology has been driven by a passion for creating efficient, scalable web solutions that make a real impact.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  With expertise in Laravel PHP framework and modern web technologies, I specialize in building 
                  robust applications that solve real-world problems. Currently working at Bio Secure Lab Pvt Ltd as a Software Developer.
                </p>
              </Card>
            </div>
            
            {/* Quick Stats */}
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-green-50/80 to-teal-50/80 dark:from-green-900/20 dark:to-teal-900/20 border-green-200/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg text-green-700 dark:text-green-300">Education</h3>
                    <p className="text-green-600 dark:text-green-400">MCA in Computer Applications (78.00%)</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-orange-50/80 to-red-50/80 dark:from-orange-900/20 dark:to-red-900/20 border-orange-200/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg text-orange-700 dark:text-orange-300">Current Role</h3>
                    <p className="text-orange-600 dark:text-orange-400">Software Developer at Bio Secure Lab Pvt Ltd</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-indigo-50/80 to-purple-50/80 dark:from-indigo-900/20 dark:to-purple-900/20 border-indigo-200/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg text-indigo-700 dark:text-indigo-300">Specialization</h3>
                    <p className="text-indigo-600 dark:text-indigo-400">Laravel PHP & Full-Stack Development</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Core Strengths */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-8 text-center bg-gradient-to-br from-blue-50/80 to-indigo-50/80 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200/50 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg mb-3 text-blue-700 dark:text-blue-300">Clean Code</h3>
              <p className="text-sm text-blue-600 dark:text-blue-400">Writing maintainable and scalable code that stands the test of time</p>
            </Card>
            
            <Card className="p-8 text-center bg-gradient-to-br from-green-50/80 to-emerald-50/80 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200/50 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg mb-3 text-green-700 dark:text-green-300">Database Design</h3>
              <p className="text-sm text-green-600 dark:text-green-400">Efficient database architecture and optimization strategies</p>
            </Card>
            
            <Card className="p-8 text-center bg-gradient-to-br from-purple-50/80 to-pink-50/80 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200/50 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg mb-3 text-purple-700 dark:text-purple-300">Web Development</h3>
              <p className="text-sm text-purple-600 dark:text-purple-400">Full-stack web applications with modern frameworks</p>
            </Card>
            
            <Card className="p-8 text-center bg-gradient-to-br from-orange-50/80 to-yellow-50/80 dark:from-orange-900/20 dark:to-yellow-900/20 border-orange-200/50 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="p-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg mb-3 text-orange-700 dark:text-orange-300">Responsive Design</h3>
              <p className="text-sm text-orange-600 dark:text-orange-400">Mobile-first approach ensuring great user experience</p>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-teal-500/10 border-purple-200/30">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Zap className="h-6 w-6 text-purple-600" />
                <h3 className="text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Ready to Collaborate?
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                I'm always excited to work on innovative projects and connect with fellow developers. 
                Let's create something amazing together!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}