import { Github, Linkedin, Mail, MapPin, Phone, Download, Sparkles, Code2, Database, Globe, Zap, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

export function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 min-h-screen flex items-center relative overflow-hidden bg-white dark:bg-slate-900">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-100/30 dark:bg-purple-900/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-green-100/30 dark:bg-green-900/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Floating Icons */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <Code2 className="absolute top-20 left-20 h-8 w-8 text-purple-500/30 animate-bounce delay-100" />
            <Database className="absolute top-40 right-16 h-6 w-6 text-blue-500/30 animate-bounce delay-300" />
            <Globe className="absolute bottom-40 left-16 h-7 w-7 text-green-500/30 animate-bounce delay-500" />
            <Zap className="absolute top-32 right-32 h-5 w-5 text-yellow-500/30 animate-bounce delay-700" />
            <Star className="absolute bottom-32 right-20 h-6 w-6 text-pink-500/30 animate-bounce delay-900" />
          </div>

          <div className="mb-12">
            <div className="flex justify-center mb-6">
              <Card className="p-4 bg-white dark:bg-slate-800 border border-purple-200 dark:border-purple-700 shadow-lg">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-purple-600 animate-pulse" />
                  <span className="text-sm text-purple-700 dark:text-purple-300">
                    Full Stack Developer
                  </span>
                  <Sparkles className="h-5 w-5 text-blue-600 animate-pulse" />
                </div>
              </Card>
            </div>

            <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent animate-pulse">
              Kunal Dattatray Bhosale
            </h1>
            
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Card className="px-4 py-2 bg-white dark:bg-slate-800 border border-pink-200 dark:border-pink-700 shadow-md">
                <div className="flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-pink-600" />
                  <span className="text-sm text-pink-700 dark:text-pink-300">Laravel Expert</span>
                </div>
              </Card>
              <Card className="px-4 py-2 bg-white dark:bg-slate-800 border border-blue-200 dark:border-blue-700 shadow-md">
                <div className="flex items-center gap-2">
                  <Database className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-blue-700 dark:text-blue-300">PHP Developer</span>
                </div>
              </Card>
              <Card className="px-4 py-2 bg-white dark:bg-slate-800 border border-green-200 dark:border-green-700 shadow-md">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-700 dark:text-green-300">Web Developer</span>
                </div>
              </Card>
            </div>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate software developer crafting innovative solutions with modern technologies. 
              Specialized in building scalable web applications that make a difference.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
            <Card className="p-4 bg-white dark:bg-slate-800 border border-blue-200 dark:border-blue-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500 rounded-lg">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Email</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">bhosalekunal395@gmail.com</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-4 bg-white dark:bg-slate-800 border border-green-200 dark:border-green-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500 rounded-lg">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Phone</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">+91 9168917</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-4 bg-white dark:bg-slate-800 border border-purple-200 dark:border-purple-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500 rounded-lg">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Location</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Pune, India</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <a href="https://www.linkedin.com/in/kunal-bhosale-631473248" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-2" />
                Connect on LinkedIn
              </a>
            </Button>
            <Button variant="outline" className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <Mail className="h-4 w-4 mr-2" />
              Get In Touch
            </Button>
            <Button variant="outline" className="border-2 border-green-300 text-green-700 hover:bg-green-50 dark:hover:bg-green-900/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <div className="w-8 h-12 border-2 border-purple-400 rounded-full mx-auto flex justify-center p-2 bg-gradient-to-b from-purple-100/50 to-transparent">
              <div className="w-1 h-4 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
            </div>
            <p className="text-xs text-gray-500 mt-2">Scroll to explore</p>
          </div>
        </div>
      </div>
    </section>
  );
}