const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-card/30 border-t border-border/50">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Muhammad Bilal Portfolio. Built with
          React & TypeScript.
        </p>
        <p className="text-muted-foreground text-xs mt-2">
          <span className="font-mono text-primary">&lt;</span>
          Crafted with passion and code
          <span className="font-mono text-primary"> /&gt;</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
