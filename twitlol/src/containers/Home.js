import React, { Component } from "react";
import "./Home.css";

import ListTwit from "./../components/ListTwit";
import ListTwitProp from "./../components/ListTwitsProp";

class Home extends Component {
  render() {
    return (
      <div class="grid-container">
        <div class="item2">
          <div>Menu</div>
          <div>
            <button>Twitar</button>
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

export default Home;
