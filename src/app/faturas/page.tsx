import Link from "next/link";
import FiltroFaturas from "../Components/FiltroFaturas";
import { StatusFatura } from "../Enums/StatusFatura";
import { OpcaoDropdown } from "../Models/OpcaoDropdown";
import { Plus } from "lucide-react";
import ListaFaturas from "../Components/ListaFaturas";
import { FaturasTeste } from "../Models/Fatura";

var faturas = FaturasTeste;

var statusFatura: Array<OpcaoDropdown> = [
    { Valor: StatusFatura.Paga, Texto: "Paga" },
    { Valor: StatusFatura.Pendente, Texto: "Pendente" },
    { Valor: StatusFatura.Vencida, Texto: "Vencida" }
]

const handleFiltro = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(event.target.value);
    const valorEnum: StatusFatura = value;//converte de inteiro para enum

    faturas = faturas.filter(x => x.status === valorEnum)
};

export default function Page() {
    return (
        <div className="bg-indigo-950 px-52 pt-12 text-white h-screen">
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <h1 className="font-bold text-4xl">Faturas</h1>
                    <p>Há {FaturasTeste.length} faturas no total</p>
                </div>
                <div className="flex items-center">
                    <FiltroFaturas opcoes={statusFatura} titulo="Selecionar por Status" funcao={handleFiltro} />
                    <Link href="/" className="bg-indigo-700 flex rounded-full p-3 items-center">
                        <Plus size={20} className="bg-white rounded-full text-indigo-600 mr-2" /> Nova Fatura
                    </Link>
                </div>
            </div>

            <ListaFaturas Faturas={faturas} />
        </div>
    );
}