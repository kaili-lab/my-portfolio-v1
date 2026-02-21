"use client";

import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Github, TwitterIcon, Globe, Clock, Zap } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("contact");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // 邮箱地址 - 简单混淆
  const getEmail = () => {
    const parts = ["nautilus1876", "gmail", "com"];
    return `${parts[0]}@${parts[1]}.${parts[2]}`;
  };

  // Copy email to clipboard
  const copyEmail = async () => {
    try {
      const email = getEmail();
      await navigator.clipboard.writeText(email);
      toast.success("Email copied to clipboard!");
    } catch {
      toast.error(`Failed to copy email automatically. Email: ${getEmail()}`);
    }
  };

  return (
    <div id="contact" className="py-12 md:py-24 px-4 sm:px-6 lg:px-8  mt-20">
      <div
        className={`max-w-6xl w-full mx-auto text-center mb-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
          Let&apos;s Get In Touch
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
          I&apos;m currently seeking remote opportunities as a Full Stack
          Developer & AI Agent Builder.
        </p>
      </div>

      {/* 主要联系方式 */}
      <div
        className={`flex flex-col items-center space-y-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ animationDelay: "200ms" }}
      >
        {/* 邮箱按钮 */}
        <Button
          onClick={copyEmail}
          className="w-full max-w-xs py-3 px-5 rounded-xl text-white font-semibold text-base bg-gradient-to-r from-blue-600 to-emerald-600 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
        >
          <span className="relative z-10">📧 {getEmail()}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
        </Button>
        <p className="text-sm text-slate-500 dark:text-slate-400 -mt-2">
          Click to copy email address
        </p>

        {/* 简历下载按钮 */}
        <button
          disabled
          className="w-full max-w-xs py-3 px-5 rounded-xl text-white/60 font-semibold text-base bg-gradient-to-r from-blue-600/50 to-emerald-600/50 cursor-not-allowed text-center"
        >
          📄 Resume (Coming Soon)
        </button>

        {/* 社交链接 */}
        <div
          className={`flex space-x-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ animationDelay: "400ms" }}
        >
          <Link
            href="https://github.com/kaili-lab"
            className="bg-white dark:bg-slate-700/30 p-3 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={26} />
          </Link>
          <Link
            href="https://x.com/kaili_dev"
            className="bg-white dark:bg-slate-700/30 p-3 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon size={26} />
          </Link>
        </div>

        {/* 状态指示器 */}
        <div
          className={`flex flex-wrap justify-center gap-3 mt-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ animationDelay: "600ms" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full border border-green-200 dark:border-green-800">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-green-700 dark:text-green-300">
              Available for Remote Work
            </span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full border border-blue-200 dark:border-blue-800">
            <Zap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-300" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Async-friendly
            </span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full border border-purple-200 dark:border-purple-800">
            <Globe className="w-3.5 h-3.5 text-purple-600 dark:text-purple-300" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
              UTC+8 · 4+ hrs overlap with EST/PST
            </span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/30 rounded-full border border-amber-200 dark:border-amber-800">
            <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-300" />
            <span className="text-sm font-medium text-amber-700 dark:text-amber-300">
              Respond within 24 hours
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
