import React, { Component } from "react";
import "./Twit.css";
import Twit from "./Twit";

import { connect } from "react-redux";

class ListTwit extends Component {
  state = {
    dadosTeste: [{ user: "Pedro" }, { user: "Paulo" }]
  };

  verificarFallor() {}

  render() {
    const { twits, userLog } = this.props;

    return (
      <ul className="Twits">
        {twits
          .filter(twit => twit.user !== userLog)
          .map(twit => (
            <li className="twit" key={twit.id}>
              <Twit twit={twit} />
            </li>
          ))}
      </ul>
    );
  }
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({
  twits: state.twits,
  userLog: state.userLog,
  UserFallow: state.UserFallow
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTwit);
