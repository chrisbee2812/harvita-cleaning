import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Care Services | Domiciliary Care in Burgess Hill | Harvita Services',
  description:
    'Discover our person-centred domiciliary care services in Burgess Hill and surrounding areas. Personal care, medication support, companionship, meal preparation, and daily living assistance tailored to you.',
  keywords:
    'our care services, domiciliary care, home care services, personal care, medication support, companionship, meal preparation, Burgess Hill, Hassocks, Haywards Heath, Hurstpierpoint, Cuckfield',
  openGraph: {
    title: 'Our Care Services | Harvita Services',
    description:
      'Person-centred domiciliary care in Burgess Hill and surrounding areas. Explore the care services we provide and how we can support you at home.',
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
            Our Care
          </h1>
        </div>
        <div className="absolute bottom-10 left-0 right-0 h-16">
                <p>
                  Please note, Harvita Care is currently undergoing CQC registration and is not yet regulated.                  
                </p>
                <p>
                  Please enquire for care services now, and we will be able to provide care once registration is complete.
                </p>
                <p>
                  We are happy to discuss your needs and provide information on how we will be able to support you or your loved one.
                </p>
              </div>
      </section>

      <div className="container py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold font-headline">Support that adapts to you</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              No two people need the same kind of help. That's why our care is built around your needs, your routines, and your preferences. Whether you need a hand for an hour a week or a little support each day, we fit around your life.
            </p>
            <h4 className="mt-8 text-xl font-bold font-headline">Personal Care</h4>
            <p className="mt-4 text-lg text-muted-foreground">
              Delivered with dignity and discretion, according to your individual assessment and agreed care plan:
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>Washing, bathing, and showering</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>Dressing and grooming</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>Oral hygiene</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>Toileting and continence support</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>Support with eating and drinking</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>Assistance with mobility and transfers where appropriately assessed</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>Support with prescribed medicines, according to assessed need, organisational policy, and staff competency</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>Support with maintaining personal routines and daily living</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>Observation and appropriate escalation of changes in wellbeing</span>
                </li>
            </ul>
            <h4 className="mt-8 text-xl font-bold font-headline">Ancillary Support</h4>
            <p className="mt-4 text-lg text-muted-foreground">
              Limited practical support alongside your Personal Care package may include:
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>Meal preparation</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>Essential shopping</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>Laundry associated with care needs</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>Collection of prescriptions</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>Light household support</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>Support to attend appointments or access the community</span>
                </li>
            </ul>
            <h4 className="mt-8 text-xl font-bold font-headline">Companionship</h4>
            <p className="mt-4 text-lg text-muted-foreground">
              Company, conversation, and shared activities to reduce isolation and keep life enjoyable.
            </p>
            <h4 className="mt-8 text-xl font-bold font-headline">Respite Care</h4>
            <p className="mt-4 text-lg text-muted-foreground">
              Short-term support so family carers can rest and recharge.
            </p>
            <h4 className="mt-8 text-xl font-bold font-headline">Who we support</h4>
            <p className="mt-4 text-lg text-muted-foreground">
              Harvita Care supports adults aged 18+ whose assessed needs require Personal Care within their own homes. This includes older people and adults living with physical disability, dementia, or mental health needs, where we have the competence and staffing required to provide safe support. We do not provide specialist clinical or mental health treatment.
            </p>
            <h4 className="mt-8 text-xl font-bold font-headline">How we build your care plan:</h4>
            <ol className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <span><strong>1. Free consultation — </strong>We visit you at home to understand your needs and answer questions.</span>
                </li>
                <li className="flex items-start">
                  <span><strong>2. Personalised plan — </strong>We develop a person-centred care plan with you and, where appropriate, your family, representative, or relevant professionals.</span>
                </li>
                <li className="flex items-start">
                  <span><strong>3. Matched carer — </strong>Wherever practicable, we provide continuity through a consistent group of care workers.</span>
                </li>
                <li className="flex items-start">
                  <span><strong>4. Ongoing review — </strong>Care plans and risk assessments are reviewed when needs change and at planned intervals.</span>
                </li>
            </ol>
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
