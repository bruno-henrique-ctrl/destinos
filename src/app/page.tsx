"use client";

import CardDestino from "./components/CardDestino";
import { lista } from "./_assets/lista";
import Link from "next/link";
import styles from "./page.module.css";

const Home = () => {
  const depoimentos = [
    {
      nome: "Maria Silva",
      comentario:
        "Minha viagem para Paris foi incrível! Excelente atendimento e experiências inesquecíveis.",
    },
    {
      nome: "João Santos",
      comentario:
        "Adorei a viagem para Cancún, tudo perfeito! Recomendo muito a agência.",
    },
    {
      nome: "Ana Oliveira",
      comentario:
        "Tóquio foi surpreendente, a organização da viagem foi impecável.",
    },
    {
      nome: "Carlos Pereira",
      comentario:
        "Dubai é maravilhoso, uma experiência de luxo e conforto total!",
    },
  ];

  return (
    <main className={styles.main}>
      <h1>Início</h1>

      <section className={styles.section}>
        <h2>Destaques da Semana</h2>
        <ul>
          {lista.map(
            (lugar) =>
              lugar.id < 6 && (
                <li key={lugar.id}>
                  <CardDestino {...lugar} />
                </li>
              )
          )}
        </ul>
        <Link href="/destinos">Ver Todos</Link>
      </section>

      <section className={styles.section}>
        <h2>Ofertas</h2>
        <ul>
          {lista.map(
            (lugar) =>
              lugar.id > 7 && (
                <li key={lugar.id}>
                  <CardDestino {...lugar} />
                </li>
              )
          )}
        </ul>
        <Link href="/destinos">Ver Todos</Link>
      </section>

      <section className={styles.section}>
        <h2>Depoimentos</h2>
        <ul>
          {depoimentos.map((dep, index) => (
            <li key={index}>
              <p>{dep.comentario}</p>
              <p>- {dep.nome}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Home;
