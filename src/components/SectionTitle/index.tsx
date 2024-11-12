import React from "react";
import classnames from "classnames";


import s from "./SectionTitle.module.css";
import { ProgressBar } from "../ProgressBar";

interface SectionTitleProps {
  title?: string;
  total?: number;
  completed?: number;
  completedLabel?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  total,
  completed,
  completedLabel,
  className,
}) => {
  const rootClassName = classnames(s.root, className);

  return (
    <div className={rootClassName}>
      {title && <h2 className={s.title}>{title}</h2>}
      {total && (
        <ProgressBar
          current={completed || 0}
          total={total}
          completedLabel={completedLabel}
        />
      )}
    </div>
  );
};

export { SectionTitle };
