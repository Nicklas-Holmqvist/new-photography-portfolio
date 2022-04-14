import React from 'react';
import { HashLink } from 'react-router-hash-link';

export const MenuListItem = (props: { path: string; title: string }) => {
  const path: string = `/#${props.path}`;
  return (
    <div className="MenuListItem">
      <HashLink
        scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
        to={path}
      >
        {props.title}
      </HashLink>
    </div>
  );
};
