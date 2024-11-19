const markdownit = require("markdown-it");

const parse = (md) => {
  return markdownit().render(md);
}

module.exports = parse;
