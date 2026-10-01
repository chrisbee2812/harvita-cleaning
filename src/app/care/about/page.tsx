import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Domiciliary Care Services | Personal Care & Companionship | Harvita Services',
  description: 'Professional domiciliary care services in Burgess Hill and surrounding areas. Personal care, medication support, companionship, meal preparation, and daily living assistance tailored to you.',
  keywords: 'domiciliary care, personal care, medication support, companionship, meal preparation, dementia care, respite care, home care Burgess Hill, elderly support, independent living, Hassocks, Haywards Heath, Hurstpierpoint, Cuckfield',
  openGraph: {
    title: 'Domiciliary Care Services | Harvita Services',
    description: 'Professional, compassionate domiciliary care in Burgess Hill and surrounding areas. Personal care, companionship, and daily living support at home.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Harvita Services',
  },
};

// const service = {
//   id: 'about-us',
//   title: 'About Us',
//   description: "At Harvita Services Ltd, we understand that home is where you feel safest, most comfortable, and most yourself. That's why we're proud to offer domiciliary care services — professional, personalised support that enables you or your loved one to continue living independently, with dignity and peace of mind. Whether you need a little extra help around the house or more comprehensive daily support, our friendly, fully-trained team is here to help. We work around your schedule, your routines, and your preferences — because care should always be about you.",
//   image: PlaceHolderImages.find((img) => img.id === 'domiciliary-care'),
//   features: [
//     "Personalized Care Plans: We develop customized care strategies tailored to each individual's unique needs and preferences.",
//     "Compassionate Support: Our caregivers provide emotional support and companionship, ensuring your loved ones feel valued and cared for.",
//     "Safety and Well-being: We prioritize the safety and well-being of our clients, implementing rigorous protocols to maintain a secure environment."
//     ],
// };

const serviceImage = PlaceHolderImages.find((img) => img.id === 'domiciliary-care');

const testimonial = {
    name: "Margaret Thompson",
    avatar: PlaceHolderImages.find((img) => img.id === 'avatar-2'),
    review: "I was nervous about having someone come into my home, but Harvita put me at ease immediately. My carer is wonderful — she's kind, professional, and respects my routines. I couldn't be happier.",
    rating: 5,
};

export default function OfficeCleaningPage() {
  return (
    <div>
      <section className="relative h-[40vh] w-full flex items-center justify-center text-center text-white">
        {serviceImage && (
          <Image
            src={serviceImage.imageUrl}
            alt={serviceImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={serviceImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter font-headline">
            About Us
          </h1>
        </div>
      </section>

      <div className="container py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold font-headline">Caring for your family, like our own</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Harvita Care is a domiciliary care provider serving Burgess Hill and the surrounding areas. We support adults who need help to remain independent in their own homes—whether that's a short visit a few times a week or regular daily support.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              We were founded on a simple principle: <i>to provide compassionate, professional care that enables individuals to live safely and comfortably in their own homes.</i>
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              As part of Harvita Services Ltd., we bring the same reliability and attention to detail that built our reputation in domestic services, now applied to supporting people in their own homes. Harvita Care is led by a Registered Adult Nurse with extensive experience across a range of healthcare settings, and our service is built around professional care standards combined with a personal, relationship-led approach.
            </p>
            <h3 className="mt-8 text-2xl font-bold font-headline">What sets us apart:</h3>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Person-centred care.</strong> Every care plan is built around the individual—their routines, preferences, and goals—not a template.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Consistency.</strong> Wherever possible, you'll see the same familiar faces, not a rotating cast of strangers.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Transparency.</strong> Clear communication with families, always.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Local roots.</strong> We're part of this community, and we care for it accordingly.</span>
                </li>
            </ul>
            <p className="mt-8 text-lg text-muted-foreground">
              <strong>The HARVITA Promise</strong> guides everything we do: <strong>H</strong>umanity, <strong>A</strong>utonomy, <strong>R</strong>espect, <strong>V</strong>oice, <strong>I</strong>ndependence, <strong>T</strong>rust, and <strong>A</strong>dvocacy. It shapes how we assess needs, recruit and develop staff, deliver care, and monitor quality.
            </p>
            <div className="mt-6 flex flex-col gap-4 md:gap-4 max-w-sm md:max-w-md">
              <Button asChild size="lg" className="mt-6 hidden md:inline-flex">
                <Link
                  href="/harvita-statement-of-purpose-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View our Statement of Purpose (opens in a new tab)"
                >
                  View Our Statement of Purpose
                </Link>
              </Button>
              <Button asChild size="lg" className="mt-4 hidden md:inline-flex">
                <Link href={"/care/contact"}>Request a Consultation for Domiciliary Care</Link>
              </Button>
            </div>
            
          </div>
          <div className="lg:col-span-1 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-primary">Get in Touch</CardTitle>
                <CardDescription>If you or a loved one could benefit from compassionate, professional care at home, we'd love to hear from you. There's no obligation — just a friendly conversation to explore how we can help.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild size="lg" className="w-full">
                  <Link href={"/care/contact"}>Request a Consultation</Link>
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
