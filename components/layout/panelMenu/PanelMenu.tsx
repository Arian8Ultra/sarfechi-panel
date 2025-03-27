"use client";
import { useUserStore } from "@/zustand/userStore/UserStore";
import { LogOut, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "../..//ui/sidebar";
import { Button } from "../../ui/button";
import { menuItems } from "./menuItems";
import Image from "next/image";
import { AdminLogoutResponse } from "@/api/Admin";
import { toast } from "sonner";

const PanelMenu = () => {
  const { open, toggleSidebar } = useSidebar();
  const { clearUserData } = useUserStore();
  const router = useRouter();
  const path = usePathname();
  // const { isOpen, onOpenChange } = useD();
  const logout = async () => {
    const res = await fetch("/api/logout", {
      method: "GET",
    });
    const response = (await res.json()) as AdminLogoutResponse;
    if (!response.success) {
      toast.error(response.message);
      return;
    }
    if (response.success) {
      toast.success(response.message);
      clearUserData();
      router.push("/login");
      router.refresh();
    }
  };
  return (
    <>
      <Sidebar
        dir='rtl'
        side='right'
        collapsible='icon'
        className='hidden md:block '
        variant='floating'
      >
        <SidebarHeader className='relative'>
          <div className='flex gap-2 justify-center items-center p-2'>
            <Image
              src='/images/logo-circle.svg'
              alt='صرفه چی'
              width={50}
              height={50}
              className={`rounded-full ${!open ? "hidden" : "md:flex hidden"}`}
            />
            <SidebarTrigger
              className={`text-2xl ${open ? "hidden" : "md:flex hidden"}`}
            />
          </div>
          {open && (
            <SidebarTrigger className='absolute top-0 left-0 hidden md:flex cursor-pointer' />
          )}
          <Button
            className='absolute top-0 left-0 bg-purple-300 hover:text-secondary-foreground transition-all duration-200 cursor-pointer rounded-t-none rounded-l-none md:hidden'
            onClick={() => toggleSidebar()}
          >
            <X className='text-black' />
          </Button>
        </SidebarHeader>

        <div className='border-b mx-2'></div>

        <SidebarContent>
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
        <SidebarFooter>
          <SidebarMenuButton asChild>
            <Button
              onClick={logout}
              variant={"ghost"}
              className='flex gap-2 text-destructive'
            >
              <LogOut className='text-2xl' />
              <span className='text-base'>خروج</span>
            </Button>
          </SidebarMenuButton>
          {/* </div> */}
        </SidebarFooter>
        <SidebarRail className='hidden md:flex' />
      </Sidebar>
    </>
  );
};

export default PanelMenu;
