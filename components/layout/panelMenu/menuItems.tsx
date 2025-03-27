import {
  CreditCard,
    LayoutDashboard,
    LayoutGrid,
    PersonStanding
} from "lucide-react";

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
    icon: <LayoutDashboard className='text-2xl' />,
    href: "/",
  },
  {
    id: "providers",
    title: "سرویس دهندگان",
    icon: <PersonStanding className='text-2xl' />,
    href: "/providers",
  },
  {
    id: "categories",
    title: "دسته بندی ها",
    icon: <LayoutGrid className='text-2xl' />,
    href: "/settings",
  },
  {
    id: "cardToCards",
    title: "کارت به کارت ها",
    icon: <CreditCard className='text-2xl' />,
    href: "/card-to-cards",
  },
//   {
//     id: "change-password",
//     title: "تغییر رمز عبور",
//     icon: <FormInput className='text-2xl' />,
//     href: "/change-password",
//   },
];
