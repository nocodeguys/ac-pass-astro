import { Facebook, Linkedin, Twitter } from "lucide-react";

import { DashedLine } from "../dashed-line";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { type Language, useTranslations } from "@/i18n";

interface ContactProps {
  lang?: Language;
}

export const Contact = ({ lang = "en" }: ContactProps) => {
  const t = useTranslations(lang);

  const contactInfo = [
    {
      title: t("contact.corporateOffice"),
      content: (
        <p className="text-muted-foreground mt-3">
          1 Carlsberg Close
          <br />
          1260 Hillview, Australia
        </p>
      ),
    },
    {
      title: t("contact.emailUs"),
      content: (
        <div className="mt-3">
          <div>
            <p className="">{t("contact.careers")}</p>
            <a
              href="mailto:careers@streamline.com"
              className="text-muted-foreground hover:text-foreground"
            >
              careers@streamline.com
            </a>
          </div>
          <div className="mt-1">
            <p className="">{t("contact.press")}</p>
            <a
              href="mailto:press@streamline.com"
              className="text-muted-foreground hover:text-foreground"
            >
              press@streamline.com
            </a>
          </div>
        </div>
      ),
    },
    {
      title: t("contact.followUs"),
      content: (
        <div className="mt-3 flex gap-6 lg:gap-10">
          <a href="#" className="text-muted-foreground hover:text-foreground">
            <Facebook className="size-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            <Twitter className="size-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            <Linkedin className="size-5" />
          </a>
        </div>
      ),
    },
  ];
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container max-w-2xl">
        <h1 className="text-center text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          {t("contact.title")}
        </h1>
        <p className="text-muted-foreground mt-4 text-center leading-snug font-medium lg:mx-auto">
          {t("contact.subtitle")}
        </p>

        <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
          {contactInfo.map((info, index) => (
            <div key={index}>
              <h2 className="font-medium">{info.title}</h2>
              {info.content}
            </div>
          ))}
        </div>

        <DashedLine className="my-12" />

        {/* Inquiry Form */}
        <div className="mx-auto">
          <h2 className="text-lg font-semibold">{t("contact.inquiries")}</h2>
          <form className="mt-8 space-y-5">
            <div className="space-y-2">
              <Label>{t("contact.form.fullName")}</Label>
              <Input placeholder={t("contact.form.fullNamePlaceholder")} />
            </div>
            <div className="space-y-2">
              <Label>{t("contact.form.email")}</Label>
              <Input placeholder={t("contact.form.emailPlaceholder")} type="email" />
            </div>
            <div className="space-y-2">
              <Label>
                {t("contact.form.company")}{" "}
                <span className="text-muted-foreground">{t("contact.form.optional")}</span>
              </Label>
              <Input placeholder={t("contact.form.companyPlaceholder")} />
            </div>
            <div className="space-y-2">
              <Label>
                {t("contact.form.employees")}{" "}
                <span className="text-muted-foreground">{t("contact.form.optional")}</span>
              </Label>
              <Input placeholder={t("contact.form.employeesPlaceholder")} />
            </div>
            <div className="space-y-2">
              <Label>{t("contact.form.message")}</Label>
              <Textarea
                placeholder={t("contact.form.messagePlaceholder")}
                className="min-h-[120px] resize-none"
              />
            </div>

            <div className="flex justify-end">
              <Button size="lg" type="submit" className="">
                {t("contact.form.submit")}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
