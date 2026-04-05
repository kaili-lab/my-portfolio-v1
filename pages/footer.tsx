const Footer = () => {
  return (
    <footer className="border-t border-border/20 py-8 mt-8">
      <p className="text-sm text-foreground/40">
        © {new Date().getFullYear()} Kai Li
      </p>
    </footer>
  );
};

export default Footer;
