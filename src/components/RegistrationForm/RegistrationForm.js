import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input} from '../Form/Form'
import AuthApiService from '../../services/auth-api-service'
import Button from '../Button/Button'
import './RegistrationForm.css'

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => { }
  }

  state = { error: null }

  firstInput = React.createRef()

  handleSubmit = ev => {
    ev.preventDefault()
    const { name, username, password } = ev.target
    AuthApiService.postUser({
      name: name.value,
      username: username.value,
      password: password.value, 
    })
      .then(user => {
        console.log(user.authToken);
        name.value = ''
        username.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  componentDidMount() {
    this.firstInput.current.focus()
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='RegistrationForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p style={{color: 'red'}}>{error}</p>}
        </div>
        <div>
          <Input
            className='input-box'
            ref={this.firstInput}
            id='registration-name-input'
            name='name'
            placeholder='Enter your name'
            required
          />
        </div>
        <div>
          <Input
            className='input-box'
            id='registration-username-input'
            name='username'
            placeholder='Choose a username'
            required
          />
        </div>
        <div>
          <Input
            className='input-box'
            id='registration-password-input'
            name='password'
            type='password'
            placeholder='Choose a password'
            required
          />
        </div>
        <footer className="registration-footer">
          <div>
            <Button 
              className="regular-button"
              type='submit'>
                Sign Up
            </Button>
          </div>
          {' '}
          <Link to='/login'>Already have an account?</Link>
        </footer>
      </form>
    )
  }
}

export default RegistrationForm
