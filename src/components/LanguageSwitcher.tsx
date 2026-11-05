"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HTML_LANG, type Locale, LOCALE_COOKIE, LOCALE_NAME, LOCALES } from "@/i18n/config";

/** Troca o idioma mantendo a página atual e guarda a escolha para as próximas visitas. */
export function LanguageSwitcher({ lang, label }: { lang: Locale; label: string }) {
  const pathname = usePathname();
  const rest = pathname.replace(/^\/(pt|en|es)(?=\/|$)/, "");

  return (
    <ul aria-label={label} className="flex items-center rounded-page bg-sunken p-0.5 text-[13px] font-medium">
      {LOCALES.map((l) => (
        <li key={l}>
          <Link
            href={`/${l}${rest}`}
            hrefLang={HTML_LANG[l]}
            lang={HTML_LANG[l]}
            aria-label={LOCALE_NAME[l]}
            aria-current={l === lang ? "true" : undefined}
            onClick={() => {
              document.cookie = `${LOCALE_COOKIE}=${l}; path=/; max-age=31536000; samesite=lax`;
            }}
            className={`block rounded-[6px] px-2 py-1 uppercase transition-colors ${
              l === lang ? "bg-surface text-ink" : "text-soft hover:text-ink"
            }`}
          >
            {l}
          </Link>
        </li>
      ))}
    </ul>
  );
}
