import React, { Component } from 'react';
import './AddGreeter.css';

function validate(name, email, phonenumber) {
  // true means invalid, so our conditions got reversed
  return {
    greetingName: name.length === 0,
    greetingEmail: email.length === 0,
    greetingPhonenumber: phonenumber.length === 0,
  };
}

class AddGreeter extends Component {
  constructor(props) {
    super(props);
    this.state = { greetingName: '', greetingEmail: '', greetingPhonenumber: '', touched: {
        greetingName: false,
        greetingEmail: false,
        greetingPhonenumber: false,
      }, formValid: false };
    this.handleUpdateName = this.handleUpdateName.bind(this);
    this.handleUpdateEmail = this.handleUpdateEmail.bind(this);
    this.handleUpdatePhonenumber = this.handleUpdatePhonenumber.bind(this);
    this.addGreeting = this.addGreeting.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUpdateName(event) {
    this.setState({ greetingName: event.target.value });
  }
  handleUpdateEmail(event) {
    this.setState({ greetingEmail: event.target.value });
  }
  handleUpdatePhonenumber(event) {
    this.setState({ greetingPhonenumber: event.target.value });
  }
  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  }
  handleSubmit() {
    var touched = {...this.state.touched}
    touched.greetingName = false;
    touched.greetingEmail = false;
    touched.greetingPhonenumber = false;
    this.setState({touched})

    this.addGreeting();
  }

  canBeSubmitted() {
    const errors = validate(this.state.greetingName, this.state.greetingEmail, this.state.greetingPhonenumber);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }
  render()
   {
     const errors = validate(this.state.greetingName, this.state.greetingEmail, this.state.greetingPhonenumber);
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    };
  return (
    <div className="AddGreeter">
      <input
        type="text"
        className={shouldMarkError('greetingName') ? "error" : ""}
        placeholder="Full name"
        onChange={this.handleUpdateName}
        value={this.state.greetingName}
        onBlur={this.handleBlur('greetingName')}
      />
      <input
        type="text"
        className={shouldMarkError('greetingEmail') ? "error" : ""}
        placeholder="E-mail address"
        onChange={this.handleUpdateEmail}
        value={this.state.greetingEmail}
        onBlur={this.handleBlur('greetingEmail')}
      />
      <input
        type="text"
        className={shouldMarkError('greetingPhonenumber') ? "error" : ""}
        placeholder="Phone number"
        onChange={this.handleUpdatePhonenumber}
        value={this.state.greetingPhonenumber}
        onBlur={this.handleBlur('greetingPhonenumber')}
      />
      &nbsp;&nbsp;
      <button disabled={isDisabled} onClick={this.handleSubmit}>Add</button>
    </div>
  );
  }
  addGreeting() {
  this.props.addGreeting(this.state.greetingName, this.state.greetingEmail, this.state.greetingPhonenumber);
  this.setState({ greetingName: '' });
  this.setState({ greetingEmail: '' });
  this.setState({ greetingPhonenumber: '' });
  }
}

export default AddGreeter;
