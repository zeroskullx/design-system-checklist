"use client";

import { Layout } from "@/components/Layout";
import s from "./page.module.css";
import { Hero } from "@/components/Hero";
import data from "@/data";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Section, type SectionData } from "@/components/Section/Section";
import { ResourcesProps } from "@/components/Resources";
import CategoryNav from "@/components/CategoryNav";

export default function CategoryRoute() {
  const id = useParams().id;

  const t = useTranslations("core");

  const translation = {
    components: useTranslations("components"),
    "design-language": useTranslations("design-language"),
    foundations: useTranslations("foundations"),
    maintenance: useTranslations("maintenance"),
  };

  const keys = Object.keys(data);
  const items = keys.map((k) => data[k as keyof typeof data]);
  let previous: any;
  let next: any;

  const item = items.find((item, index) => {
    const isFound = item.id === id;
    const prevItem = items[index - 1];
    const nextItem = items[index + 1];

    if (isFound && prevItem)
      previous = {
        title: translation[prevItem.id as keyof typeof translation]("title"),
        id: prevItem.id,
      };
    if (isFound && nextItem)
      next = {
        title: translation[nextItem.id as keyof typeof translation]("title"),
        id: nextItem.id,
      };

    return isFound;
  });
  if (!item) return null;

  const { id: categoryId, sections } = item;
  const categoryTranslations =
    translation[categoryId as keyof typeof translation];

  return (
    <Layout>
      <div className={s.container}>
        <Hero
          title={categoryTranslations("title")}
          subtitle={categoryTranslations("description")}
        />

        <div className={s.sections}>
          {sections.map((section) => {
            const sectionData: SectionData = {
              title: categoryTranslations(`sections.${section.id}.title`),
              description: categoryTranslations(
                `sections.${section.id}.description`
              ),
              resources: section.resources as ResourcesProps[],
              checklist: section.checklist.map((id) => {
                return {
                  id,
                  title: categoryTranslations(
                    `sections.${section.id}.checklist.${id}.title`
                  ),
                  description: categoryTranslations(
                    `sections.${section.id}.checklist.${id}.description`
                  ),
                };
              }),
            };

            return (
              <Section
                id={section.id}
                key={section.id}
                section={sectionData}
                completedLabel={t("completed")}
              />
            );
          })}

          <CategoryNav
            previousLabel={t("previous")}
            nextLabel={t("next")}
            next={
              next
                ? { text: next.title, url: `/category/${next.id}/` }
                : { text: t("exportAction"), url: "/share/" }
            }
            previous={
              previous && {
                text: previous.title,
                url: `/category/${previous.id}/`,
              }
            }
          />
        </div>
      </div>
    </Layout>
  );
}
