import React, { Component } from 'react'
import { } from '../actions/session'
import {connect} from 'react-redux';

import { login } from '../actions/session'

import Form from '../components/Form/Form';

const LOGIN_SCHEMA = {
  fields: [
    {
      label: 'email',
      name:'email',
      type: 'text',
      required: true
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      required: true
    }
  ]
}

class SignInPage extends Component {

  handleSubmit(values) {
    this.props.dispatch(login(values))
  }

  render () {
    return (
      <div className="signup-page">
        <h1>Login</h1>
        <Form
          onValidSubmit={(values) => this.handleSubmit(values)}
          schema={LOGIN_SCHEMA}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  session: state.session,
});

export default connect(mapStateToProps)(SignInPage);