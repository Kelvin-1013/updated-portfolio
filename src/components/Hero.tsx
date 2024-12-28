import { motion } from "framer-motion";
import { useEffect } from "react";
import Typed from 'typed.js';
import { styles } from "../styles";
import { Avatar, AvatarImage } from "./ui/avatar";

export const Hero = () => {
  useEffect(() => {
    const typed = new Typed(".typing", {
      strings: [
        "a Blockchain Developer",
        "a Full Stack Developer",
        "a Bot Expert",
      ],
      loop: true,
      typeSpeed: 65,
      backSpeed: 65,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute z-50 inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex flex-col md:flex-row items-start gap-8 w-full">
          <div className="flex-1">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF] typing"></span>
            </h1>
            <div className="mt-8 space-y-4 text-lg text-white/80">
              <p className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                ✨ <span className="font-semibold">Senior Blockchain & Full Stack Developer</span>
              </p>
              <p className="flex items-start gap-2">
                🚀 <span className="flex-1">Bot Expert: Solana Trading Bot | Telegram Bot | Customized Chatbot | E-commerce Bots | AI-Powered Chatbots | Workflow Automation Bots</span>
              </p>
              <p className="flex items-start gap-2">
                🔗 <span className="flex-1">Blockchain Expertise: Solana | Ethereum (ERC) | BSC | TRON | HECO | Polygon</span>
              </p>
              <p className="flex items-start gap-2">
                🌐 <span className="flex-1">Solutions: Multichain | NFT Marketplace | NFT Gaming | DEX | Crypto Wallets | ICO/IDO | Smart Contracts | Token Development</span>
              </p>
              <p className="flex items-start gap-2">
                💎 <span className="flex-1">Specialized in: Private/Public Blockchain (Go, Rust) | DApp Development | Smart Contracts (Solidity, Truffle, Hardhat)</span>
              </p>
              <p className="flex items-start gap-2">
                🌈 <span className="flex-1">Current Focus: Solana Arbitrage Bot Development</span>
              </p>
              <p className="flex items-start gap-2">
                📚 <span className="flex-1">Frontend: React/Next.js | Vue/Nuxt.js | Angular | Tailwind | Material Design | Bootstrap</span>
              </p>
              <p className="flex items-start gap-2">
                🔧 <span className="flex-1">Backend: Node.js/Express/Nest.js | PHP/Laravel | Python/Django/Flask</span>
              </p>
              <p className="flex items-start gap-2">
                🗄️ <span className="flex-1">Databases: MongoDB | MySQL | PostgreSQL</span>
              </p>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <Avatar className="w-48 h-48 rounded-full border-4 border-[#915EFF]/30">
              <AvatarImage src="/lovable-uploads/a58b58c6-aa34-44c7-99da-16489df1af6a.png" alt="Profile" />
            </Avatar>
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;