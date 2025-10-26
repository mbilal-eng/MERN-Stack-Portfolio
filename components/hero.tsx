"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://static.vecteezy.com/system/resources/previews/047/020/330/non_2x/technology-background-abstract-technology-with-line-digital-color-dot-hi-tech-technological-for-web-banner-background-object-vector.jpg')",
          }}
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-background/50" />

        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />

        {/* Animated tech grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Floating tech circles - subtle animation */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-32 right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Geometric lines */}
        
        {/* <svg className="absolute inset-0 w-full h-full opacity-5" preserveAspectRatio="none">
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
        </svg> */}
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">Muhammad Bilal</h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 text-balance">MERN Stack Developer</p>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
          Building responsive, scalable web applications with MongoDB, Express.js, React.js, and Node.js. Passionate
          about clean code and user-centric design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-accent text-primary-foreground"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get in Touch
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open("https://drive.google.com/file/d/1example/view", "_blank")}
          >
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  )
}
