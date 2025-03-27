import PanelMenu from "@/components/layout/panelMenu/PanelMenu";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const accessToken = (await cookies()).get("access_token");

  if (!accessToken) {
    redirect("/login");
  }
  if (accessToken?.value === "undefined" || accessToken?.value === "null" || accessToken?.value === "") {
    redirect("/login");
  }
  return (
    <section className='bg-gray-100'>
      <SidebarProvider dir="rtl">
        <div className="flex md:flex-row flex-col w-full">
          <PanelMenu />
          <div className="flex-1 md:p-4 p-2 w-auto bg-white md:m-3 m-5 rounded-lg">{children}</div>
        </div>
      </SidebarProvider>
    </section>
  );
}
