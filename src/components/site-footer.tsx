"use client";

import Link from "next/link";
import Image from 'next/image';
import { usePathname } from "next/navigation";

export function SiteFooter() {
  const pathname = usePathname();

  if (pathname.startsWith("/cleaning")) {
  return (
    <footer className="w-full border-t border-border bg-primary/10 py-8">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center md:w-1/3 gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Image
            src='/HSL-Logo-nobg.png'
            alt='Harvita Services Logo'
            className="object-cover w-auto h-28"
            width={250}
            height={250}
            data-ai-hint='Harvita Services Logo'
          />
          <div className="flex flex-col ml-8">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Established 2018
            </p>
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Harvita Cleaning Services. 
            </p>
            <p className="text-center text-xs text-muted-foreground md:text-left">
              All Rights Reserved. Harvita Cleaning Services is a trading name of Harvita Services Ltd, registered in England and Wales, company number 11682887.
            </p>
          </div>
          
        </div>
        <div className="hidden md:block text-center w-1/3">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            Harvita Cleaning Services – Professional cleaning covering: 
          </p>
          <p className="text-center text-sm leading-loose text-muted-foreground">
            Burgess Hill, Hassocks, Haywards Heath, Cuckfield, Horsted Keynes, 
          </p>
          <p className="text-center text-sm leading-loose text-muted-foreground">
            Hurstpierpoint, Crawley and surrounding areas.
          </p>
        </div>
        <nav className="flex flex-col items-center md:w-1/3 gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Link href="/services/care/domiciliary" className="transition-colors hover:text-foreground hover:font-semibold">Domiciliary Care</Link>
            <Link href="/services/cleaning" className="transition-colors hover:text-foreground hover:font-semibold">Cleaning Services</Link>
          </div>
          <div className="flex items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Link href="/services/care/reviews" className="transition-colors hover:text-foreground hover:font-semibold">Reviews</Link>
            <Link href="/cleaning/contact" className="transition-colors hover:text-foreground hover:font-semibold">Contact</Link>
          </div>
        </nav>
      </div>
    </footer>
  );
} else if (pathname.startsWith("/care")) {
  return (
    <footer className="w-full border-t border-border bg-primary/10 py-8">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center md:w-1/3 gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Image
            src='/HSL-Logo-nobg.png'
            alt='Harvita Services Logo'
            className="object-cover w-auto h-28"
            width={250}
            height={250}
            data-ai-hint='Harvita Services Logo'
          />
          <div className="flex flex-col ml-8">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Established 2018
            </p>
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Harvita Care Services. 
            </p>
            <p className="text-center text-xs text-muted-foreground md:text-left">
              All Rights Reserved. Harvita Care Services is a trading name of Harvita Services Ltd, registered in England and Wales, company number 11682887.
            </p>
          </div>
          
        </div>
        <div className="hidden md:block text-center w-1/3">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            Harvita Care Services – Compassionate domiciliary care covering: 
          </p>
          <p className="text-center text-sm leading-loose text-muted-foreground">
            Burgess Hill, Hassocks, Haywards Heath, Cuckfield, Horsted Keynes, 
          </p>
          <p className="text-center text-sm leading-loose text-muted-foreground">
            Hurstpierpoint, Crawley and surrounding areas.
          </p>
        </div>
        <nav className="flex flex-col items-center md:w-1/3 gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Link href="/services/care/domiciliary" className="transition-colors hover:text-foreground hover:font-semibold">Domiciliary Care</Link>
            <Link href="/services/cleaning" className="transition-colors hover:text-foreground hover:font-semibold">Cleaning Services</Link>
          </div>
          <div className="flex items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Link href="/services/care/reviews" className="transition-colors hover:text-foreground hover:font-semibold">Reviews</Link>
            <Link href="/care/contact" className="transition-colors hover:text-foreground hover:font-semibold">Contact</Link>
          </div>
          {/* <div>
            <Link
              href="/harvita-statement-of-purpose-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View our Statement of Purpose (opens in a new tab)"
              className="transition-colors hover:text-foreground hover:font-semibold"
            >
              View Our Statement of Purpose
            </Link>
          </div> */}
        </nav>
      </div>
    </footer>
  );
} else {
  return (
    <footer className="w-full border-t border-border bg-primary/10 py-8">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center md:w-1/3 gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Image
            src='/HSL-Logo-nobg.png'
            alt='Harvita Services Logo'
            className="object-cover w-auto h-28"
            width={250}
            height={250}
            data-ai-hint='Harvita Services Logo'
          />
          <div className="flex flex-col ml-8">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Established 2018
            </p>
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Harvita Services Ltd. 
            </p>
            <p className="text-center text-xs text-muted-foreground md:text-left">
              All Rights Reserved. Harvita Services Ltd, registered in England and Wales, company number 11682887.
            </p>
          </div>
          
        </div>
        <div className="hidden md:block text-center w-1/3">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            Harvita Services Ltd – Professional care and cleaning covering: 
          </p>
          <p className="text-center text-sm leading-loose text-muted-foreground">
            Burgess Hill, Hassocks, Haywards Heath, Cuckfield, Horsted Keynes, 
          </p>
          <p className="text-center text-sm leading-loose text-muted-foreground">
            Hurstpierpoint, Crawley and surrounding areas.
          </p>
        </div>
        <nav className="flex flex-col items-center md:w-1/3 gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Link href="/services/care/domiciliary" className="transition-colors hover:text-foreground hover:font-semibold">Domiciliary Care</Link>
            <Link href="/services/cleaning" className="transition-colors hover:text-foreground hover:font-semibold">Cleaning Services</Link>
          </div>
          <div className="flex items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Link href="/services/care/reviews" className="transition-colors hover:text-foreground hover:font-semibold">Reviews</Link>
            <Link href="/contact" className="transition-colors hover:text-foreground hover:font-semibold">Contact</Link>
          </div>
        </nav>
      </div>
    </footer>
  );
}
}