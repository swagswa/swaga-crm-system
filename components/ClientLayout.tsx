"use client";

import { Sidebar } from "@/components/modern-side-bar";
import { SidebarProvider, useSidebar } from "@/contexts/SidebarContext";

function MainContent({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useSidebar();
  
  return (
    <main className={`p-6 transition-all duration-300 min-h-screen ${
      isCollapsed ? 'ml-20' : 'ml-72'
    }`}>
      {children}
    </main>
  );
}

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="h-screen">
        <Sidebar />
        <MainContent>{children}</MainContent>
      </div>
    </SidebarProvider>
  );
}