'use client';
import { Button } from '@/components/ui/button';
import { useSidebar } from '@/components/ui/sidebar';
import { Menu } from 'lucide-react';
import React from 'react';
interface Props {
  title: string;
  loading?: boolean;
}
const ProfileTopNav = ({ title, loading }: Props) => {
  const { toggleSidebar } = useSidebar();
  return (
    <div className="flex border-b p-3 col-span-full w-full relative">
      <Button
        variant={'ghost'}
        onClick={toggleSidebar}
        className="md:hidden col-span-1 p-0 bg-primary-700/20 aspect-square"
      >
        <Menu className="text-primary-700" size={24} />
      </Button>
      <h2
        className={`text-primary-700 text-xl font-bold flex-1 text-center absolute md:static md:!text-start  md:top-0 md:start-0 md:translate-x-0 translate-x-1/2 start-1/2 transition-all duration-300 ease-in-out whitespace-nowrap ${loading ? 'animate-pulse' : ''}`}
      >
        {title}
      </h2>
    </div>
  );
};

export default ProfileTopNav;
