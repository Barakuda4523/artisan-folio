export async function onRequest() {
  return new Response("b0d27cd0f61a40e8b56d82dad1724d0e", {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
