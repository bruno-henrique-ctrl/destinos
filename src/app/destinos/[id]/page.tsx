import { lista } from "@/app/assets/lista";
import { promocao } from "@/app/assets/promocao";
import styles from "./page.module.css";

type Props = {
    params: { id: string };
};

const Viagem = async ({ params }: Props) => {
    const { id } = await params;
    const viagem = lista.find(item => item.id === Number(id));

    if (!viagem) {
        return <h1>Viagem não encontrada</h1>;
    }

    const precoFinal = viagem.id > 15
        ? promocao(viagem.preco)
        : viagem.preco;

    const estaEmPromocao = viagem.id > 15;

    return (
        <main className={styles.main}>
            <h1 className={styles.h1}>{viagem.nome}</h1>

            <section className={styles.imageContainer}>
                <img src={viagem.img} alt={viagem.nome} />
            </section>

            <section className={styles.section}>
                <p><strong>País:</strong> {viagem.pais}</p>
                <p><strong>Descrição:</strong> {viagem.descricao}</p>
                <p className={styles.price}>
                    <strong>Preço:</strong>{" "}
                    {precoFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </p>
            </section>

            {estaEmPromocao && (
                <section className={styles.promotion}>
                    Promoção especial! Aproveite esta oferta!
                </section>
            )}
        </main>
    );
};

export default Viagem;
