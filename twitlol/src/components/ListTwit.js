import React, { Component } from "react";
import "./Twit.css";
import Twit from "./Twit";

import { connect } from "react-redux";

/*function toggleLesson(module, lesson) {
  return {
    type: "TOGGLE_LESSON",
    module,
    lesson
  };
} */

class ListTwit extends Component {
  render() {
    const { twits } = this.props;

    return (
      <ul className="Twits">
        {twits.map(twit => (
          <li className="twit" key={twit.id}>
            <Twit
              id={twit.id}
              imag={twit.imag}
              user={twit.user}
              text={twit.texto}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default connect(state => ({
  twits: state.twits
}))(ListTwit);
