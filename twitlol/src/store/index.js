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
      user: "Pedro 2",
      texto: "Facilisis pulvinar tempor nunc taciti netus placerat senectus ma"
    }
  ],
  twitsProp: [
    {
      id: 0,
      imag: { Imagem },
      user: "Pedro 1",
      texto:
        "Proprio Facilisis pulvinar tempor nunc taciti netus placerat senectus ma"
    }
  ]
};

function reducer(state = INITIAL_STATE, action) {
  if (action.type === "TOGGLE_LESSON") {
    return {
      ...state,
      activelesson: action.lesson,
      activemodule: action.module
    };
  }

  return state;
}

const store = createStore(reducer);

export default store;
