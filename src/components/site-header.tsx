"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Wind, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import React from "react";

const mainNavLinks = [
  { href: "/", label: "Home" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];


const servicesNavLinks = [
  { href: "/services/domestic", label: "Domestic Cleaning" },
  { href: "/services/office", label: "Office Cleaning" },
  { href: "/services/commercial", label: "Commercial Cleaning" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  
  const allNavLinks = [
    ...mainNavLinks.slice(0, 1),
    { href: "/services", label: "Services" },
    ...servicesNavLinks,
    ...mainNavLinks.slice(1)
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Wind className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block font-headline">
              Harvita Services
            </span>
          </Link>
          <nav className="hidden gap-4 text-sm md:flex">
            {mainNavLinks.map((link) => (
              <Button key={link.href} variant="ghost" className={cn(
                  "gap-1 px-2 transition-colors hover:text-foreground/80",
                  pathname.startsWith(`/${link.label}`) ? "text-foreground font-semibold" : "text-foreground/60"
                )}>
                <Link
                  href={link.href}
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    pathname === link.href ? "text-foreground font-semibold" : "text-foreground/60"
                  )}
                >
                  {link.label}
                </Link>
              </Button>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={cn(
                  "gap-1 px-2 transition-colors hover:text-foreground/80",
                  pathname.startsWith('/services') ? "text-foreground font-semibold" : "text-foreground/60"
                )}>
                  Services
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                 <DropdownMenuItem asChild>
                  <Link href="/services">All Services</Link>
                </DropdownMenuItem>
                {servicesNavLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild className="hidden md:inline-flex rounded-full">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="md:hidden"
                size="icon"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link
                href="/"
                className="mb-8 flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <Wind className="mr-2 h-6 w-6 text-primary" />
                <span className="font-bold font-headline">Harvita Cleaning</span>
              </Link>
              <nav className="flex flex-col gap-6 text-lg">
                {allNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "transition-colors hover:text-foreground/80",
                      pathname === link.href ? "text-foreground font-semibold" : "text-foreground/60"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
