import { cookies } from "next/headers";

export async function GET() {
  const cookie = await cookies();
//   const res = await Admin_Logout(cookie.get("access_token")?.value as string);

//   if (!res.success) {
//     return new Response(
//       JSON.stringify({
//         success: false,
//         message: res.message,
//         data: null,
//       }),
//       {
//         status: 400,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       },
//     );
//   }

  cookie.delete("access_token");
  cookie.delete("refresh_token");

  return new Response(
    JSON.stringify({
      success: true,
      message: "با موفقیت خارج شدید",
      data: null,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": `access_token=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`,
      },
    },
  );
}
