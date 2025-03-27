import { NextResponse } from "next/server";
import json, {
  Menu_AddMenuToProvider,
  Menu_DeleteMenu,
  Menu_GetMenuById,
  Menu_UpdateMenu,
} from "@/prisma/functions/Menu";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const menu = await Menu_GetMenuById({ menu_id: parseInt(id) });
    return new Response(
      JSON.stringify({
        message: "Menu fetched successfully",
        success: true,
        menu,
      }),
    );
  }

  return NextResponse.json({ message: "No menu id provided", success: false });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { provider_id } = body;

  if (provider_id) {
    const menu = await Menu_AddMenuToProvider({ provider_id });
    return new Response(
      json({
        message: "Menu created successfully",
        success: true,
        menu,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }

  return NextResponse.json({
    message: "No provider id provided",
    success: false,
    menu: null,
  });
}


export async function PUT(request: Request) {
  const body = await request.json();
  const { menu_id, title, description } = body;

  if (menu_id) {
    const menu = await Menu_UpdateMenu({
      menu_id,
      title,
      description,
    });
    return NextResponse.json({
      message: "Menu updated successfully",
      success: true,
      menu,
    });
  }

  return NextResponse.json({
    message: "No menu id provided",
    success: false,
  });
}

export async function DELETE(request: Request) {
  const body = await request.json();
  const { menu_id } = body;

  if (menu_id) {
    const menu = await Menu_DeleteMenu({ menu_id });
    return NextResponse.json({
      message: "Menu deleted successfully",
      success: true,
      menu: json(menu),
    });
  }

  return NextResponse.json({
    message: "No menu id provided",
    success: false,
  });
}
