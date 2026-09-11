import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from './contact-form';
import { Card } from '@/components/ui/card';
import { Suspense } from 'react';

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight font-headline md:text-5xl">Get in Touch</h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Have questions or ready for a quote? Fill out the form below or contact us directly. We're happy to help!
            </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold font-headline">Contact Information</h2>
            <p className="mt-2 text-muted-foreground">
              Our team is available Monday to Friday, 9am to 5pm.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <a href="mailto:harvitaservices@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    harvitaservices@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                    07747 874664
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Office Address</h3>
                  <p className="text-muted-foreground">
                    24 Cromwell Road, Burgess hill, R15 8QH
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="lg:col-span-3 p-8">
            <Suspense fallback={<div>Loading form...</div>}>
             <ContactForm />
            </Suspense>
          </Card>
        </div>
      </div>
    </div>
  );
}
