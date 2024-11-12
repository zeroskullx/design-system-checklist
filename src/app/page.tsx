"use client";

import { Layout } from "@/components/Layout";
import Link from "next/link";
import { useTranslations } from "next-intl";

import s from "./page.module.css";
import datas from "@/data";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { useCheckedIds } from "@/utilities/checklistsContext";
import { SectionTitle } from "@/components/SectionTitle";
import { ArrowRightIcon } from "@/icons/arrowRight";

export default function Home() {
  const t = useTranslations("core");

  const translation = {
    components: useTranslations("components"),
    "design-language": useTranslations("design-language"),
    foundations: useTranslations("foundations"),
    maintenance: useTranslations("maintenance"),
  };

  const keys = Object.keys(datas);
  const items = keys.map((k) => datas[k as keyof typeof datas]);
  const { checkedIds } = useCheckedIds();

  const renderItem = (item: (typeof datas)[keyof typeof datas]) => {
    let total = 0;
    let completed = 0;

    item.sections.forEach((section) => {
      total += section.checklist.length;
      completed += section.checklist.filter((id) => {
        return checkedIds.includes(id);
      }).length;
    });

    const comp = translation[item.id as keyof typeof translation];

    return (
      <Link key={item.id} className={s.listItem} href={`/category/${item.id}/`}>
        <SectionTitle
          title={comp(`title`)}
          key={item.id}
          total={total}
          completed={completed}
          completedLabel={t("completed")}
        />
        <div className={s.arrowRight}>
          <ArrowRightIcon />
        </div>
      </Link>
    );
  };

  return (
    <Layout>
      <div className={s.container}>
        <Hero title={t("heroTitle")} subtitle={t("heroSubtitle")}>
          <Link href="/category/design-language">
            <Button text={t("heroAction")} />
          </Link>
        </Hero>

        <ul className={s.list}>{items.map(renderItem)}</ul>
      </div>
    </Layout>
  );
}
