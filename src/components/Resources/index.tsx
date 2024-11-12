import React from 'react';
import { Link } from '../Link';
import s from './Resources.module.css';


export interface ResourcesProps {
  url: string;
  title: string;
}

const Resources = ({ resources }: { resources: ResourcesProps[] }) => {
  if (!resources) return null;

  return (
    <ul className={s.container}>
      {resources.map(item => (
        <li key={item.title}>
          <Link title={item.title} url={item.url} />
        </li>
      ))}
    </ul>
  );
};

export default Resources;
