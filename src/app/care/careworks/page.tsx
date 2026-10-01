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
//   id: 'care-domiciliary',
//   title: 'Domiciliary Care',
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
            How Care Works
          </h1>
        </div>
      </section>

      <div className="container py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold font-headline">Getting started is simple</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We know that arranging care can feel overwhelming. Our process is designed to be clear, unhurried, and free of pressure.
            </p>
            <h3 className="mt-8 text-2xl font-bold font-headline">Step 1: Get in touch</h3>
            <p className="mt-4 text-lg text-muted-foreground">
              Call us or fill out the contact form. We'll have a brief, no-obligation chat about your situation and what you're looking for.
            </p>
            <h3 className="mt-8 text-2xl font-bold font-headline">Step 2: Free home assessment</h3>
            <p className="mt-4 text-lg text-muted-foreground">
              A member of our team visits you at home to discuss your needs, routines, and preferences. This usually takes about an hour. There's no cost and no obligation.
            </p>
            <h3 className="mt-8 text-2xl font-bold font-headline">Step 3: Your personalised care plan</h3>
            <p className="mt-4 text-lg text-muted-foreground">
              We put together a written person-centred care plan covering the services you'll receive and visit times, developed with you and—where appropriate—your family, representative, or relevant professionals. You'll have everything in writing before anything begins.
            </p>
            <h3 className="mt-8 text-2xl font-bold font-headline">Step 4: Meet your carer</h3>
            <p className="mt-4 text-lg text-muted-foreground">
              We introduce you to your carer before care starts, so there are no surprises. If the fit isn't right, we'll find someone who is.
            </p>
            <h3 className="mt-8 text-2xl font-bold font-headline">Step 5: Care begins—and we keep checking in</h3>
            <p className="mt-4 text-lg text-muted-foreground">
              Your care starts on the agreed date. We review regularly and are always contactable if anything needs to change.
            </p>
            <h4 className="mt-8 text-xl font-bold font-headline">Common questions:</h4>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 text-muted-foreground">
                <li className="flex items-start">
                  {/* <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" /> */}
                  <span><i>Do I have to commit long-term?</i> No. Arrangements are flexible and can be adjusted or paused.</span>
                </li>
                <li className="flex items-start">
                  {/* <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" /> */}
                  <span><i>Can I change my carer if it's not working out?</i> Yes, always.</span>
                </li>
                <li className="flex items-start">
                  {/* <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" /> */}
                  <span><i>Is there a minimum visit length?</i> [Insert company policy.]</span>
                </li>
                <li className="flex items-start">
                  {/* <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" /> */}
                  <span><i>Do you work with local authorities or NHS funding?</i> [Insert company policy.]</span>
                </li>
                <li className="flex items-start">
                  {/* <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" /> */}
                  <span><i>What if my needs change?</i> Care plans and risk assessments are reviewed when needs change and at planned intervals.</span>
                </li>
            </ul>
            <Button asChild size="lg" className="mt-8 hidden md:inline-flex">
              <Link href={"/care/contact"}>Request a Consultation for Domiciliary Care</Link>
            </Button>
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
