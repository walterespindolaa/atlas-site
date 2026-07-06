// Edge Middleware (Vercel): lp.useatlasapp.com abre a LP direto na raiz,
// sem redirect e sem mudar a URL. Roda antes do filesystem.
export const config = { matcher: '/' };

export default function middleware(request: Request) {
  const url = new URL(request.url);
  if (url.hostname === 'lp.useatlasapp.com') {
    url.pathname = '/lpteste';
    return new Response(null, {
      headers: { 'x-middleware-rewrite': url.toString() },
    });
  }
}
