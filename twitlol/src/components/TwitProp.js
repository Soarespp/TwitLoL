import React, { Component } from "react";
import { connect } from "react-redux";
import "./TwitProp.css";

class TwitProp extends Component {
  render() {
    const { twit } = this.props;

    return (
      <div className="Twit">
        <div className="Twit-img">
          <img
            src={this.props.twit.imag.Imagem}
            className="Twit-imagem"
            alt="Imagem"
          />
        </div>
        <div className="Twit-texto">
          <fieldset>
            <input name="texto" type="description" />
          </fieldset>
        </div>
        <div>
          <p>{twit.like} like </p>
          <p>{twit.deslike} dislike </p>
          <p>{twit.ReTwitN} ReTwit </p>
        </div>
        <div className="Twit-comands">
          <button>Deletar</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({
  twits: state.twits,
  maiorId: state.maiorId
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TwitProp);
