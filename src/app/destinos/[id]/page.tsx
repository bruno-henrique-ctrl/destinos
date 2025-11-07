import { lista } from "../../_assets/lista";
import { promocao } from "../../_assets/promocao";
import Image from "next/image";
import styles from "./page.module.css";

const ViagemPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const viagem = lista.find(({ id: itemId }) => itemId === Number(id));

    if (!viagem) {
        return <h1 className={styles.notFound}>Viagem não encontrada</h1>;
    }

    const precoFinal = viagem.id > 15 ? promocao(viagem.preco) : viagem.preco;
    const emPromocao = viagem.id > 15;

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>{viagem.nome}</h1>

            <section className={styles.imageSection}>
                <Image
                    src={viagem.img}
                    alt={viagem.nome}
                    width={400}
                    height={300}
                    priority
                />
            </section>

            <section className={styles.infoSection}>
                <p>
                    <strong>País:</strong> {viagem.pais}
                </p>
                <p>
                    <strong>Descrição:</strong> {viagem.descricao}
                </p>
                <p className={`${styles.preco} ${emPromocao ? styles.promocao : ""}`}>
                    <strong>Preço:</strong>{" "}
                    {precoFinal.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    })}
                </p>

                {emPromocao && (
                    <p className={styles.mensagemPromo}>
                        🌎 Promoção especial! Aproveite esta oferta imperdível! ✈️
                    </p>
                )}
            </section>
        </main>
    );
};

export default ViagemPage;
