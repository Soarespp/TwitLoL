import Imagem from "./../imgs/cybe.png";
import { async } from "q";

export function toggleLesson(module, lesson) {
  return {
    type: "TOGGLE_LESSON",
    module,
    lesson
  };
}

export const IncTwit = twits => dispatch => {
  console.log(twits);
  /* const Dados = twits;
  const newId = 0;

  for (var i = 0; i < Dados.length; i++) {
    if (Dados[i].id > newId) {
      newId = Dados[i].id;
    }
  }
  
  Dados.push({
    id: newId,
    img: { Imagem },
    user: "Pedro 1",
    texto: "inclusão manual"
  }); */
};
