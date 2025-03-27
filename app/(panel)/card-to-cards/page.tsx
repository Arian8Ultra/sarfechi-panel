import { Admin_FetchPendingCardToCards } from "@/api/Admin";
import CardToCardTable from "@/components/(panel)/card-to-card/CardToCardTable";
import ProfileTopNav from "@/components/layout/TopNav";

export default async function CardToCardsPage() {
  const card = await Admin_FetchPendingCardToCards();
  return (
    <div className='flex flex-col gap-5'>
      <ProfileTopNav title={"مدیریت کارت به کارت"}/>
      <CardToCardTable cardToCardResponse={card} />
    </div>
  );
}
