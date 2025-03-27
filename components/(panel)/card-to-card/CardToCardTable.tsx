"use client";
import { FetchPendingCardToCardsResponse } from "@/api/Admin";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

interface Props {
  cardToCardResponse: FetchPendingCardToCardsResponse;
}
const CardToCardTable = ({ cardToCardResponse }: Props) => {
  const { data } = cardToCardResponse;
  const router = useRouter();
  const [imageModal, setImageModal] = React.useState<{
    open: boolean;
    image: string;
  }>({
    open: false,
    image: "",
  });

  const handleApprove = async (id: number) => {
    const response = await fetch("/api/admin/approve-payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const data = await response.json();
    if (data.success) {
      toast.success(data.message);
      router.refresh();
    } else {
      // handle error
      toast.error(data.message);
      router.refresh();
    }
  };
  // const router = useRouter();

  return (
    <>
      <Dialog
        open={imageModal.open}
        onOpenChange={() => setImageModal({ ...imageModal, open: false })}
      >
        <DialogHeader>
          <DialogTitle>تصویر فیش واریزی</DialogTitle>
          <DialogTrigger className='hidden'></DialogTrigger>
          <DialogContent className='w-full h-auto flex justify-center items-center !aspect-video'>
            <Image
              width={1000}
              height={1000}
              src={"https://test2-api.sarfechi.com/" + imageModal.image}
              alt='کارت به کارت'
              className='w-full h-auto rounded-md  object-contain'
            />
          </DialogContent>
        </DialogHeader>
      </Dialog>
      <Table className='w-full mt-5 rounded-lg overflow-hidden'>
        <TableHeader>
          <TableRow className=' bg-primary-400/20 hover:bg-primary-400/20'>
            <TableHead className='text-start'>شناسه</TableHead>
            <TableHead className='text-start'>قمیت</TableHead>
            <TableHead className='text-start'>کد رهگیری</TableHead>
            <TableHead className='text-start'>تصویر فیش واریزی</TableHead>
            <TableHead className='text-center'>عملیات</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className=''>
          {data?.map((card) => (
            <TableRow
              key={card.id}
              className='even:bg-gray-100 *:p-3 cursor-pointer hover:bg-gray-200'
              // onClick={() => router.push(`/provider/${provider.id}`)}
            >
              <TableCell>{card.id}</TableCell>
              <TableCell>{card.amount}</TableCell>
              <TableCell>{card.tracking_code}</TableCell>
              <TableCell>
                <Image
                  onClick={() =>
                    setImageModal({
                      open: true,
                      image: card.payment.receipt_photo,
                    })
                  }
                  width={1000}
                  height={1000}
                  src={
                    "https://test2-api.sarfechi.com/" +
                    card.payment.receipt_photo
                  }
                  alt='کارت به کارت'
                  className='w-16 h-16 rounded-md'
                />
              </TableCell>
              <TableCell className='flex justify-center items-center gap-2'>
                <Button
                  variant='outline'
                  className='bg-green-500 text-white hover:bg-green-600'
                  onClick={() => handleApprove(card.id)}
                >
                  تایید
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default CardToCardTable;
