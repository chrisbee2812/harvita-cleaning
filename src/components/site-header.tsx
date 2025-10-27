"use client";

import Image from 'next/image';
import Link from "next/link";
import { Mail, Phone, MapPin } from 'lucide-react';
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
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
      <div className="container flex h-28 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center">
          <Image
            src='/HSL-Logo-nobg.png'
            alt='Harvita Services Logo'
            className="object-cover w-auto h-28"
            width={250}
            height={250}
            data-ai-hint='Harvita Services Logo'
          />
        </Link>
        <div className="hidden ml-8 md:block flex-col gap-8">
                   
          <nav className="hidden gap-4 text-lg mt-4 md:flex">
            {mainNavLinks.map((link) => (
              <Button key={link.href} variant="ghost" className={cn(
                  "gap-1 px-2 text-xl transition-colors hover:text-foreground/80",
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
                  "gap-1 px-2 text-xl transition-colors hover:text-foreground/80",
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
        <div className="flex flex-col flex-1 items-end justify-end gap-4 space-x-2">
          <div className="hidden md:flex text-xs gap-8">
            <div className="flex gap-2 flex-shrink-0 mt-1">
              <Mail className="h-4 w-4 text-primary" />
              <p className="text-muted-foreground">
                info@harvita.co.uk
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex gap-2 flex-shrink-0 mt-1">
                <Phone className="h-4 w-4 text-primary" />
                <p className="text-muted-foreground">
                  07747 874664
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex gap-2 flex-shrink-0 mt-1">
                <MapPin className="h-4 w-4 text-primary" />
                <p className="text-muted-foreground">
                  24 Cromwell Road, Burgess hill, R15 8QH
                </p>
              </div>
            </div>
          </div>
          <Button asChild className="hidden md:inline-flex rounded-full">
            <Link href="/contact">Request a Consultation</Link>
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
              <SheetTitle className="hidden">Menu</SheetTitle>
              <Link
                href="/"
                className="mb-8"
                onClick={() => setIsOpen(false)}
              >
                <Image
                  src='/HSL-Logo-nobg.png'
                  alt='Harvita Services Logo'
                  className="object-cover w-auto h-36"
                  width={250}
                  height={250}
                  data-ai-hint='Harvita Services Logo'
                />
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
