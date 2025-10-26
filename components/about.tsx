export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/professional-developer-portrait.png"
              alt="Muhammad Bilal"
              className="rounded-lg w-full aspect-square object-cover"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Highly skilled MERN Stack Developer with hands-on experience in building responsive web applications using
              MongoDB, Express.js, React.js, and Node.js. Proficient in developing RESTful APIs, integrating databases,
              and implementing front-end features with a focus on performance and scalability.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently working as a MERN Stack Developer at NG Innovate, where I build and maintain web and mobile
              applications. I'm passionate about coding and continuously improving my skills through real-world
              projects.
            </p>
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Key Strengths</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Full-stack web development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  RESTful API design and implementation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Database design and optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Responsive UI/UX implementation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
