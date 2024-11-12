import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import s from "./Footer.module.css";
import { Button } from "../Button";

const Footer = () => {

  const t = useTranslations('core');

  return (
    <footer className={s.root}>
      <div className={s.content}>
        <h4 className={s.title}>{t('footerTitle')}</h4>
        <p className={s.text}>{t('footerText')}</p>
        <Link href="https://reshaped.so" passHref target="_blank">
          <Button
            text={t("footerAction")}
          />
        </Link>
      </div>
    </footer>
  );
};

export { Footer };
