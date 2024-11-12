import React, { ChangeEvent } from 'react';
import { useCheckItem } from '../../utilities/checklistsContext';
import s from './ChecklistItem.module.css';

type ChecklistItemProps = {
  title: string;
  description: string;
  id: string;
}

const ChecklistItem = ({ title, description, id }: ChecklistItemProps) => {
  const { add, remove, checked } = useCheckItem(id);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;

    if (checked) add(id);
    if (!checked) remove(id);
  };

  return (
    <li className={s.container}>
      <input className={s.input} type="checkbox" id={id} onChange={handleChange} checked={checked} />
      <label className={s.label} htmlFor={id}>
        <h3 className={s.title}>{title}</h3>
        <p className={s.description}>{description}</p>
      </label>
    </li>
  );
};

export default ChecklistItem;
