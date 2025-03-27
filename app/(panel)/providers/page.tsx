import { Providers_FetchProviders } from "@/api/Providers";
import { locale } from "@/api/types";
import ProvidersTable from "@/components/(panel)/providers/ProvidersTable";
import ProfileTopNav from "@/components/layout/TopNav";

export default async function ProvidersPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { page } = await searchParams;

  const providers = await Providers_FetchProviders(
    locale.fa,
    page ? parseInt(page as string) : 1,
    10,
  );
    

  return (
    <div className=''>
      <ProfileTopNav title="مدیریت سرویس دهندگان" />
      <ProvidersTable providersResponse={providers} />
    </div>
  );
}
