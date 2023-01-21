import React from 'react';
import '../styles/left-sidebar.css';

import { LeftSidebarData } from './LeftSidebarData';

function LeftSidebarContent() {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        {LeftSidebarData.map((val, key) => {
          return (
            <li key={key} className="item">
              <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LeftSidebarContent;
