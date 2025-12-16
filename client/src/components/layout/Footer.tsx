export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background py-12 mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="text-lg font-display font-bold">Csaba Jancsó</span>
          <p className="text-sm text-muted-foreground">
            Technical Artist • Performance • Tools
          </p>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Csaba Jancsó. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
