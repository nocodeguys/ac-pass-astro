import { Clock, Layers, UserPlus, Webhook } from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";
import { GITHUB_URL } from "@/consts";
import { type Language, useTranslations, getLocalizedPath } from "@/i18n";

interface HeroProps {
  lang?: Language;
}

export const Hero = ({ lang = "en" }: HeroProps) => {
  const t = useTranslations(lang);

  const features = [
    {
      title: t("hero.features.stackableAccess.title"),
      description: t("hero.features.stackableAccess.description"),
      icon: Layers,
    },
    {
      title: t("hero.features.flexibleGroups.title"),
      description: t("hero.features.flexibleGroups.description"),
      icon: Clock,
    },
    {
      title: t("hero.features.guestFriendly.title"),
      description: t("hero.features.guestFriendly.description"),
      icon: UserPlus,
    },
    {
      title: t("hero.features.fullApi.title"),
      description: t("hero.features.fullApi.description"),
      icon: Webhook,
    },
  ];
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="font-display text-foreground max-w-160 text-[32px] leading-tight tracking-tight md:text-[32px] lg:text-[32px] lg:leading-tight">
            {t("hero.title")}
          </h1>

          <p className="text-muted-foreground mt-6 max-w-xl text-lg leading-relaxed md:text-lg md:leading-relaxed">
            {t("hero.description")}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button asChild size="lg" className="text-base">
              <a href={GITHUB_URL}>{t("hero.cta")}</a>
            </Button>
            <Button variant="ghost" size="lg" className="text-base" asChild>
              <a href={getLocalizedPath("/docs", lang)}>{t("hero.viewDocs")}</a>
            </Button>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-1 flex-col justify-center space-y-6 max-lg:pt-10 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="hover:border-border hover:bg-card flex gap-3 rounded-xl border border-transparent p-2 transition-all duration-300 hover:shadow-sm lg:gap-4"
              >
                <div className="bg-muted flex size-9 shrink-0 items-center justify-center rounded-full lg:size-10">
                  <Icon className="text-foreground size-4 lg:size-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-foreground mb-1 text-base font-semibold lg:text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 max-lg:ml-6 max-lg:h-[550px] max-lg:overflow-hidden md:mt-20 lg:container lg:mt-24">
        <div className="relative h-[793px] w-full">
          <img
            src="/hero1.jpg"
            alt={t("hero.imageAlt")}
            className="w-full rounded-2xl object-cover object-left-top shadow-lg max-lg:rounded-tr-none"
          />
        </div>
      </div>
    </section>
  );
};
