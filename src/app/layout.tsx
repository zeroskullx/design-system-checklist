import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import Favicon from "../../public/favicon.ico";
import "@/styles/globals.css";
import { ScrollToTop } from "@/utilities/ScrollToTop";
import { ChecklistsProvider } from "@/utilities/checklistsContext";
import { IntlClientProvider } from "@/translations/intlClientContext";

export const metadata: Metadata = {
  title: {
    default: "Design System Checklist",
    template: "Design System Checklist",
  },
  description: "Test your design system against the best practices",
  icons: [{ rel: "icon", url: Favicon.src }],
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang={"en"}>
      <body>
        <ScrollToTop />

        <IntlClientProvider>
          <ChecklistsProvider>
            <div id="__DESYSCHECK">{children}</div>
          </ChecklistsProvider>
        </IntlClientProvider>
      </body>
    </html>
  );
}
