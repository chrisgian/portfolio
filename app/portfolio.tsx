'use client';

import React, { useState, useEffect } from 'react';
import { BarChart3, Github, Linkedin, Mail, ExternalLink, TrendingUp, Database, Brain } from 'lucide-react';

export default function DataSciencePortfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: "Supply Chain Container Flow Optimization",
      description: "Analyze detailed shipment and order data to map container movements from origin to destination, identifying optimization opportunities that reduce lead times and costs. Track KPIs including on-time performance, volume, and carton distribution at container and PO-item levels.",
      tags: ["Python", "SQL", "Data Engineering", "Optimization"],
      impact: "Current Role @ Nike",
      link: "#"
    },
    {
      title: "Demand-Driven Allocation Algorithms",
      description: "Integrated real-time and historical demand signals into allocation algorithms to improve forecast accuracy and responsiveness. Built end-to-end data pipelines, developed optimization models, and automated the entire allocation process from data ingestion to output delivery.",
      tags: ["Optimization", "Python", "Data Pipelines", "Analytics"],
      impact: "1.75 years @ Nike",
      link: "#"
    },
    {
      title: "Expected Delivery Date & Inventory Flow Modeling",
      description: "Leveraged demand signals to recommend inventory padding and flow through distribution centers. Built stock/flow simulations accounting for replenishment cycles, safety stock, and lead times. Translated DC operational rules into model logic for accurate delivery date promises.",
      tags: ["Simulation", "Forecasting", "Python", "Process Modeling"],
      impact: "2.8 years @ Nike",
      link: "#"
    },
    {
      title: "NLP-Enhanced Customer Search System",
      description: "Enhanced internal search capabilities for customer call centers by applying NLP methods and integrating with the ElasticSearch API.",
      tags: ["NLP", "ElasticSearch", "Python"],
      impact: "XPO Logistics",
      link: "#"
    },
    {
      title: "Less-Than-Truckload Forecasting",
      description: "Improved forecast accuracy (MAPE) for daily tonnage predictions, supporting more effective labor planning and resource allocation.",
      tags: ["Forecasting", "Time Series", "Python"],
      impact: "XPO Logistics",
      link: "#"
    }
  ];

  const skills = [
    { category: "Supply Chain & Optimization", items: ["Supply Chain Analytics", "Optimization Algorithms", "Demand Forecasting", "Inventory Modeling", "Logistics Analytics"] },
    { category: "Data Engineering", items: ["Python", "SQL", "Data Pipelines", "Apache Spark", "ETL Processes"] },
    { category: "Analytics & ML", items: ["Statistical Modeling", "Time Series Forecasting", "NLP", "Scenario Analysis", "Scikit-learn"] },
    { category: "Tools & Platforms", items: ["AWS", "ElasticSearch", "Tableau/Dashboards", "Git", "Docker"] }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }} />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="max-w-6xl w-full">
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Accent decorations */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-sky-500 rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-emerald-500 rounded-full blur-3xl opacity-10" 
                 style={{ animationDelay: '1s' }} />
            
            {/* Text Content */}
            <div className="relative z-10 space-y-8">
              <div className="inline-block">
                <div className="flex items-center gap-3 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full mb-6 animate-fade-in">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-sm text-zinc-400">Available for opportunities</span>
                </div>
              </div>
              
              <h1 className="text-7xl md:text-8xl font-bold tracking-tight" style={{
                fontFamily: 'Georgia, serif',
                background: 'linear-gradient(135deg, #fff 0%, #60a5fa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'fade-slide-up 1s ease-out'
              }}>
                Data Scientist
              </h1>
              
              <p className="text-2xl md:text-3xl text-zinc-400 max-w-3xl leading-relaxed" style={{
                fontFamily: 'system-ui, sans-serif',
                animation: 'fade-slide-up 1s ease-out 0.2s backwards'
              }}>
                Senior Data Scientist specializing in supply chain optimization, demand forecasting, and logistics analytics. 7+ years turning complex data into operational impact at Nike and leading logistics companies.
              </p>
              
              <div className="flex gap-4 pt-6" style={{ animation: 'fade-slide-up 1s ease-out 0.4s backwards' }}>
                <a href="#projects" className="px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-sky-500/50">
                  View Projects
                </a>
                <a href="#contact" className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-100 rounded-lg font-medium transition-all hover:scale-105">
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Photo Section */}
            <div className="relative z-10 flex justify-center md:justify-end" style={{ animation: 'fade-slide-up 1s ease-out 0.3s backwards' }}>
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-emerald-500 rounded-2xl opacity-20 blur-xl" />
                {/* Image container */}
                <div className="relative h-full rounded-2xl overflow-hidden border-2 border-sky-500/30 hover:border-sky-500/60 transition-colors">
                  <img 
                    src="/assets/photo.png" 
                    alt="Christopher Gian" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-zinc-700 rounded-full p-1">
            <div className="w-1.5 h-3 bg-sky-500 rounded-full mx-auto" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <BarChart3 className="w-8 h-8 text-sky-500" />
            <h2 className="text-5xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
              Featured Projects
            </h2>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-sky-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-sky-500/10"
                style={{
                  animation: `fade-slide-up 0.6s ease-out ${index * 0.1}s backwards`
                }}
              >
                {/* Accent line */}
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-sky-500 to-emerald-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 pl-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-zinc-600 group-hover:text-sky-500 transition-colors" />
                  </div>
                  
                  <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-8 mb-6">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-500" />
                      <span className="text-emerald-400 font-semibold">{project.impact}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-4 py-1.5 bg-zinc-800 text-zinc-300 rounded-full text-sm border border-zinc-700 group-hover:border-sky-500/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-6 bg-zinc-900/50 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <Brain className="w-8 h-8 text-sky-500" />
            <h2 className="text-5xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
              Technical Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div 
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-sky-500/50 transition-all"
                style={{
                  animation: `fade-slide-up 0.6s ease-out ${index * 0.1}s backwards`
                }}
              >
                <h3 className="text-xl font-bold text-sky-400 mb-6 flex items-center gap-3">
                  <Database className="w-5 h-5" />
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 bg-zinc-800 text-zinc-200 rounded-lg text-sm hover:bg-zinc-700 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8" style={{ 
            fontFamily: 'Georgia, serif',
            background: 'linear-gradient(135deg, #fff 0%, #60a5fa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Let's Build Something Together
          </h2>
          
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="flex justify-center gap-6 flex-wrap">
            <a href="https://linkedin.com/in/chgian" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-3 px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-sky-500/50">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a href="https://github.com/chrisgian" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-3 px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-100 rounded-lg font-medium transition-all hover:scale-105">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto text-center text-zinc-500">
          <p>© 2026 Data Science Portfolio. Built with React and Tailwind CSS.</p>
        </div>
      </footer>

      <style>{`
        @keyframes fade-slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
