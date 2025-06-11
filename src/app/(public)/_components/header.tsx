"use client"

import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { LogIn, Menu } from "lucide-react";
import { useState } from "react";



export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const session = null;
    const navItems = [
        { href: '#profissionais', label: "Profissionais" }
    ]

    const NavLinks = () => (
        <>
            {navItems.map((item) => (
                <Button
                    onClick={() => setIsOpen(false)}
                    key={item.href}
                    asChild
                    variant="ghost"
                    className="text-black hover:bg-transparent cursor-pointershadow-none"
                >
                    <Link href={item.href} className="text-base">
                        {item.label}
                    </Link>
                </Button>
            ))}

        {session ? (
            <Link href="/dashboard" className="text-black hover:bg-transparent cursor-pointer shadow-none">
               Acessar clínica
            </Link>
        ) : (
           <Button>
                <LogIn />
                Porta da clínica
           </Button>
        )}
        </>
    );
    return (
        <header className="fixed top-0 right-0 left-0 z-[999] py-4 px-6 bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-zinc-900">
                    Odonto<span className="text-emerald-500">PRO</span>
                </Link>
                <nav className="hidden md:flex items-center space-x-4">
                    <NavLinks />
                </nav>
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button className="text-black hover:bg-transparent cursor-pointer"
                            variant="ghost">
                            <Menu className="w-6 h-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[240px] sm:-w[300px] z-[9999]">
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                            <SheetDescription>
                                Veja nossos links
                            </SheetDescription>
                            <nav className="flex flex-col items-start space-y-4 mt-6">
                                <NavLinks />
                            </nav>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}