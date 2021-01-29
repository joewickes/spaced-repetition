import React, { Component } from 'react'

// Style
import './DashboardRoute.css';

class DashboardRoute extends Component {
  render() {
    return (

      <section className='dashboard-section'>
        <div>
          <h2>French</h2>
        </div>
        <div>
          <p>Total correct answers: <b>{1}</b></p>
        </div>
        <div>
          {/* href (navlink /learn) */}
          <button className="start-practicing-button">Start<br />Practicing</button>
        </div>
        <div>
          <h3>Words to practice</h3>
        </div>
        <div>
          <ul>
            <li>
              <h4>Bonjour</h4>
              <p>Correct answer count: <b>{1}</b></p>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default DashboardRoute
