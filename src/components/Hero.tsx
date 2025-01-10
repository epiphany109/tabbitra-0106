import { useEffect, useRef } from "react";
import { Button } from "./ui/button";

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createLeaves = () => {
      if (!particlesRef.current) return;
      
      particlesRef.current.innerHTML = "";
      const leafCount = 20;
      
      for (let i = 0; i < leafCount; i++) {
        const leaf = document.createElement("div");
        leaf.className = "falling-leaf";
        leaf.style.left = Math.random() * 100 + "%";
        leaf.style.animationDelay = Math.random() * 10 + "s";
        leaf.style.animationDuration = (Math.random() * 5 + 8) + "s";
        particlesRef.current.appendChild(leaf);
      }
    };

    createLeaves();
    const interval = setInterval(createLeaves, 10000);

    // Enhanced parallax and fade-in effects
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const background1 = document.querySelector('.parallax-bg-1') as HTMLElement;
      const background2 = document.querySelector('.parallax-bg-2') as HTMLElement;
      const title = titleRef.current;
      
      // Parallax for backgrounds
      if (background1 && background2) {
        const scale = 1 + (scrolled * 0.0005);
        background1.style.transform = `translateY(${scrolled * 0.5}px) scale(${scale})`;
        background2.style.transform = `translateY(${scrolled * 0.7}px) scale(${scale * 1.1})`;
      }
      
      // Parallax for title
      if (title) {
        title.style.transform = `translateY(${scrolled * 0.3}px)`;
      }

      // Features fade-in animation
      if (featuresRef.current) {
        const features = featuresRef.current.getElementsByClassName('feature-box');
        Array.from(features).forEach((feature, index) => {
          const featureTop = (feature as HTMLElement).offsetTop;
          const triggerPoint = window.innerHeight * 0.75;
          
          if (scrolled + triggerPoint > featureTop) {
            (feature as HTMLElement).style.opacity = '1';
            (feature as HTMLElement).style.transform = 'translateY(0) rotate(var(--rotate-angle))';
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-[500vh] flex flex-col">
      <div ref={particlesRef} className="fixed inset-0 pointer-events-none overflow-hidden z-20" />
      
      {/* Parallax Backgrounds */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div 
          className="parallax-bg-1 absolute inset-0 bg-[url('/lovable-uploads/31509c9d-7aa4-4bb9-b783-2db4bb9388f3.png')] bg-no-repeat"
          style={{ 
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.9)',
            height: '120%',
            width: '100%',
            transformOrigin: 'center center',
            willChange: 'transform',
            opacity: 0.8
          }}
        />
        <div 
          className="parallax-bg-2 absolute inset-0 bg-[url('/lovable-uploads/6f2d46843e458a7915b8ea89f0e8a4e0.jpg')] bg-no-repeat"
          style={{ 
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.7)',
            height: '120%',
            width: '100%',
            transformOrigin: 'center center',
            willChange: 'transform',
            opacity: 0.5,
            mixBlendMode: 'overlay'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-0">
        <div className="text-center w-full">
          <h1 ref={titleRef} className="text-7xl font-bold mb-6 animate-fade-up" style={{ willChange: 'transform' }}>
            Embark On Tabbitra Voyage
          </h1>
          <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            The best way to interact with the chain DeFi
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <Button variant="outline" className="bg-accent hover:bg-accent-dark text-forest font-medium">
              TWITTER
            </Button>
            <Button variant="outline" className="bg-accent hover:bg-accent-dark text-forest font-medium">
              DISCORD
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-[90px] font-bold text-white/10">
            Tabbitra    Voyage
          </h2>
        </div>
      </div>

      {/* Enhanced Features Section with Fade-in Animation */}
      <div className="relative z-10 min-h-screen" ref={featuresRef}>
        <div className="container mx-auto px-4">
          <div 
            className="feature-box bg-wood p-8 rounded-lg mb-24 max-w-2xl transition-all duration-1000 opacity-0"
            style={{ 
              '--rotate-angle': '-2deg',
              transform: 'translateY(50px) rotate(-2deg)'
            } as React.CSSProperties}
          >
            <h3 className="text-3xl font-bold mb-4">DECENTRALIZED, YET INTUITIVE</h3>
            <p className="text-lg">Experience the freedom of DeFi with an intuitive, mobile-first app</p>
          </div>
          
          <div 
            className="feature-box bg-wood p-8 rounded-lg mb-24 ml-auto max-w-2xl transition-all duration-1000 opacity-0"
            style={{ 
              '--rotate-angle': '2deg',
              transform: 'translateY(50px) rotate(2deg)'
            } as React.CSSProperties}
          >
            <h3 className="text-3xl font-bold mb-4">EARNING OPTIMIZED</h3>
            <p className="text-lg">Tabbitra handles everything - swaps, contract interactions, and gas payments - maximizing your yield with minimal effort</p>
          </div>

          <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div 
              className="feature-box bg-wood p-8 rounded-lg transition-all duration-1000 opacity-0"
              style={{ 
                '--rotate-angle': '-1deg',
                transform: 'translateY(50px) rotate(-1deg)'
              } as React.CSSProperties}
            >
              <h3 className="text-2xl font-bold mb-4">DEFI WITH DATA</h3>
              <p className="text-lg">Simulate deposit outcomes, track your transactions, and gain real-time performance insights</p>
            </div>
            
            <div 
              className="feature-box bg-wood p-8 rounded-lg transition-all duration-1000 opacity-0"
              style={{ 
                '--rotate-angle': '1deg',
                transform: 'translateY(50px) rotate(1deg)'
              } as React.CSSProperties}
            >
              <h3 className="text-2xl font-bold mb-4">EXPLOIT BLOCKING PROTECTION</h3>
              <p className="text-lg">Tabbitra leverages Spherex's zero day exploit blocking to ensure that only you can access your funds</p>
            </div>
          </div>
        </div>
      </div>

      {/* Start Earning Section */}
      <div className="relative z-10 min-h-[70vh] bg-wood-dark flex flex-col items-center justify-center">
        <div className="text-center mb-12 pt-20">
          <h2 className="text-8xl font-bold mb-12 mt-15">START    EARNING</h2>
          <div className="relative">
            <img src="/lovable-uploads/f8ecf25d-f7b6-43c7-af89-5a9f7f2a640c.png" alt="Bera Logo" className="w-auto h-auto mx-auto animate-spin-slow" />
            <Button className="bg-accent hover:bg-accent-dark text-forest font-medium px-8 py-6 text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:-translate-y-1 hover:scale-110 outline-none focus:outline-none active:outline-none">
              ENTER   APP
            </Button>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="relative z-10 text-sm text-white/60 text-center py-4">
        © 2024 Tabbitra. All rights reserved.
      </div>
    </div>
  );
};

export default Hero;