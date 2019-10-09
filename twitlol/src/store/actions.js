export function toggleLesson(module, lesson) {
  return {
    type: "TOGGLE_LESSON",
    module,
    lesson
  };
}

export const IncTwit = twits => ({
  type: "INC_TWIT",
  twits
});

/*export const IncTwit = twits => dispatch => {
  return {
    type: "INC_TWIT",
    twits
  };
   const Dados = twits;
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
  }); 
};*/
