import React, { Component } from "react";
import "./Home.css";
import { connect } from "react-redux";

import ListTwit from "./../components/ListTwit";
import ListTwitProp from "./../components/ListTwitsProp";
import Imagem from "./../imgs/cybe.png";
import { IncTwit } from "../store/actions";

class Home extends Component {
  state = {
    testeName: ""
  };

  render() {
    const { twits } = this.props;
    const { incluirTwit } = this.props;

    return (
      <div class="grid-container">
        <div class="item2">
          <div>Menu</div>
          <div>
            <button onClick={() => incluirTwit(twits)}>Twitar</button>
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
  incluirTwit: twit => dispatch(IncTwit(twit))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
