import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
  SidebarTrigger,
} from "../ui/sidebar";

const PanelSidebar = () => {
  return (
    <>
      <Sidebar dir='rtl' side='right' collapsible='offcanvas'>
        <SidebarHeader 
        >
          <div className='flex gap-2 justify-center items-center p-2'>
            <h2 className='font-medium text-2xl text-primary'>صرفه چی</h2>
          </div>
        </SidebarHeader>

        <div className='border-b mx-2'></div>

        <SidebarContent className='p-2'>
          <SidebarGroup>
            <SidebarMenuButton asChild>
              <a href='#'>داشبورد</a>
            </SidebarMenuButton>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>

      <SidebarTrigger />
    </>
  );
};

export default PanelSidebar;
