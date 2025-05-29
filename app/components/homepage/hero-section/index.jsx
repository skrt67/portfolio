"use client";
// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { useCallback, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Engine } from "@tsparticles/engine";
import { particlesOptions } from "../../../../utils/data/particles-config";
import GlowCard from "../../helper/glow-card";

const Particles = dynamic(() => import("@tsparticles/react"), {
  ssr: false,
  loading: () => <></>,
});

function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    const { loadSlim } = await import("@tsparticles/slim");
    await loadSlim(engine);
  }, []);

  return (
    <div id="home" className="relative w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1">
      {isMounted && (
        <div className="absolute w-full h-full z-[-1]">
          <Particles options={particlesOptions} init={particlesInit} />
        </div>
      )}

      <div className="w-[90%] md:w-[70%] lg:w-[50%] space-y-5 flex flex-col justify-center items-center">
        <div className="relative">
          <Image
            src="/me.jpg"
            alt="Altan DEPELI"
            width={200}
            height={200}
            priority
            className="rounded-full"
          />
          <div className="absolute bottom-5 -right-2">
            <div className="relative">
              <div className="w-8 h-8 bg-[#fbe2e3] absolute top-0 -z-10 left-0 rounded-full blur-[1px]"></div>
              <div className="w-8 h-8 bg-[#dbd7fb] absolute top-0 -z-10 left-0 rounded-full blur-[1px] mix-blend-multiply"></div>
              <div className="w-8 h-8 flex items-center justify-center relative z-20 overflow-hidden rounded-full outline-none border-[0.5px] border-[#c8c8c8]">
                <span>👋</span>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {personalData.name}
          </span>
        </h1>

        <h2 className="font-medium text-[#383838] text-xs sm:text-xl">{personalData.designation}</h2>

        <p className="text-[#666666] text-sm sm:text-lg">{personalData.description}</p>

        <div className="flex gap-5 items-center">
          <Link
            href="#contact"
            className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          >
            Hire Me
          </Link>
          <Link
            href="/CV_DEPELI_Altan.pdf"
            target="_blank"
            className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          >
            Resume
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 w-full">
        <GlowCard identifier="hero">
          <div className="p-6 text-left">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Altan DEPELI</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">HTML</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">CSS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">JavaScript</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">PHP</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Symfony</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MySQL</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">WordPress</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{'() {'}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                <span className="text-gray-400">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">hardWorker</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">problemSolver</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">skills.length</span>
                <span className="mr-2 text-amber-300">&gt;=</span>
                <span className="text-orange-400">5</span>
              </div>
              <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
              <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
              <div><span className="text-gray-400">{`}`}</span></div>
            </code>
          </div>
        </GlowCard>
      </div>
    </div>
  );
}

export default HeroSection;
