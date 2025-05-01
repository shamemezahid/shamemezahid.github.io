"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Merriweather_Sans } from "next/font/google";
import AccessibilityAccordion from "@/components/utils/AccessibilitySettings";
import { HomeIcon } from "lucide-react";

const merriweatherSans = Merriweather_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const NotFound = () => {
  const canvasRef = useRef(null);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let animationFrameId;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create a particle with random x & y positions, size, x & y speeds, and opacity
    const createParticle = (x, y) => ({
      x,
      y,
      // size between 12 and 96 (12 + [0 to 84])
      size: Math.random() * 84 + 12,

      // speed between -2 and 2 ([-0.5 to 0.5] * 4)
      speedX: (Math.random() - 0.5) * 8,
      speedY: (Math.random() - 0.5) * 8,
      
      // opacity between 0.25 and 0.75 ([0 to 0.75] + 0.25)
      opacity: Math.random() * 0.75 + 0.25,
    });

    // Create a new particle when the canvas is clicked
    const handleClick = (event) => {
      const newParticle = createParticle(event.clientX, event.clientY);
      setParticles((prevParticles) => [...prevParticles, newParticle]);
    };     
    canvas.addEventListener("click", handleClick);

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Get the primary color from CSS variable
        const primaryColor = getComputedStyle(document.documentElement)
          .getPropertyValue('--primary-color-400')
          .trim()
          .split(' ')
          .join(', ');
        
        context.fillStyle = `rgba(${primaryColor}, ${particle.opacity})`;
        context.font = `${particle.size}px ${merriweatherSans.style.fontFamily}`;
        context.fillText("404", particle.x, particle.y);

        // Update the position of the particle
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Measure the width of the text to check if the particle is out of the canvas
        const particleWidth = context.measureText("404").width;
        const particleHeight = particle.size;

        // If the particle is out of the canvas, reverse the speed and set the position to the edge
        if (particle.x < 0 || particle.x > canvas.width - particleWidth){
          particle.speedX *= -1;
          particle.x = particle.x < 0 ? 0 : canvas.width - particleWidth;
        }
        if (particle.y < particleHeight || particle.y > canvas.height){
          particle.speedY *= -1;
          particle.y = particle.y < particleHeight ? particleHeight : canvas.height;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener("click", handleClick);
    };
  }, [particles]);

  return (
    <div
      className={`relative flex flex-col items-center justify-center min-h-screen bg-neutral-100 dark:bg-neutral-900 overflow-hidden ${merriweatherSans.className}`}
    >
      <div className="fixed z-50 bottom-6 right-6">
        <AccessibilityAccordion />
      </div>
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="relative z-10 text-center bg-white/30 dark:bg-black/30 backdrop-blur-sm rounded-[32px] p-4 sm:p-5 border border-neutral-200 dark:border-neutral-800">
        <p className="text-xs text-primary-800 dark:text-primary-200 mb-2 px-3 py-1 bg-primary-50 dark:bg-primary-900/50 border border-primary-300 dark:border-primary-700 rounded-full inline-block">
          404
        </p>
        <h2 className="text-xl font-bold text-neutral-600 dark:text-neutral-400 mb-2">
          There are no easter eggs here
        </h2>
        <h4 className="text-sm text-neutral-600 dark:text-neutral-400 mb-8">
          No need to click around
        </h4>
        <Link
          href="/"
          className="group flex items-center justify-center h-12 font-semibold text-primary-700 dark:text-primary-500 transition-all duration-500 px-4 py-3 rounded-xl bg-neutral-200/[0.5] dark:bg-neutral-700/[0.5] hover:bg-primary-100 dark:hover:bg-primary-900"
        >
          <HomeIcon className="w-5 h-5 transition-all duration-200" strokeWidth={1.5}/>
          <span className="ml-2 text-sm transition-all duration-500">
            Return to Home
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
