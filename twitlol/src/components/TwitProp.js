import React, { Component } from "react";
import Imagem from "./../imgs/cybe.png";
import "./TwitProp.css";

class TwitProp extends Component {
  render() {
    const dados = {
      imag: { Imagem },
      user: "Pedro Soares",
      texto: "Facilisis pulvinar tempor nunc taciti netus placerat senectus ma",
      like: 99,
      desLike: 88,
      reTwit: 15
    };

    return (
      <div className="Twit">
        <div className="Twit-img">
          <img src={dados.imag.Imagem} className="Twit-imagem" alt="Imagem" />
        </div>
        <div className="Twit-texto">
          <fieldset>
            <input name="texto" type="description" />
          </fieldset>
        </div>
        <div>
          <p1>{dados.like} like </p1>
          <p2>{dados.desLike} dislike </p2>
          <p3>{dados.reTwit} ReTwit </p3>
        </div>
        <div className="Twit-comands">
          <button>Deletar</button>
          <button>Salvar</button>
        </div>
      </div>
    );
  }
}

export default TwitProp;
