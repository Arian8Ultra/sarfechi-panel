import { NextResponse } from "next/server";
import json, {
  Menu_AddMenuItem,
  Menu_DeleteMenuItem,
  Menu_UpdateMenuItem,
} from "@/prisma/functions/Menu";

export async function POST(request: Request) {
  const body = await request.json();
  const { provider_id, title, description, price, category_id } = body;
  if (provider_id) {
    if (!title || !description || !price || !category_id) {
      return NextResponse.json(
        {
          message:
            "Please provide all the required fields: title, description, price, category_id",
          success: false,
        },
        {
          status: 400,
        },
      );
    }
    const menu = await Menu_AddMenuItem({
      provider_id,
      title,
      description,
      price,
      category_id,
    });
    return new Response(
      json({
        message: "Menu item created successfully",
        success: true,
        menu,
      }),
    );
  } else {
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
}

export async function PUT(request: Request) {
  const body = await request.json();
  const { item_id, title, description, price, category_id } = body;
  if (item_id) {
    const menu = await Menu_UpdateMenuItem({
      item_id,
      title,
      description,
      price,
      category_id,
    });
    return new Response(
      json({
        message: "Menu item updated successfully",
        success: true,
        menu,
      }),
    );
  }
  return NextResponse.json(
    {
      message: "No menu id provided",
      success: false,
    },
    {
      status: 400,
    },
  );
}

export async function DELETE(request: Request) {
  const body = await request.json();
  const { item_id } = body;
  if (item_id) {
    const menu = await Menu_DeleteMenuItem({ item_id });
    if (!menu) {
      return NextResponse.json(
        {
          message: "Menu item not found",
          success: false,
        },
        {
          status: 404,
        },
      );
    }
    return NextResponse.json({
      message: "Menu item deleted successfully",
      success: true,
    });
  }
  return NextResponse.json(
    {
      message: "No menu id provided",
      success: false,
    },
    {
      status: 400,
    },
  );
}
