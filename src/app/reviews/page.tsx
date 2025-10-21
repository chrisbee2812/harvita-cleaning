import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Star } from "lucide-react";

const reviews = [
    {
      name: "Sarah L.",
      title: "Game-changer for our family!",
      avatarId: "avatar-1",
      review: "Harvita has been a game-changer for our family. We come home to a sparkling clean house every week. Their attention to detail is unmatched and the team is always friendly and professional.",
      rating: 5,
    },
    {
      name: "Mark T.",
      title: "Our office has never looked better",
      avatarId: "avatar-2",
      review: "The team is professional, punctual, and incredibly thorough. Our office has never looked better and our employees have noticed the difference. Highly recommend their commercial services.",
      rating: 5,
    },
    {
      name: "Jessica P.",
      title: "Reliable and trustworthy",
      avatarId: "avatar-3",
      review: "I've been using Harvita for my monthly deep cleans for over a year. They are consistently reliable, trustworthy, and do an amazing job. It's such a relief to have this taken care of.",
      rating: 5,
    },
    {
      name: "David Chen",
      title: "Impressed with the quality",
      avatarId: "avatar-4",
      review: "We hired Harvita for a post-renovation clean-up and were so impressed. They tackled a huge mess and left our new space spotless. The eco-friendly products were a huge plus for us.",
      rating: 5,
    },
    {
      name: "Emily R.",
      title: "Above and beyond!",
      avatarId: "avatar-1",
      review: "They truly go above and beyond. I once mentioned a stubborn spot and the next time they came, they had a special solution for it. That level of care is rare. A five-star service all around.",
      rating: 5,
    },
    {
      name: "Global Corp Inc.",
      title: "Professionalism at its best",
      avatarId: "avatar-2",
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
                        const avatar = PlaceHolderImages.find(img => img.id === review.avatarId);
                        return (
                            <Card key={index} className="flex flex-col">
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        {avatar && (
                                            <Avatar>
                                                <AvatarImage src={avatar.imageUrl} alt={review.name} data-ai-hint={avatar.imageHint} />
                                                <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                        )}
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
