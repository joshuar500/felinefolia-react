import React from 'react';

export function Table(props) {
  console.log('propssss', props);
  return (
    <div id={props.id} className="columns is-multiline">
      <div className="column">
        <table className="table is-bordered is-striped is-narrow is-fullwidth">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>
                <abbr title="Has Business">HazBiz</abbr>
              </th>
              <th>Name</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>
                <abbr title="Username">Username</abbr>
              </th>
              <th>Email</th>
              <th>Role</th>
              <th>
                <abbr title="Has Business">HazBiz</abbr>
              </th>
              <th>Name</th>
            </tr>
          </tfoot>
          <tbody>
            {props.data &&
              props.data.map(item => (
                <tr key={item.email}>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>{item.has_business}</td>
                  <td>{item.name}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <nav className="pagination is-centered" aria-label="pagination">
          <button className="pagination-previous">Previous</button>
          <button className="pagination-next">Next page</button>
          <ul className="pagination-list">
            <li>
              <button className="pagination-link" aria-label="Goto page 1">
                1
              </button>
            </li>
            <li>
              <span className="pagination-ellipsis">&hellip;</span>
            </li>
            <li>
              <button className="pagination-link" aria-label="Goto page 45">
                45
              </button>
            </li>
            <li>
              <button
                className="pagination-link is-current"
                aria-label="Page 46"
                aria-current="page"
              >
                46
              </button>
            </li>
            <li>
              <button className="pagination-link" aria-label="Goto page 47">
                47
              </button>
            </li>
            <li>
              <span className="pagination-ellipsis">&hellip;</span>
            </li>
            <li>
              <button className="pagination-link" aria-label="Goto page 86">
                86
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
