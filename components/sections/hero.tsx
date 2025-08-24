import Link from "next/link";
import { Button } from "@/components/ui/button";
// Corrected: Added ArrowDown to the import list
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Header from "@/components/layout/header";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <Header />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent -z-10" />
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Deepak Kumar</span>
            </h1>
            {/* Improved: Made the subtitle more specific and impactful */}
            <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
              Full-Stack Developer & AI Enthusiast
            </h2>
            {/* Improved: Added context about your strong DSA background */}
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              As a final-year Computer Science student with a strong foundation in Data Structures & Algorithms, 
              I specialize in building modern web applications with React, Node.js, and cloud technologies.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" asChild>
                <Link href="#contact">Get In Touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>

            <div className="flex space-x-4">
              {/* Corrected: Updated GitHub link */}
              <a
                href="https://github.com/deepakkumar8400"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              {/* Corrected: Updated LinkedIn link */}
              <a
                href="https://www.linkedin.com/in/deepak-kumar213243270/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:0221cs135@niet.co.in"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
              {/* Reminder: Ensure your image is located at 'public/image/Brand.jpg' */}
              <Image
                src="/image/Brand.jpg"
                alt="Deepak Kumar"
                width={320}
                height={320}
                className="w-full h-full object-cover"
                priority // Add priority to preload the hero image
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <Link href="#about" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6 text-primary" />
          </Link>
        </div>
      </div>
    </section>
  );
}
