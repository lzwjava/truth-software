// Entry point for the truth-software Worker.
//
// Static assets (index.html, portfolio.html, cases/, images/, ...) are served
// automatically by Workers Static Assets before this handler runs. This
// handler only catches requests that don't match any file.
export default {
  async fetch() {
    return new Response('Not Found', { status: 404 });
  },
};