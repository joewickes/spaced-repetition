import React, { Component } from 'react';

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
          words: languageAndWords.words
        })
      })
    ;
  }

  render() {
    console.log(this.state)
    return (

      <section className='dashboard-section'>
        <div>
          <h2>French</h2>
        </div>
        <div>
          <p>Total correct answers: <b>{this.state.words.reduce((acc, word) => {
            return acc + word.correct_count;
          }, 0)}</b></p>
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
            {this.state.words.map(word => {
              return <Word key={word.id} original={word.original} correct_count={word.correct_count} />
            })}
          </ul>
        </div>
      </section>
    );
  }
}

export default DashboardRoute
