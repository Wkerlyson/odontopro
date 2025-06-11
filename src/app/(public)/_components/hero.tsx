import { Button } from "@/components/ui/button";
import Image from "next/image";
import doctorImg from "../../../../public/doctor-hero.png";

export function Hero(){
    return (
        <section>
            <div className="container mx-auto pt-20 px-4 sm:px-6 lg:px-8">
                <main className="flex items-center justify-center">
                    <article className="flex-[2] max-w-3xl space-y-8 flex flex-col justify-center">
                        <h1 className="text-4xl lg:text-5xl font-bold max-w-2xl tracking-tight">
                            Encontre os melhores profissionais em um único local!
                        </h1>
                        <p className="text-base md:text-lg text-gray-600">
                            Nós somos uma plataforma que conecta pacientes a dentistas, o
                            ferecendo uma experiência fácil e rápida para agendar consultas. 
                            Navegue por nossa lista de profissionais, veja avaliações e escolha
                             o dentista ideal para você.
                        </p>
                        <Button className="bg-emerald-500 hover:bg-emerald-400 w-fit px-6 font-semibold">
                            Encontre uma clínica
                        </Button>
                    </article>
                    <div className="hidden lg:block">
                        <Image
                            src={doctorImg}
                            alt="Hero Image"
                            width={340}
                            height={400}
                            className="object-cover"
                            quality={100}
                            priority={true}
                        />
                    </div>
                </main>
            </div>
        </section>
    );
}