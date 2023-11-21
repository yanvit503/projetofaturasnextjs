"use client"

import { OpcaoDropdown } from "../Models/OpcaoDropdown";
import Fatura from "../Models/Fatura";
import { StatusFatura } from "../Enums/StatusFatura";

interface Props {
    opcoes: OpcaoDropdown[],
    titulo: string,
    faturas: Array<Fatura>,
    funcao: React.ChangeEvent<HTMLSelectElement>
}

function FiltroFaturas({ opcoes, titulo, fatuas, funcao }: Props) {

    return (
        <select onChange={() => funcao}>
            <option selected>{titulo}</option>
            {
                opcoes.map((x) => {
                    return <option value={x.Valor}>{x.Texto}</option>
                })
            }
        </select>
    );
}

export default FiltroFaturas;