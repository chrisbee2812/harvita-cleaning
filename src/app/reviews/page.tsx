import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Star } from "lucide-react";

const reviews = [
    {
        name: "Beryl",
        title: "Efficient and willing",
        review: "Needing a new cleaner we hired Harvita Services for a weekly clean. They are good time keepers, efficient at cleaning and willing to help and fit in as needed. I am really happy with their work and would definitely recommend them to my friends.",
        rating: 5,
    },
    {
        name: "Yvonne",
        review: "Great clean! Always know Fadzayi has been. The house shines!",
        rating: 5,
    },
    {
      name: "",
      title: "",
      review: "Fadzayi & Harvita Services provide a top tier cleaning experience. Communication was prompt and clear. I was really impressed with the attention to detail, our house was left pristine. Highly recommend!",
      rating: 5,
    },
    {
      name: "SB",
      title: "Hurstpierpoint",
      review: "Harvita Cleaning Services offer exceptional services. They are great communicators, extremely reliable, and consistently maintain high standards and attention to detail. Every visit leaves our space spotless and feeling brightened up and clean. They are trustworthy, efficient, and detail-oriented — I highly recommend their services.",
      rating: 5,
    },
    {
      name: "Emily R.",
      title: "Above and beyond!",
      review: "They truly go above and beyond. I once mentioned a stubborn spot and the next time they came, they had a special solution for it. That level of care is rare. A five-star service all around.",
      rating: 5,
    },
    {
      name: "",
      title: "Professionalism at its best",
      review: "Our facility requires a high standard of cleanliness, and Harvita delivers every single time. Their commercial cleaning crew is efficient, discreet, and very detail-oriented. A valued partner for our business.",
      rating: 5,
    }
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
