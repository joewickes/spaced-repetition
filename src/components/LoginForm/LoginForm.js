import React, { Component } from 'react'
import { Input} from '../Form/Form'
import AuthApiService from '../../services/auth-api-service'
import UserContext from '../../contexts/UserContext'
import Button from '../Button/Button'

// Styling
import './LoginForm.css';

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => { }
  }

  static contextType = UserContext

  state = { error: null }

  firstInput = React.createRef()

  handleSubmit = ev => {
    ev.preventDefault()
    const { username, password } = ev.target

    this.setState({ error: null })

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        username.value = ''
        password.value = ''
        this.context.processLogin(res.authToken)
        this.props.onLoginSuccess()
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
        className='LoginForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p style={{color: "red"}}>{error}</p>}
        </div>
        <div>
          <Input
            className='input-box'
            ref={this.firstInput}
            id='login-username-input'
            name='username'
            placeholder='Username'
            required
          />
        </div>
        <div>
          <Input
            className='input-box'
            id='login-password-input'
            name='password'
            type='password'
            placeholder='Password'
            required
          />
        </div>
          <Button className='regular-button login-button' type='submit'>
            Login
          </Button>
      </form>
    )
  }
}

export default LoginForm
