import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const service = {
  id: 'domestic',
  title: 'Domestic Cleaning',
  description: "At Harvita Services, we recognize the paramount importance of trust when engaging with our clients in their homes. Consequently, we prioritize a preliminary consultation to ascertain your specific cleaning preferences and product requirements. This enables us to develop a bespoke cleaning specification, consistently meeting your individual needs. Our objective is to deliver a clean that instills confidence and satisfaction.",
  image: PlaceHolderImages.find((img) => img.id === 'domestic-cleaning'),
  features: [
    'The same dedicated and fully trained team are assigned to your home on a regular schedule in order to provide a consistent and personalised service.', 
    'Public and employee liability insurance coverage up to £5 million prioritises your peace of mind.', 
    'We welcome your feedback to continually enhance the quality of our service.',
  ],
  weeklyFortnightFeatures: [
    'General cleaning: Dusting, vacuuming and mopping of floors, cleaning surfaces and tidying up.', 
    'Kitchen cleaning: Wiping down counter tops, cleaning appliances and mopping floors.', 
    'Bathroom cleaning: Sanitizing sinks, toilets, showers and bathtubs, and polishing mirrors.',
    'Bedroom cleaning: Dusting, vacuuming, changing bed linen (if requested) and general tidying.',
  ],
  oneoffFeatures: [
    'Kitchen deep cleaning: Thorough cleaning of all appliances (inside and out), countertops, cabinets, sinks and floors. We tackle grease and grime build-up to ensure a sparkling kitchen.', 
    'Bathroom deep cleaning: Deep cleaning and sinitising of showers, bathtubs, toilets, sinks, tiles. We remove soap scum, limescale and mold on tiles to leave your bathroom spotless.', 
    'Living and Dining areas: Comprehensive dusting, vacuuming and mopping of all surfaces.',
    'Bedroom deep cleaning: Detailed cleaning of all surfaces including under beds and behind furniture to create a truly clean and restful environment.', 
    'Specialised cleaning: Additional services like fridge cleaning, inside oven cleaning, dishwasher, microwave cleaning can be done separately.', 
  ],
};

const testimonial = {
  name: "SB, Hurstpierpoint",
  avatar: PlaceHolderImages.find((img) => img.id === 'avatar-1'),
  review: "Harvita Cleaning Services offer exceptional services. They are great communicators, extremely reliable, and consistently maintain high standards and attention to detail. Every visit leaves our space spotless and feeling brightened up and clean. They are trustworthy, efficient, and detail-oriented — I highly recommend their services.",
  rating: 5,
};

export default function DomesticCleaningPage() {
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
            <h2 className="text-3xl font-bold font-headline">A Spotless Home, Without the Hassle</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {service.description} Allow our professional and thoroughly vetted team to manage your cleaning requirements.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              The minimum booking duration is one hour. We tailor our services to meet your specific requirements. Several key factors influence the total time needed to achieve an impeccably clean home. The presence of pets, the inclusion of ironing, the quantity of decorative items, or the preference for window cleaning during each visit all play a crucial role in determining the required cleaning time. Understanding your unique needs will enable us to customize our services to your home, allowing you to fully enjoy your living space.
            </p>
            <h3 className="mt-8 text-2xl font-bold font-headline">What's Included?</h3>
            <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-4 text-muted-foreground">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-2xl font-bold font-headline">Why Choose Us</h3>
            <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-4 text-muted-foreground">
                {service.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-2xl font-bold font-headline">Weekly / Fortnightly / Regular Cleaning</h3>
            <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-4 text-muted-foreground">
              {service.weeklyFortnightFeatures.map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-2xl font-bold font-headline">One off clean/Deep clean</h3>
            <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-4 text-muted-foreground">
              {service.oneoffFeatures.map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-2xl font-bold font-headline">Cleaning Materials and Equipment</h3>
            <p className="mt-4 text-lg text-muted-foreground">
              To ensure a hygienic environment, please provide separate cleaning cloths for specific purposes: one for the toilet, one for other bathroom surfaces, and one for the kitchen.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Also needed are a duster, a microfibre/glass cloth, a long-handled duster, a vacuum cleaner, and a mop and bucket.
            </p>
            <Button asChild size="lg" className="mt-8 hidden lg:inline-flex">
                <Link href={`/contact?service=${service.id}`}>Get a Free Quote</Link>
            </Button>
          </div>
          <div className="lg:col-span-1 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-primary">Ready for a Quote?</CardTitle>
                <CardDescription>Click the button below to get a free, no-obligation estimate for your home.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild size="lg" className="w-full">
                  <Link href={`/contact?service=${service.id}`}>Get a Free Quote</Link>
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
