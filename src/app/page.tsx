import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Mail, Phone, Award, Gem, Users, Star, PoundSterling, PhoneCall, DraftingCompass } from 'lucide-react';
// app/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Domiciliary Care Services | Harvita Services',
  description: 'Compassionate domiciliary care in Burgess Hill, Hassocks, Haywards Heath and surrounding areas. Personal care, companionship, and daily living support in the comfort of your own home.',
  keywords: 'domiciliary care, home care, personal care, elderly care, companionship, Burgess Hill, Hassocks, Haywards Heath, Hurstpierpoint, care at home, independent living',
  openGraph: {
    title: 'Domiciliary Care Services | Harvita Services',
    description: 'Compassionate, person-centred domiciliary care in Burgess Hill and surrounding areas. Supporting you or your loved one to live independently at home.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Harvita Services',
  },
};

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');
const domesticImage = PlaceHolderImages.find((img) => img.id === 'domestic-cleaning');
const officeImage = PlaceHolderImages.find((img) => img.id === 'office-cleaning');
const careImage = PlaceHolderImages.find((img) => img.id === 'domiciliary-care');

const testimonials = [
  {
    name: "Margaret",
    title: "Compassionate and reliable",
    review: "After my mother's mobility declined, we needed extra support at home. The carers from Harvita have been wonderful - patient, kind, and always punctual. Mum looks forward to their visits and we finally have peace of mind knowing she's well looked after.",
    rating: 5,
},
{
    name: "David",
    title: "Professional and trustworthy",
    review: "We arranged care for my father following his discharge from hospital. The team at Harvita were professional from the first assessment, and the carers have been consistently excellent. They treat Dad with dignity and respect, and nothing is ever too much trouble.",
    rating: 5,
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
    description: "We provide a custom service, tailored to you and your premises."
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter font-headline">
            Compassionate Domiciliary Care
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
            Harvita Services Ltd.
          </p>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Trusted by families and businesses across Burgess Hill and surrounding areas.
          </p>
          <div>
          {/* <Button asChild size="lg" className="mt-8 mx-8">
            <Link href="/services/cleaning">Explore Cleaning Services</Link>
          </Button> */}
          <Button asChild size="lg" className="mt-8 mx-8">
            <Link href="/services/care/domiciliary">Explore Domiciliary Care</Link>
          </Button>
          </div>
          <div className="flex items-center justify-center gap-8 flex-shrink-0 mt-4">
            <div className="flex items-center justify-center gap-2">
              <Mail className="h-4 w-4 text-lg" />
              <p className="text-lg">
                harvitaservices@gmail.com
              </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="h-4 w-4 text-lg" />
              <p className="text-lg">
                07747 874664
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-8 md:py-24 bg-background">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Domiciliary Care</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We provide compassionate care for your loved ones in the comfort of their own home.
          </p>
          <div className="mt-12 grid max-w-4xl mx-auto grid-cols-1 gap-8">
            <Card className="overflow-hidden text-left">
              {careImage && <Image src={careImage.imageUrl} alt={careImage.description} width={600} height={400} className="w-full object-cover aspect-[7/3]" data-ai-hint={careImage.imageHint}/>}
              <CardHeader>
                <CardTitle className="font-headline text-primary">Domiciliary Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Provide compassionate care for your loved ones in the comfort of their own home. From personal care to companionship, our fully trained and vetted team delivers tailored support designed around each individual's needs and routines.</p>
                <Button asChild variant="link" className="mt-4 text-primary hover:text-primary/80 text-base">
                  <Link href="/services/care/domiciliary">Learn More &rarr;</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          {/* <Button asChild variant="link" className="mt-8 text-primary hover:text-primary/80 text-lg font-bold">
            <Link href="/services">Explore All Services &rarr;</Link>
          </Button> */}
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
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
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
                </CardContent>
              </Card>
            ))}
          </div>
           <Button asChild variant="link" className="mt-8 text-primary hover:text-primary/80 text-base">
            <Link href="/reviews">Read More Reviews &rarr;</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
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
      </section>
    </div>
  );
}
