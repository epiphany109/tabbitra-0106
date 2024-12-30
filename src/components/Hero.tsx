import { useEffect, useRef } from "react";
import { Button } from "./ui/button";

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

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
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[500vh] flex flex-col">
      <div ref={particlesRef} className="fixed inset-0 pointer-events-none overflow-hidden z-20" />
      
      {/* Autumn Forest Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[url('/lovable-uploads/5d48c77d-889e-4e82-a315-dfebfe9f5790.png')] bg-cover bg-center"
          style={{ 
            backgroundPosition: 'center 20%',
            filter: 'brightness(0.7) saturate(1.2)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-0">
        <div className="text-center w-full">
          <h1 className="text-7xl font-bold mb-6 animate-fade-up">
            FOLLOW THE BERA TRAX
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
          <div className="flex justify-center gap-8 mt-16">
            {/* Partner logos would go here */}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-[150px] font-bold text-white/10">
            BERA TRAX
          </h2>
        </div>
      </div>

      {/* Wooden Sign Sections */}
      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="bg-wood p-8 rounded-lg transform -rotate-2 mb-24 max-w-2xl">
            <h3 className="text-3xl font-bold mb-4">DECENTRALIZED, YET INTUITIVE</h3>
            <p className="text-lg">Experience the freedom of DeFi with an intuitive, mobile-first app</p>
          </div>
          
          <div className="bg-wood p-8 rounded-lg transform rotate-2 mb-24 ml-auto max-w-2xl">
            <h3 className="text-3xl font-bold mb-4">EARNING OPTIMIZED</h3>
            <p className="text-lg">BeraTrax handles everything - swaps, contract interactions, and gas payments - maximizing your yield with minimal effort</p>
          </div>

          <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-wood p-8 rounded-lg transform -rotate-1">
              <h3 className="text-2xl font-bold mb-4">DEFI WITH DATA</h3>
              <p className="text-lg">Simulate deposit outcomes, track your transactions, and gain real-time performance insights</p>
            </div>
            
            <div className="bg-wood p-8 rounded-lg transform rotate-1">
              <h3 className="text-2xl font-bold mb-4">EXPLOIT BLOCKING PROTECTION</h3>
              <p className="text-lg">BeraTrax leverages Spherex's zero day exploit blocking to ensure that only you can access your funds</p>
            </div>
          </div>
        </div>
      </div>

      {/* Start Earning Section */}
      <div className="relative z-10 min-h-screen bg-wood-dark flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-8xl font-bold mb-12">START EARNING</h2>
          <div className="relative">
            <img src="/lovable-uploads/f8ecf25d-f7b6-43c7-af89-5a9f7f2a640c.png" alt="Bera Logo" className="w-32 h-32 mx-auto animate-spin-slow" />
            <Button className="bg-accent hover:bg-accent-dark text-forest font-medium px-8 py-6 text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              ENTER APP
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;