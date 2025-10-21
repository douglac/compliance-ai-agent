"use client";

import type React from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { UserButton, useClerk } from "@clerk/nextjs";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Building2,
  Users,
  Receipt,
  MessageSquare,
  Sparkles,
  LogOut,
} from "lucide-react";

const navigation = [
  { name: "Chat", href: "/dashboard", icon: MessageSquare },
  { name: "Clients", href: "/dashboard/clients", icon: Users },
  { name: "Companies", href: "/dashboard/companies", icon: Building2 },
  { name: "Expenses", href: "/dashboard/expenses", icon: Receipt },
  { name: "Logout", href: "#", icon: LogOut, action: "logout" as const },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { signOut } = useClerk();

  const handleLogout = async () => {
    await signOut({ redirectUrl: "/sign-in" });
  };

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2 py-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-primary/10">
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-foreground">
                ComplianceIQ
              </span>
              <span className="text-xs text-muted-foreground">
                AI Dashboard
              </span>
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarMenu>
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              const isLogout = "action" in item && item.action === "logout";

              return (
                <SidebarMenuItem key={item.name}>
                  {isLogout ? (
                    <SidebarMenuButton onClick={handleLogout}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </SidebarMenuButton>
                  ) : (
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link href={item.href}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter>
          <div className="flex items-center gap-2 px-2 py-2">
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-8 w-8",
                },
              }}
            />
            <div className="flex flex-1 flex-col overflow-hidden">
              <span className="truncate text-sm font-medium text-foreground">
                Account
              </span>
              <span className="truncate text-xs text-muted-foreground">
                Manage settings
              </span>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <SidebarTrigger />
          <div className="flex-1" />
        </header>
        <main className="flex-1">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
