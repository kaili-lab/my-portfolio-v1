"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { Github, TwitterIcon, Mail, FileText } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const email = "nautilus1876@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast.success("Email copied!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy");
    }
  };

  return (
    <section id="contact" className="py-16 border-t border-border/30">
      <h2 className="text-2xl font-bold text-foreground mb-6">Contact</h2>

      <div className="max-w-lg space-y-4">
        <p className="text-foreground/60">
          Currently seeking remote opportunities. Feel free to reach out.
        </p>

        <div className="flex flex-col gap-3">
          {/* 邮箱 */}
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors text-left"
          >
            <Mail size={18} />
            <span>{email}</span>
            <span className="text-xs text-foreground/40">
              {copied ? "Copied!" : "Click to copy"}
            </span>
          </button>

          {/* 简历下载 */}
          <Link
            href="/kai-li-resume.pdf"
            download
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
          >
            <FileText size={18} />
            <span>Resume (PDF)</span>
          </Link>
        </div>

        {/* 社交链接 */}
        <div className="flex items-center gap-4 pt-2">
          <Link
            href="https://github.com/kaili-lab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/40 hover:text-foreground transition-colors"
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://x.com/kaili_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/40 hover:text-foreground transition-colors"
          >
            <TwitterIcon size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
