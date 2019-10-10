import { createStore } from "redux";
import Imagem from "./../imgs/cybe.png";

const INITIAL_STATE = {
  maiorId: 99,
  twits: [
    {
      id: 0,
      like: 2,
      deslike: 1,
      imag: { Imagem },
      user: "Pedro",
      texto: "Facilisis pulvinar tempor nunc taciti netus placerat senectus ma"
    }
  ],
  twitsProp: [
    {
      id: 0,
      like: 3,
      deslike: 5,
      imag: { Imagem },
      user: "Pedro",
      texto:
        "Proprio Facilisis pulvinar tempor nunc taciti netus placerat senectus ma"
    }
  ]
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "INC_TWIT":
      return {
        ...state,
        twits: [...state.twits, action.twits]
      };
    case "DEL_TWIT":
      return {
        ...state,
        twits: [...state.twits.filter(twit => twit !== action.twit)]
      };
    case "RE_TWIT":
      return {
        ...state,
        twits: [...state.twits, action.twit]
      };
    case "GET_TWIT": {
      var newId = 0;
      for (var i = 0; i < action.twits.length; i++) {
        if (action.twits[i].id > newId) {
          newId = action.twits[i].id;
        }
      }
      newId = newId + 1;
      return newId;
    }

    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
