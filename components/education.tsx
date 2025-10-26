export function Education() {
  const education = [
    {
      degree: "Bachelor in Computer Science",
      institution: "Sindh Madressatul Islam University",
      period: "2022 - 2026",
      details: "GPA: 3.3 / 4.0",
    },
    {
      degree: "Intermediate in Computer Science",
      institution: "Govt National College",
      period: "2020 - 2022",
      details: "Percentage: 75% / 100%",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-background rounded-lg p-6 border border-border">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                <span className="text-sm text-muted-foreground">{edu.period}</span>
              </div>
              <p className="text-primary font-medium mb-2">{edu.institution}</p>
              <p className="text-muted-foreground">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
