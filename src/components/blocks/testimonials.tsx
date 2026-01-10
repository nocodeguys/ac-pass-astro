import { ArrowRight } from "lucide-react";

import { DashedLine } from "../dashed-line";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const items = [
  {
    quote: "Finally, a way to sell course access without subscription headaches. My students love stacking extra time when they need it.",
    author: "Sarah Mitchell",
    role: "Course Creator",
    company: "Digital Learning Academy",
    image: "/testimonials/amy-chase.webp",
  },
  {
    quote: "Access Passes handles our license management perfectly. Customers buy time, it stacks, no failed renewals to chase.",
    author: "Marcus Chen",
    role: "Lead Developer",
    company: "SoftwareCraft Studio",
    image: "/testimonials/jonas-kotara.webp",
  },
  {
    quote: "We switched from a complex subscription plugin. Access Passes is so much simpler — and our members actually prefer it.",
    author: "Emily Rodriguez",
    role: "Community Manager",
    company: "Creator's Guild",
    image: "/testimonials/kevin-yam.webp",
  },
  {
    quote: "The guest checkout with automatic account creation is a game-changer for conversions. Setup took 15 minutes.",
    author: "David Park",
    role: "Store Owner",
    company: "Digital Downloads Hub",
    image: "/testimonials/kundo-marta.webp",
  },
  {
    quote: "Our course completion rates went up 40% after switching to Access Passes. Students feel less pressure with stackable time.",
    author: "Lisa Thompson",
    role: "Education Director",
    company: "SkillPath Online",
    image: "/testimonials/amy-chase.webp",
  },
  {
    quote: "The webhook integration let us sync access with our custom member portal. The API documentation is excellent.",
    author: "James Wilson",
    role: "Technical Lead",
    company: "MemberStack Pro",
    image: "/testimonials/jonas-kotara.webp",
  },
  {
    quote: "No more chasing failed payments or managing complex subscription tiers. Access Passes just works.",
    author: "Anna Martinez",
    role: "Founder",
    company: "Premium Content Co",
    image: "/testimonials/kevin-yam.webp",
  },
  {
    quote: "The admin dashboard gives us complete visibility into who has access and when it expires. Customer support loves it.",
    author: "Michael Brown",
    role: "Operations Manager",
    company: "LearnFlow Academy",
    image: "/testimonials/kundo-marta.webp",
  },
];

export const Testimonials = ({
  className,
  dashedLineClassName,
}: {
  className?: string;
  dashedLineClassName?: string;
}) => {
  return (
    <>
      <section className={cn("overflow-hidden py-28 lg:py-32", className)}>
        <div className="container">
          <div className="space-y-4">
            <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
              Loved by WooCommerce store owners
            </h2>
            <p className="text-muted-foreground max-w-md leading-snug">
              Store owners choose Access Passes for its simplicity, flexibility, and reliable time-based access management.
            </p>
            <Button variant="outline" className="shadow-md">
              Read Customer Stories <ArrowRight className="size-4" />
            </Button>
          </div>

          <div className="relative mt-8 -mr-[max(3rem,calc((100vw-80rem)/2+3rem))] md:mt-12 lg:mt-20">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="">
                {items.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="xl:basis-1/3.5 grow basis-4/5 sm:basis-3/5 md:basis-2/5 lg:basis-[28%] 2xl:basis-[24%]"
                  >
                    <Card className="bg-muted h-full overflow-hidden border-none">
                      <CardContent className="flex h-full flex-col p-0">
                        <div className="relative h-[288px] lg:h-[328px]">
                          <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="size-full object-cover object-top"
                          />
                        </div>
                        <div className="flex flex-1 flex-col justify-between gap-10 p-6">
                          <blockquote className="font-display text-lg leading-none! font-medium md:text-xl lg:text-2xl">
                            {testimonial.quote}
                          </blockquote>
                          <div className="space-y-0.5">
                            <div className="text-foreground font-semibold">
                              {testimonial.author}, {testimonial.role}
                            </div>
                            <div className="text-muted-foreground text-sm">
                              {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-8 flex gap-3">
                <CarouselPrevious className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
                <CarouselNext className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <DashedLine
        orientation="horizontal"
        className={cn("mx-auto max-w-[80%]", dashedLineClassName)}
      />
    </>
  );
};
