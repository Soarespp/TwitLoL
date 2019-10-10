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

export const DelTwit = twit => ({
  type: "DEL_TWIT",
  twit
});

export const ReTwit = twit => ({
  type: "RE_TWIT",
  twit
});

export const GetIDTwit = twits => ({
  type: "GET_TWIT",
  twits
});
