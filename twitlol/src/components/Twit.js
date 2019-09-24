import React, { Component } from "react";
import "./Twit.css";

class Twit extends Component {
  render() {
    return (
      <div className="Twit">
        <div className="Twit-img">
          <img
            src={this.props.imag.Imagem}
            className="Twit-imagem"
            alt="Imagem"
          />
        </div>
        <div className="Twit-text">
          <p> {this.props.user}</p>
          <p> {this.props.text}</p>
        </div>
        <div className="Twit-comands">
          <button>DesLike</button>
          <button>Re-Twit</button>
          <button>Like</button>
        </div>
      </div>
    );
  }
}

export default Twit;
