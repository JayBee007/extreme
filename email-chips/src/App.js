import React, { Component } from "react";

import EmailBadges from "./EmailBadges";

import "./App.css";

class App extends Component {
  state = {
    value: "",
    emails: [],
    error: null
  };

  isEmail = email => /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);

  inList = email => this.state.emails.includes(email);

  isValid = email => {
    let error = null;

    if (!this.isEmail(email)) {
      error = `${email} is not a valid email address.`;
    }

    if (this.inList(email)) {
      error = `${email} has already been added.`;
    }

    if (error) {
      this.setState({ error });
      return false;
    }

    return true;
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
      error: null
    });
  };

  handleKeyDown = e => {
    const lookupKeys = ["Enter", "Tab", ","];
    if (lookupKeys.includes(e.key)) {
      e.preventDefault();

      const email = this.state.value.trim();

      if (email && this.isValid(email)) {
        this.setState({
          emails: [...this.state.emails, email],
          value: ""
        });
      }
    }
  };

  handleDelete = email => {
    const { emails } = this.state;
    const filteredEmails = emails.filter(eml => eml !== email);
    this.setState({ emails: filteredEmails });
  };

  handlePaste = e => {
    e.preventDefault();

    const paste = e.clipboardData.getData("text");
    const emails = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);

    if (emails) {
      const toBeAdded = emails.filter(email => this.isValid(email));

      this.setState({
        emails: [...this.state.emails, ...toBeAdded]
      });
    }
  };

  render() {
    const { value, emails, error } = this.state;
    return (
      <main className="wrapper">
        <EmailBadges onDelete={this.handleDelete} emails={emails} />
        <input
          className={"input " + (error ? "has-error" : "")}
          placeholder="Type or paste email addresses and press `Enter`"
          value={value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          onPaste={this.handlePaste}
        />
        {error && <p className="error">{this.state.error}</p>}
      </main>
    );
  }
}

export default App;
