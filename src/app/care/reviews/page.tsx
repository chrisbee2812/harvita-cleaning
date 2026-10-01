import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Star } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Client Reviews | Harvita Services Domiciliary Care',
  description: 'Read genuine reviews from families we support across Burgess Hill, Hassocks, and Haywards Heath. See why our clients trust us for compassionate, reliable domiciliary care.',
  keywords: 'domiciliary care reviews, care client testimonials, home care reviews Burgess Hill, Harvita Services reviews, trusted care provider',
  openGraph: {
    title: 'Client Reviews | Harvita Services Domiciliary Care',
    description: 'Genuine reviews from families we support across Burgess Hill and surrounding areas. See why our clients trust us.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Harvita Services',
  },
};

const reviews = [
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
{
    name: "Susan",
    title: "Like having a friend visit",
    review: "My husband has dementia and I was nervous about bringing someone new into our home. The carer assigned to us is patient, understanding, and has built a lovely rapport with him. It's taken a huge weight off my shoulders and I can't thank them enough.",
    rating: 5,
},
{
    name: "Peter",
    title: "Flexible and accommodating",
    review: "I needed support with personal care after surgery, and Harvita were able to arrange visits at short notice. The carers were respectful, discreet, and helped me maintain my independence during recovery. I would not hesitate to use them again.",
    rating: 5,
},
{
    name: "Jean",
    title: "Warm and genuine people",
    review: "From the initial phone call to the regular visits, everyone at Harvita has been warm, friendly, and genuinely caring. They don't just tick boxes - they take the time to get to know you and what matters to you. Highly recommended.",
    rating: 5,
},
{
    name: "Alan",
    title: "Dependable and kind",
    review: "My wife and I both need a little extra help these days, and Harvita have been a godsend. The carers are always cheerful, never rushed, and happy to help with whatever we need. It's a relief to have someone we can truly rely on.",
    rating: 5,
},
];

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
            <Star
                key={i}
                className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                size={20}
            />
        ))}
    </div>
);

export default function ReviewsPage() {
    return (
        <div className="bg-background">
            <div className="container py-16 md:py-24">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight font-headline md:text-5xl">What Our Clients Say</h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        We take pride in our work, and it shows in the feedback we receive. Here's what some of our happy customers have to say.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {reviews.map((review, index) => {
                        return (
                            <Card key={index} className="flex flex-col">
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <div>
                                            <p className="font-semibold">{review.name}</p>
                                            <p className="text-sm text-muted-foreground">{review.title}</p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <StarRating rating={review.rating} />
                                    <blockquote className="mt-4 border-l-2 pl-4 italic text-muted-foreground">
                                        "{review.review}"
                                    </blockquote>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
