"use client";
import { FetchProvidersResponse } from "@/api/Providers";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  providersResponse: FetchProvidersResponse;
}
const ProvidersTable = ({ providersResponse }: Props) => {
  const { data } = providersResponse;
  const router = useRouter();

  return (
    <Table className='w-full mt-5 rounded-lg overflow-hidden'>
      <TableHeader>
        <TableRow className='*:!text-start bg-primary-400/20'>
          <TableHead>نام</TableHead>
          <TableHead>دسته بندی</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className=''>
        {data.data.map((provider) => (
          <TableRow
            key={provider.id}
            className='even:bg-gray-100 *:p-3 cursor-pointer hover:bg-gray-200'
            onClick={() => router.push(`/provider/${provider.id}`)}
          >
            <TableCell>{provider.name}</TableCell>
            <TableCell>{provider.category.title}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableCaption className='text-center mt-5'>
        <div className='flex flex-col'>
          <div className='flex justify-center items-center gap-2'>
            <span>صفحه</span>
            <span className='font-bold'>{data.pagination.current_page}</span>
            <span>از</span>
            <span className='font-bold'>{data.pagination.total_pages}</span>
            <span>صفحه</span>
            <br />
            <span>-</span>
            <span>مجموع :</span>
            <span className='font-bold'>{data.pagination.total}</span>
          </div>
          {/* a next page by using Link component and search params */}
          {data?.pagination?.current_page !== data?.pagination?.total_pages && (
            <div className='flex justify-center items-center gap-2 mt-2'>
              <Link
                href={`/providers?page=${data.pagination.current_page + 1}`}
                className='text-blue-500 hover:underline'
              >
                {/* {data.pagination.current_page + 1} */}
                <span>صفحه بعدی</span>
              </Link>
            </div>
          )}
        </div>
      </TableCaption>
    </Table>
  );
};

export default ProvidersTable;
