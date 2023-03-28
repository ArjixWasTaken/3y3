const encode = (/**@type {string}*/ text) => {
  const characters = [...text].map((c) => c.codePointAt(0));

  const output = [];
  for (const char of characters) {
    if (0x00 < char && char < 0x7f) {
      String.fromCodePoint(char + 0xe0000).toString();
    }
    output.push(
      String.fromCodePoint(
        char + (0x00 < char && char < 0x7f ? 0xe0000 : 0)
      ).toString()
    );
  }

  return output.join("");
};

const decode = (/**@type {string}*/ text) => {
  const characters = [...text].map((c) => c.codePointAt(0));

  const output = [];
  for (const char of characters) {
    output.push(
      String.fromCodePoint(
        char - (0xe0000 < char && char < 0xe007f ? 0xe0000 : 0)
      ).toString()
    );
  }

  return output.join("");
};
