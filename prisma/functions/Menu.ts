/* eslint-disable @typescript-eslint/no-explicit-any */
import { Prisma } from "@/generated";
import { prisma } from "../prisma";

export async function Menu_AddMenuToProvider({
  provider_id,
}: {
  provider_id: number;
}) {
  const menu = await prisma.provider_menu.create({
    data: {
      provider_id,
      title: "Menu",
      description: "Menu",
    },
  });

  return menu;
}

export async function Menu_UpdateMenu({
  menu_id,
  title,
  description,
}: {
  menu_id: number;
  title: string;
  description: string;
}) {
  const menu = await prisma.provider_menu.update({
    where: {
      id: menu_id,
    },
    data: {
      title,
      description,
    },
  });

  return menu;
}

export async function Menu_DeleteMenu({ menu_id }: { menu_id: number }) {
  const menu = await prisma.provider_menu.delete({
    where: {
      id: menu_id,
    },
  });

  return menu;
}

export type MenuWithCategoriesAndItems = Prisma.provider_menuGetPayload<{
  include: {
    provider_menu_categories: true;
    provider_menu_items: true;
  };
}>;

export async function Menu_GetMenuByProviderId({
  provider_id,
}: {
  provider_id: number;
}) {
  const menu = await prisma.provider_menu.findFirst({
    where: {
      provider_id,
    },
    include: {
      provider_menu_categories: true,
      provider_menu_items: true,
    },
  });

  return menu;
}
export async function Menu_GetMenuById({ menu_id }: { menu_id: number }) {
  const menu = await prisma.provider_menu.findFirst({
    where: {
      id: menu_id,
    },
    include: {
      provider_menu_categories: true,
      provider_menu_items: true,
    },
  });

  return menu;
}
export async function Menu_AddMenuCategory({
  provider_id,
  title,
}: {
  provider_id: number;
  title: string;
}) {
  const menu = await prisma.provider_menu.findFirst({
    where: {
      provider_id,
    },
  });
  if (!menu) return null;
  const category = await prisma.provider_menu_categories.create({
    data: {
      title,
      menu_id: menu.id,
    },
  });

  return category;
}

export async function Menu_UpdateMenuCategory({
  category_id,
  title,
}: {
  category_id: number;
  title: string;
}) {
  const category = await prisma.provider_menu_categories.update({
    where: {
      id: category_id,
    },
    data: {
      title,
    },
  });

  return category;
}

export async function Menu_DeleteMenuCategory({
  category_id,
}: {
  category_id: number;
}) {
  const category = await prisma.provider_menu_categories.delete({
    where: {
      id: category_id,
    },
  });

  return category;
}

export async function Menu_AddMenuItem({
  provider_id,
  title,
  description,
  price,
  category_id,
}: {
  provider_id: number;
  title: string;
  description: string;
  price: number;
  category_id: number;
}) {
  const menu = await prisma.provider_menu.findFirst({
    where: {
      provider_id,
    },
  });

  if (!menu) return null;
  const item = await prisma.provider_menu_items.create({
    data: {
      title,
      description,
      price,
      category_id,
      menu_id: menu.id,
    },
  });

  return item;
}

export async function Menu_UpdateMenuItem({
  item_id,
  title,
  description,
  price,
  category_id,
}: {
  item_id: number;
  title?: string;
  description?: string;
  price?: number;
  category_id?: number;
}) {
  const item = await prisma.provider_menu_items.update({
    where: {
      id: item_id,
    },
    data: {
      title,
      description,
      price,
      category_id,
    },
  });

  return item;
}

export async function Menu_DeleteMenuItem({ item_id }: { item_id: number }) {
  const item = await prisma.provider_menu_items.delete({
    where: {
      id: item_id,
    },
  });

  return item;
}

export const json = (param: any): any => {
  return JSON.stringify(
    param,
    (key, value) => (typeof value === "bigint" ? Number(value) : value), // return everything else unchanged
  );
};
export default json;
