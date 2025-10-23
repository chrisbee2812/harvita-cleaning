import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check } from 'lucide-react';

const services = [
  {
    id: 'domestic',
    title: 'Domestic Cleaning',
    description: 'Welcome to our premium domestic cleaning service, designed to give you back your time while keeping your home immaculate. Choose the schedule that works best for you: regular weekly cleaning to maintain consistent freshness, fortnightly visits for ongoing maintenance, or a customized frequency that fits your unique needs. Additionally, we offer intensive one-off deep cleaning sessions for complete home transformations, perfect for seasonal resets, special occasions, or when your space needs that extra level of care and attention.',
    image: PlaceHolderImages.find((img) => img.id === 'domestic-cleaning'),
    features: ['Kitchen surfaces and appliances', 'Bathroom sanitization', 'Dusting and vacuuming', 'Floor mopping', 'Bedroom tidying'],
    href: '/services/domestic',
  },
  {
    id: 'office',
    title: 'Office Cleaning',
    description: "Harvita Services provides professional office cleaning designed to create a spotless, productive workspace. We help you maintain a clean and healthy environment that boosts employee morale and impresses clients. Our customized cleaning plans are tailored to your office's specific needs and schedule, with services available during or after business hours. Reach out to schedule a free assessment and let us create a cleaning solution that fits your budget and keeps your business shining.",
    image: PlaceHolderImages.find((img) => img.id === 'office-cleaning'),
    features: ['Workstation and desk cleaning', 'Common area and lobby upkeep', 'Restroom cleaning and restocking', 'Trash removal', 'Floor care and vacuuming'],
    href: '/services/office',
  },
  {
    id: 'commercial',
    title: 'Commercial Cleaning',
    description: "Transform your business environment with Harvita Services' professional commercial cleaning solutions, serving Burgess Hill and West Sussex. We specialize in creating cleaner, healthier spaces for small and medium businesses, knowing that your premises' appearance directly influences customer perceptions and staff satisfaction. Our customized cleaning protocols are carefully crafted to deliver maximum impact within your budget framework. Take the first step toward a spotless workplace by booking your no-obligation site visit, where we'll assess your needs and illustrate our unwavering commitment to dependable, high-quality service that keeps your business looking its best.",
    image: PlaceHolderImages.find((img) => img.id === 'commercial-cleaning'),
    features: ['Customized cleaning plans', 'Large-scale floor maintenance', 'Window and facade cleaning', 'Sanitization of high-touch areas', 'Flexible scheduling (after hours)'],
    href: '/services/commercial',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <div className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight font-headline md:text-5xl">Our Services</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide comprehensive cleaning solutions for every type of space. Discover how we can make your environment shine.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {services.map((service, index) => (
            <Card key={service.id} className="overflow-hidden lg:grid lg:grid-cols-2 lg:items-center">
              <div className={index % 2 === 0 ? 'lg:order-first' : 'lg:order-last'}>
                {service.image && (
                  <Image
                    src={service.image.imageUrl}
                    alt={service.image.description}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover aspect-video"
                    data-ai-hint={service.image.imageHint}
                  />
                )}
              </div>
              <div className="flex flex-col justify-center p-6">
                <CardHeader className="p-0">
                  <CardTitle className="text-3xl font-headline">{service.title}</CardTitle>
                  <CardDescription className="text-base pt-2">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-0 pt-6">
                    <ul className="space-y-2 text-muted-foreground">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                </CardContent>
                 <CardFooter className="flex gap-4 p-0 pt-6">
                  <Button asChild>
                     <Link href={service.href}>Learn More</Link>
                   </Button>
                   <Button asChild>
                     <Link href={`/contact?service=${service.id}`}>Get Quote for {service.title}</Link>
                   </Button>
                 </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
