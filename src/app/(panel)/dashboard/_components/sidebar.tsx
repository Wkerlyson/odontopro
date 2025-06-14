"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { clsx } from "clsx"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Banknote, CalendarCheck2, ChevronLeft, ChevronRight, Folder, List, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import logoImg from '../../../../../public/logo-odonto.png'

export function SidebarDashboard({ children }: {
    children: React.ReactNode
}) {

    const pathname = usePathname();
    const [isCollapsed, setIsCollapsed] = useState(false);

    console.log("Current Pathname:", pathname);

    return (
        <div className="flex min-h-screen w-full">

            <aside className={clsx("flex flex-col border-r bg-background transition-all duration-300 p-4 h-full", {
                "w-20" : isCollapsed,
                "w-64": !isCollapsed,
                "hidden md:flex md:fixed": true
            })}>
                <div className="mb-6 mt-4">
                    {!isCollapsed && (
                        <Image src={logoImg} alt="logo OdontoPRO"
                        priority
                        quality={100} />
                    )}
                </div>
                <Button className="bg-gray-100 hover:bg-gray-50 text-zinc-900 self-end mb-2 cursor-pointer"
                    onClick={() => setIsCollapsed(!isCollapsed)}>
                    {!isCollapsed ? <ChevronLeft className="w-12 h-12"/> : <ChevronRight className="w-12 h-12"/>}
                </Button>

                {/* Mostrar apenas quando a sidebar está recolhida */}
                {isCollapsed && (
                    <nav className="flex flex-col gap-1 overflow-hidden mt-2">
                        <SidebarLink
                                    href="/dashboard"
                                    icon={<CalendarCheck2 />}
                                    label="Agendamentos"
                                    pathname={pathname}
                                    isCollapsed={isCollapsed} />

                            <SidebarLink
                                    href="/dashboard/services"
                                    icon={<Folder />}
                                    label="Serviços"
                                    pathname={pathname}
                                    isCollapsed={isCollapsed} />

                            <SidebarLink
                                    href="/dashboard/profile"
                                    icon={<Settings />}
                                    label="Perfil"
                                    pathname={pathname}
                                    isCollapsed={isCollapsed} />
                                
                            <SidebarLink
                                    href="/dashboard/plans"
                                    icon={<Banknote />}
                                    label="Planos"
                                    pathname={pathname}
                                    isCollapsed={isCollapsed} />
                    </nav>
                )}
                
                <Collapsible open={!isCollapsed}>
                    <CollapsibleContent>
                        <nav className="flex flex-col gap-1 overflow-hidden">
                            <span className="text-sm text-gray-400 font-medium mt-1 uppercase">
                                Painel
                            </span>

                            <SidebarLink
                                    href="/dashboard"
                                    icon={<CalendarCheck2 />}
                                    label="Agendamentos"
                                    pathname={pathname}
                                    isCollapsed={isCollapsed} />

                            <SidebarLink
                                    href="/dashboard/services"
                                    icon={<Folder />}
                                    label="Serviços"
                                    pathname={pathname}
                                    isCollapsed={isCollapsed} />
                            <span className="text-sm text-gray-400 font-medium mt-1 uppercase">
                                Configurações
                            </span>
                            <SidebarLink
                                    href="/dashboard/profile"
                                    icon={<Settings />}
                                    label="Perfil"
                                    pathname={pathname}
                                    isCollapsed={isCollapsed} />
                                
                            <SidebarLink
                                    href="/dashboard/plans"
                                    icon={<Banknote />}
                                    label="Planos"
                                    pathname={pathname}
                                    isCollapsed={isCollapsed} />
                            
                        </nav>
                    </CollapsibleContent>
                </Collapsible>
            </aside>

            <div className={clsx("flex flex-1 flex-col transation-all duration-300", {
                "md:ml-20": isCollapsed,
                "md:ml-64": !isCollapsed
            })}>


                <header className=" flex items-center justify-between border-b px-4 md:px-6 h-14 z-10
                    sticky top-0 bg-white">
                    <Sheet>
                        <div className="flex items-center gap-4">
                            <SheetTrigger asChild>
                                <Button variant="outline" className="md:hidden">
                                    <List className="w-5 h-5" />
                                </Button>
                            </SheetTrigger>
                            <h1 className="text-base md:text-lg font-semibold">
                                Menu OdontoPRO
                            </h1>
                        </div>
                        <SheetContent className="p-4 sm:max-w-xs text-black">
                            <SheetTitle>OdontoPRO</SheetTitle>
                            <SheetDescription>
                                Menu Administrativo
                            </SheetDescription>

                            <nav className="grid gap-2 text-base pt-5">
                                <SidebarLink
                                    href="/dashboard"
                                    icon={<CalendarCheck2 />}
                                    label="Agendamentos"
                                    pathname={pathname}
                                    isCollapsed={isCollapsed} />

                                <SidebarLink
                                    href="/dashboard/services"
                                    icon={<Folder />}
                                    label="Serviços"
                                    pathname={pathname}
                                    isCollapsed={isCollapsed} />

                                <SidebarLink
                                    href="/dashboard/profile"
                                    icon={<Settings />}
                                    label="Perfil"
                                    pathname={pathname}
                                    isCollapsed={isCollapsed} />
                                
                                <SidebarLink
                                    href="/dashboard/plans"
                                    icon={<Banknote />}
                                    label="Planos"
                                    pathname={pathname}
                                    isCollapsed={isCollapsed} />
                            </nav>
                        </SheetContent>
                    </Sheet>
                </header>

                <main className="flex-1 py-4 px-2 md:p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}

interface SidebarLinkProps {
    href: string;
    icon: React.ReactNode;
    label: string;
    pathname: string;
    isCollapsed: boolean;
}

function SidebarLink({ href, icon, label, pathname, isCollapsed }: SidebarLinkProps) {
    return (
        <Link
            href={href}
        >
            <div className={clsx("flex items-center gap-2 px-3 py-2 rounded-md transition-colors", {
                    "text-white bg-blue-500": pathname === href,
                    "text-gray-700 hover:bg-gray-100": pathname !== href,
                })}
            >
                <span className="w-6 h-6">{icon}</span>
                {!isCollapsed && <span>{label}</span>}
            </div>
        </Link>
    )
}