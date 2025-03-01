import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Header from "@/components/layout/header";
import Image from "next/image"; // Import the Image component from Next.js

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
            <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
              Software Developer & Web Development Enthusiast
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              I specialize in building modern web applications with React, Node.js, and cloud technologies. Passionate
              about creating AI-powered solutions that solve real-world problems.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="#contact">
                <Button size="lg">Get In Touch</Button>
              </Link>
              <Link href="#projects">
                <Button variant="outline" size="lg">
                  View Projects
                </Button>
              </Link>
            </div>

            <div className="flex space-x-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:0221cs135@niet.co.in"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              {/* Use the Next.js Image component for optimized images */}
              <Image
                src="/image/Brand.jpg" // Corrected path to the image
                alt="Deepak Kumar"
                width={320} // Set the width of the image
                height={320} // Set the height of the image
                className="w-full h-full object-cover"
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