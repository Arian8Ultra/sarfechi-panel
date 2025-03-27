import { Providers_FetchProvider } from "@/api/Providers";
import ProviderEdit from "@/components/(panel)/providers/ProviderEdit";
import ProviderMenu from "@/components/(panel)/providers/ProviderMenu";
import ProfileTopNav from "@/components/layout/TopNav";

export default async function ProviderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const provider = await Providers_FetchProvider(parseInt(id));

  return (
    <div className='flex flex-col gap-5'>
      <ProfileTopNav title={provider.data?.name} />
      <ProviderEdit providerResponse={provider} />
      <ProviderMenu provider_id={parseInt(id)} />
    </div>
  );
}
