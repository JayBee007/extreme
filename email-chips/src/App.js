import React, { Component } from "react";

import EmailBadges from './EmailBadges';


class App extends Component {
  state = {
    value: "",
    emails: []
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleKeyDown = e => {
    const lookupKeys = ["Enter", "Tab", ","];
    if (lookupKeys.includes(e.key)) {
      e.preventDefault();

      const email = this.state.value.trim();

      if (email) {
        this.setState({
          emails: [...this.state.emails, email],
          value: ""
        });
      }
    }
  };

  render() {
    const { value, emails } = this.state;
    return (
      <React.Fragment>
        <EmailBadges 
          onDelete={this.handleDelete}
          emails={emails}
        />
        <input
          placeholder="Type or paste email addresses and press `Enter`"
          value={value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
      </React.Fragment>
    );
  }
}

export default App;
