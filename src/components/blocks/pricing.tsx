"use client";

import { useState } from "react";

import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { type Language, useTranslations } from "@/i18n";
import { cn } from "@/lib/utils";

interface PricingProps {
  className?: string;
  lang?: Language;
}

export const Pricing = ({ className, lang = "en" }: PricingProps) => {
  const t = useTranslations(lang);

  const plans = [
    {
      name: t("pricing.plans.singleSite.name"),
      monthlyPrice: "$79",
      yearlyPrice: "$49",
      description: t("pricing.plans.singleSite.description"),
      features: [
        t("pricing.features.siteLicense1"),
        t("pricing.features.allFeatures"),
        t("pricing.features.yearUpdates"),
        t("pricing.features.prioritySupport"),
        t("pricing.features.accessGroups"),
        t("pricing.features.restApi"),
      ],
    },
    {
      name: t("pricing.plans.fiveSites.name"),
      monthlyPrice: "$149",
      yearlyPrice: "$99",
      features: [
        t("pricing.features.siteLicense5"),
        t("pricing.features.allFeatures"),
        t("pricing.features.yearUpdates"),
        t("pricing.features.prioritySupport"),
        t("pricing.features.accessGroups"),
        t("pricing.features.restApi"),
      ],
    },
    {
      name: t("pricing.plans.unlimited.name"),
      monthlyPrice: "$299",
      yearlyPrice: "$199",
      features: [
        t("pricing.features.siteLicenseUnlimited"),
        t("pricing.features.allFeatures"),
        t("pricing.features.yearUpdates"),
        t("pricing.features.prioritySupport"),
        t("pricing.features.accessGroups"),
        t("pricing.features.restApi"),
        t("pricing.features.whiteLabel"),
      ],
    },
  ];
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            {t("pricing.title")}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
            {t("pricing.description")}
          </p>
        </div>

        <div className="mt-8 grid items-start gap-5 text-start md:mt-12 md:grid-cols-3 lg:mt-20">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`${
                plan.name === "5 Sites"
                  ? "outline-primary origin-top outline-4"
                  : ""
              }`}
            >
              <CardContent className="flex flex-col gap-7 px-6 py-5">
                <div className="space-y-2">
                  <h3 className="text-foreground font-semibold">{plan.name}</h3>
                  <div className="space-y-1">
                    <div className="text-muted-foreground text-lg font-medium">
                      {isAnnual ? plan.yearlyPrice : plan.monthlyPrice}{" "}
                      <span className="text-muted-foreground text-sm">
                        {t("pricing.oneTime")}
                      </span>
                    </div>
                  </div>
                </div>

                {plan.name === "Single Site" ? (
                  <span className="text-muted-foreground text-sm">
                    {plan.description}
                  </span>
                ) : (
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={isAnnual}
                      onCheckedChange={() => setIsAnnual(!isAnnual)}
                      aria-label="Toggle annual billing"
                    />
                    <span className="text-sm font-medium">{t("pricing.launchPricing")}</span>
                  </div>
                )}

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="text-muted-foreground flex items-center gap-1.5"
                    >
                      <Check className="size-5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-fit"
                  variant={plan.name === t("pricing.plans.fiveSites.name") ? "default" : "outline"}
                >
                  {t("pricing.getAccessPasses")}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
