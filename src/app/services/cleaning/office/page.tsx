import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const service = {
  id: 'office',
  title: 'Office Cleaning',
  description: "A clean office is more than just an aesthetic choice—it's a strategic investment in your company's health, productivity, and image. We provide comprehensive, reliable office cleaning services designed to create a spotless, sanitary, and inspiring environment for your team and visitors.",
  image: PlaceHolderImages.find((img) => img.id === 'office-cleaning'),
  features: [
    'Enhanced Employee Health & Productivity: Reduce sick days and presenteeism by eliminating germs, dust, and allergens. A clean workspace helps employees stay focused, healthy, and productive.',
    'A Powerful First Impression: Your office environment speaks volumes to clients, partners, and potential hires. We ensure that first impression is one of professionalism, care, and attention to detail.',
    'Thorough cleaning and restocking of restrooms',
    'Daily trash and recycling removal',
    'Floor care including vacuuming and mopping',
    'Cleaning kitchenettes and break rooms',
    'Wiping down high-touch surfaces (doorknobs, light switches)'
  ],
};

const testimonial = {
    name: "Mark T.",
    avatar: PlaceHolderImages.find((img) => img.id === 'avatar-2'),
    review: "The team is professional, punctual, and incredibly thorough. Our office has never looked better and our employees have noticed the difference.",
    rating: 5,
};

export default function OfficeCleaningPage() {
  return (
    <div>
      <section className="relative h-[40vh] w-full flex items-center justify-center text-center text-white">
        {service.image && (
          <Image
            src={service.image.imageUrl}
            alt={service.image.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={service.image.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter font-headline">
            {service.title}
          </h1>
        </div>
      </section>

      <div className="container py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold font-headline">Elevate Your Workspace: Professional Office Cleaning Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {service.description}
            </p>
            <h3 className="mt-8 text-2xl font-bold font-headline">The Cornerstones of a Productive Workspace</h3>
            <p className="mt-4 text-lg text-muted-foreground">
              A well-maintained office directly contributes to your business's success. Our services are built to support:
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Enhanced Employee Health & Productivity: </strong>Reduce sick days and presenteeism by eliminating germs, dust, and allergens. A clean workspace helps employees stay focused, healthy, and productive.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>A Powerful First Impression: </strong>Your office environment speaks volumes to clients, partners, and potential hires. We ensure that first impression is one of professionalism, care, and attention to detail.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Preservation of Your Assets: </strong>Regular, proper cleaning extends the life of your carpets, flooring, furniture, and equipment, protecting your capital investments.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>A Safe Working Environment: </strong>We help mitigate slip-and-fall risks and maintain clear, clutter-free workspaces, contributing to overall workplace safety.</span>
                </li>
            </ul>
            <h3 className="mt-8 text-2xl font-bold font-headline">Our Comprehensive Office Cleaning Services</h3>
            <p className="mt-4 text-lg text-muted-foreground">
              We offer flexible and customisable cleaning plans to suit offices of small to medium enterprises.
            </p>
            <h2 className="mt-8 text-xl font-bold font-headline">Daily & Core Cleaning Services</h2>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>High-Touch Surface Disinfection: </strong>Thorough cleaning and sanitizing of door handles, light switches, stair rails, and shared equipment.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Desk & Workspace Wiping: </strong>Dusting and disinfecting desks, telephones, and monitor screens (upon request).</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Kitchen & Breakroom Sanitization: </strong>Cleaning countertops, sinks, microwaves, refrigerators, and appliance handles. Restocking paper products as needed.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Restroom Deep Cleaning & Restocking: </strong>Sanitising all fixtures (toilets, urinals, sinks), mirrors, and floors. Refilling soap, paper towel, and toilet paper dispensers.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Vacuuming & Mopping: </strong>Comprehensive vacuuming of carpets and mopping of hard surface floors in all traffic areas.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Waste Bin Emptying: </strong>Emptying and relining all bins.</span>
                </li>
            </ul>
            <h2 className="mt-8 text-xl font-bold font-headline">Specialized & Periodic Services</h2>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong></strong>Detailed Carpet Care: Hot water extraction and steam cleaning to remove deep-seated dirt and stains.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Hard Floor Maintenance: </strong>Stripping, waxing, and buffing of vinyl, linoleum, and hard surface floors to restore their shine and protection.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Window & Glass Cleaning: </strong>Interior window and glass partition cleaning for a streak-free shine.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>High & Low Dusting: </strong>Dusting of vents, ceiling fixtures, ledges, and baseboards.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Upholstery Cleaning: </strong>Deep cleaning of office chairs, sofas, and other fabric furnishings.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Post-Construction Clean-Up: </strong>Intensive cleaning to remove dust and debris after renovations or building work.</span>
                </li>
            </ul>
            <h3 className="mt-8 text-2xl font-bold font-headline">Why Partner With Us?</h3>
            <p className="mt-4 text-lg text-muted-foreground">
              We are more than just a cleaning company; we are your partner in creating a superior work environment.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Customised Cleaning Plans: </strong>We don't believe in a one-size-fits-all approach. We tailor our services to your specific schedule, budget, and unique needs.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Trained & Vetted Professionals: </strong>Our cleaners are thoroughly background-checked, insured, and trained in the latest cleaning techniques and safety protocols.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Eco-Conscious Options: </strong>We offer green cleaning solutions that are effective yet safe for your employees and the environment, upon request.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Reliability & Consistency: </strong>We understand that your business operates on a schedule. You can count on us for punctual, thorough, and consistent service every time.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Transparent Communication: </strong>You will have a dedicated account manager and easy-to-use channels for feedback, special requests, or immediate concerns.</span>
                </li>
            </ul>
            <h3 className="mt-8 text-2xl font-bold font-headline">Our Simple Process</h3>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Consultation: </strong>We meet to understand your office layout, specific needs, and challenges.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Custom Proposal: </strong>We provide a detailed, no-obligation quote for your tailored cleaning plan.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Onboarding: </strong>We assign your dedicated team, establish schedules, and ensure seamless access.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Service Excellence: </strong>Our team delivers consistent, high-quality cleaning.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Quality Assurance: </strong>We conduct regular inspections and welcome your feedback to ensure we continuously meet and exceed your expectations.</span>
                </li>
            </ul>
            <Button asChild size="lg" className="mt-8 hidden lg:inline-flex">
                <Link href={`/contact?service=${service.id}`}>Request a Consultation</Link>
            </Button>
          </div>
          <div className="lg:col-span-1 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-primary">Request a Consultation</CardTitle>
                <CardDescription>Let's discuss your office cleaning needs. Contact us for a detailed proposal.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild size="lg" className="w-full">
                  <Link href={`/contact?service=${service.id}`}>Request a Consultation</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="text-left">
              <CardHeader>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
                  </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">"{testimonial.review}"</p>
                <div className="mt-4 flex items-center gap-4">
                  {testimonial.avatar && <Avatar>
                    <AvatarImage src={testimonial.avatar.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.avatar.imageHint} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>}
                  <p className="font-semibold">{testimonial.name}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
