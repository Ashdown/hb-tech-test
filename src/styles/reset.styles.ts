const resetStyles = {
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed,  figure, figcaption, footer, header, hgroup,  menu, nav, output, ruby, section, summary, time, mark, audio, video, button': {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '100%',
    font: 'inherit',
    verticalAlign: 'baseline',
  },
  'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section': {
    display: 'block',
  },
  body: { lineHeight: 1 },
  'ol, ul': { listStyle: 'none' },
  'blockquote, q': { quotes: 'none' },
  'blockquote:before, blockquote:after, q:before, q:after': {
    content: ["''", 'none'],
  },
  table: { borderCollapse: 'collapse', borderSpacing: 0 },
  // remove default styles from anchor tags
  a: {
    textDecoration: 'none',
    font: 'inherit',
  },
  // remove default styles from inputs
  input: {
    border: 'none',
    backgroundImage: 'none',
    background: 'none',
    WebkitBoxShadow: 'none',
    MozBoxShadow: 'none',
    boxShadow: 'none',
  },
  // remove all button styles
  button: {
    background: 'none',
  },
  'button::-moz-focus-inner,input::-moz-focus-inner': {
    border: '0',
    padding: '0',
  },
  // remove blue active affect from inputs and buttons
  'input:focus, textarea:focus, select:focus, button:focus': {
    outline: 'none',
  },
};

export default resetStyles;
