import markdownit from 'markdown-it';

export function parse(md) {
  return markdownit().render(md);
}
