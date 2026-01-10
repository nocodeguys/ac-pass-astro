import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Getting Started",
    questions: [
      {
        question: "What are the requirements to run Access Passes?",
        answer:
          "Access Passes requires WordPress 5.0 or higher, WooCommerce 3.0 or higher, and PHP 7.4 or higher. You'll also need a valid license key which you receive upon purchase.",
      },
      {
        question: "How do I install and set up the plugin?",
        answer:
          "Installation is simple: upload and activate the plugin, run the onboarding wizard, configure your first access group, set up products with access days, and start selling. The guided wizard walks you through each step.",
      },
      {
        question: "Do my customers need accounts to purchase?",
        answer:
          "No! Access Passes supports guest-friendly checkout with automatic account creation. When a guest makes a purchase, an account is automatically created for them with seamless access to their purchases.",
      },
    ],
  },
  {
    title: "Features",
    questions: [
      {
        question: "How does access stacking work?",
        answer:
          "When a customer purchases a product that grants access time, it automatically stacks with any existing access. For example, if they have 30 days remaining and purchase another 30-day product, they'll have 60 days total. No overlapping subscriptions or payment failures.",
      },
      {
        question: "What are Access Groups and how do they work?",
        answer:
          "Access Groups let you bundle multiple products under shared access timers. Products in the same group contribute to a cumulative access period. This is perfect for course bundles, tiered content, or related digital products.",
      },
      {
        question: "Can I use webhooks to integrate with other systems?",
        answer:
          "Yes! Access Passes includes a powerful webhook system with both outgoing webhooks for access changes and incoming webhook processing for external integrations. All webhooks use secure API key authentication with configurable SSL verification.",
      },
    ],
  },
  {
    title: "Technical",
    questions: [
      {
        question: "Is there an API for developers?",
        answer:
          "Absolutely. Access Passes provides a full REST API with endpoints for user status, group management, bulk operations, and email-based user lookup. It follows WordPress and WooCommerce best practices with capability-based access control.",
      },
      {
        question: "How are refunds handled?",
        answer:
          "Access Passes automatically handles refunds by revoking the appropriate amount of access time. When an order is refunded, the access days granted by that order are subtracted from the user's remaining time.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Got Questions?
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Got Questions?
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto">
              If you can't find what you're looking for,{" "}
              <a href="/contact" className="underline underline-offset-4">
                get in touch
              </a>
              .
            </p>
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                <h3 className="text-muted-foreground border-b py-4">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
