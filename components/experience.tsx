export function Experience() {
  const experiences = [
    {
      title: "MERN Stack Developer",
      company: "NG Innovate",
      period: "Nov 2024 – Present",
      responsibilities: [
        "Build and maintain web and mobile applications using the MERN stack and React Native.",
        "Working on Parrotix, an English learning mobile app that uses games to make learning fun and easy.",
        "Manage server performance by adding rate limiting to stop users from sending too many requests at once.",
        "Use JWT authentication and role management to keep user accounts safe and well organized.",
        "Help develop a Multi-Tenant E-commerce Platform where users can create their own shops with custom domains and monthly subscriptions.",
        "Support different user roles such as Super Admin, Shop Owner, and Customer to make the platform easy to manage.",
      ],
      reference: "https://www.framistan.store/",
    },
    {
      title: "MERN Stack Developer Intern",
      company: "Waaps Developer",
      period: "Mar 2024 – Oct 2024",
      responsibilities: [
        "Developed a Multilingual Chat Application with real-time translation, allowing users to chat in their preferred languages.",
        "Built a Football Live Score & Analytics App where users can view live scores and explore match analytics using interactive charts.",
        "Designed responsive and user-friendly interfaces using Flutter, ensuring smooth navigation and engaging user experience.",
        "Integrated APIs for live data, and used Firebase for authentication, database management, and push notifications.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-primary pl-6 pb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-2xl font-semibold text-foreground">{exp.title}</h3>
                <span className="text-sm text-muted-foreground">{exp.period}</span>
              </div>
              <p className="text-lg text-primary font-medium mb-4">{exp.company}</p>
              <ul className="space-y-2 mb-4">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-muted-foreground flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
              {exp.reference && (
                <a
                  href={exp.reference}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent text-sm font-medium transition-colors"
                >
                  Reference: {exp.reference}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
