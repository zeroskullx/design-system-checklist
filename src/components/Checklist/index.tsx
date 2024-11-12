import React from 'react';

import s from './Checklist.module.css';
import ChecklistItem from '../ChecklistItem';

export interface ChecklistProps {
  id: string;
  title: string;
  description: string;
}

const Checklist = ({ checklist }: { checklist: ChecklistProps[] }) => {
  return (
    <ul className={s.container}>
      {checklist.map(item => (
        <ChecklistItem
          title={item.title}
          id={item.id}
          key={item.title}
          description={item.description}
        />
      ))}
    </ul>
  );
};

export default Checklist;
