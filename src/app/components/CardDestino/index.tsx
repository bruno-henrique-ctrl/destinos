import { promocao } from "@/app/assets/promocao";
import type { CardProps } from "@/app/types/Card";
import Link from "next/link";
import styles from "./index.module.css";

const CardDestino = ({ id, nome, pais, descricao, img, preco }: CardProps) => {
    return (
        <Link href={`/destinos/${id}`} className={styles.card}>
            <img src={img} alt={nome} />

            <div className={styles.cardContent}>
                <p>{pais}</p>
                <span>{descricao}</span>
                <p>
                    {id > 15
                        ? promocao(preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                        : preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                    }
                </p>
            </div>
        </Link>
    );
}

export default CardDestino;
