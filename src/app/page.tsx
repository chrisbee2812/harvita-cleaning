import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Award, Gem, Users, Star } from 'lucide-react';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');
const domesticImage = PlaceHolderImages.find((img) => img.id === 'domestic-cleaning');
const officeImage = PlaceHolderImages.find((img) => img.id === 'office-cleaning');

const testimonials = [
  {
    name: "Sarah L.",
    avatar: PlaceHolderImages.find((img) => img.id === 'avatar-1'),
    review: "Harvita has been a game-changer for our family. We come home to a sparkling clean house every week. Their attention to detail is unmatched!",
    rating: 5,
  },
  {
    name: "Mark T.",
    avatar: PlaceHolderImages.find((img) => img.id === 'avatar-2'),
    review: "The team is professional, punctual, and incredibly thorough. Our office has never looked better. Highly recommend their commercial services.",
    rating: 5,
  },
];

const features = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Experienced Team",
    description: "Our cleaners are vetted, trained, and committed to delivering a top-quality service."
  },
  {
    icon: <Gem className="h-8 w-8 text-primary" />,
    title: "Fully Insured Service",
    description: "Both public and employee liability insurance to the sum of £5 million for your peace of mind."
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Satisfaction Guaranteed",
    description: "Your satisfaction is our priority. If you're not happy, we'll make it right."
  }
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
            Sparkling Clean, Every Time.
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Welcome to Harvita Services Ltd. your trusted premium cleaning solutions partner in West Sussex.
          </p>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Established in 2018, we offer a comprehensive range of commercial and domestic services tailored to meet your specific needs.
          </p>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            As a local business we are dedicated to building long-term relationships with our clients, ensuring clean, healthy and inviting spaces at both homes and businesses.
          </p>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Experience our unwavering commitment to quality today.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">Request a Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
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
      
      {/* Commitment Section */}
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Commitment to You</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We strive to provide a premium service tailored to your needs and we are continually developing our services via feedback from our customers and staff.
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Our fully trained, vetted and uniformed staff ensure that you receive a professional and reliable service delivering results every time.
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We prioritize consistency by assigning the same dedicated cleaning person or team to your property each visit.
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Our services are very competitively priced without compromising on quality. We believe in providing exceptional value for money to our clients.
          </p>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Cleaning Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            From homes to corporate offices, we provide a range of services to meet your needs.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden text-left">
              {domesticImage && <Image src={domesticImage.imageUrl} alt={domesticImage.description} width={600} height={400} className="w-full object-cover aspect-[3/2]" data-ai-hint={domesticImage.imageHint}/>}
              <CardHeader>
                <CardTitle className="font-headline">Domestic Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Keep your home fresh and tidy with our regular or one-off cleaning services.</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden text-left">
              {officeImage && <Image src={officeImage.imageUrl} alt={officeImage.description} width={600} height={400} className="w-full object-cover aspect-[3/2]" data-ai-hint={officeImage.imageHint}/>}
              <CardHeader>
                <CardTitle className="font-headline">Office & Commercial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Create a clean, healthy, and productive workspace for your employees and clients.</p>
              </CardContent>
            </Card>
          </div>
          <Button asChild variant="link" className="mt-8 text-primary hover:text-primary/80 text-base">
            <Link href="/services">Explore All Services &rarr;</Link>
          </Button>
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
                    {testimonial.avatar && <Avatar>
                      <AvatarImage src={testimonial.avatar.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.avatar.imageHint} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>}
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
      <section className="py-16 md:py-24 bg-background">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready for a Cleaner Space?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Let us handle the cleaning so you can focus on what matters most.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">Request a Consultation Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
