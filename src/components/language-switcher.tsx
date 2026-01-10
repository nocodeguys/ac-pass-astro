import { Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { type Language, languages, getAlternatePath } from "@/i18n";

interface LanguageSwitcherProps {
  lang: Language;
}

export function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "/";
  const alternateLang: Language = lang === "en" ? "pl" : "en";
  const alternatePath = getAlternatePath(currentPath, lang);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="size-8">
          <Globe className="size-4" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <a
            href={lang === "en" ? currentPath : alternatePath}
            className={lang === "en" ? "font-medium" : ""}
          >
            {languages.en}
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a
            href={lang === "pl" ? currentPath : alternatePath}
            className={lang === "pl" ? "font-medium" : ""}
          >
            {languages.pl}
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
