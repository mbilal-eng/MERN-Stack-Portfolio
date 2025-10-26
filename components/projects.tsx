"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "Parrotix - English Learning App",
      description:
        "An innovative English learning mobile app that uses gamification to make learning fun and easy. Built with React Native and integrated with Firebase for real-time data and push notifications.",
      technologies: ["React Native", "Firebase", "Node.js"],
      link: "#",
      image: "/english-learning-app-with-games-and-interactive-le.jpg",
    },
    {
      title: "Multi-Tenant E-commerce Platform",
      description:
        "A comprehensive e-commerce platform allowing users to create their own shops with custom domains and monthly subscriptions. Features role-based access control for Super Admin, Shop Owner, and Customer.",
      technologies: ["MERN Stack", "JWT Auth", "Stripe"],
      link: "https://www.framistan.store/",
      image: "/e-commerce-platform-with-multiple-shops-and-custom.jpg",
    },
    {
      title: "Multilingual Chat Application",
      description:
        "Real-time chat application with integrated translation feature, allowing users to communicate in their preferred languages seamlessly.",
      technologies: ["React.js", "Node.js", "Socket.io", "Translation API"],
      link: "#",
      image: "/real-time-chat-application-with-translation-featur.jpg",
    },
    {
      title: "Football Live Score & Analytics",
      description:
        "Interactive sports analytics platform displaying live football scores with detailed match analytics using interactive charts and real-time data integration.",
      technologies: ["React.js", "Chart.js", "REST API"],
      link: "#",
      image: "/football-live-scores-and-analytics-dashboard-with-.jpg",
    },
    {
      title: "Movix - Movie Trailer Platform",
      description:
        "Web application where users can watch trailers and view IMDb ratings using the TMDB API. Features responsive design and smooth user experience.",
      technologies: ["React.js", "TMDB API", "Tailwind CSS"],
      link: "#",
      image: "/movie-trailer-platform-with-imdb-ratings.jpg",
    },
    {
      title: "ShortenURL - URL Shortener",
      description:
        "URL shortening service that converts long URLs into short, shareable links with comprehensive visit analytics and tracking.",
      technologies: ["MERN Stack", "Analytics"],
      link: "#",
      image: "/url-shortener-with-analytics-and-tracking-dashboar.jpg",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-background rounded-lg overflow-hidden border border-border hover:border-primary transition-colors group"
            >
              <div className="relative w-full h-48 bg-muted overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link !== "#" && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-accent"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    View Project <ExternalLink size={16} className="ml-2" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
