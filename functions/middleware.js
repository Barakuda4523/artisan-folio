export async function onRequest(context) {
  const req = context.request;
  const url = new URL(req.url);

  const host = (req.headers.get("host") || req.headers.get("Host") || "").toLowerCase();


  const CANON = "csaba-jancso.com";
  const WWW = "www.csaba-jancso.com";

  // Ha bármi más hoston érik el (pl. pages.dev, replit), dobd át a fő domainre
  if (host !== CANON && host !== WWW) {
    url.protocol = "https:";
    url.host = CANON;
    return Response.redirect(url.toString(), 301);
  }

  // www -> non-www
  if (host === WWW) {
    url.protocol = "https:";
    url.host = CANON;
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
