import React, { Component } from "react";
import "./Home.css";
import { connect } from "react-redux";

import ListTwit from "./../components/ListTwit";
import ListTwitProp from "./../components/ListTwitsProp";
import Imagem from "./../imgs/cybe.png";
import { IncTwit } from "../store/actions";

class Home extends Component {
  state = {
    newId: 0
  };

  pegarId(twits) {
    this.newId = 0;
    for (var i = 0; i < twits.length; i++) {
      if (twits[i].id > this.newId) {
        this.newId = twits[i].id;
      }
    }
    this.newId = this.newId + 1;

    return this.newId;
  }

  render() {
    const { twits } = this.props;
    const { incluirTwit } = this.props;

    return (
      <div className="grid-container">
        <div className="item2">
          <div>Menu</div>
          <div>
            <button
              onClick={() =>
                incluirTwit({
                  id: this.pegarId(twits),
                  imag: { Imagem },
                  user: "Paulo",
                  text:
                    "Facilisis pulvinar tempor nunc taciti netus placerat senectus ma"
                })
              }
            >
              Twitar
            </button>
          </div>
        </div>
        <div className="item3">
          <ListTwitProp />
        </div>
        <div className="item4">
          <ListTwit />
        </div>
        <div>
          <fieldset>
            <legend>Texto de twit:</legend>
            Twit: <input type="text" id="1" />
            <button
              onClick={e => {
                incluirTwit({
                  id: this.pegarId(twits),
                  imag: { Imagem },
                  user: "Paulo",
                  text: document.getElementById("1").value
                });
              }}
            >
              Click to twit
            </button>
          </fieldset>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  twits: state.twits
});

const mapDispatchToProps = dispatch => ({
  incluirTwit: twit => dispatch(IncTwit(twit))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
