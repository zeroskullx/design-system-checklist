import React, { ReactNode } from "react";
import s from "./Hero.module.css";

interface HeroProps {
  title: string;
  subtitle: string | ReactNode;
  children?: ReactNode;
}

const Hero = ({ title, subtitle, children }: HeroProps) => {
  return (
    <div className={s.root}>
      <h1 className={s.title}>{title}</h1>
      {typeof subtitle === "string" ? (
        <p
          className={s.subtitle}
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
      ) : (
        <div className={s.subtitle}>{subtitle}</div>
      )}
      {children && <div className={s.content}>{children}</div>}
    </div>
  );
};

export { Hero };
