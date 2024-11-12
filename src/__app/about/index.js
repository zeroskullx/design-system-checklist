import React from "react";
import Hero from "../../src/components/Hero";
import Layout from "../../src/components/Layout";
import s from "./about.module.css";

const AboutText = () => {
  return (
    <span className={s.text}>
      Hello, we're{" "}
      <a
        className={s.link}
        href="https://twitter.com/ardakaracizmeli"
        target="_blank"
        rel="noopener noreferrer"
      >
        Arda Karacizmeli
      </a>
      ,{" "}
      <a
        className={s.link}
        href="https://twitter.com/blvdmitry"
        target="_blank"
        rel="noopener noreferrer"
      >
        Dmitry Belyaev
      </a>
      , and{" "}
      <a
        className={s.link}
        href="https://www.linkedin.com/in/stevenbaguley/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Steven Baguley
      </a>
      .
      <br />
      <br />
      We’ve been working on design systems for a long time. And we’ve spotted
      the similarities they all share. This website is a collection of best
      practices to help you build extensive and robust design systems wherever
      you work.
      <br />
      <br />
      Our categories might not look exactly like the system you’ve planned (or
      already have). But this isn’t meant to be a definitive list of items for
      every design system. It's a set of guidelines for you to keep track of
      everything you’ll want to check off to provide a solid user experience.
      <br />
      <br />
      Everything you see here is open source. If you’d like to see additional
      content on this website or if you have feedback, please{" "}
      <a
        className={s.link}
        href="https://github.com/ardakaracizmeli/design-system-checklist"
        target="_blank"
        rel="noopener noreferrer"
      >
        contribute
      </a>
      .
      <br />
      <br />
      <hr />
      <br />
      Special thanks to:
      <br />
      <br />
      <ul className={s.list}>
        <li>
          <a
            className={s.link}
            href="https://twitter.com/Arlene_UX"
            target="_blank"
            rel="noopener noreferrer"
          >
            Arlene Xu
          </a>{" "}
          for contributing the translation to Simplified Chinese and to{" "}
          <a
            className={s.link}
            href="https://twitter.com/gabrlyg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gabriel Yang
          </a>{" "}
          for reviewing it.
        </li>
        <li>
          <a
            className={s.link}
            href="https://twitter.com/laisrlobato"
            target="_blank"
            rel="noopener noreferrer"
          >
            Laís Lobato
          </a>
          ,
          <a
            className={s.link}
            href="https://janklever.work"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jan Klever
          </a>{" "}
          and{" "}
          <a
            className={s.link}
            href="https://www.linkedin.com/in/raphaela-diniz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Raphaela Diniz
          </a>{" "}
          for contributing the translation to Portuguese.
        </li>
      </ul>
    </span>
  );
};

const AboutRoute = ({ t }) => {
  return (
    <Layout t={t}>
      <div className={s.container}>
        <Hero title="About" subtitle={<AboutText />} />
      </div>
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  const t = (await import(`../../src/translations/${locale}/index`)).default;

  return {
    props: { t },
  };
}

export default AboutRoute;
