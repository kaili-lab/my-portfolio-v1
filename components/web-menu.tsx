import Link from "next/link";
import ModeToggle from "@/components/mode-toggle";

const WebMenu = () => {
  return (
    <header className="flex justify-between items-center py-6 border-b border-border/20">
      <Link
        href="/"
        className="font-semibold text-lg text-foreground hover:text-foreground/70 transition-colors"
      >
        Kai Li
      </Link>
      <nav className="flex items-center gap-6 text-sm text-foreground/60">
        <Link href="#projects" className="hover:text-foreground transition-colors">
          Projects
        </Link>
        <Link href="#contact" className="hover:text-foreground transition-colors">
          Contact
        </Link>
        <ModeToggle />
      </nav>
    </header>
  );
};

export default WebMenu;
