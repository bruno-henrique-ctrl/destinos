import { lista } from "../_assets/lista";
import CardDestino from "@/app/components/CardDestino";
import styles from "./page.module.css";

const Viagens = () => {
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Nossos Destinos</h1>

            <ul className={styles.lista}>
                {lista.map((lugar) => (
                    <li key={lugar.id}>
                        <CardDestino
                            id={lugar.id}
                            nome={lugar.nome}
                            pais={lugar.pais}
                            descricao={lugar.descricao}
                            img={lugar.img}
                            preco={lugar.preco}
                        />
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default Viagens;
