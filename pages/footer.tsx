"use client";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/20 bg-background/80 backdrop-blur-sm mt-16">
      <div className="container mx-auto px-4 py-8">
        {/* 主要内容区域 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* 左侧：个人信息 */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg text-green-600 dark:text-green-400">
              Kai Li
            </h3>
            <p className="text-foreground/70 text-sm mt-1">
              AI Agent Builder & Full Stack Developer
            </p>
          </div>

          {/* 右侧：回到顶部按钮 */}
          <Button
            onClick={scrollToTop}
            variant="outline"
            className="
              p-3 
              text-foreground/70 
              hover:text-green-600 
              dark:hover:text-green-400
              hover:bg-green-50/80 
              dark:hover:bg-green-950/40
              border-border
              hover:border-green-400
              rounded-lg 
              transition-all 
              duration-300
              hover:scale-110
              hover:-translate-y-1
            "
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </Button>
        </div>

        {/* 分割线 */}
        <div className="border-t border-border/10 mt-6 pt-6">
          {/* 底部版权信息 */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
            <p>© 2025 - {new Date().getFullYear()} Kai Li. All rights reserved.</p>
            <p>Built with Next.js & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
