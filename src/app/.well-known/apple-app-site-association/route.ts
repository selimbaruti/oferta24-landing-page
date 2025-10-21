export async function GET() {
  return Response.json(
    {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    },
  );
}
