import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const service = {
  id: 'commercial',
  title: 'Commercial Cleaning',
  description: 'We handle cleaning for a variety of commercial spaces, including educational buildings, leisure and health environments, retail stores, medical facilities, and more. Harvita Services is dedicated to upholding the highest standards of quality by leading from the front and insipring our staff to perform at their best.',
  image: PlaceHolderImages.find((img) => img.id === 'commercial-cleaning'),
  features: [
    'We implement regular unannounced spot checks to ensure consistent service quality',
    'We provide continuous professional development and training for our cleaning staff',
    'Thorough cleaning inspections are carried out to enhance our methods and ensure excellence',    
  ],
};

const testimonial = {
    name: "Global Corp Inc.",
    avatar: PlaceHolderImages.find((img) => img.id === 'avatar-2'),
    review: "Our facility requires a high standard of cleanliness, and Harvita delivers every single time. Their commercial cleaning crew is efficient, discreet, and very detail-oriented.",
    rating: 5,
};

export default function CommercialCleaningPage() {
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
            <h2 className="text-3xl font-bold font-headline">Specialized Cleaning for Your Business</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {service.description} We develop customized cleaning protocols to meet the specific demands of your commercial space, ensuring safety, compliance, and a pristine environment for your customers and staff.
            </p>
            <h3 className="mt-8 text-2xl font-bold font-headline">What's Included?</h3>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 text-muted-foreground">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-lg text-muted-foreground">
              Our clients enjoy 24 hour access to their managers, reflecting our commitment to outstanding service. We recognise that effective communication is fundamental. Please feel free to contact us via phone or email with any inquiries. We can arrange a meeting to assess your cleaning requirements.
            </p>
            <h3 className="mt-10 text-2xl font-bold font-headline">Example dedicated services</h3>
            <h4 className="mt-6 text-xl font-bold font-headline">School Cleaning</h4>
            <p className="mt-4 text-lg text-muted-foreground">
              Our school cleaning services are dedicated to ensuring a safe and healthy environment for both students and staff. We perform essential tasks such as dusting, vacuuming, mopping and sanitizing high-touch surfaces, in addition to waste removal, deep cleaning of kitchens and restrooms. Periodic deep cleaning and sanitising are also carried out to address less frequent tasks, including window washing and carpet cleaning, guaranteeing a thoroughly clean educational setting for everyone.
            </p>
            <h4 className="mt-6 text-xl font-bold font-headline">Gym Cleaning</h4>
            <p className="mt-4 text-lg text-muted-foreground">
              Gym cleaning services play a vital role in maintaining hygiene and appeal within fitness centers. Our professional team ensures comprehensive sanitation of workour, rest rooms, locker rooms and communal areas, safeguarding the health of all members. We specifically focus on high-touch surfaces, including weights, machines and mats, implementing regular disinfection protocols to curb the spread of germs. Upholding a clean environment is imperative for enhancing member satisfaction and promoting overall health, especially in areas prone to sweat and moisture.
            </p>
            <Button asChild size="lg" className="mt-8 hidden lg:inline-flex">
                <Link href={`/contact?service=${service.id}`}>Request a Consultation</Link>
            </Button>
          </div>
          <div className="lg:col-span-1 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-primary">Get a Commercial Bid</CardTitle>
                <CardDescription>Partner with us to maintain your commercial property. Contact us for a consultation and bid.</CardDescription>
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
