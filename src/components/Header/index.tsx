'use client'

import React, { useState, useCallback, MouseEvent, ChangeEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import classnames from "classnames";

import s from "./Header.module.css";
import { useIntlClientAction, useIntlClientState } from "@/translations/intlClientContext";


const Header: React.FC = () => {
  const router = useRouter();
  const [active, setActive] = useState<boolean>(false);
  const navClassName = classnames(s.nav, active && s["active"]);
  const burgerClassName = classnames(s.burger, active && s["active"]);



  //i18n
  const { onLanguageChange } = useIntlClientAction()
  const { locale } = useIntlClientState()
  //const locale = useLocale();
  const t = useTranslations('core');


  //console.log(locale);


  const toggleMenu = useCallback((flag?: boolean) => {
    setActive((prev) => {
      const nextActive = flag === undefined ? !prev : flag;
      document.body.style.overflow = nextActive ? "hidden" : "auto";
      return nextActive;
    });
  }, []);

  const closeMenu = useCallback(() => toggleMenu(false), []);

  const navigate = (e: MouseEvent<HTMLAnchorElement>, to: string) => {
    e.preventDefault();
    closeMenu();
    router.push(to);
  };

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    closeMenu();
    //router.push(router.basePath, router.asPath, { locale: e.target.value });

    onLanguageChange(e.target.value);
  };

  return (
    <header className={s.container}>
      <span className={s.logo}>
        <Link href="/" onClick={closeMenu}>
          Design System Checklist
        </Link>
      </span>

      <nav className={navClassName}>
        <ul className={s.menu}>
          <li className={s.item}>
            <a href="/about" onClick={(e) => navigate(e, "/about")}>
              {t('about')}
            </a>
          </li>
          <li className={s.item}>
            <a href="/share" onClick={(e) => navigate(e, "/share")}>
              {t('share')}
            </a>
          </li>
          <li className={s.item}>
            <a
              href="https://github.com/ardakaracizmeli/design-system-checklist"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('contribute')}
            </a>
          </li>

          <li className={s.button}>
            <select
              className={s.language}
              onChange={handleLanguageChange}
              defaultValue={locale}
            >
              <option value="en">English</option>
              <option value="pt">Português</option>
              <option value="tr">Türkçe</option>
              <option value="zh-cn">简体中文</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </li>
        </ul>
      </nav>

      <button className={burgerClassName} onClick={() => toggleMenu()}>
        <span className={s.line} />
        <span className={s.line} />
        <span className={s.line} />
      </button>
    </header>
  );
};

export { Header };
