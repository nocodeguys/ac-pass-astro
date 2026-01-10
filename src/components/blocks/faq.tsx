import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { type Language, useTranslations, getLocalizedPath } from "@/i18n";
import { cn } from "@/lib/utils";

interface FAQProps {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
  lang?: Language;
}

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
  lang = "en",
}: FAQProps) => {
  const t = useTranslations(lang);

  // Build categories from translations
  const categoriesData = [
    { key: "gettingStarted", questionsCount: 3 },
    { key: "features", questionsCount: 3 },
    { key: "technical", questionsCount: 2 },
  ];

  const categories = categoriesData.map((cat) => ({
    title: t(`faq.categories.${cat.key}.title`),
    questions: Array.from({ length: cat.questionsCount }, (_, i) => ({
      question: t(`faq.categories.${cat.key}.questions.${i}.question`),
      answer: t(`faq.categories.${cat.key}.questions.${i}.answer`),
    })),
  }));
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                {t("faq.title")}
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                {t("faq.title")}
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto">
              {t("faq.description")}{" "}
              <a href={getLocalizedPath("/contact", lang)} className="underline underline-offset-4">
                {t("faq.getInTouch")}
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
