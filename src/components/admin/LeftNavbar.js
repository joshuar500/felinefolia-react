import React from 'react';

export function LeftNavbar(props) {
  return (
    <aside className="column is-2 aside">
      <nav className="menu">
        <p className="menu-label">
          General
        </p>
        <ul className="menu-list">
          <li><a className="is-active"><span className="icon is-small"><i className="fa fa-tachometer"></i></span> Dashboard</a></li>
        </ul>
        <p className="menu-label">
          Administration
        </p>
        <ul className="menu-list">
          <li><a><span className="icon is-small"><i className="fa fa-users"></i></span> Members</a></li>
          <li><a><span className="icon is-small"><i className="fa fa-pencil-square-o"></i></span> Comments</a></li>
          {/* <li>
            <a className=""><i className="fa fa-cog"></i> Settings</a>
            <ul>
              <li><a>Members</a></li>
              <li><a>Add a member</a></li>
            </ul>
          </li> */}
        </ul>
      </nav>
    </aside>
  )
}