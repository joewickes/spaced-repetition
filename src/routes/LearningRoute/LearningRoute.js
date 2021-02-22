import React, { Component } from 'react'

import HeadService from './../../services/head-service';
import GuessService from './../../services/guess-service';

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
          console.log('guess response', response);
          this.setState({
            isCorrect: response.isCorrect,
            translation: response.answer,
            totalScore: response.totalScore,
            correctCount: response.wordCorrectCount,
            incorrectCount: response.wordIncorrectCount,
          });
        });
    }
    const handleTryAnother = (e) => {
      e.preventDefault();
      this.setState({isCorrect: null})

      HeadService.fetchLearnWord()
      .then(response => {
        this.setState({
          word: response.nextWord,
          totalScore: response.totalScore,
          correctCount: response.wordCorrectCount,
          incorrectCount: response.wordIncorrectCount
        })
      }) 
    }

    const guessPrompt = (
      <section>
        <h2>Translate the word:</h2>
        <span>{this.state.word}</span>
        <p>Your total score is: {this.state.totalScore}</p>
        <form onSubmit={(e) => handleGuessSubmit(e)}>
          <label htmlFor="learn-guess-input">What's the translation for this word?</label>
          <input id="learn-guess-input" type="text" onChange={(e) => updateGuess(e)} required />
          <button type="submit">Submit your answer</button>
        </form>
        <p>You have answered this word correctly {this.state.correctCount} times.</p>
        <p>You have answered this word incorrectly {this.state.incorrectCount} times.</p>
      </section>
    )

    const resultsPrompt = (
      <>
        <h2>{this.state.isCorrect === false ? 'Good try, but not quite right :(' : null}</h2>
        <h2>{this.state.isCorrect ? 'You were correct! :D' : null}</h2>
        <div className="DisplayFeedback">
          <p>{`The correct translation for ${this.state.word} was ${this.state.translation} and you chose ${this.state.guess}!`}</p>
        </div>
        <div className="DisplayScore">
          <p>{`Your total score is: ${this.state.totalScore}`}</p>
        </div>
        <button onClick={(e) => handleTryAnother(e)}>Try another word!</button>
      </>
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
