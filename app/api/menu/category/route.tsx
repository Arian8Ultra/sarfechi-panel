import { NextResponse } from "next/server";
import json, {
  Menu_AddMenuCategory,
  Menu_DeleteMenuCategory,
  Menu_UpdateMenuCategory,
} from "@/prisma/functions/Menu";

export async function POST(request: Request) {
  const body = await request.json();
  const { provider_id, title } = body;

  if (provider_id) {
    const menu = await Menu_AddMenuCategory({ provider_id, title });
    return new Response(
      json({
        message: "Menu category created successfully",
        success: true,
        menu,
      }),
    );
  }
  return NextResponse.json(
    {
      message: "No provider id provided",
      success: false,
    },
    {
      status: 400,
    },
  );
}

export async function PUT(request: Request) {
  const body = await request.json();
  const { category_id, title } = body;

  if (category_id) {
    const menu = await Menu_UpdateMenuCategory({ category_id, title });
    return new Response(
      json({
        message: "Menu category updated successfully",
        success: true,
        menu,
      }),
    );
  }
  return NextResponse.json(
    {
      message: "No category id provided",
      success: false,
    },
    {
      status: 400,
    },
  );
}

export async function DELETE(request: Request) {
  const body = await request.json();
  const { category_id } = body;

  if (category_id) {
    const menu = await Menu_DeleteMenuCategory({ category_id });
    return new Response(
      json({
        message: "Menu category deleted successfully",
        success: true,
        menu,
      }),
    );
  }
  return NextResponse.json(
    {
      message: "No category id provided",
      success: false,
    },
    {
      status: 400,
    },
  );
}
