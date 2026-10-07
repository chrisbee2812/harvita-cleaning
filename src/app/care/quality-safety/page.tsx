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
            Quality & Safety
          </h1>
        </div>
      </section>

      <div className="container py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold font-headline">Care you can trust</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The people we care for are often vulnerable, and we take that responsibility seriously. Our policies and procedures are designed to protect both our clients and our staff.
            </p>
            <h4 className="mt-8 text-xl font-bold font-headline">Our commitments:</h4>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Vetted staff.</strong> Every carer undergoes an enhanced DBS check and reference verification before joining.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Trained team.</strong> All carers complete induction training and ongoing professional development, including manual handling, medicines management, safeguarding, and competency assessment.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Working towards CQC registration.</strong> Harvita Care is currently seeking registration with the Care Quality Commission for the regulated activity of Personal Care. We are committed to meeting the standards required and will publish our registration status and inspection reports here once approved.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Safeguarding.</strong> We protect people from avoidable harm through effective safeguarding, assessment, risk management, and appropriate escalation. We have a named safeguarding lead and clear procedures for reporting concerns.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Medicines management.</strong> Support with prescribed medicines is provided according to assessed need, organisational policy, and staff competency.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Insurance.</strong> We carry full public liability and professional indemnity insurance.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Infection prevention.</strong> Robust hygiene and infection-control procedures across all visits.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Transparent records.</strong> Care notes are kept up to date and available to families on request.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Duty of Candour.</strong> We operate openly and transparently, promoting equality, human rights, and a culture in which concerns can be raised and acted upon.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Complaints and feedback.</strong> We take every concern seriously and respond promptly. We learn from complaints, compliments, incidents, safeguarding concerns, audits, and feedback from staff and service users.</span>
                </li>
            </ul>
            <p className="mt-8 text-lg text-muted-foreground">
              <strong>Our promise:</strong> If something isn't right, we want to know. We'd rather fix a problem early than let it grow.
            </p>
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

            {/* <Card className="text-left">
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
            </Card> */}
          </div>
        </div>
      </div>
    </div>
  );
}
