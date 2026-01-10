import React from "react";

import { FcGoogle } from "react-icons/fc";

import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Input } from "../ui/input";

import { type Language, useTranslations, getLocalizedPath } from "@/i18n";

interface SignupSectionProps {
  lang?: Language;
}

const SignupSection = ({ lang = "en" }: SignupSectionProps) => {
  const t = useTranslations(lang);
  return (
    <section className="py-28 lg:pt-44 lg:pb-32">
      <div className="container">
        <div className="flex flex-col gap-4">
          <Card className="mx-auto w-full max-w-sm">
            <CardHeader className="flex flex-col items-center space-y-0">
              <img
                src="/logo.svg"
                alt="logo"
                width={94}
                height={18}
                className="mb-7 dark:invert"
              />
              <p className="mb-2 text-2xl font-bold">{t("signup.createAccount")}</p>
              <p className="text-muted-foreground">
                {t("signup.enterDetails")}
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <Input type="text" placeholder={t("signup.namePlaceholder")} required />
                <Input type="email" placeholder={t("signup.emailPlaceholder")} required />
                <div>
                  <Input
                    type="password"
                    placeholder={t("signup.passwordPlaceholder")}
                    required
                  />
                </div>
                <Button type="submit" className="mt-2 w-full">
                  {t("signup.signUp")}
                </Button>
                <Button variant="outline" className="w-full">
                  <FcGoogle className="mr-2 size-5" />
                  {t("signup.signUpGoogle")}
                </Button>
              </div>
              <div className="text-muted-foreground mx-auto mt-8 flex justify-center gap-1 text-sm">
                <p>{t("signup.haveAccount")}</p>
                <a href={getLocalizedPath("/login", lang)} className="text-primary font-medium">
                  {t("signup.logIn")}
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
