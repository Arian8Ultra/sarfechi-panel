import { Admin_Login } from "@/api/Admin";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { phone_number, password } = body;
  const cookie = await cookies();

  const phoneNumber = (phone_number as string).startsWith("0")
    ? phone_number?.replace("0", "")
    : phone_number;
  if (phoneNumber.length < 10) {
    return NextResponse.json(
      {
        success: false,
        message: "شماره موبایل باید 11 رقم باشد",
        data: null,
      },
      {
        status: 400,
      },
    );
  }

  try {
    const res = await Admin_Login(phoneNumber, password);
    console.log(res);
    if (res.success) {
      cookie.set("access_token", res.data.access_token, {
        // expires_in is in seconds so
        expires: new Date(new Date().getTime() + res.data.expires_in * 1000),
      });
      cookie.set("refresh_token", res.data.refresh_token, {
        expires: new Date(new Date().getTime() + res.data.expires_in * 1000),
      });
      return NextResponse.json(
        {
          success: true,
          message: res.message,
          data: res.data,
        },
        {
          status: 200,
        },
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: res.message,
          data: null,
        },
        {
          status: 400,
        },
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error,
        data: null,
      },
      {
        status: 500,
      },
    );
  }
}
