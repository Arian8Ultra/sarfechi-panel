import { Admin_ApprovePendingCardToCards } from "@/api/Admin";

export async function POST(request: Request) {
  const { id } = await request.json();

  console.log("id", id);
  

  const response = await Admin_ApprovePendingCardToCards(id);
  if (response.success) {
    return new Response(
      JSON.stringify({
        success: true,
        message: "پرداخت تایید شد",
        data: response.data,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } else {
    return new Response(
      JSON.stringify({
        success: false,
        message: response.message,
        data: null,
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
