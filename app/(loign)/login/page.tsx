"use client";
import { AdminLoginResponse } from "@/api/Admin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Resolver, useForm } from "react-hook-form";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();
  type FormValues = {
    phone_number: string;
    password: string;
  };
  const resolver: Resolver<FormValues> = async (values) => {
    return {
      values: values,
      errors: {},
    };
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: resolver,
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log("test");

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const response = (await res.json()) as AdminLoginResponse;
    if (response.success) {
      toast(response.message);
      router.push("/");
    } else {
      toast(response.message);
    }
  });

  return (
    <div className='flex w-full items-center justify-center flex-col gap-3 rounded-lg md:p-0 p-3 md:h-full h-fit mt-auto md:my-0 bg-white md:bg-transparent md:relative absolute bottom-0 left-0 z-20'>
      <div className='w-full max-w-md p-4 bg-white rounded-lg md:shadow-md flex flex-col gap-5'>
        <Image
          src={"/images/logo-circle.svg"}
          alt='صرفه چی'
          width={100}
          height={100}
          className='mx-auto'
        />
        <p className='text-sm text-gray-500 text-center'>ورود به پنل صرفه چی</p>
        <form onSubmit={onSubmit} className='flex flex-col gap-4'>
          <Input
            type='tel'
            placeholder='شماره موبایل'
            className='w-full p-2 border border-gray-300 rounded-lg'
            required
            {...register("phone_number", {
              required: "شماره موبایل الزامی است",
            })}
          />
          {errors.phone_number && (
            <p className='text-red-500 text-sm'>
              {errors.phone_number.message}
            </p>
          )}
          <Input
            type='password'
            placeholder='رمز عبور'
            className='w-full p-2 mt-4 border border-gray-300 rounded-lg'
            required
            {...register("password", {
              required: "رمز عبور الزامی است",
            })}
          />
          {errors.password && (
            <p className='text-red-500 text-sm'>{errors.password.message}</p>
          )}

          <Button
            type='submit'
            className='w-full py-2 mt-4 text-white bg-primary-700 rounded-lg hover:bg-primary-500 cursor-pointer'
          >
            ورود
          </Button>
        </form>
      </div>
    </div>
  );
}
