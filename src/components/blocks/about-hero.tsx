import { DashedLine } from "@/components/dashed-line";
import { type Language, useTranslations } from "@/i18n";

interface AboutHeroProps {
  lang?: Language;
}

export function AboutHero({ lang = "en" }: AboutHeroProps) {
  const t = useTranslations(lang);

  const stats = [
    {
      value: t("about.stats.activeInstallations.value"),
      label: t("about.stats.activeInstallations.label"),
    },
    {
      value: t("about.stats.accessPeriodsGranted.value"),
      label: t("about.stats.accessPeriodsGranted.label"),
    },
    {
      value: t("about.stats.uptimeReliability.value"),
      label: t("about.stats.uptimeReliability.label"),
    },
    {
      value: t("about.stats.customerSatisfaction.value"),
      label: t("about.stats.customerSatisfaction.label"),
    },
  ];
  return (
    <section className="">
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {t("about.hero.title")}
          </h1>

          <p className="text-muted-foreground mt-5 text-2xl md:text-3xl lg:text-4xl">
            {t("about.hero.subtitle")}
          </p>

          <p className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg text-balance md:block lg:mt-12">
            {t("about.hero.description1")}
            <br />
            <br />
            {t("about.hero.description2")}
          </p>
        </div>

        <div
          className={`relative flex flex-1 flex-col justify-center gap-3 pt-10 lg:pt-0 lg:pl-10`}
        >
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <div className="font-display text-4xl tracking-wide md:text-5xl">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
