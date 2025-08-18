import CardDestino from "@/app/components/CardDestino";
import { lista } from "@/app/assets/lista";
import Link from "next/link";
import styles from "./page.module.css";

const Home = () => {
  const depoimentos = [
    {
      nome: "Maria Silva",
      comentario: "Minha viagem para Paris foi incrível! Excelente atendimento e experiências inesquecíveis."
    },
    {
      nome: "João Santos",
      comentario: "Adorei a viagem para Cancún, tudo perfeito! Recomendo muito a agência."
    },
    {
      nome: "Ana Oliveira",
      comentario: "Tóquio foi surpreendente, a organização da viagem foi impecável."
    },
    {
      nome: "Carlos Pereira",
      comentario: "Dubai é maravilhoso, uma experiência de luxo e conforto total!"
    }
  ];
  
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Início</h1>

      <section className={styles.section}>
        <h2 className={styles.h2}>Destaques da Semana</h2>
        <ul className={styles.ul}>
          {lista.map(lugar => (
            lugar.id < 6 &&
            <li key={lugar.id} className={styles.li}>
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
        <Link href={'/destinos'} className={styles.a}>Ver Todos</Link>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Ofertas</h2>
        <ul className={styles.ul}>
          {lista.map(lugar => (
            lugar.id > 15 &&
            <li key={lugar.id} className={styles.li}>
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
        <Link href={'/destinos'} className={styles.a}>Ver Todos</Link>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Depoimentos</h2>
        <ul className={styles.depoimentosList}>
          {depoimentos.map((dep, index) => (
            <li key={index} className={styles.depoimento}>
              <p className={styles.comentario}>"{dep.comentario}"</p>
              <p className={styles.nome}>- {dep.nome}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Home;
