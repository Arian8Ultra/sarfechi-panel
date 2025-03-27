/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { MenuRequestResponse } from "@/app/api/menu/provider/route";
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash } from "lucide-react";
import React, { useEffect } from "react";
import { toast } from "sonner";

interface Props {
  provider_id: number;
}
const ProviderMenu = ({ provider_id }: Props) => {
  const [menuData, setMenuData] = React.useState<MenuRequestResponse>();

  const [newItem, setNewItem] = React.useState({
    title: "",
    description: "",
    price: 0,
    category_id: 0,
    showen: false,
  });

  const [newCategory, setNewCategory] = React.useState({
    title: "",
    showen: false,
  });

  const refechMenu = async () => {
    const res = await fetch(`/api/menu/provider?provider_id=${provider_id}`, {
      method: "GET",
    });
    const result = (await res.json()) as MenuRequestResponse;
    console.log(result);

    if (result.success) {
      setMenuData(result);
    }
  };

  useEffect(() => {
    refechMenu();
  }, []);

  const AddMenu = async () => {
    const res = await fetch("/api/menu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ provider_id: provider_id }),
    });
    const result = (await res.json()) as MenuRequestResponse;
    if (result.success) {
      toast.success("منو با موفقیت ایجاد شد");
      refechMenu();
    }
  };
  const AddMenuItem = async () => {
    // { provider_id, title, description, price, category_id }
    const res = await fetch("/api/menu/item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        provider_id: provider_id,
        title: newItem.title,
        description: newItem.description,
        price: newItem.price,
        category_id: newItem.category_id,
      }),
    });
    const result = (await res.json()) as MenuRequestResponse;
    if (result.success) {
      toast.success(result.message);
      setNewItem({ ...newItem, showen: false });
      refechMenu();
    }
  };

  const AddMenuCategory = async () => {
    const res = await fetch("/api/menu/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        provider_id: provider_id,
        title: newCategory.title,
      }),
    });
    const result = (await res.json()) as MenuRequestResponse;
    if (result.success) {
      toast.success("منو با موفقیت ایجاد شد");
      refechMenu();
      setNewCategory({ ...newCategory, showen: false });
    }
  };

  const DeleteMenuItem = async (id: number) => {
    const res = await fetch(`/api/menu/item`, {
      method: "DELETE",
      body: JSON.stringify({
        item_id: id,
      }),
    });
    const result = (await res.json()) as MenuRequestResponse;
    if (result.success) {
      toast.success("آیتم با موفقیت حذف شد");
      refechMenu();
    } else {
      toast.error(result.message);
    }
  };

  const DeleteMenuCategory = async (id: number) => {
    const res = await fetch(`/api/menu/category`, {
      method: "DELETE",
      body: JSON.stringify({
        category_id: id,
      }),
    });
    const result = (await res.json()) as MenuRequestResponse;
    if (result.success) {
      toast.success("دسته بندی با موفقیت حذف شد");
      refechMenu();
    } else {
      toast.error(result.message);
    }
  };
  return (
    <>
      <Dialog
        open={newCategory.showen}
        onOpenChange={() => setNewCategory({ ...newCategory, showen: false })}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>افزودن دسته بندی جدید</DialogTitle>
          </DialogHeader>

          <div className='flex flex-col gap-2 w-full'>
            <Label htmlFor='title'>نام دسته بندی</Label>
            <Input
              id='title'
              value={newCategory.title}
              onChange={(e) =>
                setNewCategory({ ...newCategory, title: e.target.value })
              }
            />
          </div>

          <DialogFooter>
            <Button
              variant='outline'
              onClick={() => setNewCategory({ ...newCategory, showen: false })}
            >
              انصراف
            </Button>
            <Button
              variant='default'
              onClick={() => {
                AddMenuCategory();
                setNewCategory({ ...newCategory, showen: false });
              }}
            >
              افزودن
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog
        open={newItem.showen}
        onOpenChange={() => setNewItem({ ...newItem, showen: false })}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>افزودن آیتم جدید</DialogTitle>
          </DialogHeader>

          <div className='flex flex-col gap-2 w-full'>
            <Label htmlFor='title'>نام آیتم</Label>
            <Input
              id='title'
              value={newItem.title}
              onChange={(e) =>
                setNewItem({ ...newItem, title: e.target.value })
              }
            />
          </div>

          <div className='flex flex-col gap-2 w-full'>
            <Label htmlFor='description'>توضیحات</Label>
            <Input
              id='description'
              value={newItem.description}
              onChange={(e) =>
                setNewItem({
                  ...newItem,
                  description: e.target.value,
                })
              }
            />
          </div>

          <div className='flex flex-col gap-2 w-full'>
            <Label htmlFor='price'>قیمت</Label>
            <Input
              type='number'
              id='price'
              value={newItem.price}
              onChange={(e) =>
                setNewItem({ ...newItem, price: +e.target.value })
              }
            />
          </div>

          <DialogFooter>
            <Button
              variant='outline'
              onClick={() => setNewItem({ ...newItem, showen: false })}
            >
              انصراف
            </Button>
            <Button
              variant='default'
              onClick={() => {
                AddMenuItem();
              }}
            >
              افزودن
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Accordion
        type='single'
        collapsible
        className='w-full shadow-lg border p-3 rounded-lg'
      >
        <AccordionItem value='item-1'>
          <AccordionTrigger className='flex items-center gap-2'>
            <h2 className='text-lg font-bold'>منو</h2>
          </AccordionTrigger>
          <AccordionContent className='flex flex-col gap-2'>
            <div className='flex justify-end w-full'>
              {!menuData?.menu?.id ? (
                <button
                  className='bg-blue-500 text-white rounded-md p-2'
                  onClick={AddMenu}
                >
                  افزودن منو
                </button>
              ) : (
                <button
                  className='bg-green-500 text-white rounded-md p-2'
                  onClick={() => {
                    setNewCategory({
                      ...newCategory,
                      showen: !newCategory.showen,
                    });
                  }}
                >
                  افزودن دسته بندی
                </button>
              )}
            </div>
            {menuData?.menu?.provider_menu_categories.map((cat) => (
              <div
                className='flex flex-col gap-4 p-2 border border-dashed rounded-lg border-black'
                key={cat.id}
              >
                <div className='flex justify-between '>
                  <h3 className='text-bold text-lg'>{cat.title}</h3>
                  <div className='flex items-center justify-center gap-3'>
                    <Button
                      className='bg-green-500 text-white rounded-md p-2'
                      onClick={() => {
                        setNewItem({
                          ...newItem,
                          showen: !newItem.showen,
                          category_id: cat.id,
                        });
                      }}
                    >
                      <Plus className='w-4 h-4' />
                      افزودن آیتم
                    </Button>
                    <Button
                      className='bg-red-500 text-white rounded-md p-2'
                      onClick={() => {
                        DeleteMenuCategory(cat.id);
                      }}
                    >
                      <Trash className='w-4 h-4' />
                      حذف
                    </Button>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  {menuData?.menu?.provider_menu_items
                    .filter((item) => item.category_id === cat.id)
                    .map((item) => (
                      <div
                        key={item.id}
                        className='flex justify-between p-2 items-center border border-dashed rounded-lg gap-5'
                      >
                        <div className='flex flex-col gap-2'>
                          <h3 className='text-bold text-lg whitespace-normal'>
                            {item.title}
                          </h3>
                          <p>{item.description}</p>
                        </div>
                        <div className='h-[1px] bg-gray-300 flex-[1] my-auto'></div>
                        <span className='my-auto'>{item.price} تومان</span>

                        <Button
                          className='bg-red-500 text-white rounded-md p-2'
                          onClick={() => {
                            DeleteMenuItem(item.id);
                          }}
                        >
                          <Trash className='w-4 h-4' />
                          حذف
                        </Button>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default ProviderMenu;
