import { lista } from "@/app/assets/lista";
import CardDestino from "@/app/components/CardDestino";
import styles from "./page.module.css";

const Viagens = () => {
    return (
        <ul className={styles.lista}>
            {lista.map(lugar => (
                <li key={lugar.id} className={styles.item}>
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
    )
}

export default Viagens;
