"use client";
import { FetchPendingCardToCardsResponse } from "@/api/Admin";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Props {
  cardToCardResponse: FetchPendingCardToCardsResponse;
}
const CardToCardTable = ({ cardToCardResponse }: Props) => {
  const { data } = cardToCardResponse;
  const router = useRouter();

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
    <Table className='w-full mt-5 rounded-lg overflow-hidden'>
      <TableHeader>
        <TableRow className=' bg-primary-400/20 hover:bg-primary-400/20'>
          <TableHead className="text-start">شناسه</TableHead>
          <TableHead className="text-start">قمیت</TableHead>
          <TableHead className="text-start">کد رهگیری</TableHead>
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
  );
};

export default CardToCardTable;
