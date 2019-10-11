import { createStore } from "redux";
import Imagem from "./../imgs/cybe.png";

const INITIAL_STATE = {
  maiorId: 99,
  userLog: "Pedro",
  UserFallow: [
    { id: 0, user: "Pedro", seguindo: {} },
    { id: 1, user: "Paulo", seguindo: {} },
    { id: 2, user: "Renan", seguindo: {} }
  ],
  twits: [
    {
      id: 0,
      like: 2,
      deslike: 1,
      ReTwitN: 0,
      imag: { Imagem },
      user: "Pedro",
      text: "Facilisis pulvinar tempor nunc taciti netus placerat senectus ma"
    },
    {
      id: 1,
      like: 2,
      deslike: 1,
      ReTwitN: 0,
      imag: { Imagem },
      user: "Renan",
      text: "Facilisis pulvinar tempor nunc taciti netus placerat senectus ma"
    },
    {
      id: 2,
      like: 2,
      deslike: 1,
      ReTwitN: 0,
      imag: { Imagem },
      user: "Antonio",
      text: "Facilisis pulvinar tempor nunc taciti netus placerat senectus ma"
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
    case "LIKE_TWIT": {
      return {
        ...state,
        twits: state.twits.map(twit =>
          twit.id === action.id ? { ...twit, like: twit.like + 1 } : twit
        )
      };
    }
    case "DESLIKE_TWIT": {
      return {
        ...state,
        twits: state.twits.map(twit =>
          twit.id === action.id ? { ...twit, deslike: twit.deslike + 1 } : twit
        )
      };
    }

    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
