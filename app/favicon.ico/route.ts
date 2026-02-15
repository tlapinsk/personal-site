export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export function GET(request: Request) {
  return Response.redirect(new URL("/icon", request.url), 307);
}
