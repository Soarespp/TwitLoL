import React, { Component } from "react";
import "./Twit.css";
import { connect } from "react-redux";

import TwitProp from "./TwitProp";

class ListTwitProp extends Component {
  render() {
    const { twitsProp } = this.props;

    return (
      <ul className="Twits">
        {twitsProp.map(twit => (
          <li className="twit" key={twit.id}>
            <TwitProp twit={twit} />
          </li>
        ))}
      </ul>
    );
  }
}

export default connect(state => ({
  twitsProp: state.twitsProp
}))(ListTwitProp);
