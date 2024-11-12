"use client";

import { NextIntlClientProvider } from "next-intl";
import React, { useCallback, useEffect } from "react";
import { rendeMessage } from "./getMessages";

const LOCAL_STORAGE_CONFIG_KEY = "desyscheck-config";

// import enMessages from "../translations/en";
// import ptMessages from "../translations/pt";

// const messagesMap = {
//   en: enMessages,
//   pt: ptMessages,
// };

const IntlClientContext = React.createContext(
  {} as {
    locale: string;
    onLanguageChange: (locale: string) => void;
  },
);

type IntlClientProviderProps = {
  children: React.ReactNode;
};

export const IntlClientProvider = (props: IntlClientProviderProps) => {
  const { children } = props;

  const [locale, setLocale] = React.useState("en");
  const [isLoading, setIsLoading] = React.useState(true);
  const [messagesMap, setMessagesMap] = React.useState({});

  const onLanguageChange = (locale: string) => {
    setLocale(locale);

    const value = JSON.stringify({ locale });
    localStorage.setItem(LOCAL_STORAGE_CONFIG_KEY, value);
  };

  useEffect(() => {
    rendeMessage(locale)
      .then((m) => {
        setMessagesMap(m);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [locale]);

  useEffect(() => {
    const data = localStorage.getItem(LOCAL_STORAGE_CONFIG_KEY);

    if (!data) {
      onLanguageChange("en");
      return;
    }

    const _jsonData = JSON.parse(data);
    onLanguageChange(_jsonData?.locale || "en");
  }, []);

  return (
    <IntlClientContext.Provider value={{ onLanguageChange, locale }}>
      {!isLoading && (
        <NextIntlClientProvider locale={locale} messages={messagesMap}>
          {children}
        </NextIntlClientProvider>
      )}
    </IntlClientContext.Provider>
  );
};

export const useIntlClientState = () => {
  const { locale } = React.useContext(IntlClientContext);
  return { locale };
};

export const useIntlClientAction = () => {
  const { onLanguageChange } = React.useContext(IntlClientContext);
  return { onLanguageChange };
};
