import React from 'react';

class Word extends React.Component {
  render() {
    return(
      <li>
        <h4>{this.props.original}</h4>
        <p>Correct answer count: <b>{this.props.correct_count}</b></p>
      </li>
    )
  }
}

export default Word;