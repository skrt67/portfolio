"use client";
// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { useCallback, useState, useEffect } from "react";
import dynamic from "next/dynamic";
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
    <div className="relative w-full min-h-screen flex items-center justify-between px-4 md:px-20 py-10">
      {isMounted && (
        <div className="absolute w-full h-full z-[-1]">
          <Particles options={particlesOptions} init={particlesInit} />
        </div>
      )}

      <div className="w-full flex flex-col md:flex-row items-start justify-between gap-10">
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Bonjour,
            <br />
            Je suis{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              {personalData.name}
            </span>
            ,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-green-500">
              Étudiant Développeur
            </span>
            .
          </h1>

          <div className="flex gap-4">
            <Link href="https://github.com/skrt67" target="_blank">
              <BsGithub className="w-8 h-8 text-pink-500 hover:text-purple-500 transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com/in/altan-depeli-508a052b9/" target="_blank">
              <BsLinkedin className="w-8 h-8 text-pink-500 hover:text-purple-500 transition-colors" />
            </Link>
            <Link href="https://facebook.com/altandepeli" target="_blank">
              <FaFacebook className="w-8 h-8 text-pink-500 hover:text-purple-500 transition-colors" />
            </Link>
            <Link href="https://twitter.com/altandepeli" target="_blank">
              <FaTwitterSquare className="w-8 h-8 text-pink-500 hover:text-purple-500 transition-colors" />
            </Link>
          </div>

          <div className="flex gap-4">
            <Link
              href="#contact"
              className="px-6 py-3 bg-[#1a1a1a] border border-[#333] rounded-full text-white hover:bg-[#252525] transition-colors"
            >
              ME CONTACTER 👋
            </Link>
            <Link
              href="/CV_DEPELI_Altan.pdf"
              target="_blank"
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white hover:opacity-90 transition-opacity"
            >
              MON CV ↓
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <GlowCard identifier="hero">
            <div className="p-6 font-mono">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <code className="text-sm md:text-base">
                <div>
                  <span className="text-pink-500">const</span>
                  <span className="text-white"> etudiant = </span>
                  <span className="text-gray-400">{"{"}</span>
                </div>
                <div className="ml-4">
                  <span className="text-white">nom:</span>
                  <span className="text-yellow-300"> &apos;{personalData.name}&apos;,</span>
                </div>
                <div className="ml-4">
                  <span className="text-white">compétences:</span>
                  <span className="text-gray-400"> [</span>
                  <span className="text-yellow-300">&apos;HTML&apos;</span>
                  <span className="text-gray-400">,</span>
                  <span className="text-yellow-300"> &apos;CSS&apos;</span>
                  <span className="text-gray-400">,</span>
                  <span className="text-yellow-300"> &apos;JavaScript&apos;</span>
                  <span className="text-gray-400">,</span>
                  <br />
                  <span className="ml-8 text-yellow-300">&apos;PHP&apos;</span>
                  <span className="text-gray-400">,</span>
                  <span className="text-yellow-300"> &apos;Symfony&apos;</span>
                  <span className="text-gray-400">,</span>
                  <span className="text-yellow-300"> &apos;MySQL&apos;</span>
                  <span className="text-gray-400">,</span>
                  <br />
                  <span className="ml-8 text-yellow-300">&apos;WordPress&apos;</span>
                  <span className="text-gray-400">],</span>
                </div>
                <div className="ml-4">
                  <span className="text-white">passionné:</span>
                  <span className="text-orange-400"> true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-white">curieux:</span>
                  <span className="text-orange-400"> true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-white">motivé:</span>
                  <span className="text-orange-400"> true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-green-400">recherche:</span>
                  <span className="text-orange-400"> function</span>
                  <span className="text-gray-400">() {"{"}</span>
                </div>
                <div className="ml-8">
                  <span className="text-orange-400">return</span>
                  <span className="text-gray-400"> (</span>
                </div>
                <div className="ml-12">
                  <span className="text-cyan-400">this</span>
                  <span className="text-white">.passionné</span>
                  <span className="text-yellow-300"> &&</span>
                </div>
                <div className="ml-12">
                  <span className="text-cyan-400">this</span>
                  <span className="text-white">.motivé</span>
                  <span className="text-yellow-300"> &&</span>
                </div>
                <div className="ml-12">
                  <span className="text-cyan-400">this</span>
                  <span className="text-white">.compétences.length</span>
                  <span className="text-yellow-300"> &gt;=</span>
                  <span className="text-orange-400"> 5</span>
                </div>
                <div className="ml-8">
                  <span className="text-gray-400">);</span>
                </div>
                <div className="ml-4">
                  <span className="text-orange-400">{"}"}</span>
                </div>
                <div>
                  <span className="text-gray-400">{"}"}</span>
                </div>
              </code>
            </div>
          </GlowCard>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
