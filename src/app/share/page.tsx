'use client'

import React from "react";

import s from "./share.module.css";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { useTranslations } from "next-intl";
import { ExportButton } from "@/components/ExportButton";

export default function ShareRoute() {
  const t = useTranslations("core");

  return (
    <Layout >
      <div className={s.container}>
        <Hero title={t("exportTitle")} subtitle={t("exportSubtitle")}>
          <ExportButton
            text={t("exportAction")}
            feedbackText={t("exportComplete")}
          />
        </Hero>
      </div>
    </Layout>
  );
};
