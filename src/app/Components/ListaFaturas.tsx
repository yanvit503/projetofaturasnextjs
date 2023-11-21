import { StatusFatura } from "../Enums/StatusFatura";
import Fatura from "../Models/Fatura";


export default function ListaFaturas(props: { Faturas: Array<Fatura> }) {
    return (
        <div className="mt-12 flex flex-col gap-3">
            {
                props.Faturas.map(fat => {
                    return <ItemListaFatura Fatura={fat} />
                })
            }
        </div>
    );
}

interface ItemListaFaturaProps {
    Fatura: Fatura
}

function ItemListaFatura({ Fatura }: ItemListaFaturaProps) {
    return (
        <div key={Fatura.id} className="bg-indigo-800 rounded-lg flex justify-around py-1 items-center">
            <span className="font-bold">#{Fatura.id}</span>
            <span className="">{Fatura.vencimento.toLocaleDateString('pt-BR')}</span>
            <span className="">{Fatura.cliente}</span>
            <span className="font-bold">R${Fatura.valor}</span>
            <div className="w-50 my-2">
                <StatusListaFatura status={Fatura.status} />
            </div>
        </div>
    )
}

function StatusListaFatura(props: { status: StatusFatura }) {

    switch (props.status) {
        case StatusFatura.Paga:
            return (<span className={`rounded-xl bg-green-700/50 px-5 py-2`}>Paga</span>)
        case StatusFatura.Pendente:
            return (<span className={`rounded-xl bg-orange-600/50 px-5 py-2`}>Pendente</span>)
        case StatusFatura.Vencida:
            return (<span className={`rounded-xl bg-red-900/50 px-5 py-2`}>Vencida</span>)
    }
}