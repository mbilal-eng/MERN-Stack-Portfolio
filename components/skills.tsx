"use client"

import { Code2, Database, Wrench, Smartphone } from "lucide-react"

export function Skills() {
  const skillsData = [
    {
      category: "Frontend",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: 65 },
        { name: "Next.js", level: 60 },
        { name: "TypeScript", level: 55 },
        { name: "Tailwind CSS", level: 70 },
        { name: "Redux", level: 55 },
        { name: "JavaScript (ES6+)", level: 75 },
        { name: "React Native", level: 50 },
        { name: "HTML5 & CSS3", level: 80 },
      ],
    },
    {
      category: "Backend",
      icon: Wrench,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Node.js", level: 65 },
        { name: "Express.js", level: 60 },
        { name: "Nest.js", level: 45 },
        { name: "REST APIs", level: 70 },
      ],
    },
    {
      category: "Database",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "MongoDB", level: 65 },
        { name: "PostgreSQL", level: 55 },
        { name: "SQL", level: 60 },
        { name: "Firebase", level: 60 },
      ],
    },
    {
      category: "Tools & Platforms",
      icon: Smartphone,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git & GitHub", level: 75 },
        { name: "Docker", level: 45 },
        { name: "Postman", level: 70 },
        { name: "JWT Auth", level: 65 },
      ],
    },
  ];
  

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-foreground/60 text-lg">
            Expertise across the full MERN stack and modern development tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillsData.map((category) => {
            const IconComponent = category.icon
            return (
              <div
                key={category.category}
                className="group relative bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                {/* Category Header with Icon */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`bg-gradient-to-br ${category.color} p-3 rounded-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.category}</h3>
                </div>

                {/* Skills List with Proficiency Bars */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground/80">{skill.name}</span>
                        <span className="text-xs text-foreground/50">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-background rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-500`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
