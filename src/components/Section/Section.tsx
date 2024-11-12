import React from "react";

import Checklist, { type ChecklistProps } from "../Checklist";
import Resources, { ResourcesProps } from "../Resources";
import { useCheckedIds } from "../../utilities/checklistsContext";
import s from "./Section.module.css";
import { SectionTitle } from "../SectionTitle";




export interface SectionData {
  title: string;
  description: string;
  resources: ResourcesProps[];
  checklist: ChecklistProps[];
}

export interface SectionProps {
  id: string;
  completedLabel: string;
  section: SectionData;
}

const Section = ({ section, completedLabel, id }: SectionProps) => {
  const { title, description, checklist, resources } = section;
  const { checkedIds } = useCheckedIds();
  const total = section.checklist.length;
  const completed = section.checklist.filter((item) =>
    checkedIds.includes(item.id)
  ).length;

  return (
    <div id={id} className={s.container}>
      <SectionTitle
        title={title}
        total={total}
        completed={completed}
        className={s.title}
        completedLabel={completedLabel}
      />

      <p className={s.description}>{description}</p>
      <Checklist checklist={checklist} />
      <Resources resources={resources} />
    </div>
  );
};

export { Section };
