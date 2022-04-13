import React from 'react';

export const MenuListItem = (props: { path: string; title: string }) => {
  return (
    <div className="MenuListItem">
      <a href={props.path}>{props.title}</a>
    </div>
  );
};
