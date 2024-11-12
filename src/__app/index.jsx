import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import ArrowRightIcon from "../icons/arrowRight";
import data from "../data";
import { useCheckedIds } from "../utilities/checklistsContext";
import s from "./index.module.css";

const HomeRoute = (props) => {
  const { t } = props;
  const keys = Object.keys(data);
  const items = keys.map((k) => data[k]);
  const { checkedIds } = useCheckedIds();

  const renderItem = (item) => {
    let total = 0;
    let completed = 0;

    item.sections.forEach((section) => {
      total += section.checklist.length;
      completed += section.checklist.filter((id) => {
        return checkedIds.includes(id);
      }).length;
    });

    return (
      <Link key={item.id} className={s.listItem} href={`/category/${item.id}/`} >
        <SectionTitle
          title={t?.[item.id]?.title}
          key={item.id}
          total={total}
          completed={completed}
          completedLabel={t.core.completed}
        />
        <div className={s.arrowRight}>
          <ArrowRightIcon />
        </div>

      </Link>
    );
  };

  return (
    <Layout t={t}>
      <div className={s.container}>
        <Hero title={t.core.heroTitle} subtitle={t.core.heroSubtitle}>
          <Link href="/category/design-language">
            <Button text={t.core.heroAction} />
          </Link>
        </Hero>
        <ul className={s.list}>{items.map(renderItem)}</ul>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  const t = (await import(`../src/translations/${locale}/index`)).default;

  return {
    props: { t },
  };
}

export default HomeRoute;
