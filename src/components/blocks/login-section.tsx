import React from "react";

import { FcGoogle } from "react-icons/fc";

import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";

import { type Language, useTranslations, getLocalizedPath } from "@/i18n";

interface LoginSectionProps {
  lang?: Language;
}

const LoginSection = ({ lang = "en" }: LoginSectionProps) => {
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
              <p className="mb-2 text-2xl font-bold">{t("login.welcomeBack")}</p>
              <p className="text-muted-foreground">
                {t("login.enterDetails")}
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <Input type="email" placeholder={t("login.emailPlaceholder")} required />
                <div>
                  <Input
                    type="password"
                    placeholder={t("login.passwordPlaceholder")}
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      className="border-muted-foreground"
                    />
                    <label
                      htmlFor="remember"
                      className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {t("login.rememberMe")}
                    </label>
                  </div>
                  <a href="#" className="text-primary text-sm font-medium">
                    {t("login.forgotPassword")}
                  </a>
                </div>
                <Button type="submit" className="mt-2 w-full">
                  {t("login.signIn")}
                </Button>
                <Button variant="outline" className="w-full">
                  <FcGoogle className="mr-2 size-5" />
                  {t("login.signUpGoogle")}
                </Button>
              </div>
              <div className="text-muted-foreground mx-auto mt-8 flex justify-center gap-1 text-sm">
                <p>{t("login.noAccount")}</p>
                <a href={getLocalizedPath("/signup", lang)} className="text-primary font-medium">
                  {t("login.signUp")}
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
