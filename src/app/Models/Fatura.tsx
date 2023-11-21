import { StatusFatura } from "../Enums/StatusFatura";

export default interface Fatura {
    id: number,
    vencimento: Date,
    cliente: string,
    valor: number,
    status: StatusFatura
}

export var FaturasTeste: Array<Fatura> = [{
    id: 39130,
    vencimento: new Date("11/21/2023"),
    cliente: "Yan Vitor",
    valor: 1900.00,
    status: StatusFatura.Paga
},
{
    id: 93238,
    vencimento: new Date("11/05/2023"),
    cliente: "Yan Vitor",
    valor: 500.00,
    status: StatusFatura.Vencida
},
{
    id: 93811,
    vencimento: new Date("11/21/2023"),
    cliente: "Carlos",
    valor: 1900.00,
    status: StatusFatura.Pendente
}

]