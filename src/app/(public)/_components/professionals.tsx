import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import fotoImg from "../../../../public/foto1.png";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";


export default function Professionals() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                    Clínicas disponíveis
                </h2>
                <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <Card className="overflow-hidden p-0">
                        <CardContent className="p-0">
                            <div>
                                <div className="relative h-48">
                                    <Image
                                        src={fotoImg}
                                        alt="Clínica 1"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="p-4 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3>Clínica centro</h3>
                                        <p className="text-sm text-gray-500">Rua das Flores, 123</p>
                                    </div>
                                    <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></div>
                                </div>
                                <Link href="/clinica/1" className="w-full bg-emerald-500 hover:bg-emerald-400 text-white py-2 flex items-center justify-center rounded-md
                        text-sm md:text-base font-medium">
                                    Agendar horário
                                    <ArrowRight className="ml-2" />
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                    
                </section>
            </div>
        </section>
    );
}
