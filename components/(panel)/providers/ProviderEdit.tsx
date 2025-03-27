/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { FetchProviderResponse } from "@/api/Providers";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import L from "leaflet";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { Resolver, useForm } from "react-hook-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { provider_menu } from "@/generated";
import { MenuWithCategoriesAndItems } from "@/prisma/functions/Menu";
import { FullMenuResponse } from "@/app/api/menu/provider/route";
interface Props {
  providerResponse: FetchProviderResponse;
}

const SelectableMap = dynamic(() => import("@/components/map/SelectableMap"), {
  ssr: false,
  loading: () => <Skeleton className='w-full h-full' />,
});

type FormValues = {
  name: string;
  latitude: string;
  longitude: string;
  address: string;
  phone_number: string;
  description: string;
  phone_numbers: string[];
  category_id: number;
  status: number;
  agent_user_id: number;
};
const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values,
    errors: {},
  };
};

const ProviderEdit = ({ providerResponse }: Props) => {
  const { data } = providerResponse;
  const provider = data;
  const mapRef = React.useRef<L.Map>(null);
  const [coordinates, setCoordinates] = useState<L.LatLngExpression>([
    parseFloat(provider.latitude),
    parseFloat(provider.longitude),
  ]);
  const [menuData, setMenuData] = useState<MenuWithCategoriesAndItems[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: resolver,
  });

  useEffect(() => {
    setValue("name", provider.name);
    setValue("address", provider.address);
    setValue("phone_numbers", provider.phone_number);
    setValue("description", provider.description);
    setValue("category_id", provider.category_id);
    setValue("status", provider.status);
  }, [provider, setValue]);



  const resetLocation = () => {
    setCoordinates([
      parseFloat(provider.latitude),
      parseFloat(provider.longitude),
    ]);
    mapRef.current?.panTo([
      parseFloat(provider.latitude),
      parseFloat(provider.longitude),
    ]);
  };

  return (
    <div className='flex flex-col gap-5 w-full h-full'>
      <h2 className='text-lg font-bold'>اطلاعات سرویس دهنده</h2>
      <div className='grid md:grid-cols-3 gap-3'>
        <div className='flex flex-col gap-2'>
          <Label htmlFor='name'>نام</Label>
          <input
            type='text'
            id='name'
            defaultValue={provider.name}
            className='border border-gray-300 rounded-md p-2'
            {...register("name", { required: true })}
          />
        </div>
        <div className='flex flex-col gap-2 md:col-span-2'>
          <Label htmlFor='address'>آدرس</Label>
          <input
            type='text'
            id='address'
            defaultValue={provider.address}
            className='border border-gray-300 rounded-md p-2'
            {...register("address", { required: true })}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <Label htmlFor='phone_number'>شماره تماس</Label>
          <input
            type='text'
            id='phone_number'
            defaultValue={provider.phone_number.join(", ")}
            className='border border-gray-300 rounded-md p-2'
            {...register("phone_number", { required: true })}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <Label htmlFor='category_id'>دسته بندی</Label>
          <input
            type='text'
            id='category_id'
            defaultValue={provider.category_id}
            className='border border-gray-300 rounded-md p-2'
            {...register("category_id", { required: true })}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <Label htmlFor='phone_numbers'>شماره های تماس</Label>
          <input
            type='text'
            id='phone_numbers'
            defaultValue={provider.phone_number.join(", ")}
            className='border border-gray-300 rounded-md p-2'
            {...register("phone_numbers", { required: true })}
          />
        </div>
        <div className='flex flex-col gap-2 col-span-full'>
          <Label htmlFor='description'>توضیحات</Label>
          <textarea
            id='description'
            defaultValue={provider.description}
            className='border border-gray-300 rounded-md p-2'
            {...register("description", { required: true })}
          />
        </div>
      </div>

      <Separator className='my-2' />
      <Accordion
        type='single'
        collapsible
        className='w-full shadow-lg border p-3 rounded-lg'
      >
        <AccordionItem value='item-1'>
          <AccordionTrigger className='flex items-center gap-2'>
            <h2 className='text-lg font-bold'>تصاویر</h2>
          </AccordionTrigger>
          <AccordionContent className='flex flex-col gap-2'>
            <div className='grid grid-cols-4 gap-3'>
              {provider.slider_images.map((image, index) => (
                <Image
                  width={1000}
                  height={1000}
                  key={index}
                  src={image}
                  alt={`Slider Image ${index + 1}`}
                  className='w-full h-auto rounded-md'
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion
        type='single'
        collapsible
        className='w-full shadow-lg border p-3 rounded-lg'
      >
        <AccordionItem value='item-1'>
          <AccordionTrigger className='flex items-center gap-2'>
            <h2 className='text-lg font-bold'>اطلاعات مکان</h2>
          </AccordionTrigger>
          <AccordionContent className='flex flex-col gap-2'>
            <button
              onClick={resetLocation}
              className='bg-primary-700 text-white px-4 py-2 rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed'
            >
              ریست مکان
            </button>
            <SelectableMap
              mapRef={mapRef}
              zoom={13}
              key={`${provider.latitude}-${provider.longitude}`}
              center={[
                parseFloat(provider.latitude),
                parseFloat(provider.longitude),
              ]}
              setLocation={setCoordinates}
              location={coordinates}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </div>
  );
};

export default ProviderEdit;
