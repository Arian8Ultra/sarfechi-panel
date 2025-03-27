/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import json, { Menu_GetMenuByProviderId, MenuWithCategoriesAndItems } from "@/prisma/functions/Menu";
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const provider_id = searchParams.get("provider_id");

  if (provider_id) {
    const menu = await Menu_GetMenuByProviderId({
      provider_id: parseInt(provider_id),
    });
    console.log(menu?.id);
    
    return new Response(
      json({
        message: "Menu fetched successfully",
        success: true,
        menu,
      }),
      {
        headers:{
          "Content-Type": "application/json",
        }
      }
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

export interface MenuRequestResponse {
  menu:    MenuRequestResponseMenu;
  message: string;
  success: boolean;
 }
 
 export interface MenuRequestResponseMenu {
  created_at:               null;
  description:              string;
  id:                       number;
  provider_id:              number;
  provider_menu_categories: MenuRequestResponseProviderMenuCategory[];
  provider_menu_items:      MenuRequestResponseProviderMenuItem[];
  title:                    string;
  updated_at:               null;
 }
 
 export interface MenuRequestResponseProviderMenuCategory {
  created_at: null;
  id:         number;
  menu_id:    number;
  title:      string;
  updated_at: null;
 }
 

 export interface MenuRequestResponseProviderMenuItem {
  category_id: number;
  created_at:  null;
  description: string;
  id:          number;
  menu_id:     number;
  price:       string;
  title:       string;
  updated_at:  null;
 }
 



export interface FullMenuResponse {
  message: string;
  success: boolean;
  menu: MenuWithCategoriesAndItems | null;
}