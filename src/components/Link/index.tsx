import React from 'react';

import s from './Link.module.css';
import { ArrowRightIcon } from '@/icons/arrowRight';

const Link = ({ title, url }: { title: string, url: string }) => {
  return (
    <a className={s.link} href={url} target="_blank" rel="noopener noreferrer">
      <span className={s.arrowRight}>
        <ArrowRightIcon />
      </span>
      {title}
    </a>
  );
};

export { Link };
