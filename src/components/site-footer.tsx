import { Wind } from "lucide-react";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/" className="flex items-center gap-2">
            <Wind className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">Harvita Cleaning</span>
          </Link>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Harvita Cleaning Services. All Rights Reserved.
          </p>
        </div>
        <nav className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/services" className="transition-colors hover:text-foreground">Services</Link>
          <Link href="/reviews" className="transition-colors hover:text-foreground">Reviews</Link>
          <Link href="/contact" className="transition-colors hover:text-foreground">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
