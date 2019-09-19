import React, { Component } from "react";
import Imagem from "./../imgs/cybe.png";
import "./Twit.css";

import Twit from "./Twit";

class ListTwit extends Component {
  render() {
    const Twits = [
      {
        id: 0,
        imag: { Imagem },
        user: "Pedro 1",
        texto:
          "Facilisis pulvinar tempor nunc taciti netus placerat senectus ma"
      },
      {
        id: 1,
        imag: { Imagem },
        user: "Pedro 2",
        texto:
          "Facilisis pulvinar tempor nunc taciti netus placerat senectus ma"
      },
      {
        id: 2,
        imag: { Imagem },
        user: "Pedro 3",
        texto:
          "Facilisis pulvinar tempor nunc taciti netus placerat senectus ma"
      }
    ];

    return (
      <ul className="Twits">
        {Twits.map(twit => (
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

export default ListTwit;
