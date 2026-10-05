import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Gem, Users, Star, PoundSterling, PhoneCall, DraftingCompass, HandHeart, Sparkles } from 'lucide-react';
// app/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Care & Cleaning Services | Harvita Services',
  description:
    'Harvita Services provides compassionate domiciliary care and professional cleaning across Burgess Hill, Hassocks, Haywards Heath and surrounding areas. Personal care, companionship, daily living support, and reliable home cleaning — all in the comfort of your own home.',
  keywords:
    'home care, domiciliary care, personal care, elderly care, companionship, cleaning services, domestic cleaning, home cleaning, Burgess Hill, Hassocks, Haywards Heath, Hurstpierpoint, care at home, independent living, trusted cleaners',
  openGraph: {
    title: 'Home Care & Cleaning Services | Harvita Services',
    description:
      'Compassionate home care and professional cleaning services in Burgess Hill, Hassocks, Haywards Heath and surrounding areas. Supporting you to live well at home.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Harvita Services',
  },
};

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');
const careImage = PlaceHolderImages.find((img) => img.id === 'domiciliary-care');

const testimonials = [
  {
    name: "Margaret",
    title: "Compassionate and reliable",
    review: "After my mother's mobility declined, we needed extra support at home. The carers from Harvita have been wonderful - patient, kind, and always punctual. Mum looks forward to their visits and we finally have peace of mind knowing she's well looked after.",
    rating: 5,
    service: "Care",
    serviceLower: "care",
},
{
    name: "Beryl",
    title: "Professional and trustworthy",
    review: "Needing a new cleaner we hired Harvita Services for a weekly clean. They are good time keepers, efficient at cleaning and willing to help and fit in as needed. I am really happy with their work and would definitely recommend them to my friends.",
    rating: 5,
    service: "Cleaning",
    serviceLower: "cleaning",
},
];

const features = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Experienced Team",
    description: "All team members are thoroughly vetted, fully trained, and dedicated to providing professional, compassionate, and reliable support in every service we offer."
  },
  {
    icon: <PoundSterling className="h-8 w-8 text-primary" />,
    title: "Value For Money",
    description: "We provide excellent service at a fantastic price."
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Quality Assured",
    description: "Your satisfaction is our priority. If you're not happy, we'll make it right."
  },
  {
    icon: <PhoneCall className="h-8 w-8 text-primary" />,
    title: "Communication",
    description: "We welcome your calls, and communicate with you every step of the journey."
  },
  {
    icon: <Gem className="h-8 w-8 text-primary" />,
    title: "Fully Insured Service",
    description: "Both public and employee liability insurance for your peace of mind."
  },
  {
    icon: <DraftingCompass className="h-8 w-8 text-primary" />,
    title: "Tailored Service",
    description: "We provide a custom service, tailored to you and your needs."
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 absolute inset-0">
          {/* Care cell */}
          <div className="relative w-full h-full">
            {careImage && (
              <Image
                src={careImage.imageUrl}
                alt={careImage.description}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
                data-ai-hint={careImage.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-black/50" />
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="relative z-10 max-w-4xl px-4">
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tighter font-headline">
                    Compassionate Care
                  </h1>
                  <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
                    Harvita Services Ltd. covering Burgess Hill and surrounding areas.
                  </p>
                  <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
                    Personalised home care for your loved ones, delivered with dignity and kindness.
                  </p>
                  <div>
                    <Button asChild size="lg" className="mt-8 mx-8">
                      <Link href="/care">Explore Care</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

          {/* Cleaning cell */}
          <div className="relative w-full h-full">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
                data-ai-hint={heroImage.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-black/50" />
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="relative z-10 max-w-4xl px-4">
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tighter font-headline">
                    Professional Cleaning
                  </h1>
                  <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
                    Harvita Services Ltd. covering Burgess Hill and surrounding areas.
                  </p>
                  <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
                    Trusted domestic and commercial cleaning for homes and businesses.
                  </p>
                  <Button asChild size="lg" className="mt-8 mx-8">
                    <Link href="/cleaning">Explore Cleaning</Link>
                  </Button>
                </div>
              </div>
            </div> 
          </div>
        </section>
      
        {/* Services Overview */}
        <section className="py-8 md:py-24 bg-background">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">One trusted team. Two ways we help.</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Whether you need support at home or a spotless space, Harvita delivers the same vetted, insured, and reliable service — just tailored to what you need.
            </p>
            <div className="mt-12 grid max-w-4xl mx-auto grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden text-left">
                <CardHeader>
                  <HandHeart className="h-12 w-12 text-primary" />
                  <CardTitle className="font-headline text-primary">Domiciliary Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We provide compassionate care for your loved ones in the comfort of their own home. From personal care to companionship, our fully trained and vetted team delivers tailored support designed around each individual's needs and routines.</p>
                  <Button asChild variant="link" className="mt-4 text-primary hover:text-primary/80 text-base">
                    <Link href="/care">Learn More &rarr;</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="overflow-hidden text-left">
                <CardHeader>
                  <Sparkles className="h-12 w-12 text-primary" />
                  <CardTitle className="font-headline text-primary">Cleaning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We provide a range of cleaning services for residential properties and small to medium-sized enterprises. From regular home cleans to commercial contracts, our fully trained team delivers a reliable service built around your space and schedule.</p>
                  <Button asChild variant="link" className="mt-4 text-primary hover:text-primary/80 text-base">
                    <Link href="/cleaning">Learn More &rarr;</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-primary/10">
          <div className="container text-center">
            <h2 className="text-3xl mb-8 md:text-4xl font-bold font-headline">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col items-center p-4">
                  {feature.icon}
                  <h3 className="mt-4 text-xl font-semibold font-headline">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Help Overview */}
        <section className="py-8 md:py-24 bg-background">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Who We Help</h2>
            <div className="mt-12 grid max-w-4xl mx-auto grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden text-left">
                <CardHeader>
                  <CardTitle className="font-headline text-primary">Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul>
                    <li className="flex items-start gap-2">
                      <HandHeart className="h-6 w-6 text-primary mt-1" />
                      <span>Families needing support for a parent or loved one</span>
                    </li>
                    <li className="flex items-start gap-2 mt-4">
                      <HandHeart className="h-6 w-6 text-primary mt-1" />
                      <span>Post-hospital discharge care</span>
                    </li>
                    <li className="flex items-start gap-2 mt-4">
                      <HandHeart className="h-6 w-6 text-primary mt-1" />
                      <span>Companionship and personal care at home</span>
                    </li>
                  </ul>
                  <Button asChild variant="link" className="mt-4 text-primary hover:text-primary/80 text-base">
                    <Link href="/care">Learn More &rarr;</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="overflow-hidden text-left">
                <CardHeader>
                  <CardTitle className="font-headline text-primary">Cleaning</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul>
                    <li className="flex items-start gap-2">
                      <Sparkles className="h-6 w-6 text-primary mt-1" />
                      <span>Homeowners wanting regular or one-off cleans</span>
                    </li>
                    <li className="flex items-start gap-2 mt-4">
                      <Sparkles className="h-6 w-6 text-primary mt-1" />
                      <span>Offices and small–medium businesses</span>
                    </li>
                    <li className="flex items-start gap-2 mt-4">
                      <Sparkles className="h-6 w-6 text-primary mt-1" />
                      <span>Deep cleans and tailored contracts</span>
                    </li>
                  </ul>
                  <Button asChild variant="link" className="mt-4 text-primary hover:text-primary/80 text-base">
                    <Link href="/cleaning">Learn More &rarr;</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-primary/10">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Loved by Our Customers</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="text-left">
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
                    </div>
                    <p className="text-muted-foreground italic">"{testimonial.review}"</p>
                    <div className="mt-4 flex items-center gap-4">
                      <p className="font-semibold">{testimonial.name}</p>
                    </div>
                    <Button asChild variant="link" className="mt-8 text-primary hover:text-primary/80 text-base">
                      <Link href={`/${testimonial.serviceLower}/reviews`}>`Read More {testimonial.service} Reviews &rarr;`</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section
        <section className="py-16 md:py-24 bg-primary/10">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Need a compassionate carer – We're Here to Help</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Whether you need professional domiciliary care for yourself or a loved one, we're here to support you. Tell us what you need, and we'll take it from there.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/contact">Request a Consultation Today</Link>
            </Button>
          </div>
        </section> */}
      </div>
  );
}
