import { createStore } from "redux";
import Imagem from "./../imgs/cybe.png";

const INITIAL_STATE = {
  activelesson: [],
  activemodule: [],
  teste: "teste log",
  twits: [
    {
      id: 0,
      imag: { Imagem },
      user: "Pedro 0",
      texto: "Facilisis pulvinar tempor nunc taciti netus placerat senectus ma"
    }
  ],
  twitsProp: [
    {
      id: 0,
      imag: { Imagem },
      user: "Pedro 0",
      texto:
        "Proprio Facilisis pulvinar tempor nunc taciti netus placerat senectus ma"
    }
  ]
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "TOGGLE_LESSON":
      return {
        ...state
      };
    case "INC_TWIT":
      console.log("teste 1");
      console.log(state.twits);
      console.log(action.twits);
      return {
        ...state,
        twits: [...state.twits, action.twits]
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
