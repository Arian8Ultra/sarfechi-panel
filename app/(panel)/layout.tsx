import PanelMenu from "@/components/panelMenu/PanelMenu";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {" "}
      <SidebarProvider dir='rtl'>
        <div className='flex md:flex-row flex-col'>
          <PanelMenu />
          <div className='flex-[1]'>{children}</div>
        </div>
      </SidebarProvider>
      <Toaster />
    </section>
  );
}
