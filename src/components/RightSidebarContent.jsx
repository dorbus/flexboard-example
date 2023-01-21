import '../styles/right-sidebar.css';
import { RightSidebarData } from './RightSidebarData';

export default function RightSidebarContent() {
  return (
    <div className="sidebar">
      <div className='api'>
        Flexboard APIs
      </div>
      <ul className="sidebar-list-right">
        <li className='item'><h4 id='icon'>Prop</h4> <h4 id='title'>Type</h4></li>
          {RightSidebarData.map((val, key) => {
            return (
              <li key={key} className="item">
                <div id="icon">{val.title}</div>
                <div id="title">{val.type}</div>
              </li>
            );
          })}
        </ul>
      </div>
  );
}
