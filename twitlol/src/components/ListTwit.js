import React, { Component } from "react";
import "./Twit.css";
import Twit from "./Twit";

import { connect } from "react-redux";

class ListTwit extends Component {
  render() {
    const { twits } = this.props;

    return (
      <ul className="Twits">
        {twits.map(twit => (
          <li className="twit" key={twit.id}>
            <Twit twit={twit} />
          </li>
        ))}
        {console.log(twits)}
      </ul>
    );
  }
}

export default connect(state => ({
  twits: state.twits
}))(ListTwit);
