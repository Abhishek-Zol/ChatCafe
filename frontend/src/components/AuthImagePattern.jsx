import React, { useEffect, useRef } from "react";

const AuthImagePattern = ({ title, subtitle }) => {
  const bgRef = useRef(null);

  // Simple parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const offset = window.scrollY * 0.1;
        bgRef.current.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden hidden lg:flex items-center justify-center bg-base-200 p-12 min-h-[80vh]">
      {/* Parallax Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 bg-cover bg-center opacity-60 pointer-events-none"
        style={{
          backgroundImage: `url('/images/background.jpg')`
        }}
      />

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,theme(colors.primary/20)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-md text-center">
        <h2 className="text-3xl font-extrabold mb-4 text-base-content">{title}</h2>
        <p className="text-xl text-base-content/120">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
