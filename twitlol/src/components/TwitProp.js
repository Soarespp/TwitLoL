import React, { Component } from "react";
import Imagem from "./../imgs/cybe.png";
import { connect } from "react-redux";
import "./TwitProp.css";

class TwitProp extends Component {
  render() {
    // const dados = {
    //   imag: { Imagem },
    //   user: "Pedro Soares",
    //   texto: "Facilisis pulvinar tempor nunc taciti netus placerat senectus ma",
    //   like: 99,
    //   desLike: 88,
    //   reTwit: 15
    // };
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
          <button>Salvar</button>
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
