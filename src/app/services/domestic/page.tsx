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
  description: 'Our domestic cleaning service is designed to give you back your time. We offer regular weekly, bi-weekly, or monthly cleaning schedules, as well as one-off deep cleans. Your home will be a consistently clean and healthy environment for you and your family.',
  image: PlaceHolderImages.find((img) => img.id === 'domestic-cleaning'),
  features: [
    'Kitchen surfaces, sinks, and appliance exteriors cleaned', 
    'Complete bathroom sanitization (toilets, showers, and sinks)', 
    'Dusting of all surfaces, including furniture and fixtures', 
    'Vacuuming carpets and rugs', 
    'Mopping hard floors', 
    'Bedroom tidying and making beds',
    'Emptying all trash bins'
  ],
};

const testimonial = {
  name: "Sarah L.",
  avatar: PlaceHolderImages.find((img) => img.id === 'avatar-1'),
  review: "Harvita has been a game-changer for our family. We come home to a sparkling clean house every week. Their attention to detail is unmatched!",
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
              {service.description} We use eco-friendly products that are safe for your children and pets, ensuring a clean that you can feel good about. Let our professional and vetted team handle the dirty work.
            </p>
            <h3 className="mt-8 text-2xl font-bold font-headline">What's Included?</h3>
            <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-muted-foreground">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-1 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Ready for a Quote?</CardTitle>
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
