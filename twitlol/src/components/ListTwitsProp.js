import React, { Component } from "react";
import "./ListTwitProp.css";
import { connect } from "react-redux";

import TwitProp from "./TwitProp";

class ListTwitProp extends Component {
  render() {
    const { twits, userLog } = this.props;

    return (
      <ul className="list-twits-prop">
        {twits
          .filter(twit => twit.user === userLog)
          .map(twit => (
            <li className="twit" key={twit.id} className="item">
              <TwitProp twit={twit} />
            </li>
          ))
          .reverse()}
      </ul>
    );
  }
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({
  twits: state.twits,
  userLog: state.userLog
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTwitProp);
