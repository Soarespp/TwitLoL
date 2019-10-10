import React, { Component } from "react";
import "./Home.css";
import { connect } from "react-redux";

import ListTwit from "./../components/ListTwit";
import ListTwitProp from "./../components/ListTwitsProp";
import Imagem from "./../imgs/cybe.png";
import { IncTwit, GetIDTwit } from "../store/actions";

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
    const { incluirTwit, GetIDTwit } = this.props;

    return (
      <div class="grid-container">
        <div class="item2">
          <div>Menu</div>
          <div>
            <button
              onClick={() =>
                incluirTwit({
                  id: this.pegarId(twits),
                  imag: { Imagem },
                  user: "Paulo",
                  texto:
                    "Facilisis pulvinar tempor nunc taciti netus placerat senectus ma"
                })
              }
            >
              Twitar
            </button>
          </div>
        </div>
        <div class="item3">
          <ListTwitProp />
        </div>
        <div class="item4">
          <ListTwit />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  twits: state.twits
});

const mapDispatchToProps = dispatch => ({
  incluirTwit: twit => dispatch(IncTwit(twit)),
  GetIDTwit: twit => dispatch(IncTwit(twit))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
