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
    description: 'Our domestic cleaning service is designed to give you back your time. We offer regular weekly, bi-weekly, or monthly cleaning schedules, as well as one-off deep cleans. Your home will be a consistently clean and healthy environment for you and your family.',
    image: PlaceHolderImages.find((img) => img.id === 'domestic-cleaning'),
    features: ['Kitchen surfaces and appliances', 'Bathroom sanitization', 'Dusting and vacuuming', 'Floor mopping', 'Bedroom tidying'],
  },
  {
    id: 'office',
    title: 'Office Cleaning',
    description: 'A clean and organized office promotes productivity and leaves a great impression on clients. We provide reliable and efficient cleaning services for small to medium-sized offices, ensuring your workspace is always professional and welcoming.',
    image: PlaceHolderImages.find((img) => img.id === 'office-cleaning'),
    features: ['Workstation and desk cleaning', 'Common area and lobby upkeep', 'Restroom cleaning and restocking', 'Trash removal', 'Floor care and vacuuming'],
  },
  {
    id: 'commercial',
    title: 'Commercial Cleaning',
    description: 'We handle cleaning for a variety of commercial spaces, including retail stores, medical facilities, and more. Our team is equipped to manage larger areas and specialized cleaning needs, adhering to the highest standards of cleanliness and hygiene.',
    image: PlaceHolderImages.find((img) => img.id === 'commercial-cleaning'),
    features: ['Customized cleaning plans', 'Large-scale floor maintenance', 'Window and facade cleaning', 'Sanitization of high-touch areas', 'Flexible scheduling (after hours)'],
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
                 <CardFooter className="p-0 pt-6">
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
