import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const service = {
  id: 'care-domiciliary',
  title: 'Domiciliary Care',
  description: "At Harvita Services Ltd, we understand that home is where you feel safest, most comfortable, and most yourself. That's why we're proud to offer domiciliary care services — professional, personalised support that enables you or your loved one to continue living independently, with dignity and peace of mind. Whether you need a little extra help around the house or more comprehensive daily support, our friendly, fully-trained team is here to help. We work around your schedule, your routines, and your preferences — because care should always be about you.",
  image: PlaceHolderImages.find((img) => img.id === 'domiciliary-care'),
  features: [
    "Personalized Care Plans: We develop customized care strategies tailored to each individual's unique needs and preferences.",
    "Compassionate Support: Our caregivers provide emotional support and companionship, ensuring your loved ones feel valued and cared for.",
    "Safety and Well-being: We prioritize the safety and well-being of our clients, implementing rigorous protocols to maintain a secure environment.",
    "A Powerful First Impression: Your office environment speaks volumes to clients, partners, and potential hires. We ensure that first impression is one of professionalism, care, and attention to detail.",
    "Thorough cleaning and restocking of restrooms",
    "Daily trash and recycling removal",
    'Floor care including vacuuming and mopping',
    'Cleaning kitchenettes and break rooms',
    'Wiping down high-touch surfaces (doorknobs, light switches)'
  ],
};

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
            <h2 className="text-3xl font-bold font-headline">Professional, Compassionate Care When You Need It Most</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              At Harvita Services Ltd, we understand that home is where you feel safest, most comfortable, and most yourself. That's why we're proud to offer domiciliary care services — professional, personalised support that enables you or your loved one to continue living independently, with dignity and peace of mind.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Whether you need a little extra help around the house or more comprehensive daily support, our friendly, fully-trained team is here to help. We work around your schedule, your routines, and your preferences — because care should always be about you.
            </p>
            <h3 className="mt-8 text-2xl font-bold font-headline">Our Comprehensive Domiciliary Care Services</h3>
            <p className="mt-4 text-lg text-muted-foreground">
              We offer flexible and customisable care plans to suit the unique needs of each individual, including:
            </p>
            <h4 className="mt-8 text-xl font-bold font-headline">Personal Care</h4>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>Bathing, showering, and personal hygiene.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>Dressing and grooming assistance.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>Toileting and continence support.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>Mobility assistance and safe moving.</span>
                </li>
            </ul>
            <h4 className="mt-8 text-xl font-bold font-headline">Daily Living Support</h4>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>Meal preparation and dietary support.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>Light housekeeping and laundry.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>Medication reminders and prompts.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>Shopping and errand-running.</span>
                </li>
            </ul>
            <h4 className="mt-8 text-xl font-bold font-headline">Companionship & Emotional Support</h4>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>Friendly conversation and social interaction.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>Accompanying to appointments or social outings.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>Support with hobbies and interests.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>Respite for family carers.</span>
                </li>
            </ul>
            <h4 className="mt-8 text-xl font-bold font-headline">Specialised Support</h4>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>End-of-life care (palliative support).</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>Dementia and Alzheimer's care.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>Post-hospital discharge support.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>Live-in care options available.</span>
                </li>
            </ul>
            <h3 className="mt-8 text-2xl font-bold font-headline">Why Choose Harvita Services?</h3>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Fully Vetted and Trained Staff: </strong>Every member of our care team undergoes thorough DBS checks, safeguarding training, and ongoing professional development. We only hire people who share our values — compassion, respect, and reliability.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Personalised Care Plans: </strong>We don't do one-size-fits-all. Every client receives a bespoke care plan designed around their specific needs, preferences, and routines. We listen, we adapt, and we always put you first.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Fully Insured and Regulated: </strong>Harvita Services Ltd is fully insured and operates in line with Care Quality Commission (CQC) standards. You can have complete confidence that you're in safe hands.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Local, Family-Run Business: </strong>As a local, family-run company, we take pride in supporting our community. We're not a faceless corporation — we're your neighbours, and we genuinely care about the people we support.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Flexible and Responsive: </strong>Your needs can change, and we're here to adapt. Whether you need a few hours a week or round-the-clock support, we can accommodate you with minimal fuss.</span>
                </li>
            </ul>
            <h3 className="mt-8 text-2xl font-bold font-headline">Who Is Domiciliary Care For?</h3>
            <p className="mt-4 text-lg text-muted-foreground">
              Our services are suitable for:
            </p>
            <h4 className="mt-8 text-xl font-bold font-headline">Personal Care</h4>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Elderly individuals </strong>who wish to remain in their own homes</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Individuals with disabilities </strong>who require assistance with daily activities</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Individuals recovering from illness or surgery </strong>who need support during their recovery.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Families </strong>who need respite from caring responsibilities.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Anyone </strong>who values their independence and wants support on their own terms.</span>
                </li>
            </ul>
            <h3 className="mt-8 text-2xl font-bold font-headline">How It Works</h3>
            <p className="mt-4 text-lg text-muted-foreground">
              Our domiciliary care process is simple and transparent:
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Get in touch: </strong>Call, email, or use our contact form. We'll have a friendly, no-obligation chat about your needs.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Home visit: </strong>We'll visit you at home to discuss your requirements in more detail.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Care plan: </strong>We design a personalised care plan tailored to you.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Meet your carer: </strong>We'll introduce you to your care team so you feel comfortable from day one.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span><strong>Ongoing support: </strong>We regularly review and adjust your care plan as your needs change.</span>
                </li>
            </ul>
            <Button asChild size="lg" className="mt-8 hidden lg:inline-flex">
                <Link href={`/contact?service=${service.id}`}>Get in Touch</Link>
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
