"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NotFound = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="px-5 min-h-screen bg-background dark:bg-gray-900/95 backdrop-blur-xl relative overflow-hidden flex items-center justify-center">
        <div className="space-y-6 mb-12">
          <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold dark:text-white">
            Oops! Page Not Found
          </h1>
          <p className="text-xl xl:text-2xl text-muted-foreground dark:text-white max-w-2xl mx-auto leading-relaxed">
            Looks like this page got lost in the financial data! 
            Don't worry, even the smartest AI sometimes takes a wrong turn.
          </p>

          <p>
            <Link href='/' className="bg-orange-400 text-white py-3 px-5 rounded-[10px]">HOME</Link>
          </p>

        </div>


    </div>
  );
};

export default NotFound;