"use client";
import { SidebarIcon, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
} from "../ui/sidebar";
import { menuItems } from "./menuItems";

const PanelMenu = () => {
  const { open, toggleSidebar, isMobile } = useSidebar();
  const path = usePathname();
  // const { isOpen, onOpenChange } = useD();
  return (
    <>
      <Sidebar
        dir='rtl'
        side='right'
        collapsible='offcanvas'
        className='hidden md:block '
        variant='floating'
      >
        <SidebarHeader className='relative'>
          <div className='flex gap-2 justify-center items-center p-2'>
            <h2 className='font-medium text-2xl text-primary'>صرفه چی</h2>
          </div>
          <SidebarTrigger className='absolute top-0 left-0 hidden md:flex' />
          <Button
            className='absolute top-0 left-0 bg-purple-300 hover:text-secondary-foreground transition-all duration-200 cursor-pointer rounded-t-none rounded-l-none md:hidden'
            onClick={() => toggleSidebar()}
          >
            <X className='text-black' />
          </Button>
        </SidebarHeader>

        <div className='border-b mx-2'></div>

        <SidebarContent className='p-2'>
          <SidebarGroup className='gap-3'>
            {/* <SidebarMenuButton asChild>
              <Link href='#'>داشبورد</Link>
            </SidebarMenuButton> */}

            {menuItems.map((item) => (
              <SidebarMenuButton
                key={item.id}
                asChild
                isActive={path === item.href}
              >
                <Link href={item.href} className='flex items-center gap-2'>
                  {item.icon}
                  <span className='text-base'>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            ))}
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>

      <div
        className={`flex p-2 justify-center items-center h-fit bg-purple-300 rounded-lg shadow-md absolute top-2 right-2 z-50 ${
          open ? "hidden" : isMobile ? "hidden" : "block"
        }`}
      >
        <SidebarTrigger />
      </div>

      <div
        className='gap-3 rounded-t-xl bg-purple-300 fixed bottom-0 z-50 md:hidden p-1 start-0 rounded-r-none '
        style={{
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Button
          variant='ghost'
          className='w-fit'
          onClick={() => toggleSidebar()}
        >
          <SidebarIcon className='text-black' />
        </Button>
      </div>
    </>
  );
};

export default PanelMenu;
