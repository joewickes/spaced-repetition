// Dependencies
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Style
import './DashboardRoute.css';

// Component
import Word from './../../components/Word/Word';

// API Service
import LanguageService from './../../services/language-service';

class DashboardRoute extends Component {

  state = {
    language: '',
    words: [],
  }

  componentDidMount() {
    LanguageService.fetchLanguageAndWords()
      .then((languageAndWords) => {
        this.setState({
          language: languageAndWords.language.name,
          words: languageAndWords.words,
          totalScore: languageAndWords.language.total_score,
        })
      })
    ;
  }

  render() {
    return (

      <section className='dashboard-section'>
        <div>
          <h2>{this.state.language}</h2>
        </div>
        <div>
          <p>Total correct answers: <b>{this.state.totalScore}</b></p>
        </div>
        <div>
          {/* href (navlink /learn) */}
          <NavLink to='/learn'><button className="start-practicing-button">Start <br />Practicing</button></NavLink>
        </div>
        <div>
          <h3>Words to practice</h3>
        </div>
        <div>
          <ul>
            {this.state.words.map(word => {
              return <Word key={word.id} original={word.original} correct_count={word.correct_count} incorrect_count={word.incorrect_count} />
            })}
          </ul>
        </div>
      </section>
    );
  }
}

export default DashboardRoute
