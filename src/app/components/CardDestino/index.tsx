import { promocao } from "../../_assets/promocao";
import Image from "next/image";
import type { CardProps } from "../../_types/Card";
import Link from "next/link";
import styles from "./index.module.css";

const CardDestino = ({ id, nome, pais, descricao, img, preco }: CardProps) => {
    const precoFormatado = preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    const precoPromocional = promocao(preco).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    const emPromocao = id > 15;

    return (
        <Link href={`/destinos/${id}`} className={styles.card}>
            <div>
                <Image
                    src={img}
                    alt={nome}
                    width={250}
                    height={200}
                    priority
                    fetchPriority="high"
                    loading="eager"
                />
            </div>

            <div className={styles.content}>
                <p className={styles.pais}>{pais}</p>
                <span className={styles.descricao}>{descricao}</span>
                <p
                    className={`${styles.preco} ${emPromocao ? styles.precoPromocional : ""
                        }`}
                >
                    {emPromocao ? precoPromocional : precoFormatado}
                </p>
            </div>
        </Link>
    );
};

export default CardDestino;
