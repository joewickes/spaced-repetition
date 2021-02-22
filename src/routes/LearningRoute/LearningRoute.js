import React, { Component } from 'react'

import HeadService from './../../services/head-service';
import GuessService from './../../services/guess-service';

import './LearningRoute.css';

class LearningRoute extends Component {
  
  state = {
    word: 'Word itself',
    nextWord: '',
    translation: '',
    guess: '',
    totalScore: 0,
    correctCount: 0,
    incorrectCount: 0,
    isCorrect: null,
  }

  componentDidMount() {
    HeadService.fetchLearnWord()
      .then(response => {
        this.setState({
          word: response.nextWord,
          totalScore: response.totalScore,
          correctCount: response.wordCorrectCount,
          incorrectCount: response.wordIncorrectCount
        })
      })
    ;
  }
   
  render() {

    const updateGuess = (e) => {
      e.preventDefault();

      this.setState({guess: e.target.value});
    }

    const handleGuessSubmit = (e) => {
      e.preventDefault();

      GuessService.postGuess(this.state.guess.toLowerCase())
        .then(response => {
          this.setState({
            isCorrect: response.isCorrect,
            translation: response.answer,
            totalScore: response.totalScore,
            correctCount: response.wordCorrectCount,
            incorrectCount: response.wordIncorrectCount,
            nextWord: response.nextWord,
          });
        });
    }
    const handleTryAnother = (e) => {
      e.preventDefault();
      this.setState({
        word: this.state.nextWord,
        isCorrect: null
      })

      // HeadService.fetchLearnWord()
      // .then(response => {
      //   console.log(response)
      //   console.log(this.state);
      //   this.setState({
      //     word: response.nextWord,
      //     totalScore: response.totalScore,
      //     correctCount: response.wordCorrectCount,
      //     incorrectCount: response.wordIncorrectCount
      //   })
      // }) 
    }

    const guessPrompt = (
      <section className="LearningRoute">
        <div className="guessPrompt">
          <h2>Translate the word:</h2>
          <span>{this.state.word}</span>
          <div className='total-score'>
            <p>Your total score is: {this.state.totalScore}</p>
          </div>
          <form onSubmit={(e) => handleGuessSubmit(e)}>
            <label htmlFor="learn-guess-input">What's the translation for this word?</label>
            <input className="input-box" id="learn-guess-input" type="text" onChange={(e) => updateGuess(e)} required />
            <div>
              <button className="regular-button" type="submit">Submit your answer</button>
            </div>
          </form>
          <div className="correct-count">
            <p>You have answered this word correctly {this.state.correctCount} times.</p>
          </div>
          <div class="incorrect-count">
            <p>You have answered this word incorrectly {this.state.incorrectCount} times.</p>
          </div>
        </div>
      </section>
    )

    const resultsPrompt = (
      <section className="LearningRoute">
        <div className="resultsPrompt">
          <h2>{this.state.isCorrect === false ? 'Good try, but not quite right :(' : null}</h2>
          <h2>{this.state.isCorrect ? 'You were correct! :D' : null}</h2>
          <div className="DisplayFeedback">
            <p>{`The correct translation for ${this.state.word} was ${this.state.translation} and you chose ${this.state.guess}!`}</p>
          </div>
          <div className="DisplayScore">
            <p>{`Your total score is: ${this.state.totalScore}`}</p>
          </div>
          <div className="results-button-container">
            <button className="regular-button" onClick={(e) => handleTryAnother(e)}>Try another word!</button>
          </div>
        </div>
      </section>
    );

    const handlePrompts = () => {
      if (this.state.isCorrect === null) {
        return guessPrompt;
      } else {
        return resultsPrompt;
      }
    }

    return (
      <>
        {handlePrompts()}
      </>
    );
  }
}

export default LearningRoute
