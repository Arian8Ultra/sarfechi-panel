import { FormInput, LayoutDashboard, PersonStanding, Settings } from "lucide-react";

export interface MenuItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  href: string;
}


export const menuItems: MenuItem[] = [
    {
        id: "dashboard",
        title: "داشبورد",
        icon: <LayoutDashboard className="text-2xl" />,
        href: "/",
    },
    {
        id: "profile",
        title: "پروفایل",
        icon: <PersonStanding className="text-2xl" />,
        href: "/profile",
    },
    {
        id: "settings",
        title: "تنظیمات",
        icon: <Settings className="text-2xl" />,
        href: "/settings",
    },
    {
        id: "change-password",
        title: "تغییر رمز عبور",
        icon: <FormInput className="text-2xl" />,
        href: "/change-password",
    },
]