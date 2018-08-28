import React from 'react';

export function Table(props) {
  return (
    <div className="columns is-multiline">
          <div className="column">
              <table className="table is-bordered is-striped is-narrow is-fullwidth">
                  <thead>
                    <tr>
                      <th><abbr title="Position">Pos</abbr></th>
                      <th>Team</th>
                      <th><abbr title="Played">Pld</abbr></th>
                      <th><abbr title="Won">W</abbr></th>
                      <th><abbr title="Drawn">D</abbr></th>
                      <th><abbr title="Lost">L</abbr></th>
                      <th><abbr title="Goals for">GF</abbr></th>
                      <th><abbr title="Goals against">GA</abbr></th>
                      <th><abbr title="Goal difference">GD</abbr></th>
                      <th><abbr title="Points">Pts</abbr></th>
                      <th>Qualification or relegation</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th><abbr title="Position">Pos</abbr></th>
                      <th>Team</th>
                      <th><abbr title="Played">Pld</abbr></th>
                      <th><abbr title="Won">W</abbr></th>
                      <th><abbr title="Drawn">D</abbr></th>
                      <th><abbr title="Lost">L</abbr></th>
                      <th><abbr title="Goals for">GF</abbr></th>
                      <th><abbr title="Goals against">GA</abbr></th>
                      <th><abbr title="Goal difference">GD</abbr></th>
                      <th><abbr title="Points">Pts</abbr></th>
                      <th>Qualification or relegation</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong>
                      </td>
                      <td>38</td>
                      <td>23</td>
                      <td>12</td>
                      <td>3</td>
                      <td>68</td>
                      <td>36</td>
                      <td>+32</td>
                      <td>81</td>
                      <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>
                    </tr>
                    <tr>
                      <th>2</th>
                      <td><a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">Arsenal</a></td>
                      <td>38</td>
                      <td>20</td>
                      <td>11</td>
                      <td>7</td>
                      <td>65</td>
                      <td>36</td>
                      <td>+29</td>
                      <td>71</td>
                      <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>
                    </tr>
                    <tr>
                      <th>3</th>
                      <td><a href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C." title="Tottenham Hotspur F.C.">Tottenham Hotspur</a></td>
                      <td>38</td>
                      <td>19</td>
                      <td>13</td>
                      <td>6</td>
                      <td>69</td>
                      <td>35</td>
                      <td>+34</td>
                      <td>70</td>
                      <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>
                    </tr>
                    <tr className="is-selected">
                      <th>4</th>
                      <td><a href="https://en.wikipedia.org/wiki/Manchester_City_F.C." title="Manchester City F.C.">Manchester City</a></td>
                      <td>38</td>
                      <td>19</td>
                      <td>9</td>
                      <td>10</td>
                      <td>71</td>
                      <td>41</td>
                      <td>+30</td>
                      <td>66</td>
                      <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round" title="2016–17 UEFA Champions League">Champions League play-off round</a></td>
                    </tr>
                    <tr>
                      <th>5</th>
                      <td><a href="https://en.wikipedia.org/wiki/Manchester_United_F.C." title="Manchester United F.C.">Manchester United</a></td>
                      <td>38</td>
                      <td>19</td>
                      <td>9</td>
                      <td>10</td>
                      <td>49</td>
                      <td>35</td>
                      <td>+14</td>
                      <td>66</td>
                      <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League">Europa League group stage</a></td>
                    </tr>
                  </tbody>
                </table>
                <nav className="pagination is-centered" aria-label="pagination">
                    <a className="pagination-previous">Previous</a>
                    <a className="pagination-next">Next page</a>
                    <ul className="pagination-list">
                      <li><a className="pagination-link" aria-label="Goto page 1">1</a></li>
                      <li><span className="pagination-ellipsis">&hellip;</span></li>
                      <li><a className="pagination-link" aria-label="Goto page 45">45</a></li>
                      <li><a className="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
                      <li><a className="pagination-link" aria-label="Goto page 47">47</a></li>
                      <li><span className="pagination-ellipsis">&hellip;</span></li>
                      <li><a className="pagination-link" aria-label="Goto page 86">86</a></li>
                    </ul>
                  </nav>
          </div>
      </div>
  )
}