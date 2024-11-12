import React from "react";
import s from "./ProgressBar.module.css";

interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
  completedLabel?: string;
}

const ProgressBar = ({ current, total, className, completedLabel }: ProgressBarProps) => {
  const width = (100 / total) * current;
  const text = width === 100 ? completedLabel : current + "/" + total;

  return (
    <div className={className}>
      <p className={[s.text, width === 100 && s.completed].join(" ")}>{text}</p>
      <div className={s.container}>
        <span className={s.bar} style={{ width: width + "%" }} />
      </div>
    </div>
  );
};

export { ProgressBar };
