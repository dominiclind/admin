import React, { Component } from 'react'
import { signUp } from '../actions/session'
import {connect} from 'react-redux';

import Form from '../components/Form/Form';
import schemas from '../schemas';

function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}

class SignUpPage extends Component {

  handleSubmit(values) {
    this.props.dispatch(signUp(values))
  }

  render () {
    return (
      <div className="signup-page">
        <h1>Register</h1>
        <Form
          onValidSubmit={(values) => this.handleSubmit(values)}
          schema={schemas.user}
        />
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  session: state.session,
});

export default connect(mapStateToProps)(SignUpPage);